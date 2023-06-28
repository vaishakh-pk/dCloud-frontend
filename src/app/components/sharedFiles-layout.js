import React from 'react';
import avatar from '/public/avatar.png';
import LeftSide from './left-component';
import './styles/sharedfiles.css';
const SharedFilesLayout = () => {
    return (
        <div className="container">
            <LeftSide />
            <div className="main-content">
                {/* Main content in the middle */}
                <div className="search-bar">
                    <input type="text" className="search-input" placeholder="Type here..." />
                    <button className="search-button">Search</button>
                </div>

                <div className="sharedfiles">
                    <p className="sharedfilesfont">Your shared files</p>
                    <button className="filesbutton">
                        <div className="sharelistphoto">
                            <img src="avatar.png" alt="Profile Photo" />
                            <img src="avatar.png" alt="Profile Photo" />
                            <img src="avatar.png" alt="Profile Photo" />
                        </div>
                        Vacation Photos<div className="numberoffile">100 files</div>
                    </button>
                    <button className="filesbutton">
                        <div className="sharelistphoto">
                            <img src="avatar.png" alt="Profile Photo" />
                            <img src="avatar.png" alt="Profile Photo" />
                            <img src="avatar.png" alt="Profile Photo" />
                        </div>
                        Project Report<div className="numberoffile">200 files</div>
                    </button>
                    <button className="filesbutton">
                        <div className="sharelistphoto">
                            <img src="avatar.png" alt="Profile Photo" />
                            <img src="avatar.png" alt="Profile Photo" />
                            <img src="avatar.png" alt="Profile Photo" />
                        </div>
                        Memes<div className="numberoffile">300 files</div>
                    </button>
                    <button className="plusbutton">
                        <img src="plus.png" alt="Button Image" />
                        <div className="numberoffilehid">.</div>
                    </button>
                </div>

                <div className="recentfiles">
                    <p className="recentflcapt">Shared recently</p>
                    <div className="longbuttoncontainer">
                        <button className="longbutton1">
                            <div className="longbutton-elements">
                                <div className="longbutton-icon">
                                    <img src="camerawhite.png" alt="Profile Photo" />
                                </div>
                                <div className="longbutton-filename">file_0001</div>
                                <div className="longbutton-fileformat">pdf</div>
                                <div className="longbutton-fileformat">filesize</div>
                            </div>
                        </button>
                        <div className="share-option-button-adjust">
                            <button className="longbutton-share">
                                <img src="share.png" alt="share" />
                            </button>
                            <button className="longbutton-options">
                                <img src="options.png" alt="options" />
                            </button>
                        </div>
                    </div>
                    <div className="longbuttoncontainer">
                        <button className="longbutton1">
                            <div className="longbutton-elements">
                                <div className="longbutton-icon">
                                    <img src="camerawhite.png" alt="Profile Photo" />
                                </div>
                                <div className="longbutton-filename">file_0002</div>
                                <div className="longbutton-fileformat">png</div>
                                <div className="longbutton-fileformat">filesize</div>
                            </div>
                        </button>
                        <div className="share-option-button-adjust">
                            <button className="longbutton-share">
                                <img src="share.png" alt="share" />
                            </button>
                            <button className="longbutton-options">
                                <img src="options.png" alt="options" />
                            </button>
                        </div>
                    </div>
                    <div className="longbuttoncontainer">
                        <button className="longbutton1">
                            <div className="longbutton-elements">
                                <div className="longbutton-icon">
                                    <img src="camerawhite.png" alt="Profile Photo" />
                                </div>
                                <div className="longbutton-filename">file_0003</div>
                                <div className="longbutton-fileformat">jpeg</div>
                                <div className="longbutton-fileformat">filesize</div>
                            </div>
                        </button>
                        <div className="share-option-button-adjust">
                            <button className="longbutton-share">
                                <img src="share.png" alt="share" />
                            </button>
                            <button className="longbutton-options">
                                <img src="options.png" alt="options" />
                            </button>
                        </div>
                    </div>
                    <div className="longbuttoncontainer">
                        <button className="longbutton1">
                            <div className="longbutton-elements">
                                <div className="longbutton-icon">
                                    <img src="camerawhite.png" alt="Profile Photo" />
                                </div>
                                <div className="longbutton-filename">file_0004</div>
                                <div className="longbutton-fileformat">pdf</div>
                                <div className="longbutton-fileformat">filesize</div>
                            </div>
                        </button>
                        <div className="share-option-button-adjust">
                            <button className="longbutton-share">
                                <img src="share.png" alt="share" />
                            </button>
                            <button className="longbutton-options">
                                <img src="options.png" alt="options" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SharedFilesLayout;
