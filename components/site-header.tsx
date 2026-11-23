"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, person, sectionTransition } from "@/lib/site";

function NavIcon({ href }: { href: string }) {
  const stroke = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="nav-icon">
      {href === "/" ? (
        <path {...stroke} d="M4 11.2 12 4.5l8 6.7V20a1 1 0 0 1-1 1h-5.2v-6.2H10.2V21H5a1 1 0 0 1-1-1z" />
      ) : null}
      {href === "/about" ? (
        <>
          <circle {...stroke} cx="12" cy="8" r="3" />
          <path {...stroke} d="M5.5 19.5a6.5 6.5 0 0 1 13 0" />
        </>
      ) : null}
      {href === "/projects" ? (
        <path {...stroke} d="M4 7.5h6l2 2H20v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18.5z" />
      ) : null}
      {href === "/skills" ? (
        <path {...stroke} d="M8 5.5h11M8 12h11M8 18.5h11M4.5 5.5h.01M4.5 12h.01M4.5 18.5h.01" />
      ) : null}
      {href === "/resume" ? (
        <>
          <path {...stroke} d="M7 4.5h6.2L17.5 8.8V19a1.2 1.2 0 0 1-1.2 1.2H7.7A1.2 1.2 0 0 1 6.5 19V5.7A1.2 1.2 0 0 1 7.7 4.5z" />
          <path {...stroke} d="M13 4.7V8.6h3.9M8.6 12.2h5.2M8.6 15.4h5.2" />
        </>
      ) : null}
      {href === "/contact" ? (
        <>
          <rect {...stroke} x="3.5" y="5.5" width="17" height="13" rx="2" />
          <path {...stroke} d="M4.5 7.5 12 13l7.5-5.5" />
        </>
      ) : null}
    </svg>
  );
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="running-head" style={{ viewTransitionName: "site-header" }}>
      <Link
        href="/"
        className="mark"
        transitionTypes={[sectionTransition(pathname, "/")]}
      >
        <Image
          src="/logo.png"
          alt=""
          width={620}
          height={640}
          priority
          className="mark-logo"
        />
        <span className="mark-name">{person.shortName}</span>
      </Link>
      <nav aria-label="Sections">
        <ul>
          {nav.map((item) => {
            const current =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={current ? "page" : undefined}
                  transitionTypes={[sectionTransition(pathname, item.href)]}
                >
                  <NavIcon href={item.href} />
                  <span className="nav-label">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
