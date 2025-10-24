import PlaylistCard from "@/components/PlaylistCard";
import { playlists } from "@/data/mockData";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const Playlists = () => {
  return (
    <div className="space-y-6 md:space-y-8 pb-[180px] md:pb-32">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-2xl md:text-4xl font-bold">Your Playlists</h1>
        <Button className="bg-primary hover:bg-primary/90 shrink-0">
          <Plus className="w-4 h-4 md:w-5 md:h-5 md:mr-2" />
          <span className="hidden md:inline">Create Playlist</span>
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 md:gap-4">
        {playlists.map((playlist) => (
          <PlaylistCard key={playlist.id} playlist={playlist} />
        ))}
      </div>
    </div>
  );
};

export default Playlists;
