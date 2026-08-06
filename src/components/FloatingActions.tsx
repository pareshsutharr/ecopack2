import Link from "next/link";
import { contactInfo } from "@/lib/nav-links";

export default function FloatingActions() {
  return (
    <>
      <a className="wa" href={contactInfo.whatsappHref} aria-label="Chat on WhatsApp">
        <svg viewBox="0 0 24 24">
          <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.5 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5s.8 1.9.8 2c.1.1.1.3 0 .5l-.4.6c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1.1 2.2 1.4 2.5 1.5.3.1.5.1.6-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.6-.1l1.9.9c.2.1.4.2.5.3 0 .1 0 .8-.4 1.5z" />
        </svg>
      </a>
      <div className="mbar">
        <a href={contactInfo.phoneHref}>Call</a>
        <a href={contactInfo.whatsappHref}>WhatsApp</a>
        <Link className="q" href="/contact">
          Get Quote
        </Link>
      </div>
    </>
  );
}
