import React from 'react';
import { useParams } from 'react-router-dom';

const SingleVideoPage = ({ videos }) => {
  const { videoId } = useParams();

  // Find the video object with the matching videoId
  const video = videos.find((video) => video._id === videoId);

  if (!video) {
    return <div>Video not found</div>;
  }

  return (
    <div>
      <h2>Single Video</h2>
      <div className="video-card">
        <img src={video.thumbnail} alt="vid" className="video-thumbnail" />
        <div className="video-details">
          <img src={video.thumbnail} alt="avatar" className="video-avatar" />
          <div className="video-text">
            <h3>{video.title}</h3>
            <span>{video.views} views | {video.creator}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleVideoPage;
