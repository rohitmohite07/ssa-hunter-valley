import Image from "next/image";
import Link from "next/link";

export default function Topbar() {
  return (
    <>
      <header className="absolute inset-x-0 top-0 z-100 flex h-16 items-center justify-between bg-white px-8 shadow-[0_1px_0_rgba(0,0,0,0.08)]">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/SSA-Logo.png"
            alt="logo"
            width={120}
            height={48}
            className="h-16 w-auto -ml-6"
          />
        </Link>

        {/* Contact Us button */}
        <button className="cursor-pointer rounded-full border-[1.5px] border-[#1a1a1a] bg-transparent px-6 py-2 text-[13px] font-medium tracking-[0.02em] text-[#1a1a1a] transition-all duration-200 hover:bg-[#1a1a1a] hover:text-white">
          Contact Us
        </button>
      </header>
    </>
  );
}
