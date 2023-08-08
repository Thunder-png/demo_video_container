// ChapterOne.js
import React, { useState, useRef } from 'react';
import '../App.css';
import VideoPlayer from '../components/VideoPlayer';
import HamburgerMenu from '../components/HamburgerMenu';

function ChapterOne() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const videoRef = useRef(null);
    const skipTo20Seconds = () => {
        if (videoRef.current) {
            videoRef.current.seekTo(20);
        }
    };

    const handleMenuToggle = () => {
        setMenuOpen(!isMenuOpen);
    };

    const handleCloseMenu = () => {
        setMenuOpen(false);
    };

    return (
        <div className="App">
            <div className={`framed-overlay ${isMenuOpen ? 'active' : ''}`} style={{ transform: "translate(0px, 0px)" }}></div>
            <div className="bg-img"></div>
            <VideoPlayer ref={videoRef} url="http://video-container.b-cdn.net/Video1.mp4" />
            <HamburgerMenu onClick={handleMenuToggle} isOpen={isMenuOpen} onClose={handleCloseMenu} onSkipTo20Seconds={skipTo20Seconds} />
        </div>
    );
}

export default ChapterOne;
