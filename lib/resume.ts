import { person } from "@/lib/site";

export const resumeRole = "Junior Web Developer / Frontend Developer";

export const resumeSummary =
  "Fresh undergraduate with a Bachelor of Science in Information Technology from Partido State University, seeking a junior web developer or frontend developer role. Built and deployed PsyCheck, a web-based mental health screening and referral system for university students, and an informational website for Kooperatiba para sa Kaunlaran ng Lagonoy. Focused on responsive interfaces in React and Next.js, from registration and dashboards through a live Vercel deployment.";

export const resumeContact = {
  email: person.email,
  phoneDisplay: person.phoneDisplay,
  phoneTel: person.phoneTel,
  githubHref: "https://github.com/ElyuWorld",
  githubLabel: "github.com/ElyuWorld",
} as const;

export const resumeSkillGroups = [
  {
    label: "Frontend",
    items:
      "HTML5, CSS3, JavaScript, React.js, Next.js, TypeScript, Tailwind CSS",
  },
  {
    label: "Backend",
    items: "PHP, MySQL, Supabase",
  },
  {
    label: "Tools",
    items: "Git, GitHub, Visual Studio Code, Vercel",
  },
] as const;

export const resumeProjects = [
  {
    title: "PsyCheck",
    detail: "Web-Based Mental Health Screening and Referral System",
    liveHref: "https://psycheck-website.vercel.app/",
    liveLabel: "psycheck-website.vercel.app",
    repoHref: "https://github.com/ElyuWorld/psycheck-website",
    repoLabel: "github.com/ElyuWorld/psycheck-website",
    stack: "Next.js, React, TypeScript, Tailwind CSS, Supabase",
    points: [
      "Developed a web platform so Partido State University students can request psychosocial support and counselors can handle those requests in one place.",
      "Built responsive registration, login, and appointment-booking interfaces in Next.js and React, with dashboards for students, counselors, and administrators.",
      "Implemented face-to-face, online, and referral booking, including counselor availability, request approval, rescheduling, meeting links, and email notices.",
      "Deployed the application on Vercel.",
    ],
  },
  {
    title: "KKL Website",
    detail:
      "Informational site for Kooperatiba para sa Kaunlaran ng Lagonoy",
    liveHref: "https://kkl-website.vercel.app/",
    liveLabel: "kkl-website.vercel.app",
    repoHref: "https://github.com/ElyuWorld/kkl-website",
    repoLabel: "github.com/ElyuWorld/kkl-website",
    stack: "Next.js, React, TypeScript, Tailwind CSS",
    points: [
      "Built a public information site for a multi-purpose cooperative in Lagonoy, Camarines Sur.",
      "Developed Home, About, Services, Events, Forms, and Contact pages, including the main office on F. Pamor Street in San Isidro Sur and a branch in Caramoan.",
      "Published printable membership, member profile, deposit, loan, and re-subscription forms for people to complete at the office, then deployed the site on Vercel.",
    ],
  },
] as const;

export const resumeExperience = [
  {
    title: "Secretary",
    org: "Lagonoy Badminton Shuttlers",
    when: "Since 2024",
  },
  {
    title: "Sergeant and team leader, Group 2",
    org: "ROTC MEDICS, Partido State University",
    when: "Academic year 2023–2024",
  },
] as const;
