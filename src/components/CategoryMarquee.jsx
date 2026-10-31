const categories = [
  "NATURE & WILDLIFE",
  "HISTORICAL PLACES",
  "SPIRITUAL PLACES",
  "HIDDEN GEMS",
  "AESTHETIC CAFES",
  "TREKKING SPOTS",
];

export default function CategoryMarquee() {
  return (
    <section className="category-marquee">
      <div className="marquee-track">
        {[...categories, ...categories].map((item, index) => (
          <span key={index}>
            <i>✳</i> {item}
          </span>
        ))}
      </div>
    </section>
  );
}
