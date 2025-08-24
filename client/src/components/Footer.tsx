import image2 from '@assets/2_1756016602167.png';
import image3 from '@assets/3_1756016602169.png';

export default function Footer() {
  return (
    <footer 
      className="w-full h-32 flex"
      style={{ backgroundColor: '#00a693' }}
      data-testid="footer"
    >
      {/* Image 3 - Left side - 55% width - 85% height */}
      <div className="flex-1 flex items-center justify-start">
        <img
          src={image3}
          alt=""
          className="h-[85%] w-auto object-contain"
          data-testid="footer-image-3"
        />
      </div>
      
      {/* Image 2 - Right side - 45% width - 100% height */}
      <div className="w-[45%] flex items-center justify-end">
        <img
          src={image2}
          alt=""
          className="h-full w-auto object-cover"
          data-testid="footer-image-2"
        />
      </div>
    </footer>
  );
}
