import React, {Fragment} from 'react';
import styles from './mycloud.module.css';
import Navbar from "../../components/Navbar/Navbar";

const HomePageLayout = () => {
    return (
        <Fragment>
            <Navbar/>
            <div className={styles.container}>
                <div className={styles['main-content']}>
                    <div className={styles['search-bar']}>
                        <input type="text" className={styles['search-input']} placeholder="Search"/>
                    </div>
                    <div className={styles.filecategories}>
                        <p>Categories</p>
                        <button className={styles.pic}>
                            <img src="mycloud/camera.png" alt="Button Image"/>
                            <div className={styles['filecategories-text']}>
                                <p className={styles['filecategories-text-name']}>Pictures</p>
                                <p className={styles['filecategories-text-number']}>100 files</p>
                            </div>
                        </button>
                        <button className={styles.doc}>
                            <img src="mycloud/documents.png" alt="Button Image"/>
                            <div className={styles['filecategories-text']}>
                                <p className={styles['filecategories-text-name']}>Documents</p>
                                <p className={styles['filecategories-text-number']}>100 files</p>
                            </div>
                        </button>
                        <button className={styles.vid}>
                            <img src="mycloud/video.png" alt="Button Image"/>
                            <div className={styles['filecategories-text']}>
                                <p className={styles['filecategories-text-name']}>Videos</p>
                                <p className={styles['filecategories-text-number']}>100 files</p>
                            </div>
                        </button>
                        <button className={styles.aud}>
                            <img src="mycloud/audio.png" alt="Button Image"/>
                            <div className={styles['filecategories-text']}>
                                <p className={styles['filecategories-text-name']}>Audio</p>
                                <p className={styles['filecategories-text-number']}>100 files</p>
                            </div>
                        </button>
                    </div>
                    <div className={styles.filedivision}>
                        <p>Files</p>
                        <button className={styles.filesbutton}>
                            <img src="mycloud/work.png" alt="Button Image"/>
                            <div className={styles['filedivision-text']}>
                                <p className={styles['filedivision-text-name']}>Work</p>
                                <p className={styles['filedivision-text-number']}>100 files</p>
                            </div>
                        </button>
                        <button className={styles.filesbutton}>
                            <img src="mycloud/person.png" alt="Button Image"/>
                            <div className={styles['filedivision-text']}>
                                <p className={styles['filedivision-text-name']}>Personal</p>
                                <p className={styles['filedivision-text-number']}>540 files</p>
                            </div>
                        </button>
                        <button className={styles.filesbutton}>
                            <img src="mycloud/school.png" alt="Button Image"/>
                            <div className={styles['filedivision-text']}>
                                <p className={styles['filedivision-text-name']}>School</p>
                                <p className={styles['filedivision-text-number']}>92 files</p>
                            </div>
                        </button>
                        <button className={styles.filesbutton}>
                            <img src="mycloud/archive.png" alt="Button Image"/>
                            <div className={styles['filedivision-text']}>
                                <p className={styles['filedivision-text-name']}>Archive</p>
                                <p className={styles['filedivision-text-number']}>113 files</p>
                            </div>
                        </button>
                    </div>
                    <div className={styles.recentfiles}>
                        <p className={styles.recentflcapt}>Recent files</p>
                        <div>
                            <button className={styles.longbutton}>
                                <div className={styles['longbutton-elements']}>
                                    <div className={styles['longbutton-icon']}>
                                        <img src="mycloud/camerawhite.png" alt="Profile Photo"/>
                                    </div>
                                    <div className={styles['longbutton-filename']}>file_0004</div>
                                    <div className={styles['longbutton-fileformat']}>pdf</div>
                                    <div className={styles['longbutton-fileformat']}>2 MB</div>
                                    <div className={styles.options}>
                                        <img src="mycloud/share.png" alt="share"/>
                                        <img src="mycloud/options.png" alt="options"/>
                                    </div>
                                </div>
                            </button>
                        </div>
                        <button className={styles.longbutton}>
                            <div className={styles['longbutton-elements']}>
                                <div className={styles['longbutton-icon']}>
                                    <img src="mycloud/camerawhite.png" alt="Profile Photo"/>
                                </div>
                                <div className={styles['longbutton-filename']}>file_3523</div>
                                <div className={styles['longbutton-fileformat']}>jpg file</div>
                                <div className={styles['longbutton-fileformat']}>10 MB</div>
                                <div className={styles.options}>
                                    <img src="mycloud/share.png" alt="share"/>
                                    <img src="mycloud/options.png" alt="options"/>
                                </div>
                            </div>
                        </button>
                        <button className={styles.longbutton}>
                            <div className={styles['longbutton-elements']}>
                                <div className={styles['longbutton-icon']}>
                                    <img src="mycloud/camerawhite.png" alt="Profile Photo"/>
                                </div>
                                <div className={styles['longbutton-filename']}>file_2563</div>
                                <div className={styles['longbutton-fileformat']}>exe file</div>
                                <div className={styles['longbutton-fileformat']}>5 MB</div>
                                <div className={styles.options}>
                                    <img src="mycloud/share.png" alt="share"/>
                                    <img src="mycloud/options.png" alt="options"/>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>


                <div className={styles['right-side']}>
                    <div className={styles['right-content']}>
                        <div className={styles['right-group']}>
                            <div className={styles.addfl}>
                                <button className={styles.addfiles}>
                                    <img src="mycloud/addfiles.png" alt="Upload Icon" className={styles['upload-icon']} />
                                    <div className={styles.label}>Add new files</div>
                                </button>
                            </div>
                            <div className={styles.rectanglestorage}>
                                <div className={styles['stor-flex-container']}>
                                    <p className={styles.stor}>Your storage</p>
                                    <div className={styles['stor-flex-grow']}></div>
                                </div>
                                <div className={styles['storage-meter']}>
                                    <p className={styles.stor} style={{ fontWeight: 'normal' }}>
                                        75GB of used
                                    </p>
                                    <progress value="60" max="100"></progress>
                                </div>
                            </div>
                            <div className={styles.rectanglestorage}>
                                <div className={styles['stor-flex-container']}>
                                    <p className={styles.stor}>Your shared folders</p>
                                </div>
                                <button className={styles.sharedbutton}>
                                    <div className={styles['sharedbutton-elements']}>
                                        <div className={styles['sharedbutton-filename']}>Keynote files</div>
                                        <div className={styles.sharedoptions}>
                                            <img src="avatar.png" alt="user" />
                                            <img src="avatar.png" alt="user" />
                                        </div>
                                    </div>
                                </button>
                                <button className={`${styles.sharedbutton} ${styles['sharedbutton-colored']}`}>
                                    <div className={styles['sharedbutton-elements']}>
                                        <div className={styles['sharedbutton-filename']}>Vacation photos</div>
                                        <div className={styles.sharedoptions}>
                                            <img src="avatar.png" alt="user" />
                                        </div>
                                    </div>
                                </button>
                                <button className={`${styles.sharedbutton} ${styles['sharedbutton-colored2']}`}>
                                    <div className={styles['sharedbutton-elements']}>
                                        <div className={styles['sharedbutton-filename']}>Project report</div>
                                        <div className={styles.sharedoptions}>
                                            <img src="avatar.png" alt="user" />
                                            <img src="mycloud/avatar.png" alt="user" />
                                        </div>
                                    </div>
                                </button>
                                <button className={styles.addmore}>+ Add more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default HomePageLayout;
