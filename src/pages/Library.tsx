import { useState } from "react";
import SongCard from "@/components/SongCard";
import { songs, Song } from "@/data/mockData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface LibraryProps {
  onSongPlay: (song: Song) => void;
}

const Library = ({ onSongPlay }: LibraryProps) => {
  return (
    <div className="space-y-8 pb-32">
      <h1 className="text-4xl font-bold">Your Library</h1>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="bg-secondary">
          <TabsTrigger value="all">All Songs</TabsTrigger>
          <TabsTrigger value="recent">Recently Added</TabsTrigger>
          <TabsTrigger value="liked">Liked Songs</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {songs.map((song) => (
              <SongCard key={song.id} song={song} onPlay={onSongPlay} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="recent" className="mt-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {songs.slice(0, 6).map((song) => (
              <SongCard key={song.id} song={song} onPlay={onSongPlay} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="liked" className="mt-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {songs.slice(3, 9).map((song) => (
              <SongCard key={song.id} song={song} onPlay={onSongPlay} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Library;
