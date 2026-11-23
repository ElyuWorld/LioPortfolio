"use client";

import { useState } from "react";

const fileName = "Lio-Cordova-Resume.pdf";

function squarePhoto(image: HTMLImageElement, size: number) {
  const frame = document.createElement("canvas");
  frame.width = size;
  frame.height = size;
  const context = frame.getContext("2d");
  if (!context || image.naturalWidth === 0) {
    return "";
  }
  const scale = Math.max(size / image.naturalWidth, size / image.naturalHeight);
  const width = image.naturalWidth * scale;
  const height = image.naturalHeight * scale;
  context.drawImage(image, (size - width) / 2, (size - height) / 2, width, height);
  return frame.toDataURL("image/jpeg", 0.92);
}

async function saveResumePdf() {
  const source = document.querySelector<HTMLElement>(".resume-sheet");
  if (!source) {
    throw new Error("Resume sheet is missing");
  }

  const host = document.createElement("div");
  host.setAttribute("aria-hidden", "true");
  host.style.position = "fixed";
  host.style.left = "-10000px";
  host.style.top = "0";
  host.style.width = "210mm";
  host.style.background = "#ffffff";
  const copy = source.cloneNode(true) as HTMLElement;
  copy.style.boxShadow = "none";
  copy.style.border = "0";
  copy.style.width = "210mm";
  copy.style.background = "#ffffff";
  host.append(copy);
  document.body.append(host);

  try {
    await Promise.all(
      [...copy.querySelectorAll("img")].map((img) =>
        img.decode().catch(() => undefined),
      ),
    );

    const photo = copy.querySelector<HTMLImageElement>(".resume-photo");
    if (photo) {
      const fitted = squarePhoto(photo, 512);
      if (fitted) {
        photo.src = fitted;
        photo.removeAttribute("srcset");
        photo.removeAttribute("sizes");
      }
      photo.width = 83;
      photo.height = 83;
      photo.style.setProperty("width", "22mm", "important");
      photo.style.setProperty("height", "22mm", "important");
      photo.style.setProperty("max-width", "22mm", "important");
      photo.style.setProperty("object-fit", "fill", "important");
      photo.style.setProperty("flex", "none", "important");
      await photo.decode().catch(() => undefined);
    }
    copy.style.overflow = "hidden";

    const html2canvas = (await import("html2canvas")).default;
    const { jsPDF } = await import("jspdf");
    const canvas = await html2canvas(copy, {
      scale: 2,
      backgroundColor: "#ffffff",
      useCORS: true,
      logging: false,
      width: copy.offsetWidth,
      height: copy.offsetHeight,
    });

    const pdf = new jsPDF({ unit: "mm", format: "a4", orientation: "portrait" });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 12;
    const contentWidth = pageWidth - margin * 2;
    const contentHeight = pageHeight - margin * 2;
    const pxPerMm = canvas.width / contentWidth;
    const sliceHeight = Math.floor(contentHeight * pxPerMm);

    let offset = 0;
    let page = 0;
    while (offset < canvas.height) {
      const height = Math.min(sliceHeight, canvas.height - offset);
      const slice = document.createElement("canvas");
      slice.width = canvas.width;
      slice.height = height;
      const context = slice.getContext("2d");
      if (!context) {
        throw new Error("Could not draw the resume page");
      }
      context.fillStyle = "#ffffff";
      context.fillRect(0, 0, slice.width, slice.height);
      context.drawImage(
        canvas,
        0,
        offset,
        canvas.width,
        height,
        0,
        0,
        canvas.width,
        height,
      );
      if (page > 0) {
        pdf.addPage();
      }
      pdf.addImage(
        slice.toDataURL("image/jpeg", 0.92),
        "JPEG",
        margin,
        margin,
        contentWidth,
        height / pxPerMm,
      );
      offset += height;
      page += 1;
    }

    pdf.save(fileName);
  } finally {
    host.remove();
  }
}

export function PrintResume() {
  const [status, setStatus] = useState<"idle" | "working" | "ready" | "error">(
    "idle",
  );

  return (
    <div className="resume-print">
      <button
        type="button"
        className="action"
        aria-describedby={status === "idle" ? undefined : "print-status"}
        aria-busy={status === "working"}
        disabled={status === "working"}
        onClick={() => {
          setStatus("working");
          void saveResumePdf()
            .then(() => setStatus("ready"))
            .catch(() => setStatus("error"));
        }}
      >
        Download Resume
      </button>
      {status === "working" ? (
        <p id="print-status" className="print-status">
          Preparing the PDF.
        </p>
      ) : null}
      {status === "ready" ? (
        <p id="print-status" className="print-status">
          Downloaded {fileName}.
        </p>
      ) : null}
      {status === "error" ? (
        <p id="print-status" className="print-status">
          The PDF could not be created. Try again.
        </p>
      ) : null}
    </div>
  );
}
