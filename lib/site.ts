export const person = {
  name: "Lio Bhasil B. Cordova",
  shortName: "Lio Cordova",
  email: "bhasilcordova@gmail.com",
  phoneDisplay: "0993 849 9613",
  phoneTel: "+639938499613",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
] as const;

export function sectionTransition(
  pathname: string,
  href: string,
): "nav-forward" | "nav-back" {
  const rank = (path: string) => {
    if (path === "/") return 0;
    const index = nav.findIndex(
      (item) =>
        item.href !== "/" &&
        (path === item.href || path.startsWith(`${item.href}/`)),
    );
    return index === -1 ? 0 : index;
  };

  return rank(href) >= rank(pathname) ? "nav-forward" : "nav-back";
}

export const resumeSkills = [
  "Communication",
  "Time management",
  "Teamwork and collaboration",
  "Problem-solving",
  "Critical thinking",
  "Adaptability",
  "Attention to detail",
  "Multitasking",
  "Leadership",
  "Organization",
] as const;

export const kklStack = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "Tailwind CSS 4",
] as const;

export const psycheckStack = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "Tailwind CSS 4",
  "Supabase",
  "Nodemailer",
  "jsPDF",
] as const;
