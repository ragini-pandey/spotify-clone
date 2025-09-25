Spotify Clone (Next.js)

A clean, fast Spotify web client clone built with Next.js and Tailwind CSS, using the Spotify Web API for real data. It supports browsing your library, searching tracks, controlling playback on your active Spotify device, and saving favorites — all wrapped in a responsive UI.

Live demo: https://spotify-clone-bice-sigma-58.vercel.app

------------------------------------------------------------

✨ Features
- OAuth with Spotify (login via your Spotify account)
- Now Playing: shows current track, artist, album art, progress
- Playback controls: play/pause/next/previous/seek (requires Spotify Premium)
- Device aware: controls your active Spotify device via Connect
- Search: tracks, artists, albums, playlists
- Your Library: liked songs & personal playlists
- Queue & Recently Played (where available via API scopes)
- Responsive UI with sidebar layout and keyboard-friendly controls

Note: Some playback APIs require Spotify Premium. Free accounts can still browse/search.

------------------------------------------------------------

🧰 Tech Stack
- Next.js
- React + hooks
- Tailwind CSS
- Recoil for global state (e.g., current track id, play state)
- Spotify Web API (spotify-web-api-node)
- NextAuth.js for OAuth (Spotify Provider)
- Deployment: Vercel

------------------------------------------------------------

📦 Project Structure
.
├── atoms/          # Recoil atoms (e.g., currentTrackId, isPlaying)
├── components/     # Reusable UI components (Player, Sidebar, SongRow, etc.)
├── hooks/          # Custom hooks (useSpotify, useSongInfo, etc.)
├── lib/            # API/SDK helpers and config
├── pages/          # Next.js pages and NextAuth route handlers
├── public/         # Static assets
├── styles/         # Global styles, Tailwind base
├── next.config.js
├── tailwind.config.js
└── package.json

------------------------------------------------------------

🚀 Getting Started
1) Create a Spotify App
- Go to the Spotify Developer Dashboard
- Create an app and copy Client ID and Client Secret
- Add authorized redirect URI(s):
  - http://localhost:3000/api/auth/callback/spotify
  - And your production domain: https://<your-domain>/api/auth/callback/spotify

2) Environment Variables
Create a .env in the project root:

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_strong_random_string

SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret

JWT_SECRET=another_random_string


3) Install & Run
# Install deps
npm install
# or
yarn

# Dev
npm run dev
# Open http://localhost:3000

# Production
npm run build && npm start

------------------------------------------------------------

🔐 Scopes
For full functionality, request these Spotify scopes in your auth config:
- user-read-email
- user-read-private
- user-read-playback-state
- user-modify-playback-state
- user-read-currently-playing
- user-library-read
- playlist-read-private
- user-read-recently-played

You can trim scopes if you don’t need certain features.

------------------------------------------------------------

🧩 Key Components & Hooks
- components/Player: playback controls, progress bar, device awareness
- components/Sidebar: navigation + user playlists
- components/SongRow: individual track rows with actions
- hooks/useSpotify: initializes a Spotify API client bound to the current token
- hooks/useSongInfo: fetches full track info for the selected track id
- atoms/currentTrackIdState: selected track id for global access
- atoms/isPlayingState: global play/pause state

------------------------------------------------------------

🧪 Scripts
- dev – start local dev server
- build – production build
- start – start production server
- lint – run ESLint

------------------------------------------------------------

🖼️ Screenshots

------------------------------------------------------------

🧱 Architecture Notes
- Stateless UI components + Recoil atoms/selectors for cross-cutting state
- Hooks wrap raw API calls to keep UI clean
- Client token management via NextAuth; refresh token flow for longevity
