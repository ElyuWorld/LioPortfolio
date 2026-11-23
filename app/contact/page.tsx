import type { Metadata } from "next";
import { PageFrame } from "@/components/page-frame";
import { person } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Email ${person.email} or call ${person.phoneDisplay}.`,
};

export default function ContactPage() {
  return (
    <PageFrame>
    <div className="sheet prose">
      <h1>Contact</h1>
      <p className="lede">
        The number below is the one printed on the resume.
      </p>
      <ul className="contact-list">
        <li>
          <a href={`mailto:${person.email}`}>
            <svg viewBox="0 0 24 24" aria-hidden="true" className="contact-icon">
              <rect
                x="3"
                y="5"
                width="18"
                height="14"
                rx="2"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M4 7l8 6 8-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
            <span>{person.email}</span>
          </a>
        </li>
        <li>
          <a href={`tel:${person.phoneTel}`}>
            <svg viewBox="0 0 24 24" aria-hidden="true" className="contact-icon">
              <path
                d="M8.2 3.8h2.1c.4 0 .7.3.8.6l.8 2.4a.8.8 0 0 1-.4.9l-1.4.7a10.4 10.4 0 0 0 5.5 5.5l.7-1.4a.8.8 0 0 1 .9-.4l2.4.8c.3.1.6.4.6.8v2.1a1.7 1.7 0 0 1-1.8 1.7A14.2 14.2 0 0 1 4.5 5.6a1.7 1.7 0 0 1 1.7-1.8h2z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
            <span>{person.phoneDisplay}</span>
          </a>
        </li>
      </ul>
    </div>
    </PageFrame>
  );
}
