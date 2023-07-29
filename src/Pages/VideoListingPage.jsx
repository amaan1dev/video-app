import React from 'react';
import { Link } from 'react-router-dom';
import './VideoListingPage.css';

const VideoListingPage = ({ videos, selectedCategory }) => {
  // Filter the videos based on the selected category
  const filteredVideos = selectedCategory
    ? videos.filter((video) => video.category === selectedCategory)
    : videos;

  return (
    <div>
      <h2>Videos</h2>
      <div className="video-list">
        {filteredVideos.map((video) => (
          <Link key={video._id} to={`/videos/${video._id}`} className="video-link">
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
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideoListingPage;
