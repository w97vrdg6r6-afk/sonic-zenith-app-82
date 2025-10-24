import { Play, Pause, SkipBack, SkipForward, Volume2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { Song } from "@/data/mockData";

interface MusicPlayerProps {
  currentSong: Song | null;
}

const MusicPlayer = ({ currentSong }: MusicPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([75]);
  const [progress, setProgress] = useState([30]);
  const [isLiked, setIsLiked] = useState(false);

  if (!currentSong) return null;

  return (
    <div className="fixed bottom-[72px] md:bottom-0 left-0 right-0 bg-card/95 backdrop-blur-glass border-t border-border p-3 md:p-4 animate-fade-in z-40">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4">
        {/* Current Song Info */}
        <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0 w-full md:w-auto">
          <img
            src={currentSong.coverUrl}
            alt={currentSong.album}
            className="w-12 h-12 md:w-14 md:h-14 rounded-md object-cover"
          />
          <div className="min-w-0 flex-1">
            <p className="font-semibold truncate text-sm md:text-base">{currentSong.title}</p>
            <p className="text-xs md:text-sm text-muted-foreground truncate">{currentSong.artist}</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="shrink-0"
            onClick={() => setIsLiked(!isLiked)}
          >
            <Heart className={`w-4 h-4 md:w-5 md:h-5 ${isLiked ? "fill-primary text-primary" : ""}`} />
          </Button>
        </div>

        {/* Player Controls */}
        <div className="flex flex-col items-center gap-2 w-full md:flex-1 md:max-w-2xl">
          <div className="flex items-center gap-2 md:gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8 md:h-10 md:w-10">
              <SkipBack className="w-4 h-4 md:w-5 md:h-5" />
            </Button>
            <Button
              size="icon"
              className="w-9 h-9 md:w-10 md:h-10 bg-primary hover:bg-primary/90 shadow-glow"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 md:w-5 md:h-5 fill-current" />
              ) : (
                <Play className="w-4 h-4 md:w-5 md:h-5 fill-current" />
              )}
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 md:h-10 md:w-10">
              <SkipForward className="w-4 h-4 md:w-5 md:h-5" />
            </Button>
          </div>
          
          <div className="hidden md:flex items-center gap-2 w-full">
            <span className="text-xs text-muted-foreground w-10 text-right">
              1:23
            </span>
            <Slider
              value={progress}
              onValueChange={setProgress}
              max={100}
              step={1}
              className="flex-1"
            />
            <span className="text-xs text-muted-foreground w-10">
              {currentSong.duration}
            </span>
          </div>
        </div>

        {/* Volume Control - Desktop Only */}
        <div className="hidden md:flex items-center gap-2 flex-1 justify-end">
          <Volume2 className="w-5 h-5" />
          <Slider
            value={volume}
            onValueChange={setVolume}
            max={100}
            step={1}
            className="w-24"
          />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
