"use client";

const WORDS = ["ADOPT", "NURTURE", "DELIVER"] as const;

// How many full sets to render
const SETS_PER_TRACK = 8; // 8 sets × 3 words = 24 words per track half

export default function TaglineTicker() {
  // globalIndex drives the F/O alternation across the full sequence.
  const buildTrack = (indexOffset: number) => {
    const items: { word: string; filled: boolean; key: string }[] = [];
    for (let s = 0; s < SETS_PER_TRACK; s++) {
      WORDS.forEach((word, w) => {
        const globalIndex =
          indexOffset * SETS_PER_TRACK * WORDS.length + s * WORDS.length + w;
        items.push({
          word,
          filled: globalIndex % 2 === 0, // even index → filled, odd → outlined
          key: `${indexOffset}-${s}-${w}`,
        });
      });
    }
    return items;
  };

  // Two identical halves — CSS animates the first half then loops back.
  const firstHalf = buildTrack(0);
  const secondHalf = buildTrack(0); // identical so the loop is seamless

  const renderWord = (item: { word: string; filled: boolean; key: string }) => (
    <span key={item.key} className="inline-flex items-center">
      {/* Word */}
      <span
        className={`
          select-none whitespace-nowrap font-black uppercase tracking-widest
          text-[clamp(18px,2.8vw,36px)]
          ${
            item.filled
              ? "text-[#99B81B]" // filled: solid colour
              : "outlined-word" // outlined: stroke only
          }
        `}
      >
        {item.word}
      </span>

      {/* Separator dot */}
      <span className="h-2 w-2 mx-5 rounded-full bg-[#99B81B]" />
    </span>
  );

  return (
    <>
      <div className="w-full overflow-hidden  bg-white py-6">
        {/* Track — doubled for seamless loop */}
        <div className="marquee-track flex w-max items-center">
          {firstHalf.map(renderWord)}
          {secondHalf
            .map((item) => ({ ...item, key: `clone-${item.key}` }))
            .map(renderWord)}
        </div>
      </div>
    </>
  );
}
