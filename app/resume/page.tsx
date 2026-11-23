import type { Metadata } from "next";
import Image from "next/image";
import { PageFrame } from "@/components/page-frame";
import { PrintResume } from "@/components/print-resume";
import {
  resumeContact,
  resumeExperience,
  resumeProjects,
  resumeRole,
  resumeSkillGroups,
  resumeSummary,
} from "@/lib/resume";
import { person } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resume",
  description: `${person.name}, junior web developer and frontend developer. BS Information Technology, Partido State University. PsyCheck and the KKL website.`,
};

export default function ResumePage() {
  return (
    <PageFrame>
      <div className="resume-page">
        <h1 className="resume-heading">My Resume</h1>
        <article className="resume-sheet">
          <header className="resume-id">
            <div className="resume-id-copy">
              <p className="resume-name">{person.name}</p>
              <p className="resume-role">{resumeRole}</p>
              <ul className="resume-contact">
                <li>
                  <a href={`mailto:${resumeContact.email}`}>{resumeContact.email}</a>
                </li>
                <li>
                  <a href={`tel:${resumeContact.phoneTel}`}>
                    {resumeContact.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a href={resumeContact.githubHref}>{resumeContact.githubLabel}</a>
                </li>
              </ul>
            </div>
            <Image
              className="resume-photo"
              src="/resume-photo.jpg"
              alt="Portrait of Lio Bhasil B. Cordova"
              width={1024}
              height={1024}
              priority
            />
          </header>

          <section aria-labelledby="summary">
            <h2 id="summary">Professional Summary</h2>
            <p>{resumeSummary}</p>
          </section>

          <section aria-labelledby="skills">
            <h2 id="skills">Technical Skills</h2>
            <dl className="resume-skills">
              {resumeSkillGroups.map((group) => (
                <div key={group.label}>
                  <dt>{group.label}</dt>
                  <dd>{group.items}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section aria-labelledby="projects">
            <h2 id="projects">Projects</h2>
            {resumeProjects.map((project) => (
              <article key={project.title} className="resume-project">
                <h3>
                  {project.title}
                  <span> — {project.detail}</span>
                </h3>
                <p className="resume-links">
                  <a href={project.liveHref}>{project.liveLabel}</a>
                  <a href={project.repoHref}>{project.repoLabel}</a>
                </p>
                <p className="resume-stack">{project.stack}</p>
                <ul>
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </section>

          <section aria-labelledby="experience">
            <h2 id="experience">Relevant Experience</h2>
            <ul className="resume-roles">
              {resumeExperience.map((role) => (
                <li key={role.org}>
                  <span className="resume-role-title">
                    {role.title}, {role.org}
                  </span>
                  <span className="resume-when">{role.when}</span>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="education">
            <h2 id="education">Education</h2>
            <p className="resume-degree">
              Bachelor of Science in Information Technology
            </p>
            <p>Partido State University, Goa, Camarines Sur</p>
          </section>
        </article>
        <div className="resume-toolbar">
          <PrintResume />
        </div>
      </div>
    </PageFrame>
  );
}
