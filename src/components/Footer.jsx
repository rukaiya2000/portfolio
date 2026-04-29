import { SOCIAL_LINKS } from '../config/constants';

export function Footer() {
  const socialLinks = [
    { emoji: "🐙", href: SOCIAL_LINKS.github, label: "GitHub" },
    { emoji: "💼", href: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
    { emoji: "✉️", href: `mailto:${SOCIAL_LINKS.email}`, label: "Email" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-8 mt-auto">
      <div className="container-max">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6 text-2xl">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75 transition"
                aria-label={link.label}
              >
                {link.emoji}
              </a>
            ))}
          </div>
          <p className="text-gray-400">
            © 2025 Rukaiya Khan. Built with React, Vite & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
