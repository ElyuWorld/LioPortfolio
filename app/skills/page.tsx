import type { Metadata } from "next";
import { PageFrame } from "@/components/page-frame";
import { kklStack, psycheckStack, resumeSkills } from "@/lib/site";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Skills listed on Lio Cordova's resume, and the stacks recorded in the PsyCheck and KKL repositories.",
};

export default function SkillsPage() {
  return (
    <PageFrame>
    <div className="sheet prose">
      <h1>Skills</h1>
      <p className="lede">
        The resume lists competencies. It does not list programming languages.
      </p>
      <ul className="plain-list">
        {resumeSkills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>

      <h2>From the PsyCheck repository</h2>
      <p>
        The website package file records this stack. It is listed here as the
        project’s tools, not as a self-rated skill inventory.
      </p>
      <ul className="plain-list">
        {psycheckStack.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2>From the KKL repository</h2>
      <p>
        The KKL website package file records this stack. It is listed here as
        the project’s tools, not as a self-rated skill inventory. The site is
        at{" "}
        <a href="https://kkl-website.vercel.app">kkl-website.vercel.app</a>.
      </p>
      <ul className="plain-list">
        {kklStack.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className="placeholder">
        Placeholder: tools you want named in your own words.
      </p>
    </div>
    </PageFrame>
  );
}
