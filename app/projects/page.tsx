import type { Metadata } from "next";
import Image from "next/image";
import { PageFrame } from "@/components/page-frame";
import { kklStack, psycheckStack } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "PsyCheck, a capstone for ParSU students, and the KKL cooperative website.",
};

export default function ProjectsPage() {
  return (
    <PageFrame>
    <div className="sheet prose">
      <h1>Projects</h1>
      <p className="lede">PsyCheck is the capstone these records can support.</p>

      <h2>PsyCheck</h2>
      <a className="project-shot" href="https://psycheck-website.vercel.app">
        <Image
          src="/psycheck-home.png"
          alt="PsyCheck homepage, with the line Mental health matters, You matter."
          width={1024}
          height={615}
          sizes="(max-width: 56rem) 100vw, 46rem"
        />
      </a>
      <p>
        PsyCheck is a web-based mental health screening and referral system.
        The public site describes it as a way for students to seek psychosocial
        support. A capstone presentation says it gives ParSU
        students a private way to ask, and gives counselors one place to handle
        those requests. The same script calls it “the web system we built for
        our capstone.”
      </p>
      <p>
        Students register with a name, student ID, and year level. The email
        has to be a ParSU student address ending in .pbox@parsu.edu.ph. At
        login they choose Student, Counselor, or Admin. Students book Face to
        Face, Online, or Referral. A referral is for someone else: name,
        contact details, and why. Dates come from the schedule a counselor
        posts. Requests start as pending, and appointment history can include
        a meeting link for online sessions.
      </p>
      <p>
        Counselors and admins use a dashboard. The presentation describes
        counts for registered students, total appointments, pending requests,
        and confirmed sessions; a student list with ID, year level, and email;
        availability a counselor posts; and a place to confirm, reschedule, or
        complete a session and add a meeting link. Student analytics are broken
        down by service, year level, status, and mode. The repository also
        contains email notices for submitted, approved, rescheduled, follow-up,
        finished, and referred appointments.
      </p>

      <h3>Repository</h3>
      <p>
        The repository is{" "}
        <a href="https://github.com/ElyuWorld/psycheck-website">
          ElyuWorld/psycheck-website
        </a>
        . The local git history is 30 commits, all by Lio Cordova. Teammate
        names are not in that repository, the resume, or the presentation
        script, so this page does not list a team.
      </p>
      <p>
        The presentation points to{" "}
        <a href="https://psycheck-website.vercel.app">
          psycheck-website.vercel.app
        </a>
        .
      </p>

      <h3>Stack recorded in the website repository</h3>
      <ul className="plain-list">
        {psycheckStack.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className="quiet">
        These are dependencies in the PsyCheck package file, not a separate
        claim about grades or a job title.
      </p>

      <h2>KKL website</h2>
      <a className="project-shot" href="https://kkl-website.vercel.app">
        <Image
          src="/kkl-home.png"
          alt="KKL homepage for Kooperatiba para sa Kaunlaran ng Lagonoy."
          width={1024}
          height={614}
          sizes="(max-width: 56rem) 100vw, 46rem"
        />
      </a>
      <p>
        The KKL website is a public information site for Kooperatiba para sa
        Kaunlaran ng Lagonoy, a multi-purpose cooperative in Lagonoy, Camarines
        Sur. It explains the cooperative and hosts the requirement forms people
        print and bring to the office. Membership, savings, and loans are
        completed at the counter, not on the site.
      </p>
      <p>
        The pages are Home, About, Services, Events, Forms, and Contact. The
        main office is on F. Pamor Street in San Isidro Sur, Lagonoy, with a
        branch in Caramoan. The forms on the site are the membership form,
        member profile, deposit application, loan application, and
        re-subscription agreement.
      </p>
      <h3>Repository</h3>
      <p>
        The repository is{" "}
        <a href="https://github.com/ElyuWorld/kkl-website">
          ElyuWorld/kkl-website
        </a>
        . The local git history is 4 commits, all by Lio Cordova. The site is
        at{" "}
        <a href="https://kkl-website.vercel.app">kkl-website.vercel.app</a>.
      </p>
      <h3>Stack recorded in the website repository</h3>
      <ul className="plain-list">
        {kklStack.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
    </PageFrame>
  );
}
