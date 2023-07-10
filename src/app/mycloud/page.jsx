import React from 'react';
import LeftSide from '../../components/Navbar/Navbar';
import './mycloud.css';



const HomePageLayout = () => {
    return (
            <div className="container">


                <div className="main-content">
                    {/* Main content in the middle */}
                    <div className="search-bar">
                        <input type="text" className="search-input" placeholder="Search" />
                    </div>
                    <div className="filecategories">
                        <p>Categories</p>
                        <button className="pic">
                            <img src="mycloud/camera.png" alt="Button Image" />
                            <div className="filecategories-text">
                                <p className="filecategories-text-name">Pictures</p>
                                <p className="filecategories-text-number">100 files</p>
                            </div>
                        </button>
                        <button className="doc">
                            <img src="mycloud/documents.png" alt="Button Image" />
                            <div className="filecategories-text">
                                <p className="filecategories-text-name">Documents</p>
                                <p className="filecategories-text-number">100 files</p>
                            </div>
                        </button>
                        <button className="vid">
                            <img src="mycloud/video.png" alt="Button Image" />
                            <div className="filecategories-text">
                                <p className="filecategories-text-name">Videos</p>
                                <p className="filecategories-text-number">100 files</p>
                            </div>
                        </button>
                        <button className="aud">
                            <img src="mycloud/audio.png" alt="Button Image" />
                            <div className="filecategories-text">
                                <p className="filecategories-text-name">Audio</p>
                                <p className="filecategories-text-number">100 files</p>
                            </div>
                        </button>
                    </div>
                    <div className="filedivision">
                        <p>Files</p>
                        <button className="filesbutton">
                            <img src="mycloud/work.png" alt="Button Image" />
                            <div className="filedivision-text">
                                <p className="filedivision-text-name">Work</p>
                                <p className="filedivision-text-number">100 files</p>
                            </div>
                        </button>
                        <button className="filesbutton">
                            <img src="mycloud/person.png" alt="Button Image" />
                            <div className="filedivision-text">
                                <p className="filedivision-text-name">Personal</p>
                                <p className="filedivision-text-number">540 files</p>
                            </div>
                        </button>
                        <button className="filesbutton">
                            <img src="mycloud/school.png" alt="Button Image" />
                            <div className="filedivision-text">
                                <p className="filedivision-text-name">School</p>
                                <p className="filedivision-text-number">92 files</p>
                            </div>
                        </button>
                        <button className="filesbutton">
                            <img src="mycloud/archive.png" alt="Button Image" />
                            <div className="filedivision-text">
                                <p className="filedivision-text-name">Archive</p>
                                <p className="filedivision-text-number">113 files</p>
                            </div>
                        </button>
                    </div>
                    <div className="recentfiles">
                        <p className="recentflcapt">Recent files</p>
                        <div>
                            <button className="longbutton">
                                <div className="longbutton-elements">
                                    <div className="longbutton-icon">
                                        <img src="mycloud/camerawhite.png" alt="Profile Photo" />
                                    </div>
                                    <div className="longbutton-filename">file_0004</div>
                                    <div className="longbutton-fileformat">pdf</div>
                                    <div className="longbutton-fileformat">2 MB</div>
                                    <div className="options">
                                        <img src="mycloud/share.png" alt="share" />
                                        <img src="mycloud/options.png" alt="options" />
                                    </div>
                                </div>
                            </button>
                        </div>
                        <button className="longbutton">
                            <div className="longbutton-elements">
                                <div className="longbutton-icon">
                                    <img src="mycloud/camerawhite.png" alt="Profile Photo" />
                                </div>
                                <div className="longbutton-filename">file_3523</div>
                                <div className="longbutton-fileformat">jpg file</div>
                                <div className="longbutton-fileformat">10 MB</div>
                                <div className="options">
                                    <img src="mycloud/share.png" alt="share" />
                                    <img src="mycloud/options.png" alt="options" />
                                </div>
                            </div>
                        </button>
                        <button className="longbutton">
                            <div className="longbutton-elements">
                                <div className="longbutton-icon">
                                    <img src="mycloud/camerawhite.png" alt="Profile Photo" />
                                </div>
                                <div className="longbutton-filename">file_2563</div>
                                <div className="longbutton-fileformat">exe file</div>
                                <div className="longbutton-fileformat">5 MB</div>
                                <div className="options">
                                    <img src="mycloud/share.png" alt="share" />
                                    <img src="mycloud/options.png" alt="options" />
                                </div>
                            </div>
                        </button>
                    </div>
                </div>

                <div className="right-side">
                    {/* Content for the right side */}
                    <div className="right-content">
                        <div className="right-group">
                            <div className="addfl">
                                <button className="addfiles">
                                    <img src="mycloud/addfiles.png" alt="Upload Icon" className="upload-icon" />
                                    <div className="label">Add new files</div>
                                </button>
                            </div>
                            <div className="rectanglestorage">
                                <div className="stor-flex-container">
                                    <p className="stor">Your storage</p>
                                    <div className="stor-flex-grow"></div>
                                    <p className="stor-left">25% left</p>
                                </div>
                                <div className="storage-meter">
                                    <p className="stor" style={{ fontWeight: 'normal' }}>
                                        75GB of 100GB are used
                                    </p>
                                    <progress value="60" max="100"></progress>
                                </div>
                            </div>

                            <div className="rectanglestorage">
                                <div className="stor-flex-container">
                                    <p className="stor">Your shared folders</p>
                                </div>
                                <button className="sharedbutton">
                                    <div className="sharedbutton-elements">
                                        <div className="sharedbutton-filename">Keynote files</div>
                                        <div className="sharedoptions">
                                            <img src="avatar.png" alt="user" />
                                            <img src="avatar.png" alt="user" />
                                        </div>
                                    </div>
                                </button>

                                <button className="sharedbutton" style={{ backgroundColor: 'rgb(198, 206, 241)' }}>
                                    <div className="sharedbutton-elements">
                                        <div className="sharedbutton-filename">Vacation photos</div>
                                        <div className="sharedoptions">
                                            <img src="avatar.png" alt="user" />
                                        </div>
                                    </div>
                                </button>

                                <button className="sharedbutton" style={{ backgroundColor: 'rgb(245, 218, 238)' }}>
                                    <div className="sharedbutton-elements">
                                        <div className="sharedbutton-filename">Project report</div>
                                        <div className="sharedoptions">
                                            <img src="avatar.png" alt="user" />
                                            <img src="mycloud/avatar.png" alt="user" />
                                        </div>
                                    </div>
                                </button>

                                <button className="addmore">+ Add more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default HomePageLayout;
