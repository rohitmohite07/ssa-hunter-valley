import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

export default function CoachesAndEvents() {
  return (
    <section className="w-full">
      <div className="flex flex-col sm:flex-row">
        <div className="relative flex min-h-50 flex-1 overflow-hidden sm:min-h-55">
          <Image
            src="/images/coaches-bg.png"
            alt="Tennis coach at the net"
            fill
            className="object-cover object-center"
            sizes="(max-width: 640px) 100vw, 50vw"
            loading="lazy"
          />

          <div className="absolute inset-0 bg-black/55" />

          <div className="relative z-10 flex w-full flex-col justify-end p-7 md:p-10 lg:ml-16">
            <div className="mb-3 flex items-center gap-2">
              <h2 className="text-xl font-bold text-white md:text-[22px]">
                Our Coaches
              </h2>
              <span className="h-2 w-2 shrink-0 rounded-full bg-white" />
            </div>

            <p className="mb-5 max-w-xs text-sm leading-relaxed text-white/80">
              Lorem Ipsum has been the industry&apos;s standard dummy text ever
              since the 1500s,
            </p>

            <button className="flex items-center gap-2 text-sm font-medium text-white transition-opacity hover:opacity-70 cursor-pointer w-fit">
              Read More
              <FaArrowRightLong />
            </button>
          </div>
        </div>

        <div className="relative flex min-h-50 flex-1 overflow-hidden sm:min-h-55 bg-[#99B81B]">
          <div className="absolute inset-y-0 right-0 bottom-0 w-[45%] overflow-hidden">
            <Image
              src="/images/events-bg.png"
              alt="Tennis event"
              fill
              className="object-contain object-right opacity-25 mix-blend-multiply"
            />
          </div>

          <div className="relative z-10 flex w-full flex-col justify-end p-7 md:p-10">
            <div className="mb-3 flex items-center gap-2">
              <h2 className="text-xl font-bold text-white md:text-[22px]">
                Events
              </h2>
              <span className="h-2 w-2 shrink-0 rounded-full bg-white" />
            </div>

            <p className="mb-5 max-w-xs text-sm leading-relaxed text-white/85">
              Lorem Ipsum has been the industry&apos;s standard dummy text ever
              since the 1500s,
            </p>

            <button className="flex items-center gap-2 text-sm font-medium text-white transition-opacity hover:opacity-70 cursor-pointer w-fit">
              <span>Read More</span>
              <FaArrowRightLong />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
