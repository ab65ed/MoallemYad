
export default function Footer() {
  return (
    <footer
      className="footer-section relative z-50 w-full"
      style={{ backgroundColor: '#00a693' }}
      data-testid="footer"
    >
      {/* Bird overlay */}
      <img
        src="/gonjeshk.png"
        alt=""
        className="pointer-events-none select-none absolute -top-10 left-8 md:-top-14 md:left-12 w-20 md:w-24 z-[60]"
        data-testid="footer-bird"
      />
      {/* Full-width footer image that controls height (no stretching) */}
      <div className="relative mx-auto w-full max-w-[1280px]">
        <picture>
          <source media="(min-width: 1280px)" srcSet="/footer/1280.png" />
          <source media="(min-width: 1050px)" srcSet="/footer/1050.png" />
          <img
            src="/footer/828.png"
            alt=""
            className="w-full h-auto block"
            data-testid="footer-image-combined"
          />
        </picture>
      </div>
    </footer>
  );
}
