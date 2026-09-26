const CLIENTS = [
  "Verdoira.com", "BYD", "Shutter & Slate", "Sore", "Laser.me", "DPP Connects",
  "United One Communications", "Kardiologicum", "Nido Isola", "Affie & Allie",
  "Alex AI", "IBTechprep", "GradeSaver", "DivineGroup",
];

function MarqueeGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center gap-12 pr-12" aria-hidden={hidden || undefined}>
      {CLIENTS.map((name) => (
        <div key={name} className="flex items-center gap-12">
          <span className="font-plex font-semibold text-lg text-text-gray-02 whitespace-nowrap">{name}</span>
          <span className="w-1.75 h-1.75 rounded-none bg-white-00/15" />
        </div>
      ))}
    </div>
  );
}

export default function ClientTicker() {
  return (
    <div className="marquee-wrap w-full overflow-hidden">
      <div className="marquee-track flex w-max">
        <MarqueeGroup />
        <MarqueeGroup hidden />
      </div>
    </div>
  );
}
