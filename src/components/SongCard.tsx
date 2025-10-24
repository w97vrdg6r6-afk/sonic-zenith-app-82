import { Play } from "lucide-react";
import { Song } from "@/data/mockData";
import { Button } from "@/components/ui/button";

interface SongCardProps {
  song: Song;
  onPlay?: (song: Song) => void;
}

const SongCard = ({ song, onPlay }: SongCardProps) => {
  return (
    <div className="group relative bg-card/50 backdrop-blur-glass border border-glass-border rounded-lg p-3 md:p-4 hover:bg-card/80 transition-all duration-300 hover:shadow-card cursor-pointer animate-fade-in">
      <div className="relative mb-4 aspect-square overflow-hidden rounded-md">
        <img
          src={song.coverUrl}
          alt={song.album}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-3">
          <Button
            size="icon"
            className="bg-primary hover:bg-primary/90 shadow-glow"
            onClick={() => onPlay?.(song)}
          >
            <Play className="w-5 h-5 fill-current" />
          </Button>
        </div>
      </div>
      
      <div className="space-y-1">
        <h3 className="font-semibold truncate text-sm md:text-base">{song.title}</h3>
        <p className="text-xs md:text-sm text-muted-foreground truncate">{song.artist}</p>
        <p className="text-xs text-muted-foreground">{song.duration}</p>
      </div>
    </div>
  );
};

export default SongCard;
