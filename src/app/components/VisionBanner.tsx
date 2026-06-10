"use client";

import Image from "next/image";

export default function VisionBanner() {
  return (
    <section className="relative h-87.5 w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/section3-bg.jpg"
        alt="Vision Banner Background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/15" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          <p className="text-white text-xl font-semibold leading-relaxed md:text-3xl md:leading-relaxed">
            “ We have created an environment ideal for building craft. Our goal
            is to be recognized as the best tennis performance centre in the
            world. ”
          </p>

          <div className="h-px w-full bg-white my-4 md:my-8" />
          <div className="text-left">
            <span className="text-sm font-medium capitalize text-white ">
              John Doe
            </span>
            <br />
            <span className="text-xs capitalize text-white ">Chairman</span>
          </div>
        </div>
      </div>
    </section>
  );
}
