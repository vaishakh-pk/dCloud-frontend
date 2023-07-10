import React, {Fragment} from 'react';
import styles from './upload.module.css';
import Navbar from "@/components/Navbar/Navbar";


function UploadPageLayout() {
    return (
        <Fragment>
            <Navbar/>
            <div className={styles.container}>
                <div className={styles['main-content']}>
                    <div className={styles['upload-files-box']}>
                        <h2 className={styles.uploadfiles}>Upload Files</h2>
                        <div className={styles['grey-box']}>
                            <img src="upload.png" alt="Upload Icon" className={styles['upload-icon']}/>
                            <h2 className={styles['upload-heading']}>Drag or drop your files here</h2>
                            <div className={styles['drag-drop-text']}>or</div>
                            <button className={styles['choose-button']}>Choose Files</button>
                        </div>
                    </div>
                    <div className={styles['upload-progress-box']}>
                        <h2 className={styles['upload-progress-heading']}>
                            <div className={styles['image-container']}>
                                <img src="progress.avif" alt="Upload Progress Image"/>
                            </div>
                            Upload Progress
                        </h2>
                        <div className={styles['progress-container']}>
                            <div className={styles['file-progress']}>
                                <div className={styles['grey-box']}>
                                    <div className={styles['file-info']}>
                                        <div className={styles['file-icon']}>
                                            <img src="camera.png" alt="File Icon"/>
                                        </div>
                                        <div className={styles['file-details']}>
                                            <div className={styles['file-name']}>example_file1.txt</div>
                                        </div>
                                    </div>
                                    <div className={styles['rectanglestorage']}>
                                        <div className={styles['storage-meter']}>
                                            <progress value="60" max="100"></progress>
                                            <span>50%</span>
                                            <img src="cross.png" alt="tick or cross" className={styles['end-image']}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles['file-progress']}>
                                <div className={styles['grey-box']}>
                                    <div className={styles['file-info']}>
                                        <div className={styles['file-icon']}>
                                            <img src="camera.png" alt="File Icon"/>
                                        </div>
                                        <div className={styles['file-details']}>
                                            <div className={styles['file-name']}>example_file2.txt</div>
                                        </div>
                                    </div>
                                    <div className={styles['rectanglestorage']}>
                                        <div className={styles['storage-meter']}>
                                            <progress value="100" max="100"></progress>
                                            <span>100%</span>
                                            <img src="tick.png" alt="tick or cross" className={styles['end-image']}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default UploadPageLayout;
