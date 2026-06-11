import Image from "next/image";

interface Facility {
  title: string;
  tags: string[];
  description: string;
  image: string;
  alt: string;
}

const facilities: Facility[] = [
  {
    title: "Tennis",
    tags: ["9 Clay Courts", "4 Hard Courts"],
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    image: "/images/facility-tennis.png",
    alt: "Tennis court grass surface close up",
  },
  {
    title: "Accommodation",
    tags: ["5 Star Hotel"],
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    image: "/images/facility-accommodation.png",
    alt: "Luxury hotel room with pool view",
  },
  {
    title: "Fitness",
    tags: ["Gym", "Fitness Room"],
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    image: "/images/facility-fitness.png",
    alt: "Modern gym with equipment",
  },
  {
    title: "Recovery",
    tags: ["Spa", "Pool", "Massage"],
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    image: "/images/facility-recovery.png",
    alt: "Outdoor pool at night with blue lighting",
  },
];

function Tag({
  label,
  variant = "light",
}: {
  label: string;
  variant?: "light" | "green";
}) {
  const styles = {
    light: "border-gray-300 bg-white text-gray-700",
    green: "border-[#99B81B] bg-[#99B81B] text-white",
  };

  return (
    <span
      className={`inline-block rounded-full border px-3 py-0.5 text-[11px] font-medium ${styles[variant]}`}
    >
      {label}
    </span>
  );
}

function FacilityCard({
  facility,
  lightText,
}: {
  facility: Facility;
  lightText: boolean;
}) {
  return (
    <div className="flex flex-col">
      <div
        className="relative w-full overflow-hidden rounded-xl"
        style={{ aspectRatio: "4 / 3" }}
      >
        <Image
          src={facility.image}
          alt={facility.alt}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
          loading="lazy"
        />
      </div>

      <div className="mt-4">
        <h3
          className={`mb-2.5 text-xl font-bold md:text-2xl ${lightText ? "text-white" : "text-gray-900"}`}
        >
          {facility.title}
        </h3>

        <div className="mb-3 flex flex-wrap gap-2">
          {facility.tags.map((tag) => (
            <Tag
              key={tag}
              label={tag}
              variant={lightText ? "light" : "green"}
            />
          ))}
        </div>

        <p
          className={`text-sm leading-relaxed md:text-[14px] ${lightText ? "text-white/75" : "text-gray-500"}`}
        >
          {facility.description}
        </p>
      </div>
    </div>
  );
}

function TrophyWatermark() {
  return (
    <svg
      width="300"
      height="450"
      viewBox="0 0 319 593"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute right-0 bottom-0 opacity-25"
    >
      <path
        d="M532.506 87.1973C532.506 50.7325 497.148 30.4304 470.342 30.1218C435.805 29.7264 419.032 43.5987 419.032 43.5987V19.0244C419.032 3.96351 266.253 0 266.253 0C251.369 0 113.474 3.96351 113.474 19.0244V43.5987C113.474 43.5987 91.437 28.14 62.1644 30.1218C35.4526 31.9321 0 50.7325 0 87.1973C0 164.088 148.503 203.028 161.824 233.05C164.044 246.725 142.951 262.776 149.612 264.561C156.182 266.319 178.845 242.364 182.544 245.733C186.246 249.102 217.08 318.661 213.134 331.347C209.188 344.03 199.32 352.746 198.333 362.259C197.345 371.77 226.948 386.831 226.948 386.831C226.948 386.831 219.382 400.002 215.109 407.442C210.832 414.884 194.878 497.807 188.465 504.15C182.052 510.493 127.288 510.493 127.288 517.428V528.722H78.6104V592.138H452.581V528.722H405.218V517.428C405.218 510.496 350.455 510.496 344.041 504.15C337.628 497.81 321.677 414.884 317.403 407.442C313.127 400.002 305.561 386.831 305.561 386.831C305.561 386.831 335.161 371.77 334.177 362.259C333.189 352.746 323.322 344.028 319.375 331.347C315.429 318.661 346.263 249.102 349.965 245.733C353.664 242.364 376.33 266.319 382.897 264.561C389.558 262.776 368.465 246.725 370.685 233.05C384.004 203.028 532.506 164.088 532.506 87.1973ZM412.13 72.1341C412.13 72.1341 430.877 51.5257 461.465 51.5257C492.055 51.5257 507.843 68.9638 507.843 85.611C507.843 102.258 494.115 148.234 399.3 181.526L412.13 72.1341ZM21.8719 85.611C21.8719 68.9638 37.6606 51.5257 68.2477 51.5257C98.8377 51.5257 117.585 72.1341 117.585 72.1341L130.412 181.526C35.6006 148.234 21.8719 102.258 21.8719 85.611Z"
        fill="#C1C1C1"
      />
    </svg>
  );
}

export default function Facilities() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="absolute left-0 right-0 top-[22%] h-[52%] bg-linear-to-r from-[#002F50] to-[#99B81B]">
        <TrophyWatermark />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 lg:px-16">
        <div className="mb-10">
          <div className="flex items-center gap-2">
            <h2 className="text-[28px] font-bold text-gray-900 md:text-[32px]">
              Facilities
            </h2>
            <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#99B81B]" />
          </div>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-gray-500 md:text-[14px]">
            Lorem Ipsum has been the industry&apos;s standard dummy text ever
            since the 1500s,
          </p>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-3xl">
          <FacilityCard facility={facilities[0]} lightText={true} />
          <FacilityCard facility={facilities[1]} lightText={true} />
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-3xl lg:place-self-end">
          <FacilityCard facility={facilities[2]} lightText={false} />
          <FacilityCard facility={facilities[3]} lightText={false} />
        </div>
      </div>
    </section>
  );
}
