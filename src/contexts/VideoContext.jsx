import React, { createContext, useState } from 'react';
import { videos } from '../Data/videos';

export const VideoContext = createContext();

const VideoContextProvider = ({ children }) => {
  const [videoData, setVideoData] = useState(videos);

  const addToWatchLater = (videoId) => {
    setVideoData((prevVideoData) =>
      prevVideoData.map((video) =>
        video._id === videoId ? { ...video, isWatchLater: true } : video
      )
    );
  };

  const removeFromWatchLater = (videoId) => {
    setVideoData((prevVideoData) =>
      prevVideoData.map((video) =>
        video._id === videoId ? { ...video, isWatchLater: false } : video
      )
    );
  };

  const toggleWatchLater = (video) => {
    if (video.isWatchLater) {
      removeFromWatchLater(video._id);
    } else {
      addToWatchLater(video._id);
    }
  };

  return (
    <VideoContext.Provider
      value={{
        videos: videoData,
        addToWatchLater,
        removeFromWatchLater,
        toggleWatchLater,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};

export default VideoContextProvider;
