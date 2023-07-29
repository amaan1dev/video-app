import React from 'react';

const WatchLaterButton = ({ isWatchLater, onToggle }) => {
  return (
    <button onClick={onToggle}>
      {isWatchLater ? 'Remove from Watch Later' : 'Add to Watch Later'}
    </button>
  );
};

export default WatchLaterButton;