import Image from "next/image";
import { IoGolfOutline } from "react-icons/io5";

interface ConnectivityItem {
  place: string;
  distance: string;
}

const connectivityItems: ConnectivityItem[] = [
  { place: "Hunter Valley Golf And Country Club", distance: "220m" },
  { place: "Rydges Resort Hunter Valley", distance: "550m" },
  { place: "Cressnock Airport", distance: "1.7km" },
  { place: "Cressnock CBD", distance: "7km" },
  { place: "Nulkaba Public School", distance: "4.8km" },
  { place: "Cressnock Hospital", distance: "7.3km" },
  { place: "Mcdonalds, KFC, Oporto", distance: "7km" },
];

export default function LocationHighlights() {
  return (
    <section className="w-full my-16">
      <div className="flex flex-col md:flex-row md:min-h-120">
        {/* ── LEFT: Gradient panel ── */}
        <div
          className="relative flex flex-col justify-between px-8 py-10 md:w-[42%] md:px-12 md:py-12 lg:px-16"
          style={{
            background: "linear-gradient(135deg, #003A5D 0%, #99B81B 100%)",
          }}
        >
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-white/80 md:text-[11px]">
              LAUNCHING
            </p>

            <h2 className="mb-3 text-[28px] font-bold leading-tight text-white md:text-[32px] lg:text-[36px]">
              Signature Slam Academy
              <br />
              Hunter Valley
            </h2>

            <p className="mb-8 text-base font-medium text-white/90 md:text-2xl">
              SSA Connectivity
            </p>

            <ul className="space-y-0 divide-y divide-white/10">
              {connectivityItems.map((item) => (
                <li key={item.place} className="flex items-center gap-3 py-2.5">
                  <IoGolfOutline color="#fff" />

                  <span className="min-w-0 flex-1 text-[13px] font-semibold text-white md:text-[14px]">
                    {item.place}
                  </span>

                  <span
                    className="mx-2 shrink-0 grow-0"
                    style={{
                      width: "60px",
                      borderTop: "1.5px dashed rgba(255,255,255,0.35)",
                      flexShrink: 0,
                    }}
                    aria-hidden="true"
                  />

                  <span className="shrink-0 text-[13px] font-medium text-white md:text-[14px]">
                    {item.distance}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── RIGHT: Image ── */}
        <div className="relative min-h-75 flex-1 md:min-h-0">
          <Image
            src="/images/SSA-connectivity.png"
            alt="Aerial view of Signature Slam Academy Hunter Valley"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 58vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
