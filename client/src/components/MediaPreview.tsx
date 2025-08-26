import { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, X } from 'lucide-react';

interface MediaPreviewProps {
  src: string;
  type: 'image' | 'video';
  title?: string;
  poster?: string;
  className?: string;
  showControls?: boolean;
}

export default function MediaPreview({
  src,
  type,
  title,
  poster,
  className = "",
  showControls = true
}: MediaPreviewProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showFullscreen, setShowFullscreen] = useState(false);

  const handlePlayPause = (video: HTMLVideoElement) => {
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleMuteToggle = (video: HTMLVideoElement) => {
    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  if (type === 'image') {
    return (
      <div className={`relative group ${className}`}>
        <img
          src={src}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
          loading="lazy"
        />
        
        {showControls && (
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-lg">
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={() => setShowFullscreen(true)}
                className="p-2 bg-black/50 text-white rounded-lg hover:bg-black/70 transition-colors duration-200"
              >
                <Maximize className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Fullscreen Modal */}
        {showFullscreen && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-full max-h-full">
              <button
                onClick={() => setShowFullscreen(false)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200"
              >
                <X className="w-8 h-8" />
              </button>
              <img
                src={src}
                alt={title}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`relative group ${className}`}>
      <video
        src={src}
        poster={poster}
        className="w-full h-full object-cover rounded-lg"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onLoadedMetadata={(e) => {
          const video = e.target as HTMLVideoElement;
          setIsMuted(video.muted);
        }}
      >
        مرورگر شما از پخش ویدیو پشتیبانی نمی‌کند.
      </video>

      {showControls && (
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-lg">
          {/* Play/Pause Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={(e) => {
                const video = e.currentTarget.parentElement?.parentElement?.querySelector('video') as HTMLVideoElement;
                if (video) handlePlayPause(video);
              }}
              className="p-4 bg-black/50 text-white rounded-full hover:bg-black/70 transition-all duration-200 opacity-0 group-hover:opacity-100"
            >
              {isPlaying ? (
                <Pause className="w-8 h-8" />
              ) : (
                <Play className="w-8 h-8 mr-1" />
              )}
            </button>
          </div>

          {/* Controls */}
          <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center gap-2">
              <button
                onClick={(e) => {
                  const video = e.currentTarget.parentElement?.parentElement?.parentElement?.querySelector('video') as HTMLVideoElement;
                  if (video) handleMuteToggle(video);
                }}
                className="p-2 bg-black/50 text-white rounded-lg hover:bg-black/70 transition-colors duration-200"
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4" />
                ) : (
                  <Volume2 className="w-4 h-4" />
                )}
              </button>
            </div>

            <button
              onClick={() => setShowFullscreen(true)}
              className="p-2 bg-black/50 text-white rounded-lg hover:bg-black/70 transition-colors duration-200"
            >
              <Maximize className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Fullscreen Modal */}
      {showFullscreen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-full max-h-full">
            <button
              onClick={() => setShowFullscreen(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200"
            >
              <X className="w-8 h-8" />
            </button>
            <video
              src={src}
              poster={poster}
              controls
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              autoPlay={isPlaying}
            >
              مرورگر شما از پخش ویدیو پشتیبانی نمی‌کند.
            </video>
          </div>
        </div>
      )}
    </div>
  );
}