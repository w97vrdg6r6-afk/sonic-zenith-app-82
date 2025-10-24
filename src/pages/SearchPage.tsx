import { useState, useMemo } from "react";
import SearchBar from "@/components/SearchBar";
import SongCard from "@/components/SongCard";
import { songs, Song } from "@/data/mockData";

interface SearchPageProps {
  onSongPlay: (song: Song) => void;
}

const SearchPage = ({ onSongPlay }: SearchPageProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSongs = useMemo(() => {
    if (!searchQuery) return songs;
    
    const query = searchQuery.toLowerCase();
    return songs.filter(
      (song) =>
        song.title.toLowerCase().includes(query) ||
        song.artist.toLowerCase().includes(query) ||
        song.album.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <div className="space-y-8 pb-32">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold">Search</h1>
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
      </div>

      {searchQuery ? (
        <section>
          <h2 className="text-2xl font-bold mb-6">
            {filteredSongs.length > 0
              ? `Found ${filteredSongs.length} result${filteredSongs.length !== 1 ? 's' : ''}`
              : 'No results found'}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {filteredSongs.map((song) => (
              <SongCard key={song.id} song={song} onPlay={onSongPlay} />
            ))}
          </div>
        </section>
      ) : (
        <section>
          <h2 className="text-2xl font-bold mb-6">Browse All</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {songs.map((song) => (
              <SongCard key={song.id} song={song} onPlay={onSongPlay} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default SearchPage;
