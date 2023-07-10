import React from 'react';
import './upload.css';


function UploadPageLayout() {
    return (
        <div className="container">
            <div className="main-content">
                <div className="upload-files-box">
                    <h2 className="uploadfiles">Upload Files</h2>
                    <div className="grey-box">
                        <img src="upload.png" alt="Upload Icon" className="upload-icon" />
                        <h2 className="upload-heading">Drag or drop your files here</h2>
                        <div className="drag-drop-text">or</div>
                        <button className="choose-button">Choose Files</button>
                    </div>
                </div>

                <div className="upload-progress-box">
                    <h2 className="upload-progress-heading">
                        <div className="image-container">
                            <img src="progress.avif" alt="Upload Progress Image" />
                        </div>
                        Upload Progress
                    </h2>
                    <div className="progress-container">
                        <div className="file-progress">
                            <div className="grey-box">
                                <div className="file-info">
                                    <div className="file-icon">
                                        <img src="camera.png" alt="File Icon" />
                                    </div>
                                    <div className="file-details">
                                        <div className="file-name">example_file1.txt</div>
                                    </div>
                                </div>
                                <div className="rectanglestorage">
                                    <div className="storage-meter">
                                        <progress value="60" max="100"></progress>
                                        <span>50%</span>
                                        <img src="cross.png" alt="tick or cross" className="end-image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="file-progress">
                            <div className="grey-box">
                                <div className="file-info">
                                    <div className="file-icon">
                                        <img src="camera.png" alt="File Icon" />
                                    </div>
                                    <div className="file-details">
                                        <div className="file-name">example_file2.txt</div>
                                    </div>
                                </div>
                                <div className="rectanglestorage">
                                    <div className="storage-meter">
                                        <progress value="100" max="100"></progress>
                                        <span>100%</span>
                                        <img src="tick.png" alt="tick or cross" className="end-image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="right-side">
                    {/* Content for the right side (if any) */}
                </div>
            </div>
        </div>
    );
}

export default UploadPageLayout;
