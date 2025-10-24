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
    <div className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-glass border-t border-border p-4 animate-fade-in">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between gap-4">
        {/* Current Song Info */}
        <div className="flex items-center gap-4 flex-1 min-w-0">
          <img
            src={currentSong.coverUrl}
            alt={currentSong.album}
            className="w-14 h-14 rounded-md object-cover"
          />
          <div className="min-w-0 flex-1">
            <p className="font-semibold truncate">{currentSong.title}</p>
            <p className="text-sm text-muted-foreground truncate">{currentSong.artist}</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsLiked(!isLiked)}
          >
            <Heart className={`w-5 h-5 ${isLiked ? "fill-primary text-primary" : ""}`} />
          </Button>
        </div>

        {/* Player Controls */}
        <div className="flex flex-col items-center gap-2 flex-1 max-w-2xl">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <SkipBack className="w-5 h-5" />
            </Button>
            <Button
              size="icon"
              className="w-10 h-10 bg-primary hover:bg-primary/90 shadow-glow"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 fill-current" />
              ) : (
                <Play className="w-5 h-5 fill-current" />
              )}
            </Button>
            <Button variant="ghost" size="icon">
              <SkipForward className="w-5 h-5" />
            </Button>
          </div>
          
          <div className="flex items-center gap-2 w-full">
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

        {/* Volume Control */}
        <div className="flex items-center gap-2 flex-1 justify-end">
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
