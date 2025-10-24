import PlaylistCard from "@/components/PlaylistCard";
import { playlists } from "@/data/mockData";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const Playlists = () => {
  return (
    <div className="space-y-8 pb-32">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">Your Playlists</h1>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="w-5 h-5 mr-2" />
          Create Playlist
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {playlists.map((playlist) => (
          <PlaylistCard key={playlist.id} playlist={playlist} />
        ))}
      </div>
    </div>
  );
};

export default Playlists;
