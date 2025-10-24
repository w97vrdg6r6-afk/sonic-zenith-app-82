import { useState } from "react";
import SongCard from "@/components/SongCard";
import PlaylistCard from "@/components/PlaylistCard";
import { songs, playlists, Song } from "@/data/mockData";

interface HomeProps {
  onSongPlay: (song: Song) => void;
}

const Home = ({ onSongPlay }: HomeProps) => {
  return (
    <div className="space-y-8 pb-32">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-primary p-12 mb-8">
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-4">Welcome Back</h1>
          <p className="text-xl text-primary-foreground/90">
            Discover your next favorite song
          </p>
        </div>
      </section>

      {/* Featured Playlists */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Featured Playlists</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {playlists.slice(0, 6).map((playlist) => (
            <PlaylistCard key={playlist.id} playlist={playlist} />
          ))}
        </div>
      </section>

      {/* Popular Songs */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Popular Right Now</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {songs.slice(0, 6).map((song) => (
            <SongCard key={song.id} song={song} onPlay={onSongPlay} />
          ))}
        </div>
      </section>

      {/* Recently Played */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Recently Played</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {songs.slice(6, 12).map((song) => (
            <SongCard key={song.id} song={song} onPlay={onSongPlay} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
