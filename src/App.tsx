import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import Library from "./pages/Library";
import Playlists from "./pages/Playlists";
import PlaylistDetail from "./pages/PlaylistDetail";
import NotFound from "./pages/NotFound";
import Sidebar from "./components/Sidebar";
import MusicPlayer from "./components/MusicPlayer";
import { Song } from "./data/mockData";

const queryClient = new QueryClient();

const App = () => {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex min-h-screen w-full bg-background text-foreground">
            <Sidebar />
            <main className="flex-1 p-8 overflow-y-auto">
              <Routes>
                <Route path="/" element={<Home onSongPlay={setCurrentSong} />} />
                <Route path="/search" element={<SearchPage onSongPlay={setCurrentSong} />} />
                <Route path="/library" element={<Library onSongPlay={setCurrentSong} />} />
                <Route path="/playlists" element={<Playlists />} />
                <Route path="/playlist/:id" element={<PlaylistDetail onSongPlay={setCurrentSong} />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
          <MusicPlayer currentSong={currentSong} />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
