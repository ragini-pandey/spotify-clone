import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { currentTrackIdState } from "../atoms/songAtom";
import useSpotify from "./useSpotify";

function useSongInfo() {
    const spotifyApi = useSpotify();
    const [currentIdtrack, setCurrentIdTrack] =
        useRecoilState(currentTrackIdState);
    const [songInfo, setSongInfo] = useState(null);
    useEffect(() => {
        const fetchSongInfo = async () => {
            if (currentIdtrack) {
                const trackInfo = await fetch(
                    `https://api.spotify.com/v1/tracks/${currentIdtrack}`,
                    {
                        headers: {
                            Authorization: `Bearer ${spotifyApi.getAccessToken()}`,
                        },
                    }
                ).then((res) => res.json());
                setSongInfo(trackInfo);
            }
        };
        fetchSongInfo();
    }, [currentIdtrack, spotifyApi]);
    return songInfo;
}

export default useSongInfo;
