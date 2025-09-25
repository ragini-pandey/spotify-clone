# Spotify Clone 🎵

A web client clone of Spotify built with **Next.js**, **Tailwind CSS**, and the **Spotify Web API**.
Browse your library, search tracks, control playback on your active Spotify device, and save your favorites — all in a sleek, responsive interface.

📍 Live demo: [View the Live Demo](https://spotify-clone-bice-sigma-58.vercel.app)

------------------------------------------------------------

## 🧭 Table of Contents

- Features
- Tech Stack
- Project Structure
- Getting Started
  - Prerequisites
  - Environment Variables
  - Installation & Running
- Spotify API Scopes
- Key Modules & Architecture
- Scripts
- Roadmap / Future Improvements
- Contributing
- License
- Acknowledgements

------------------------------------------------------------

## 🔍 Features

- User authentication via Spotify OAuth
- Show “Now Playing” track (album art, artist, progress)
- Playback controls: play / pause / skip / seek (requires Spotify Premium)
- Device control via Spotify Connect
- Search (tracks, artists, albums, playlists)
- View your Liked Songs & Playlists
- Responsive UI, optimized for desktop and mobile
- State management via Recoil
- Token refresh & persistent session

Note: Some playback & device APIs require a Spotify Premium account.

------------------------------------------------------------

## 🧱 Tech Stack

- Next.js
- React (with hooks)
- Tailwind CSS
- Recoil (global state)
- spotify-web-api-node (Spotify SDK)
- NextAuth.js for OAuth
- Deployment: Vercel

------------------------------------------------------------

## 📁 Project Structure

.
├── atoms/              # Recoil state atoms (e.g. currentTrackId, isPlaying)
├── components/         # UI components (Player, Sidebar, SongRow, etc.)
├── hooks/              # Custom React hooks (useSpotify, useSongInfo, etc.)
├── lib/                # API helpers, Spotify API client wrapper
├── pages/              # Next.js pages + API routes (auth, playback)
├── public/             # Static assets & images
├── styles/             # Global styles, Tailwind base
├── next.config.js
├── tailwind.config.js
└── package.json

------------------------------------------------------------

## 🚀 Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- Spotify Developer account & app registered
- Spotify Premium account (for playback control)

### Environment Variables

Create `.env` in project root:

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_random_secret

SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret

JWT_SECRET=another_random_string

Add Redirect URI in Spotify dashboard:
http://localhost:3000/api/auth/callback/spotify
https://your-domain.com/api/auth/callback/spotify

### Installation & Running

npm install
npm run dev
# Open http://localhost:3000

npm run build && npm start   # production

------------------------------------------------------------

## 🔐 Spotify API Scopes

user-read-email
user-read-private
user-read-playback-state
user-modify-playback-state
user-read-currently-playing
user-library-read
playlist-read-private
user-read-recently-played

------------------------------------------------------------

## 🧩 Key Modules & Architecture

- hooks/useSpotify — Initializes Spotify API client
- hooks/useSongInfo — Fetches detailed track info
- components/Player — Playback UI, control buttons, progress bar
- components/Sidebar — Navigation + playlists
- components/SongRow — Track row UI
- Recoil atoms: currentTrackIdState, isPlayingState
- Auth & token refresh handled with NextAuth.js

------------------------------------------------------------

## 🧪 Scripts

dev     – start dev server
build   – build for production
start   – start production server
lint    – run ESLint

------------------------------------------------------------

## 🛠 Roadmap / Future Improvements

- Volume control & mute
- Enhanced seek UI
- Better error & token handling
- Playlist CRUD support
- Offline caching
- E2E tests (Cypress/Playwright)
- Improved animations
