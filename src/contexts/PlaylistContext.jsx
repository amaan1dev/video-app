import React, { createContext, useState } from 'react';
import { categories } from '../Data/categories';

export const PlaylistContext = createContext();

const PlaylistContextProvider = ({ children }) => {
  const [playlists, setPlaylists] = useState([]);

  const createPlaylist = (playlistName) => {
    setPlaylists((prevPlaylists) => [
      ...prevPlaylists,
      { id: prevPlaylists.length + 1, name: playlistName, videos: [] },
    ]);
  };

  const deletePlaylist = (playlistId) => {
    setPlaylists((prevPlaylists) =>
      prevPlaylists.filter((playlist) => playlist.id !== playlistId)
    );
  };

  const addVideoToPlaylist = (playlistId, video) => {
    setPlaylists((prevPlaylists) =>
      prevPlaylists.map((playlist) =>
        playlist.id === playlistId
          ? { ...playlist, videos: [...playlist.videos, video] }
          : playlist
      )
    );
  };

  const removeVideoFromPlaylist = (playlistId, videoId) => {
    setPlaylists((prevPlaylists) =>
      prevPlaylists.map((playlist) =>
        playlist.id === playlistId
          ? {
              ...playlist,
              videos: playlist.videos.filter((video) => video._id !== videoId),
            }
          : playlist
      )
    );
  };

  return (
    <PlaylistContext.Provider
      value={{
        playlists,
        createPlaylist,
        deletePlaylist,
        addVideoToPlaylist,
        removeVideoFromPlaylist,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};

export default PlaylistContextProvider;
