"use client"
import React, {Fragment, useState} from 'react';
import styles from './upload.module.css';
import Navbar from "@/components/Navbar/Navbar";


function UploadPageLayout() {

    const [files, setFiles] = useState([]);

    const handleFileChange = (e) => {
        setFiles([...files, ...e.target.files]);
        console.log(files)
    }

    return (
        <Fragment>
            <Navbar/>
            <div className={styles.container}>
                <div className={styles['main-content']}>
                        <div className={styles['upload-files-box']}>
                            <h2 className={styles.uploadfiles}>Upload Files</h2>
                            <div className={styles['grey-box']}>
                                <img src="upload.png" alt="Upload Icon" className={styles['upload-icon']} />
                                <h2 className={styles['upload-heading']}>Drag or drop your files here</h2>
                                <div className={styles['drag-drop-text']}>or</div>
                                <label htmlFor="fileInput" className={styles['choose-button']}>
                                    Choose file
                                    <input type="file" id="fileInput" onChange={handleFileChange} className={styles['file-input']} />
                                </label>
                            </div>
                        </div>
                    {files.length > 0 && <div className={styles['upload-progress-box']}>
                        <h2 className={styles['upload-progress-heading']}>
                            <div className={styles['image-container']}>
                                <img src="progress.avif" alt="Upload Progress Image"/>
                            </div>
                            Upload Progress
                        </h2>
                        {files.map((file, index) => (
                            <div className={styles['file-progress']}>
                                <div className={styles['grey-box']}>
                                    <div className={styles['file-info']}>
                                        <div className={styles['file-icon']}>
                                            <img src="camera.png" alt="File Icon"/>
                                        </div>
                                        <div className={styles['file-details']}>
                                            <div className={styles['file-name']}>{file.name}</div>
                                        </div>
                                    </div>
                                    <div className={styles['rectanglestorage']}>
                                        <div className={styles['storage-meter']}>
                                            <img src="cross.png" alt="tick or cross" className={styles['end-image']}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>}
                </div>
            </div>
        </Fragment>
    );
}

export default UploadPageLayout;
