import image2 from '@assets/2_1756016602167.png';
import image3 from '@assets/3_1756016602169.png';

export default function Footer() {
  return (
    <footer 
      className="w-full h-32 flex"
      style={{ backgroundColor: '#00a693' }}
      data-testid="footer"
    >
      {/* Image 2 - Left side - 33.33% width - Extended height */}
      <div className="w-[33.33%] flex items-end justify-start relative z-20">
        <img
          src={image2}
          alt=""
          className="h-[150%] w-auto object-cover"
          data-testid="footer-image-2"
        />
      </div>
      
      {/* Image 3 - Right side - 55% width - 85% height */}
      <div className="flex-1 flex items-center justify-end">
        <img
          src={image3}
          alt=""
          className="h-[85%] w-auto object-contain"
          data-testid="footer-image-3"
        />
      </div>
    </footer>
  );
}
