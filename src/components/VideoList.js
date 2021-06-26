import React from "react";
import VideoItem from "./VideoItem";

// class VideoList extends React.Component {
//   render() {
//     return (
//       <div>
//         {this.props.videos.map((video) => {
//           return <h1>{video.snippet.title}</h1>;
//         })}
//         <h2>aaaa</h2>
//         <p>aaaaaaaaaa</p>
//       </div>
//     );
//   }
// }

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
