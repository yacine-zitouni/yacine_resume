"use client";

import { useState } from "react";
import { SocialLink } from "@/data/resumeData";

interface ContactSectionProps {
  email: string;
  links: SocialLink[];
}

export function ContactSection({ email, links }: ContactSectionProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = email;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // Fallback: select text in the email span
      const mailEl = document.getElementById("mail");
      if (mailEl) {
        const range = document.createRange();
        range.selectNodeContents(mailEl);
        const sel = window.getSelection();
        sel?.removeAllRanges();
        sel?.addRange(range);
      }
    }
  };

  return (
    <>
      <div className="cell s12 label-cell" id="contact">
        <h2>Contact</h2>
        <span className="mono">Say hello</span>
      </div>

      <section className="cell s8">
        <p>
          Have an idea, an internship or a small project in mind? Send me a
          message.
        </p>
        <div className="mail-row">
          <span className="mail" id="mail">
            {email}
          </span>
          <button
            className="btn-ghost"
            id="copy"
            type="button"
            onClick={handleCopy}
            aria-live="polite"
          >
            {copied ? "Copied" : "Copy email"}
          </button>
        </div>
      </section>

      <aside className="cell s4">
        <div className="links">
          {links.map((link) => (
            <div key={link.label}>
              <span className="mono">{link.label}</span>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${link.label} profile (opens in new tab)`}
              >
                <span>{link.displayUrl}</span>
              </a>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
}
