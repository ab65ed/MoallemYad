import { useState, useRef, useEffect } from 'react';
import { Menu, X, Play, Pause } from 'lucide-react';

export default function FloatingNavButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [showMusicHint, setShowMusicHint] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // شروع پخش خودکار
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // تنظیم حجم صدا
    audio.volume = volume;
    
    // تلاش برای شروع پخش خودکار (ابتدا muted)
    const startAutoPlay = async () => {
      try {
        // شروع پخش با muted
        audio.muted = true;
        await audio.play();
        setIsPlaying(true);
        
        // پس از شروع موفق، unmute کردن
        setTimeout(() => {
          audio.muted = false;
          setIsMuted(false);
        }, 500);
        
      } catch (error) {
        console.log('Auto-play was prevented:', error);
        setIsPlaying(false);
      }
    };

    // شروع فوری
    startAutoPlay();

    // تنظیم پخش مجدد پس از اتمام
    const handleEnded = () => {
      audio.currentTime = 0;
      if (isPlaying) {
        audio.play();
      }
    };

    // تلاش برای unmute با اولین تعامل کاربر
    const handleFirstInteraction = async () => {
      if (audio.muted && isPlaying) {
        audio.muted = false;
        setIsMuted(false);
        setShowMusicHint(false);
      } else if (!isPlaying) {
        try {
          audio.muted = false;
          await audio.play();
          setIsPlaying(true);
          setIsMuted(false);
          setShowMusicHint(false);
        } catch (error) {
          console.log('Could not start audio on interaction:', error);
        }
      }
      
      // حذف event listener پس از اولین تعامل
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };

    // اضافه کردن event listener برای اولین تعامل
    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('keydown', handleFirstInteraction);
    document.addEventListener('touchstart', handleFirstInteraction);

    audio.addEventListener('ended', handleEnded);

    // مخفی کردن راهنما پس از 8 ثانیه
    const hideHintTimeout = setTimeout(() => {
      setShowMusicHint(false);
    }, 8000);

    return () => {
      clearTimeout(hideHintTimeout);
      audio.removeEventListener('ended', handleEnded);
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, []);

  // تنظیم حجم صدا
  useEffect(() => {
    const audio = audioRef.current;
    if (audio && !isMuted) {
      audio.volume = volume;
    }
  }, [volume, isMuted]);

  const toggleMenu = () => {
    console.log('Toggle menu clicked, current state:', isOpen);
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    console.log('Close menu');
    setIsOpen(false);
  };

  const handleHomeClick = () => {
    console.log('Home clicked');
    window.location.href = '/';
    closeMenu();
  };

  const handleGalleryClick = () => {
    console.log('Gallery clicked');
    window.location.href = '/gallery';
    closeMenu();
  };

  const handleBlackboardClick = () => {
    window.location.href = '/blackboard';
    closeMenu();
  };

  const handleArenaClick = () => {
    window.location.href = '/arena';
    closeMenu();
  };

  const handleCanvasClick = () => {
    window.location.href = '/canvas';
    closeMenu();
  };

  const handleGuideClick = () => {
    window.location.href = '/guide';
    closeMenu();
  };

  const handleCafeClick = () => {
    window.location.href = '/cafe';
    closeMenu();
  };

  const handleMirrorClick = () => {
    window.location.href = '/mirror';
    closeMenu();
  };

  const handleFinalClick = () => {
    window.location.href = '/final';
    closeMenu();
  };

  // کامپوننت آیکون SVG
  const SVGIcon = ({ size = 16 }: { size?: number }) => (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 375 375" 
      fill="currentColor"
      style={{ flexShrink: 0 }}
    >
      <circle cx="187.5" cy="187.5" r="150" fill="currentColor" opacity="0.8"/>
      <path d="M150 120 L225 187.5 L150 255 Z" fill="white"/>
    </svg>
  );

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    setShowMusicHint(false); // مخفی کردن راهنما پس از اولین کلیک

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        await audio.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error('Error toggling audio:', error);
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    setShowMusicHint(false); // مخفی کردن راهنما

    if (isMuted || audio.muted) {
      audio.muted = false;
      audio.volume = volume;
      setIsMuted(false);
    } else {
      audio.muted = true;
      setIsMuted(true);
    }
  };

  return (
    <div ref={containerRef} style={{ position: 'fixed', bottom: '24px', left: '24px', zIndex: 9999 }}>
      {/* فایل صوتی */}
      <audio
        ref={audioRef}
        preload="auto"
        loop
        autoPlay
        muted
      >
        <source src="/music/Shajarian.mp3" type="audio/mpeg" />
        مرورگر شما از پخش صوت پشتیبانی نمی‌کند.
      </audio>

      {/* Backdrop */}
      {isOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            backdropFilter: 'blur(4px)',
            zIndex: 9998
          }}
          onClick={closeMenu}
        />
      )}

      {/* Menu Items */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          bottom: '70px',
          left: '0',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          zIndex: 9999,
          maxHeight: '70vh',
          overflowY: 'auto'
        }}>
          {/* Music Control Button */}
          <button
            onClick={togglePlay}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(8px)',
              padding: '8px 16px 8px 12px',
              borderRadius: '25px',
              border: '1px solid rgba(0, 0, 0, 0.1)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontSize: '13px',
              fontWeight: '500',
              color: '#374151',
              minWidth: 'fit-content',
              whiteSpace: 'nowrap'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
            }}
          >
            <div style={{
              width: '28px',
              height: '28px',
              background: 'linear-gradient(135deg, #8b5cf6, #a855f7)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
              position: 'relative'
            }}>
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
              {isPlaying && (
                <div style={{
                  position: 'absolute',
                  top: '-2px',
                  right: '-2px',
                  width: '6px',
                  height: '6px',
                  backgroundColor: '#10b981',
                  borderRadius: '50%',
                  animation: 'pulse 2s infinite'
                }} />
              )}
            </div>
            <span>{isPlaying ? 'توقف موسیقی' : 'پخش موسیقی'}</span>
          </button>

          {/* سکانس آخر */}
          <button
            onClick={handleFinalClick}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(8px)',
              padding: '8px 16px 8px 12px',
              borderRadius: '25px',
              border: '1px solid rgba(0, 0, 0, 0.1)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontSize: '13px',
              fontWeight: '500',
              color: '#374151',
              minWidth: 'fit-content',
              whiteSpace: 'nowrap'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
            }}
          >
            <SVGIcon size={28} />
            <span>سکانس آخر</span>
          </button>

          {/* آینه دیگران */}
          <button
            onClick={handleMirrorClick}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(8px)',
              padding: '8px 16px 8px 12px',
              borderRadius: '25px',
              border: '1px solid rgba(0, 0, 0, 0.1)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontSize: '13px',
              fontWeight: '500',
              color: '#374151',
              minWidth: 'fit-content',
              whiteSpace: 'nowrap'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
            }}
          >
            <SVGIcon size={28} />
            <span>آینه دیگران</span>
          </button>

          {/* دانای راه بلد */}
          <button
            onClick={handleGuideClick}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(8px)',
              padding: '8px 16px 8px 12px',
              borderRadius: '25px',
              border: '1px solid rgba(0, 0, 0, 0.1)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontSize: '13px',
              fontWeight: '500',
              color: '#374151',
              minWidth: 'fit-content',
              whiteSpace: 'nowrap'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
            }}
          >
            <SVGIcon size={28} />
            <span>دانای راه بلد</span>
          </button>

          {/* کافه نادری */}
          <button
            onClick={handleCafeClick}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(8px)',
              padding: '8px 16px 8px 12px',
              borderRadius: '25px',
              border: '1px solid rgba(0, 0, 0, 0.1)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontSize: '13px',
              fontWeight: '500',
              color: '#374151',
              minWidth: 'fit-content',
              whiteSpace: 'nowrap'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
            }}
          >
            <SVGIcon size={28} />
            <span>کافه نادری</span>
          </button>

          {/* بوم رنگ خیال */}
          <button
            onClick={handleCanvasClick}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(8px)',
              padding: '8px 16px 8px 12px',
              borderRadius: '25px',
              border: '1px solid rgba(0, 0, 0, 0.1)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontSize: '13px',
              fontWeight: '500',
              color: '#374151',
              minWidth: 'fit-content',
              whiteSpace: 'nowrap'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
            }}
          >
            <SVGIcon size={28} />
            <span>بوم رنگ خیال</span>
          </button>

          {/* گوی و میدان */}
          <button
            onClick={handleArenaClick}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(8px)',
              padding: '8px 16px 8px 12px',
              borderRadius: '25px',
              border: '1px solid rgba(0, 0, 0, 0.1)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontSize: '13px',
              fontWeight: '500',
              color: '#374151',
              minWidth: 'fit-content',
              whiteSpace: 'nowrap'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
            }}
          >
            <SVGIcon size={28} />
            <span>گوی و میدان</span>
          </button>

          {/* تخته سیاه */}
          <button
            onClick={handleBlackboardClick}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(8px)',
              padding: '8px 16px 8px 12px',
              borderRadius: '25px',
              border: '1px solid rgba(0, 0, 0, 0.1)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontSize: '13px',
              fontWeight: '500',
              color: '#374151',
              minWidth: 'fit-content',
              whiteSpace: 'nowrap'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
            }}
          >
            <SVGIcon size={28} />
            <span>تخته سیاه</span>
          </button>

          {/* گالری رسانه */}
          <button
            onClick={handleGalleryClick}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(8px)',
              padding: '8px 16px 8px 12px',
              borderRadius: '25px',
              border: '1px solid rgba(0, 0, 0, 0.1)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontSize: '13px',
              fontWeight: '500',
              color: '#374151',
              minWidth: 'fit-content',
              whiteSpace: 'nowrap'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
            }}
          >
            <SVGIcon size={28} />
            <span>گالری رسانه</span>
          </button>

          {/* خانه */}
          <button
            onClick={handleHomeClick}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(8px)',
              padding: '8px 16px 8px 12px',
              borderRadius: '25px',
              border: '1px solid rgba(0, 0, 0, 0.1)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontSize: '13px',
              fontWeight: '500',
              color: '#374151',
              minWidth: 'fit-content',
              whiteSpace: 'nowrap'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
            }}
          >
            <SVGIcon size={28} />
            <span>خانه</span>
          </button>
        </div>
      )}

      {/* Main Floating Button */}
      <button
        onClick={toggleMenu}
        style={{
          width: '56px',
          height: '56px',
          background: 'linear-gradient(135deg, #00a693, #eeaa22)',
          borderRadius: '50%',
          border: '2px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          position: 'relative',
          zIndex: 10000,
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
        }}
        onMouseEnter={(e) => {
          if (!isOpen) {
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.3)';
          }
        }}
        onMouseLeave={(e) => {
          if (!isOpen) {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
          }
        }}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Pulse Animation Ring */}
      {!isOpen && (
        <div 
          className="floating-nav-ping"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, #00a693, #eeaa22)',
            borderRadius: '50%',
            opacity: 0.2,
            pointerEvents: 'none'
          }} 
        />
      )}

      {/* Music Hint */}
      {showMusicHint && !isOpen && (
        <div style={{
          position: 'absolute',
          bottom: '70px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: isPlaying ? '#10b981' : '#8b5cf6',
          color: 'white',
          padding: '8px 16px',
          borderRadius: '20px',
          fontSize: '12px',
          fontWeight: '500',
          whiteSpace: 'nowrap',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
          animation: 'bounce 2s infinite',
          zIndex: 10001
        }}>
          {isPlaying ? '🎵 موسیقی در حال پخش' : '🎵 برای پخش موسیقی کلیک کنید'}
          <div style={{
            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 0,
            height: 0,
            borderLeft: '6px solid transparent',
            borderRight: '6px solid transparent',
            borderTop: `6px solid ${isPlaying ? '#10b981' : '#8b5cf6'}`
          }} />
        </div>
      )}

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
          }
        }
        
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          40%, 43% {
            transform: translateX(-50%) translateY(-10px);
          }
          70% {
            transform: translateX(-50%) translateY(-5px);
          }
          90% {
            transform: translateX(-50%) translateY(-2px);
          }
        }
        
        .floating-nav-ping {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}