import React from 'react';
import './styles/left-component.css';

function LeftSide() {
    return (
        <div className="left-side">
            <div className="profile-photo">
                <img src="/avatar.png" alt="Profile Photo" />
            </div>
            <div>
                <button className="button1 home">My Cloud</button>
                <button className="button1 shared">Shared Files</button>
                <button className="button1 favourite">Favorites</button>
                <button className="button1 upload">Upload Files</button>
            </div>
            <div className="leftbuttonbottom">
                <button className="button2">Settings</button>
                <button className="button2">Log out</button>
            </div>
        </div>
    );
}

export default LeftSide;