import React from 'react';

const VideoItem = ({video}) => {
	return (
		<div>
			{(video.snippet.title)}
            <img src={video.snippet.thumbnails.medium.url} />
		</div>
	)
};

export default VideoItem;
