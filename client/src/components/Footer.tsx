import image2 from '@assets/2_1756016602167.png';
import image3 from '@assets/3_1756016602169.png';

export default function Footer() {
  return (
    <footer
      className="w-full flex relative overflow-visible max-h-[20rem] z-50"
      style={{ backgroundColor: '#00a693' }}
      data-testid="footer"
    >
      {/* Overlay bird image - absolute for precise composition across sizes */}
      <img
        src="/gonjeshk.png"
        alt=""
        className="pointer-events-none select-none absolute -top-10 left-8 md:-top-14 md:left-12 w-16 md:w-24 z-[60]"
        data-testid="footer-bird"
      />
      <div className="max-w-[1280px] mx-auto w-full flex h-full relative overflow-visible z-50">
        {/* Image 2 - Left side - Extended height with highest z-index */}
        <div className="w-[60%] h-full flex items-end relative z-50 overflow-visible">
          <img
            src={image2}
            alt=""
            className="h-[140%] w-auto object-cover -mt-14 md:-mt-8"
            data-testid="footer-image-2"
          />
        </div>

        {/* Image 3 - Right side - 90% height with lower z-index */}
        <div className="w-[100%] h-full flex items-center justify-center z-10">

          <div className="flex items-center justify-center w-full h-full">
            <img
              src={image3}
              alt=""
              className="object-contain max-h-full max-w-full"
              data-testid="footer-image-3"
            />
          </div>

        </div>
      </div>
    </footer>
  );
}
