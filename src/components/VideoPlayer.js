import React, { forwardRef } from "react";
import ReactPlayer from "react-player";

function VideoPlayer({ url }, ref) { // `url` prop'u ekledik
    return (
        <div className="video-container">
            <ReactPlayer
                ref={ref}
                url={url} // ReactPlayer'a dinamik URL'yi geçiyoruz
                muted={true}
                autoPlay={true}
                playing={true}
                loop={true}
                width="100%"
                height="100%"
            />
        </div>
    );
}

export default forwardRef(VideoPlayer);
