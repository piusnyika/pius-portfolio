import { SOCIAL_LINKS } from "@/lib/data";
import { Reveal } from "./reveal";
import { CopyEmailButton } from "./copy-email-button";
import { ContactForm } from "./contact-form";
import {
  IconGithub,
  IconLinkedin,
  IconInstagram,
  IconFacebook,
  IconDribbble,
} from "./icons";

const SOCIALS = [
  { href: SOCIAL_LINKS.linkedin, label: "LinkedIn", Icon: IconLinkedin },
  { href: SOCIAL_LINKS.github, label: "GitHub", Icon: IconGithub },
  { href: SOCIAL_LINKS.instagram, label: "Instagram", Icon: IconInstagram },
  { href: SOCIAL_LINKS.facebook, label: "Facebook", Icon: IconFacebook },
  { href: SOCIAL_LINKS.dribbble, label: "Dribbble", Icon: IconDribbble },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-16 px-6 py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-foreground/10 bg-foreground/[0.02] p-8 sm:p-12">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-br from-accent/20 to-accent-2/20 blur-3xl" />

          <div className="relative grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                Contact
              </span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Let&apos;s build something great
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-foreground/60">
                Have a project in mind or just want to say hi? Send a message,
                or reach me directly — my inbox is always open.
              </p>

              <div className="mt-8">
                <CopyEmailButton email={SOCIAL_LINKS.email} />
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                {SOCIALS.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${label} profile`}
                    title={label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-foreground/10 text-foreground/70 transition hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
