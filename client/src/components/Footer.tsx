import image2 from '@assets/2_1756016602167.png';
import image3 from '@assets/3_1756016602169.png';

export default function Footer() {
  return (
    <footer
      className="w-full h-32 flex"
      style={{ backgroundColor: '#00a693' }}
      data-testid="footer"
    >
      <div className="max-w-[1280px] mx-auto w-full flex h-full">
        {/* Image 2 - Left side - 45% width - Extended height */}
        <div className="w-[45%] h-full flex items-end justify-start relative z-20">
          <img
            src={image2}
            alt=""
            className="h-[170%] w-auto object-contain"
            data-testid="footer-image-2"
          />
        </div>

        {/* Image 3 - Right side - 55% width - Always stick to bottom-right */}
        <div className="w-[55%] flex-1 flex items-end justify-end">
          <img
            src={image3}
            alt=""
            className="h-[85%] w-auto object-contain sm:h-[85%] md:h-[85%] lg:h-[85%]"
            data-testid="footer-image-3"
          />
        </div>
      </div>
    </footer>
  );
}
