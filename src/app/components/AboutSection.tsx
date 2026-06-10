"use client";

import { useState } from "react";
import Image from "next/image";

type TabKey = "About Us" | "Coaches" | "Vision" | "Mission";

interface TabContent {
  heading: string;
  description: string;
  showStats: boolean;
}

const tabs: TabKey[] = ["About Us", "Coaches", "Vision", "Mission"];

const tabData: Record<TabKey, TabContent> = {
  "About Us": {
    heading: "About Us",
    description:
      "To be the first venue in the world to have 60 multi surface courts at one location and establish first one stop tennis academy in the Asia Pacific producing grand slam champions.",
    showStats: true,
  },
  Coaches: {
    heading: "Coaches",
    description:
      "Our world-class coaching staff includes former ATP & WTA professionals with decades of experience. Each coach is dedicated to developing elite talent from junior level through to grand slam competition.",
    showStats: false,
  },
  Vision: {
    heading: "Vision",
    description:
      "To be the first venue in the world to have 60 multi surface courts (20 clay & 30 hard + 10 natural grass) at one location alongside a stadium, establishing the premier tennis destination in the Asia Pacific.",
    showStats: false,
  },
  Mission: {
    heading: "Mission",
    description:
      "Adopt talented players, nurture them through elite training programs, and deliver champions on the world stage — producing the next generation of grand slam contenders from our world-class Hunter Valley facility.",
    showStats: false,
  },
};

const stats = [
  { value: "20", label: "courts" },
  { value: "12", label: "coaches" },
  { value: "17", label: "years" },
  { value: "10", label: "clubs" },
];

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<TabKey>("About Us");
  const current = tabData[activeTab];

  return (
    <section className="relative w-full overflow-hidden bg-white my-16">
      <svg
        width="307"
        height="380"
        viewBox="0 0 307 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute opacity-20 h-56 left-[-5%]"
      >
        <path
          d="M-94.9426 379.188L84.0621 0H130.897L306.695 379.188H206.609L105.876 149.494L6.43037 379.188H-94.9426Z"
          fill="#D1F04F"
        />
      </svg>

      {/* ── Vision blurb ── */}
      <div className="relative z-10 px-6 pb-10 text-center">
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-black md:text-lg font-medium">
          To be the first venue in the world to have{" "}
          <span className="font-bold text-[#99B81B]">
            60 multi surface courts
          </span>{" "}
          at one location and establish first one stop tennis academy in the
          Asia Pacific producing grand slam champions.
        </p>
      </div>

      {/* ── Tab bar ── */}
      <div className="relative z-10 flex justify-center px-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
              px-5 pb-3 pt-2 text-sm font-medium transition-colors duration-200 md:text-[15px] cursor-pointer
              ${
                activeTab === tab
                  ? "border-b-2 border-[#99B81B] text-gray-900"
                  : "border-b-2 border-transparent text-gray-400 hover:text-gray-600"
              }
            `}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* ── Main content: left text | right images ── */}
      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 pt-12 md:grid-cols-2 md:items-start lg:gap-20 lg:px-16">
        {/* ── Left: heading, description, stats, button ── */}
        <div>
          <div className="mb-4 flex items-start gap-2">
            <h2 className="text-2xl font-bold text-gray-900 md:text-[28px]">
              {current.heading}
            </h2>
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#99B81B]" />
          </div>

          <p className="mb-8 text-sm leading-relaxed text-gray-600 md:text-[14px]">
            {current.description}
          </p>

          {/* Stats row — only on About Us */}
          {current.showStats && (
            <div className="mb-8 flex gap-10">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="text-4xl font-bold leading-none text-[#99B81B]">
                    {s.value}
                  </span>
                  <span className="mt-1 text-sm text-gray-500">{s.label}</span>
                </div>
              ))}
            </div>
          )}

          {/* Read More */}
          <button className="rounded-full bg-[#99B81B] px-6 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#7a9415]">
            Read More
          </button>
        </div>

        <div className="relative">
          <div className="grid gap-5 lg:gap-10">
            {/* Row 1 */}
            <div
              className="justify-between"
              style={{
                display: "grid",
                gridTemplateColumns: "62.5% 32.5%",
                height: "200px",
                gap: "4px",
              }}
            >
              <Image
                src="/images/tennis-highfive.jpg"
                alt="tennis"
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
              <Image
                src="/images/tennis-kid.jpg"
                alt="tennis"
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Row 2 */}
            <div
              className="justify-between"
              style={{
                display: "grid",
                gridTemplateColumns: "47.5% 47.5%",
                height: "230px",
                gap: "4px",
              }}
            >
              <Image
                src="/images/tennis-man.jpg"
                alt="tennis"
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
              <Image
                src="/images/tennis-women.jpg"
                alt="tennis"
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
