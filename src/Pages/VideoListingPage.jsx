import React, { useContext } from 'react';
import VideoList from '../components/VideoList';
import { VideoContext } from '../contexts/VideoContext';

const VideoListingPage = ({ category }) => {
  const { videos, toggleWatchLater } = useContext(VideoContext);

  return (
    <div className="video-listing-page">
      <h2>{category}</h2>
      <VideoList videos={videos} onWatchLaterToggle={toggleWatchLater} />
    </div>
  );
};

export default VideoListingPage;