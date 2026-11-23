import { person } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>{person.name}</p>
      <p>
        <a href={`mailto:${person.email}`}>{person.email}</a>
      </p>
    </footer>
  );
}
