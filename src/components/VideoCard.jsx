import React, { useContext } from 'react';
import { VideoContext } from '../contexts/VideoContext';
import WatchLaterButton from './WatchLaterButton';

const VideoCard = ({ video }) => {
  const { addToWatchLater, removeFromWatchLater } = useContext(VideoContext);

  const { title, author, views, isWatchLater } = video;

  const handleWatchLaterToggle = () => {
    if (isWatchLater) {
      removeFromWatchLater(video.id);
    } else {
      addToWatchLater(video);
    }
  };

  return (
    <div className="video-card">
      <h3>{title}</h3>
      <p>{author}</p>
      <p>Views: {views}</p>
      <WatchLaterButton
        isWatchLater={isWatchLater}
        onToggle={handleWatchLaterToggle}
      />
    </div>
  );
};

export default VideoCard;
