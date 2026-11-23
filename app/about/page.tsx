import type { Metadata } from "next";
import { PageFrame } from "@/components/page-frame";

export const metadata: Metadata = {
  title: "About",
  description:
    "BS Information Technology at Partido State University, and the earlier schools on Lio Cordova's resume.",
};

export default function AboutPage() {
  return (
    <PageFrame>
    <div className="sheet prose">
      <h1>About</h1>
      <p className="lede">
        The resume lists BS Information Technology at Partido State University
        in Goa, Camarines Sur.
      </p>
      <p>
        The resume lists the degree and the school. It does not list a
        graduation year for the degree.
      </p>
      <p className="placeholder">
        Placeholder: add the graduation year, or the year you expect to finish.
      </p>

      <h2>Earlier schooling</h2>
      <dl className="facts">
        <div>
          <dt>Senior high</dt>
          <dd>
            Humanities and Social Sciences, Partido College Inc., Goa,
            Camarines Sur. Graduated 2023.
          </dd>
        </div>
        <div>
          <dt>Secondary</dt>
          <dd>Saint Paul Academy, Goa, Camarines Sur. Graduated 2021.</dd>
        </div>
        <div>
          <dt>Elementary</dt>
          <dd>
            Lagonoy Central School, Lagonoy, Camarines Sur. Graduated 2017.
          </dd>
        </div>
      </dl>

      <h2>On the resume, besides school</h2>
      <ul className="plain-list">
        <li>Secretary, Lagonoy Badminton Shuttlers, since 2024.</li>
        <li>
          Sergeant, ROTC MEDICS, Partido State University, academic year
          2023–2024.
        </li>
        <li>Team leader, ROTC MEDICS Group 2.</li>
      </ul>
      <p className="placeholder">
        Placeholder: a short note, in your own words, about the degree or the
        work you want next.
      </p>
    </div>
    </PageFrame>
  );
}
