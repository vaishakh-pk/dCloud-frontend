import React from 'react';
import './favorites.css';
import LeftSide from '../../components/Navbar/Navbar';
function FavoritesLayout() {
    return (
        <div className="container">
            <div className="main-content">
                {/* Main content in the middle */}
                <div className="search-bar">
                    <input type="text" className="search-input" placeholder="Search" />
                </div>

                <div className="favorites">
                    <p className="favorites-font">Favorites</p>
                    <button className="favorites-button">
                        <img src="camera.png" alt="Button Image" />
                        <div className="favorites-button-text">
                            <p className="favorites-button-text-name">Pictures</p>
                            <p className="favorites-button-text-number">100 files</p>
                        </div>
                    </button>
                </div>

                <div className="files">
                    <p className="files-font">Files</p>
                    <button className="files-buttons"><img src="picture.png" alt="Profile Photo" /><p className="filename">file_0001</p></button>
                    <button className="files-buttons"><img src="picture.png" alt="Profile Photo" /><p className="filename">file_0001</p></button>
                    <button className="files-buttons"><img src="picture.png" alt="Profile Photo" /><p className="filename">file_0001</p></button>
                    <button className="files-buttons"><img src="picture.png" alt="Profile Photo" /><p className="filename">file_0001</p></button>
                    <button className="files-buttons"><img src="picture.png" alt="Profile Photo" /><p className="filename">file_0001</p></button>
                    <button className="files-buttons"><img src="picture.png" alt="Profile Photo" /><p className="filename">file_0001</p></button>
                </div>

                <div className="files">
                    <p className="files-font"></p>
                    <button className="files-buttons"><img src="picture.png" alt="Profile Photo" /><p className="filename">file_0001</p></button>
                    <button className="files-buttons"><img src="picture.png" alt="Profile Photo" /><p className="filename">file_0001</p></button>
                    <button className="files-buttons"><img src="picture.png" alt="Profile Photo" /><p className="filename">file_0001</p></button>
                    <button className="files-buttons"><img src="picture.png" alt="Profile Photo" /><p className="filename">file_0001</p></button>
                    <button className="files-buttons"><img src="picture.png" alt="Profile Photo" /><p className="filename">file_0001</p></button>
                    <button className="files-buttons"><img src="picture.png" alt="Profile Photo" /><p className="filename">file_0001</p></button>
                </div>
            </div>
        </div>
    );
}

export default FavoritesLayout;
