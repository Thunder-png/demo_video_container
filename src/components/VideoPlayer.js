import React from "react";
import ReactPlayer from "react-player";

function VideoPlayer({ url }) { // `url` prop'u ekledik
    return (
        <div className="video-container">
            <ReactPlayer
                url={url} // ReactPlayer'a dinamik URL'yi geçiyoruz
                playing={true}
                loop={true}
                width="100%"
                height="100%"
            />
        </div>
    );
}

export default VideoPlayer;
