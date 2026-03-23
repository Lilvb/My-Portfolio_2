const items = [
  'Python', 'Apache Spark', 'Azure Cloud', 'Hadoop',
  'Power BI', 'ETL Pipelines', 'SQL', 'Pandas', 'Data Engineering',
];

function MarqueeItems() {
  return (
    <>
      {items.map((item, i) => (
        <span key={i}>
          <span>{item}</span>
          <span className="accent">★</span>
        </span>
      ))}
    </>
  );
}

export default function Marquee() {
  return (
    <div className="marquee-wrap" aria-hidden="true">
      <div className="marquee-inner">
        <MarqueeItems />
        <MarqueeItems />
      </div>
    </div>
  );
}
