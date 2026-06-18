"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiArrowLongRight } from "react-icons/hi2";

const featuresLeft = [
  "First venue in the world",
  "First venue in the world to have 60 multi surface courts (20 clay & 30 hard + 10 natural grass) at one location alongside a stadium",
  "First facility in the world to have capabilities to hold WTA & ATP events on any three court surface at one location",
  "First tennis academy in the world to have capabilities to stage WTA & ATP events too",
  "First venue in the world with tennis academy, Equestrian Centre, 18 holes golf course, Exhibition Centre, Aboriginal Art & Culture Museum, Stadium; 5 Star Hunter Valley resort and airport all in 500 meters radius",
  "First one stop tennis academy inAsia Pacific",
];

const featuresRight = [
  "First venue in the world",
  "First venue in the world to have 60 multi surface courts (20 clay & 30 hard + 10 natural grass) at one location alongside a stadium",
  "First facility in the world to have capabilities to hold WTA & ATP events on any three court surface at one location",
  "First tennis academy in the world to have capabilities to stage WTA & ATP events too",
  "First venue in the world with tennis academy, Equestrian Centre, 18 holes golf course, Exhibition Centre, Aboriginal Art & Culture Museum, Stadium; 5 Star Hunter Valley resort and airport all in 500 meters radius",
  "First one stop tennis academy inAsia Pacific",
];

