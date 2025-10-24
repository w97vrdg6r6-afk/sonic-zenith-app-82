import { useParams } from "react-router-dom";
import { playlists, Song } from "@/data/mockData";
import { Play, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PlaylistDetailProps {
  onSongPlay: (song: Song) => void;
}

const PlaylistDetail = ({ onSongPlay }: PlaylistDetailProps) => {
  const { id } = useParams();
  const playlist = playlists.find((p) => p.id === id);

  if (!playlist) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <p className="text-xl text-muted-foreground">Playlist not found</p>
      </div>
    );
  }

  return (
    <div className="space-y-8 pb-32">
      {/* Playlist Header */}
      <div className="flex flex-col md:flex-row gap-6 items-start md:items-end bg-gradient-to-b from-card/80 to-transparent p-8 rounded-xl">
        <img
          src={playlist.coverUrl}
          alt={playlist.name}
          className="w-48 h-48 rounded-lg shadow-card"
        />
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Playlist
          </p>
          <h1 className="text-5xl font-bold">{playlist.name}</h1>
          <p className="text-lg text-muted-foreground">{playlist.description}</p>
          <p className="text-sm text-muted-foreground">
            {playlist.songs.length} songs
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-glow">
          <Play className="w-5 h-5 mr-2 fill-current" />
          Play
        </Button>
        <Button variant="outline" size="icon">
          <Heart className="w-5 h-5" />
        </Button>
      </div>

      {/* Song List */}
      <div className="space-y-2">
        {playlist.songs.map((song, index) => (
          <div
            key={song.id}
            onClick={() => onSongPlay(song)}
            className="group flex items-center gap-4 p-3 rounded-lg hover:bg-card/50 cursor-pointer transition-colors"
          >
            <span className="text-muted-foreground w-8 text-center">{index + 1}</span>
            <img
              src={song.coverUrl}
              alt={song.album}
              className="w-12 h-12 rounded"
            />
            <div className="flex-1 min-w-0">
              <p className="font-medium truncate">{song.title}</p>
              <p className="text-sm text-muted-foreground truncate">{song.artist}</p>
            </div>
            <p className="text-sm text-muted-foreground">{song.album}</p>
            <p className="text-sm text-muted-foreground w-16 text-right">{song.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaylistDetail;
