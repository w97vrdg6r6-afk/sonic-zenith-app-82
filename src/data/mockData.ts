import album1 from "@/assets/album1.jpg";
import album2 from "@/assets/album2.jpg";
import album3 from "@/assets/album3.jpg";
import album4 from "@/assets/album4.jpg";
import album5 from "@/assets/album5.jpg";
import album6 from "@/assets/album6.jpg";

export interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  coverUrl: string;
}

export interface Playlist {
  id: string;
  name: string;
  description: string;
  coverUrl: string;
  songs: Song[];
}

export const songs: Song[] = [
  {
    id: "1",
    title: "Midnight Dreams",
    artist: "Luna Wave",
    album: "Neon Nights",
    duration: "3:45",
    coverUrl: album1,
  },
  {
    id: "2",
    title: "Electric Pulse",
    artist: "Cyber Rhythm",
    album: "Digital Soul",
    duration: "4:12",
    coverUrl: album2,
  },
  {
    id: "3",
    title: "Summer Breeze",
    artist: "Coastal Vibes",
    album: "Sunset Sessions",
    duration: "3:28",
    coverUrl: album3,
  },
  {
    id: "4",
    title: "Dark Matter",
    artist: "Void Echo",
    album: "Abyss",
    duration: "5:03",
    coverUrl: album4,
  },
  {
    id: "5",
    title: "Forest Dreams",
    artist: "Nature Sound",
    album: "Earth Tones",
    duration: "4:36",
    coverUrl: album5,
  },
  {
    id: "6",
    title: "Golden Hour",
    artist: "Light Waves",
    album: "Radiance",
    duration: "3:52",
    coverUrl: album6,
  },
  {
    id: "7",
    title: "Cosmic Dance",
    artist: "Luna Wave",
    album: "Neon Nights",
    duration: "4:20",
    coverUrl: album1,
  },
  {
    id: "8",
    title: "Digital Dreams",
    artist: "Cyber Rhythm",
    album: "Digital Soul",
    duration: "3:55",
    coverUrl: album2,
  },
  {
    id: "9",
    title: "Ocean Waves",
    artist: "Coastal Vibes",
    album: "Sunset Sessions",
    duration: "4:44",
    coverUrl: album3,
  },
  {
    id: "10",
    title: "Night Shadow",
    artist: "Void Echo",
    album: "Abyss",
    duration: "3:33",
    coverUrl: album4,
  },
  {
    id: "11",
    title: "Mountain Echo",
    artist: "Nature Sound",
    album: "Earth Tones",
    duration: "5:12",
    coverUrl: album5,
  },
  {
    id: "12",
    title: "Sunrise Melody",
    artist: "Light Waves",
    album: "Radiance",
    duration: "4:05",
    coverUrl: album6,
  },
];

export const playlists: Playlist[] = [
  {
    id: "1",
    name: "Chill Vibes",
    description: "Relax and unwind with these smooth tracks",
    coverUrl: album1,
    songs: [songs[0], songs[2], songs[5], songs[8]],
  },
  {
    id: "2",
    name: "Electronic Dreams",
    description: "The best electronic beats",
    coverUrl: album2,
    songs: [songs[1], songs[7], songs[3]],
  },
  {
    id: "3",
    name: "Summer Mix",
    description: "Perfect soundtrack for sunny days",
    coverUrl: album3,
    songs: [songs[2], songs[5], songs[8], songs[11]],
  },
  {
    id: "4",
    name: "Dark Atmosphere",
    description: "Deep and mysterious sounds",
    coverUrl: album4,
    songs: [songs[3], songs[9]],
  },
  {
    id: "5",
    name: "Nature Sounds",
    description: "Connect with nature through music",
    coverUrl: album5,
    songs: [songs[4], songs[10]],
  },
  {
    id: "6",
    name: "Morning Motivation",
    description: "Start your day right",
    coverUrl: album6,
    songs: [songs[5], songs[11], songs[6]],
  },
];
