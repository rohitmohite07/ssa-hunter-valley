import Image from "next/image";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { SlPhone } from "react-icons/sl";

const navColumns = [
  ["About Us", "Programs"],
  ["Coaches", "Amenities"],
  ["News", "Blogs"],
  ["Matches", ""],
  ["Events", ""],
  ["FAQs", ""],
];

const navHrefs: Record<string, string> = {
  "About Us": "/about",
  Programs: "/programs",
  Coaches: "/coaches",
  Amenities: "/amenities",
  News: "/news",
  Blogs: "/blogs",
  Matches: "/matches",
  Events: "/events",
  FAQs: "/faqs",
};

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    icon: <FiFacebook size={20} />,
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/",
    icon: <FaXTwitter size={20} />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: <FiInstagram size={20} />,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/",
    icon: <FiYoutube size={20} />,
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-6 pb-10 pt-12 lg:px-16">
        <nav className="mb-10" aria-label="Footer navigation">
          <div className="grid grid-cols-3 gap-x-6 gap-y-4 sm:grid-cols-4 lg:grid-cols-6 lg:gap-x-8">
            {navColumns.map((col, ci) => (
              <div key={ci} className="flex flex-col gap-3">
                {col.map((label) =>
                  label ? (
                    <Link
                      key={label}
                      href={navHrefs[label] ?? "#"}
                      className="text-sm text-gray-800 transition-colors hover:text-[#99B81B]"
                    >
                      {label}
                    </Link>
                  ) : (
                    // Empty slot keeps grid alignment
                    <span key="empty" className="text-sm opacity-0 select-none">
                      ·
                    </span>
                  ),
                )}
              </div>
            ))}
          </div>
        </nav>

        <hr className="mb-10 border-gray-800" />

        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:gap-0">
          <div className="shrink-0 sm:w-55">
            <Image
              src="/SSA-Logo.png"
              alt="SSA - Adopt Nurture Deliver"
              width={155}
              height={70}
              className="object-contain"
            />
          </div>

          <div className="flex-1">
            <p className="mb-4 text-[17px] font-bold text-[#99B81B]">
              Signature Slam Academy
            </p>

            <p className="mb-3 text-sm text-gray-600">
              30 Wills Hill Road, Lovedale, NSW
            </p>

            <div className="mb-3 flex items-center gap-2.5">
              <SlPhone color="#99B81B" />
              <a
                href="tel:+915642589752"
                className="text-sm text-gray-600 transition-colors hover:text-[#99B81B]"
              >
                + 91 5642589752
              </a>
            </div>

            <div className="flex items-center gap-2.5">
              <MdOutlineEmail color="#99B81B" />
              <a
                href="mailto:info@ssagroup.com"
                className="text-sm text-gray-600 transition-colors hover:text-[#99B81B]"
              >
                info@ssagroup.com
              </a>
            </div>
          </div>

          <div className="sm:w-55">
            <p className="mb-4 text-[17px] font-bold text-[#99B81B]">
              Connect with us
            </p>
            <div className="flex items-center gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="text-gray-800 transition-colors hover:text-[#99B81B]"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-full"
        style={{
          background: "linear-gradient(90deg, #002F50 0%, #99B81B 100%)",
        }}
      >
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-3.5 lg:px-16">
          <Link
            href="#"
            className="text-xs text-white/80 transition-colors hover:text-white"
          >
            Terms And Condition
          </Link>

          <p className="text-center text-xs text-white/80">
            © 2026 All Rights Reserved{" "}
            <a
              href="https://www.signatureslamacademy.com"
              className="transition-colors hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.signatureslamacademy.com
            </a>
          </p>

          <Link
            href="#"
            className="text-xs text-white/80 transition-colors hover:text-white"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
