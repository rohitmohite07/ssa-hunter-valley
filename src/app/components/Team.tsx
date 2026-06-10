import Image from "next/image";

interface Professional {
  name: string;
  role: string;
  image: string;
  alt: string;
}

const professionals: Professional[] = [
  {
    name: "Craig Tiley",
    role: "CEO Tennis Australia & Australian Open",
    image: "/images/ceo.png",
    alt: "Craig Tiley - CEO Tennis Australia & Australian Open",
  },
  {
    name: "Stephen Farrow",
    role: "Director - Tournament, Players & International Relations",
    image: "/images/director.png",
    alt: "Stephen Farrow - Director Tournament Players & International Relations",
  },
  {
    name: "Cameron Pearson",
    role: "Head Major Events - Tennis Australia",
    image: "/images/events-head.png",
    alt: "Cameron Pearson - Head Major Events Tennis Australia",
  },
];

export default function Team() {
  return (
    <section className="w-full bg-white py-16 ">
      <div className="mx-auto max-w-6xl px-6 lg:px-16">
        <div className="mb-10 flex flex-wrap items-start justify-between gap-6">
          <div className="max-w-sm">
            <div className="mb-3 flex items-start gap-2">
              <h2 className="text-[28px] font-bold leading-tight text-gray-900 md:text-[32px]">
                Meet our professionals
              </h2>
              <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#99B81B]" />
            </div>
            <p className="text-sm leading-relaxed text-gray-500 md:text-[15px]">
              Lorem Ipsum has been the industry&apos;s standard dummy text ever
              since the 1500s,
            </p>
          </div>

          <button className="rounded-full bg-[#99B81B] px-7 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#7a9415] cursor-pointer">
            View All
          </button>
        </div>

        <div
          className="
            grid grid-cols-1 gap-8
            sm:grid-cols-3
          "
        >
          {professionals.map((pro) => (
            <div key={pro.name} className="flex flex-col">
              <div className="relative w-full overflow-hidden rounded-xl aspect-square">
                <Image
                  src={pro.image}
                  alt={pro.alt}
                  fill
                  className="object-cover object-top transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 10vw, 20vw"
                  loading="lazy"
                />
              </div>

              <div className="mt-4">
                <h3 className="text-xl font-bold text-gray-900 md:text-2xl">
                  {pro.name}
                </h3>
                <p className="mt-1 text-sm italic leading-relaxed text-gray-500 md:text-[15px]">
                  {pro.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