const galleryImages = [
  {
    src: "/images/glimpses-1.png",
    alt: "Tennis player serving in black and white",
  },
  {
    src: "/images/glimpses-2.png",
    alt: "Aerial view of multiple tennis courts",
  },
];

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
  const pinnedRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const leftRefs = useRef<(HTMLLIElement | null)[]>([]);
  const rightRefs = useRef<(HTMLLIElement | null)[]>([]);
  const progressRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const pinned = pinnedRef.current;
    const lefts = leftRefs.current.filter(Boolean) as HTMLLIElement[];
    const rights = rightRefs.current.filter(Boolean) as HTMLLIElement[];
    if (!pinned || lefts.length === 0) return;

    const totalRows = lefts.length;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      [headerRef.current, ...lefts, ...rights].forEach((el) => {
        if (el) {
          (el as HTMLElement).style.opacity = "1";
          (el as HTMLElement).style.transform = "none";
        }
      });
      if (progressRef.current)
        progressRef.current.style.transform = "scaleX(1)";
      if (counterRef.current) counterRef.current.textContent = "06";
      return;
    }

    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

    if (headerRef.current) {
      headerRef.current.style.opacity = "0";
      headerRef.current.style.transform = "translateY(-24px)";
      headerRef.current.style.transition =
        "opacity 0.5s ease, transform 0.5s ease";
    }
    lefts.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateX(-60px)";

      el.style.transition = `opacity 0.5s ease ${i * 0.12}s, transform 0.5s ease ${i * 0.12}s`;
    });
    rights.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateX(60px)";
      el.style.transition = `opacity 0.5s ease ${i * 0.12}s, transform 0.5s ease ${i * 0.12}s`;
    });
    if (progressRef.current) {
      progressRef.current.style.transformOrigin = "left center";
      progressRef.current.style.transform = "scaleX(0)";
      progressRef.current.style.transition = "transform 0.4s ease";
    }

    if (!isDesktop) {
      let revealedCount = 0;

      const headerObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && headerRef.current) {
            headerRef.current.style.opacity = "1";
            headerRef.current.style.transform = "translateY(0)";
            headerObserver.disconnect();
          }
        },
        { threshold: 0.1 },
      );
      if (pinned) headerObserver.observe(pinned);

      const rowObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target as HTMLElement;
              el.style.opacity = "1";
              el.style.transform = "none";

              revealedCount = Math.min(totalRows, revealedCount + 1);
              if (counterRef.current)
                counterRef.current.textContent = String(
                  Math.ceil(revealedCount / 2), // left+right = 1 row
                ).padStart(2, "0");

              if (progressRef.current)
                progressRef.current.style.transform = `scaleX(${Math.ceil(revealedCount / 2) / totalRows})`;

              rowObserver.unobserve(el);
            }
          });
        },
        {
          threshold: 0.15,

          rootMargin: "0px 0px -40px 0px",
        },
      );

      [...lefts, ...rights].forEach((el) => rowObserver.observe(el));

      return () => {
        headerObserver.disconnect();
        rowObserver.disconnect();
      };
    }

    gsap.registerPlugin(ScrollTrigger);

    [headerRef.current, ...lefts, ...rights].forEach((el) => {
      if (el) {
        (el as HTMLElement).style.transition = "none";
      }
    });
    if (progressRef.current) progressRef.current.style.transition = "none";

    gsap.set(headerRef.current, { opacity: 0, y: -24 });
    lefts.forEach((el) => gsap.set(el, { opacity: 0, x: -60 }));
    rights.forEach((el) => gsap.set(el, { opacity: 0, x: 60 }));
    gsap.set(progressRef.current, {
      scaleX: 0,
      transformOrigin: "left center",
    });

    const HEADER_DUR = 0.3;
    const ROW_STEP = 0.5;
    const HOLD_DUR = 0.3;
    const TOTAL_DUR = HEADER_DUR + totalRows * ROW_STEP + HOLD_DUR;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: pinned,
        start: "top top",
        end: () => `+=${totalRows * window.innerHeight * 0.7}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        pinSpacing: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const tlProgress = self.progress * TOTAL_DUR;
          const rowProgress = Math.max(0, tlProgress - HEADER_DUR);
          const visibleCount =
            tlProgress < HEADER_DUR
              ? 0
              : Math.min(totalRows, Math.ceil(rowProgress / ROW_STEP));

          if (counterRef.current)
            counterRef.current.textContent = String(visibleCount).padStart(
              2,
              "0",
            );
          if (progressRef.current)
            progressRef.current.style.transform = `scaleX(${visibleCount / totalRows})`;
        },
      },
    });

    tl.to(headerRef.current, {
      opacity: 1,
      y: 0,
      duration: HEADER_DUR,
      ease: "power2.out",
    });
    lefts.forEach((leftEl, i) => {
      const rightEl = rights[i];
      const pos = HEADER_DUR + i * ROW_STEP;
      tl.to(
        leftEl,
        { opacity: 1, x: 0, duration: 0.4, ease: "power2.out" },
        pos,
      );
      if (rightEl)
        tl.to(
          rightEl,
          { opacity: 1, x: 0, duration: 0.4, ease: "power2.out" },
          pos,
        );
    });
    tl.to({}, { duration: HOLD_DUR });

    const onResize = () => ScrollTrigger.refresh(true);
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);

    return () => {
      ScrollTrigger.getAll().forEach((s) => s.kill());
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
    };
  }, []);

  return (
    <section className="relative">
      <div
        className="absolute inset-x-0 top-0 h-[60%]"
        style={{
          background:
            "linear-gradient(to bottom, transparent 75%, white 100%), url('/images/features-section-bg.png') center top / cover no-repeat",
        }}
      />
      <div className="absolute inset-0 bg-white/80" />

      <div className="relative z-10">
        {/* KEY FEATURES */}
        <div
          ref={pinnedRef}
          className="mx-auto max-w-6xl px-6 pb-12 pt-14 lg:px-16"
        >
          <div
            ref={headerRef}
            className="mb-8 flex flex-wrap items-start justify-between gap-4"
          >
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

            <button className="cursor-pointer rounded-full bg-[#99B81B] px-5 py-2 text-xs font-medium text-white transition-colors hover:bg-[#7a9415]">
              Register Now
            </button>
          </div>

          <div className="mb-6 flex items-center justify-end gap-4">
            <div className="flex flex-col items-end gap-2">
              <div className="flex items-baseline gap-1">
                <span
                  ref={counterRef}
                  className="text-3xl font-black tabular-nums text-[#99B81B]"
                >
                  00
                </span>
                <span className="text-base text-gray-400">/ 06</span>
              </div>
              <div className="h-1 w-28 overflow-hidden rounded-full bg-gray-200">
                <div
                  ref={progressRef}
                  className="h-full w-full rounded-full bg-[#99B81B]"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-12 md:grid-cols-2">
            <ul className="space-y-0">
              {featuresLeft.map((feature, i) => (
                <li
                  key={`left-${i}`}
                  ref={(el) => {
                    leftRefs.current[i] = el;
                  }}
                  className="flex items-start gap-3 py-3"
                >
                  <HiArrowLongRight
                    size={20}
                    className="mt-0.5 shrink-0 text-[#99B81B]"
                  />
                  <span
                    className={`text-xs leading-relaxed text-gray-700 md:text-[13px] ${i === 2 ? "font-semibold" : ""}`}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            <ul className="space-y-0">
              {featuresRight.map((feature, i) => (
                <li
                  key={`right-${i}`}
                  ref={(el) => {
                    rightRefs.current[i] = el;
                  }}
                  className="flex items-start gap-3 py-3"
                >
                  <HiArrowLongRight
                    size={20}
                    className="mt-0.5 shrink-0 text-[#99B81B]"
                  />
                  <span
                    className={`text-xs leading-relaxed text-gray-700 md:text-[13px] ${i === 2 ? "font-semibold" : ""}`}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/*  GLIMPSE OF EXCELLENCE */}
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
            <button className="cursor-pointer rounded-full bg-[#99B81B] px-5 py-2 text-xs font-medium text-white transition-colors hover:bg-[#7a9415]">
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

        {/*  PROGRAMS  */}
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
            <button className="cursor-pointer rounded-full bg-[#99B81B] px-5 py-2 text-xs font-medium text-white transition-colors hover:bg-[#7a9415]">
              Register Now
            </button>
          </div>
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
