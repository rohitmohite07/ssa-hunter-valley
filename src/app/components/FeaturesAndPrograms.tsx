"use client";

import Image from "next/image";
import { HiArrowLongRight } from "react-icons/hi2";

const features = [
  "First venue in the world",
  "First venue in the world to have 60 multi surface courts (20 clay & 30 hard + 10 natural grass) at one location alongside a stadium",
  "First facility in the world to have capabilities to hold WTA & ATP events on any three court surface at one location",
  "First tennis academy in the world to have capabilities to stage WTA & ATP events too",
  "First venue in the world with tennis academy, Equestrian Centre, 18 holes golf course, Exhibition Centre, Aboriginal Art & Culture Museum, Stadium; 5 Star Hunter Valley resort and airport all in 500 meters radius",
  "First one stop tennis academy inAsia Pacific",
];

//  Gallery images
const galleryImages = [
  {
    src: "/images/glimpses-1.png",
    alt: "Tennis player serving in black and white",
    className: "col-span-1",
  },
  {
    src: "/images/glimpses-2.png",
    alt: "Aerial view of multiple tennis courts",
    className: "col-span-1",
  },
];

// Programs data
const programs = [
  {
    title: "Academy",
    subtitle: "Live and train with us",
    src: "/images/programs-1.png",
    alt: "Aerial view of academy courts",
  },
  {
    title: "Camps",
    subtitle: "Train like a pro with us",
    src: "/images/programs-2.png",
    alt: "Group tennis camp session",
  },
  {
    title: "Performance",
    subtitle: "Elevate your game with us",
    src: "/images/programs-3.png",
    alt: "Player training on performance court",
  },
];

export default function FeaturesAndPrograms() {
  return (
    <section className="relative">
      {/* background */}
      <div
        className="absolute inset-x-0 top-0 h-[60%]"
        style={{
          background:
            "linear-gradient(to bottom, transparent 75%, white 100%), url('/images/features-section-bg.png') center top / cover no-repeat",
        }}
      />
      {/* Subtle white overlay */}
      <div className="absolute inset-0 bg-white/80" />

      <div className="relative z-10">
        {/*Key Features */}
        <div className="mx-auto max-w-6xl px-6 pb-12 pt-14 lg:px-16">
          <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold text-gray-900 md:text-[28px]">
                  key Features
                </h2>
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#99B81B]" />
              </div>
              <p className="mt-1 text-sm text-gray-500">
                Lorem Ipsum has been the industry&apos;s standard dummy text
                ever since the 1500s.
              </p>
            </div>
            <button className="rounded-full bg-[#99B81B] px-5 py-2 text-xs font-medium text-white transition-colors hover:bg-[#7a9415] cursor-pointer">
              Register Now
            </button>
          </div>

          <div className="grid grid-cols-1 gap-x-12 gap-y-0 md:grid-cols-2">
            {[features, features].map((col, colIdx) => (
              <ul key={colIdx} className="space-y-0">
                {col.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 py-3">
                    <HiArrowLongRight
                      size={20}
                      className="mt-0.5 shrink-0 text-[#99B81B]"
                    />

                    <span
                      className={`text-xs leading-relaxed text-gray-700 md:text-[13px] ${
                        i === 2 ? "font-semibold" : ""
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* Glimpse of Excellence */}
        <div className="mx-auto max-w-6xl px-6 pb-14 pt-4 lg:px-16">
          <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold text-gray-900 md:text-[26px]">
                  A Glimpse of Excellence
                </h2>
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#99B81B]" />
              </div>
              <p className="mt-1 text-sm text-gray-500">
                Lorem Ipsum has been the industry&apos;s standard dummy text
                ever since the 1500s.
              </p>
            </div>
            <button className="rounded-full bg-[#99B81B] px-5 py-2 text-xs font-medium text-white transition-colors hover:bg-[#7a9415] cursor-pointer">
              Register Now
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-[2fr_3fr]">
            {galleryImages.map((img) => (
              <div key={img.alt} className="overflow-hidden rounded-xl">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={480}
                  className="h-56 w-full object-cover transition-transform duration-500 hover:scale-105 md:h-72"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Programs */}
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-4 lg:px-16">
          <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold text-gray-900 md:text-[26px]">
                  Programs
                </h2>
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#99B81B]" />
              </div>
              <p className="mt-1 max-w-sm text-sm leading-relaxed text-gray-500">
                Lorem Ipsum has been the industry&apos;s standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </p>
            </div>
            <button className="rounded-full bg-[#99B81B] px-5 py-2 text-xs font-medium text-white transition-colors hover:bg-[#7a9415] cursor-pointer">
              Register Now
            </button>
          </div>

          {/* program cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {programs.map((program) => (
              <div
                key={program.title}
                className="group relative overflow-hidden rounded-xl"
                style={{ height: "280px" }}
              >
                <Image
                  src={program.src}
                  alt={program.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 90vw, 33vw"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 p-4">
                  <p className="text-lg font-semibold leading-tight text-white">
                    {program.title}
                  </p>
                  <p className="text-xs text-white/80">{program.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
