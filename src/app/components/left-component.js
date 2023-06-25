import React from 'react';
import avatar from './images/avatar.png';
import './styles/left-component.css';

function LeftSide() {
    return (
        <div className="left-side">
            <div className="profile-photo">
                <img src={avatar} alt="Profile Photo" />
            </div>
            <div>
                <button className="button1">My Cloud</button>
                <button className="button1">Shared Files</button>
                <button className="button1">Favorites</button>
                <button className="button1">Upload Files</button>
            </div>
            <div className="leftbuttonbottom">
                <button className="button2">Settings</button>
                <button className="button2">Log out</button>
            </div>
        </div>
    );
}

export default LeftSide;
