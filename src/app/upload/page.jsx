"use client"
import React, {Fragment, useState, useEffect} from 'react';
import styles from './upload.module.css';
import Navbar from "@/components/Navbar/Navbar";
import {ClipLoader, MoonLoader} from "react-spinners";
import {baseUrl} from "@/app/api/api";
import {toast} from "react-hot-toast";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

function UploadPageLayout() {

    const [file, setFile] = useState();
    const [files, setFiles] = useState([])

    const handleFileChange = (e) => {
        setFiles([...files, e.target.files])
    }

    useEffect(() => {
        if (files.length > 0 && files[0]) {
            if (files[0].length === 1) {
                const formData = new FormData();
                formData.append("file", files[0][0]);
                fetch(`${baseUrl}api/upload`, {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem("token")}`
                    },
                    body: formData
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if(data.success) {
                            toast.success(`${files[0][0].name} uploaded`)
                        } else {
                            if(data.message === "Duplicate cid entered")
                                toast.error("file already exites");
                            else
                                toast.error(data.message)
                        }
                        const newData = files.filter((file, i) => i !== 0);
                        setFiles(newData);
                    })
                    .catch((err) => {
                        console.error(err);
                        toast.error(err)
                    })
            }
        }
    }, [files]);



    const onCrossClick = (index) => {
        const newData = files.filter((file, i) => i !== index);
        setFiles(newData)
    }

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
                            <label htmlFor="fileInput" className={styles['choose-button']}>
                                Choose file
                                <input filename={file} type="file" id="fileInput" onChange={handleFileChange}
                                       className={styles['file-input']}/>
                            </label>
                        </div>
                    </div>
                    {files?.length > 0 && <div className={styles['upload-progress-box']}>
                        <h2 className={styles['upload-progress-heading']}>
                            <div className={styles['image-container']}>
                                <MoonLoader
                                    color="#1D297C"
                                    size={20}
                                />
                            </div>
                            Upload Progress
                        </h2>
                        {files?.map((file, index) => (
                            <div className={styles['file-progress']}>
                                <div className={styles['grey-box']}>
                                    <div className={styles['file-info']}>
                                        <div className={styles['file-icon']}>
                                            <img src="camera.png" alt="File Icon"/>
                                        </div>
                                        <div className={styles['file-details']}>
                                            <div className={styles['file-name']}>{file[0]?.name}</div>
                                        </div>
                                    </div>
                                    <div className={styles['rectanglestorage']}>
                                        <div className={styles['storage-meter']}>
                                            {index !== 0
                                                ? <img onClick={() => onCrossClick(index)} src="cross.png"
                                                       alt="tick or cross" className={styles['end-image']}/>
                                                : <ClipLoader
                                                    color="#3e55da"
                                                    size={20}
                                                />
                                            }
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
