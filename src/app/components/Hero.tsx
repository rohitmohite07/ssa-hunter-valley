"use client";

import Image from "next/image";
import { HiArrowLongDown } from "react-icons/hi2";
import { RxDoubleArrowLeft } from "react-icons/rx";

export default function HeroSection() {
  return (
    <>
      <section className="relative w-full h-screen min-h-145 overflow-hidden">
        {/* ── Top white navbar ── */}
        <header className="absolute inset-x-0 top-0 z-100 flex h-16 items-center justify-between bg-white px-8 shadow-[0_1px_0_rgba(0,0,0,0.08)]">
          {/* Logo */}
          <Image
            src="/SSA-Logo.png"
            alt="logo"
            width={120}
            height={48}
            className="h-16 w-auto -ml-6"
          />

          {/* Contact Us button */}
          <button className="cursor-pointer rounded-full border-[1.5px] border-[#1a1a1a] bg-transparent px-6 py-2 text-[13px] font-medium tracking-[0.02em] text-[#1a1a1a] transition-all duration-200 hover:bg-[#1a1a1a] hover:text-white">
            Contact Us
          </button>
        </header>
        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 z-0 h-full w-full object-cover object-center"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* overlay */}
        <div
          className="absolute inset-0 z-1"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.25) 40%, rgba(0,0,0,0.45) 100%)",
          }}
        />

        {/* ── Centered Hero Text ── */}
        <div className="absolute inset-0 z-2 flex flex-col items-center justify-center px-5 text-center">
          <p
            className="mb-3 font-normal uppercase text-white/90"
            style={{
              fontSize: "clamp(10px, 1.1vw, 14px)",
              letterSpacing: "0.35em",
            }}
          >
            SSA HUNTER VALLEY
          </p>

          <h1
            className="m-0 font-light uppercase text-white"
            style={{
              fontSize: "clamp(28px, 4.8vw, 68px)",
              lineHeight: 1.05,
              letterSpacing: "0.03em",
            }}
          >
            GROW YOUR GAME WITH THE
          </h1>

          <h1
            className="m-0 font-extrabold uppercase text-white"
            style={{
              fontSize: "clamp(32px, 5.2vw, 74px)",
              lineHeight: 1.05,
              letterSpacing: "0.03em",
            }}
          >
            PROFESSIONALS
          </h1>

          <div
            className="my-4 mb-5 h-px bg-white/55"
            style={{
              width: "clamp(220px, 32vw, 460px)",
            }}
          />

          {/* ADOPT • NURTURE • DELIVER */}
          <div className="inline-flex items-center gap-3 px-14 py-1.5 bg-[linear-gradient(to_right,transparent,#D2F24F,transparent)] mb-4">
            {["ADOPT", "NURTURE", "DELIVER"].map((word, i) => (
              <span key={word} className="flex items-center gap-3">
                <span
                  className="font-medium text-white"
                  style={{
                    fontSize: "clamp(9px, 1vw, 13px)",
                    letterSpacing: "0.2em",
                  }}
                >
                  {word}
                </span>
                {i < 2 && (
                  <span className="inline-block h-1.25 w-1.25 shrink-0 rounded-full bg-white" />
                )}
              </span>
            ))}
          </div>

          {/* Register Now button */}
          <button
            className="mb-10 rounded-full border-[1.5px] border-[#99B81B] bg-transparent px-8 py-2.5 text-white transition-all duration-300 hover:bg-[#99B81B]/20 cursor-pointer"
            style={{
              fontSize: "clamp(11px, 1.1vw, 14px)",
              letterSpacing: "0.05em",
            }}
          >
            Register Now
          </button>

          {/* Down arrow */}
          <div className="flex animate-bounce flex-col items-center">
            <HiArrowLongDown size={40} color="#D2F24F" />
          </div>
        </div>

        {/* ── Weather Widget */}
        <div className="absolute bottom-20 right-0 z-3 flex flex-col items-end">
          <div className="flex items-center gap-1.5 px-3 py-1.25">
            <RxDoubleArrowLeft color="#D2F24F" />
            <span className="text-white text-[11px] font-semibold uppercase tracking-widest">
              WEATHER
            </span>
            <span className="bg-[#D1F04F] w-11 h-px ml-1 inline-block" />
          </div>

          {/* Weather card */}
          <div className="flex min-w-52.5 items-center gap-4.5 bg-[#99B81B]/55 px-4.5 py-3.5">
            {/* Temp */}
            <div>
              <div
                style={{
                  color: "#fff",
                  fontSize: "13px",
                  fontWeight: "600",
                  marginBottom: "4px",
                }}
              >
                Hunter Valley
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  lineHeight: 1,
                }}
              >
                <span
                  style={{
                    color: "#fff",
                    fontSize: "42px",
                    fontWeight: "300",
                    lineHeight: 1,
                  }}
                >
                  19
                </span>
                <span
                  style={{
                    color: "#fff",
                    fontSize: "18px",
                    fontWeight: "400",
                    marginTop: "6px",
                  }}
                >
                  °C
                </span>
              </div>
            </div>
            {/* Right side */}
            <div>
              <div
                style={{
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: "600",
                  marginBottom: "2px",
                }}
              >
                Weather
              </div>
              <div
                style={{
                  color: "rgba(255,255,255,0.8)",
                  fontSize: "12px",
                }}
              >
                Saturday, 8 pm
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 z-3 flex flex-col items-end">
          <div className="flex items-center gap-1.5 px-3 py-1.75">
            <RxDoubleArrowLeft color="#D2F24F" />
            <span className="text-white text-[11px] font-semibold uppercase tracking-widest">
              ONGOING MATCHES
            </span>
            <span className="bg-[#D1F04F] w-11 h-px ml-1 inline-block" />
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.75">
            <RxDoubleArrowLeft color="#D2F24F" />
            <span className="text-white text-[11px] font-semibold uppercase tracking-widest">
              SCORE
            </span>
            <span className="bg-[#D1F04F] w-11 h-px ml-1 inline-block" />
          </div>
        </div>
      </section>
    </>
  );
}
