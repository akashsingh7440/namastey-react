const timelineData = [
  {
    year: "2017",
    title: "Going Direct",
    desc: "We cut out the middlemen and launched our own storefront, letting us reinvest in better materials and a closer bond with our customers.",
  },
  {
    year: "2020",
    title: "A Clearer Purpose",
    desc: "We audited every step of our supply chain and emerged with a full commitment to certified sustainable sourcing.",
  },
  {
    year: "2023",
    title: "A Global Community",
    desc: "Crossing 200,000 customers across 40+ countries — yet every order is still packed with the same care as day one.",
  },
];
const valuesData = [
  {
    num: "01",
    title: "Material Honesty",
    desc: "No vague blends, no greenwashed claims. Just transparent sourcing and materials worth talking about.",
  },
  {
    num: "02",
    title: "Slow & Deliberate",
    desc: "Every product is designed to outlast the season it launches in, built for years of use rather than a moment of novelty.",
  },
  {
    num: "03",
    title: "People First",
    desc: "Fair wages, safe workshops, real relationships with our makers. The people behind the product are the brand.",
  },
];

const TimelineItemComponent = (prop) => {
  const { item } = prop;
  return (
    <div className="flex gap-8 py-6 border-b border-[#E8E0D5]">
      <h3 className="text-2xl font-bold text-[#DA0037] w-16 shrink-0">
        {item.year}
      </h3>
      <div>
        <h4 className="text-[#594545] font-semibold text-base mb-1">
          {item.title}
        </h4>
        <p className="text-[#472D2D] text-sm leading-relaxed">{item.desc}</p>
      </div>
    </div>
  );
};

const ValueCardComponent = (prop) => {
  const { value } = prop;
  return (
    <div className="bg-[#FFF2EF] rounded-lg shadow-md p-6">
      <span className="text-xs font-bold text-[#DA0037] tracking-widest">
        {value.num}
      </span>
      <h3 className="text-[#810000] font-bold text-lg mt-2 mb-2">
        {value.title}
      </h3>
      <p className="text-[#472D2D] text-sm leading-relaxed">{value.desc}</p>
    </div>
  );
};

const AboutComponent = () => {
  return (
    <div className="bg-[#F3F2EC] min-h-screen">
      {/* Hero */}
      <div className="mx-auto max-w-2xl text-center py-16 px-6">
        <span className="text-xs tracking-widest uppercase text-[#DA0037] font-semibold">
          Our Story
        </span>
        <h1 className="text-4xl font-bold text-[#810000] mt-3 mb-4">
          Made with Purpose, Built to Last
        </h1>
        <p className="text-[#472D2D] text-sm leading-relaxed">
          We started with a simple question: why is it so hard to find products
          that are beautiful, honest, and made to endure? A decade later, that
          question still drives everything we do.
        </p>
      </div>

      {/* Timeline */}
      <div className="mx-auto max-w-2xl px-6 pb-14">
        <h2 className="text-[#810000] font-bold text-xl mb-4 border-b-2 border-[#DA0037] pb-2">
          Our Journey
        </h2>
        {timelineData.map((item) => (
          <TimelineItemComponent key={item.year} item={item} />
        ))}
      </div>

      {/* Core Values */}
      <div className="bg-[#F3F2EC] py-14 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[#810000] font-bold text-xl mb-6 border-b-2 border-[#DA0037] pb-2">
            Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {valuesData.map((value) => (
              <ValueCardComponent key={value.num} value={value} />
            ))}
          </div>
        </div>
      </div>

      {/* Footer Strip */}
      <div className="bg-[#F3F2EC] text-center py-10 px-6">
        <p className="text-[#594545] italic text-lg mb-4">
          "Less, but made well."
        </p>
        <button className="bg-[#810000] text-white text-sm font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-[#DA0037] transition-colors">
          Shop the Collection
        </button>
      </div>
    </div>
  );
};

export default AboutComponent;
