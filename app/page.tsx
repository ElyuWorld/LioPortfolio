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
                sizes="(max-width: 48rem) min(8rem, 42vw), 16rem"
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
            calls it the web system built for the capstone.{" "}
            <Link href="/projects" transitionTypes={["nav-forward"]}>
              Read the PsyCheck case
            </Link>.
          </p>
          <h2>KKL website</h2>
          <p className="lede">
            A public information site for Kooperatiba para sa Kaunlaran ng
            Lagonoy.
          </p>
          <p>
            It explains the cooperative and hosts the forms people print and
            bring to the office. Membership, savings, and loans are completed
            at the counter, not on the site.{" "}
            <Link href="/projects" transitionTypes={["nav-forward"]}>
              Read the KKL case
            </Link>.
          </p>
        </section>
      </article>
    </div>
    </PageFrame>
  );
}
