"use client";

import { useState } from "react";

export function PrintResume() {
  const [ready, setReady] = useState(false);

  return (
    <div className="resume-print">
      <button
        type="button"
        className="action"
        aria-describedby={ready ? "print-status" : undefined}
        onClick={() => {
          setReady(true);
          window.print();
        }}
      >
        Download Resume
      </button>
      {ready ? (
        <p id="print-status" className="print-status">
          Choose Save as PDF in the dialog.
        </p>
      ) : null}
    </div>
  );
}
