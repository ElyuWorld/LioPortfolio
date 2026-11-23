import Image from "next/image";
import Link from "next/link";
import { PageFrame } from "@/components/page-frame";
import { person } from "@/lib/site";

export default function HomePage() {
  return (
    <PageFrame>
    <div className="sheet">
      <article className="spread">
        <section>
          <div className="portrait-frame">
            <div className="portrait-photo">
              <Image
                src="/lio-cordova.jpg"
                alt="Portrait of Lio Bhasil B. Cordova"
                fill
                priority
                sizes="(max-width: 56rem) min(16rem, 80vw), 16rem"
              />
            </div>
          </div>
          <h1 className="name-title">
            Lio
            <br />
            Cordova
          </h1>
          <p className="full-name">{person.name}</p>
          <p className="quiet">
            BS Information Technology
            <br />
            Partido State University, Goa, Camarines Sur
          </p>
        </section>
        <div className="gutter" aria-hidden="true" />
        <section>
          <h2>PsyCheck</h2>
          <p className="lede">
            A web-based mental health screening and referral system for
            students who need a way to ask for psychosocial support.
          </p>
          <p>
            It gives ParSU students a private way to ask, and gives counselors
            one place to handle those requests. The capstone presentation
            calls it the web system built for the capstone.
          </p>
          <div className="actions">
            <Link className="action" href="/contact" transitionTypes={["nav-forward"]}>
              Write to Lio
            </Link>
            <Link className="action" href="/projects" transitionTypes={["nav-forward"]}>
              Read the case
            </Link>
          </div>
        </section>
      </article>

      <h2>Contents</h2>
      <ol className="contents">
        <li>
          <Link href="/about" transitionTypes={["nav-forward"]}>
            About
            <span>The BSIT record and the schools named on the resume.</span>
          </Link>
        </li>
        <li>
          <Link href="/projects" transitionTypes={["nav-forward"]}>
            Projects
            <span>PsyCheck, the featured capstone, and the KKL website.</span>
          </Link>
        </li>
        <li>
          <Link href="/skills" transitionTypes={["nav-forward"]}>
            Skills
            <span>Competencies written on the resume, and the PsyCheck stack.</span>
          </Link>
        </li>
        <li>
          <Link href="/contact" transitionTypes={["nav-forward"]}>
            Contact
            <span>Email and phone from the resume.</span>
          </Link>
        </li>
      </ol>
    </div>
    </PageFrame>
  );
}
