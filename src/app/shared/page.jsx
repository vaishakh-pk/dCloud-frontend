import React, {Fragment} from 'react';
import styles from './sharedfiles.module.css';
import Navbar from "../../components/Navbar/Navbar";

const SharedFilesLayout = () => {
    return (
        <Fragment>
            <Navbar />
            <div className={styles.container}>
                <div className={styles['main-content']}>
                    <div className={styles['search-bar']}>
                        <input type="text" className={styles['search-input']} placeholder="Search" />
                    </div>

                    <div className={styles.sharedfiles}>
                        <p className={styles.sharedfilesfont}>Your shared files</p>
                        <button className={styles.filesbutton}>
                            <div className={styles.sharelistphoto}>
                                <img src="avatar.png" alt="Profile Photo" />
                                <img src="avatar.png" alt="Profile Photo" />
                                <img src="avatar.png" alt="Profile Photo" />
                            </div>
                            Vacation Photos
                            <div className={styles.numberoffile}>100 files</div>
                        </button>
                        <button className={styles.filesbutton}>
                            <div className={styles.sharelistphoto}>
                                <img src="avatar.png" alt="Profile Photo" />
                                <img src="avatar.png" alt="Profile Photo" />
                                <img src="avatar.png" alt="Profile Photo" />
                            </div>
                            Project Report
                            <div className={styles.numberoffile}>200 files</div>
                        </button>
                        <button className={styles.filesbutton}>
                            <div className={styles.sharelistphoto}>
                                <img src="avatar.png" alt="Profile Photo" />
                                <img src="avatar.png" alt="Profile Photo" />
                                <img src="avatar.png" alt="Profile Photo" />
                            </div>
                            Memes
                            <div className={styles.numberoffile}>300 files</div>
                        </button>
                        <button className={styles.plusbutton}>
                            <img src="plus.png" alt="Button Image" />
                            <div className={styles.numberoffilehid}>.</div>
                        </button>
                    </div>

                    <div className={styles.recentfiles}>
                        <p className={styles.recentflcapt}>Shared recently</p>
                        <div className={styles.longbuttoncontainer}>
                            <button className={styles.longbutton1}>
                                <div className={styles['longbutton-elements']}>
                                    <div className={styles['longbutton-icon']}>
                                        <img src="shared/camerawhite.png" alt="Profile Photo" />
                                    </div>
                                    <div className={styles['longbutton-filename']}>file_0001</div>
                                    <div className={styles['longbutton-fileformat']}>pdf</div>
                                    <div className={styles['longbutton-fileformat']}>filesize</div>
                                </div>
                            </button>
                            <div className={styles['share-option-button-adjust']}>
                                <button className={styles['longbutton-share']}>
                                    <img src="shared/share.png" alt="share" />
                                </button>
                                <button className={styles['longbutton-options']}>
                                    <img src="shared/options.png" alt="options" />
                                </button>
                            </div>
                        </div>
                        <div className={styles.longbuttoncontainer}>
                            <button className={styles.longbutton1}>
                                <div className={styles['longbutton-elements']}>
                                    <div className={styles['longbutton-icon']}>
                                        <img src="shared/camerawhite.png" alt="Profile Photo" />
                                    </div>
                                    <div className={styles['longbutton-filename']}>file_0002</div>
                                    <div className={styles['longbutton-fileformat']}>png</div>
                                    <div className={styles['longbutton-fileformat']}>filesize</div>
                                </div>
                            </button>
                            <div className={styles['share-option-button-adjust']}>
                                <button className={styles['longbutton-share']}>
                                    <img src="shared/share.png" alt="share" />
                                </button>
                                <button className={styles['longbutton-options']}>
                                    <img src="shared/options.png" alt="options" />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default SharedFilesLayout;
