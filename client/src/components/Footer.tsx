import image2 from '@assets/2_1756016602167.png';
import image3 from '@assets/3_1756016602169.png';

export default function Footer() {
  return (
    <footer
      className="w-full flex relative overflow-visible max-h-[20rem]"
      style={{ backgroundColor: '#00a693' }}
      data-testid="footer"
    >
      <div className="max-w-[1280px] mx-auto w-full flex h-full relative overflow-visible">
        {/* Image 2 - Left side - Extended height with highest z-index */}
        <div className="w-[40%] h-full flex  z-50 overflow-visible">
          <img
            src={image2}
            alt=""
            className="h-[160%] w-auto object-cover "
            data-testid="footer-image-2"
          />
        </div>

        {/* Image 3 - Right side - 90% height with lower z-index */}
        <div className="w-[100%] h-full flex items-end justify-end z-10">

          <img
            src={image3}
            alt=""
            className="h-full w-auto object-cover h-[95%] mx-auto my-0"
            data-testid="footer-image-3"
          />

        </div>
      </div>
    </footer>
  );
}
