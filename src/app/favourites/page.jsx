"use client"
import React, {Fragment, useEffect, useState} from 'react';
import styles from './favourites.module.css';
import Navbar from "../../components/Navbar/Navbar";
import {baseUrl} from "@/app/api/api";
import {toast} from "react-hot-toast";

function FavoritesLayout() {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`${baseUrl}api/files/favorites`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.success)
                    setData(data)
            })
            .catch((err) => {
                console.error(err);
                toast.error(err)
            })
    }, [])


    return (
        <Fragment>
            <Navbar/>
            <div className={styles.container}>
                <div className={styles['main-content']}>
                    <div className={styles['search-bar']}>
                        <input type="text" className={styles['search-input']} placeholder="Search"/>
                    </div>

                    <div className={styles.favorites}>
                        <p className={styles['favorites-font']}>Favorites</p>
                        <button className={styles.pic}>
                            <img src="mycloud/camera.png" alt="Button Image"/>
                            <div className={styles['filecategories-text']}>
                                <p className={styles['filecategories-text-name']}>Pictures</p>
                                <p className={styles['filecategories-text-number']}>{data?.count?.image} files</p>
                            </div>
                        </button>
                        <button className={styles.doc}>
                            <img src="mycloud/documents.png" alt="Button Image"/>
                            <div className={styles['filecategories-text']}>
                                <p className={styles['filecategories-text-name']}>Documents</p>
                                <p className={styles['filecategories-text-number']}>{data?.count?.document} files</p>
                            </div>
                        </button>
                        <button className={styles.vid}>
                            <img src="mycloud/video.png" alt="Button Image"/>
                            <div className={styles['filecategories-text']}>
                                <p className={styles['filecategories-text-name']}>Videos</p>
                                <p className={styles['filecategories-text-number']}>{data?.count?.video} files</p>
                            </div>
                        </button>
                        <button className={`${styles.aud}`}>
                            <img src="mycloud/audio.png" alt="Button Image"/>
                            <div className={styles['filecategories-text']}>
                                <p className={styles['filecategories-text-name']}>Audio</p>
                                <p className={styles['filecategories-text-number']}>{data?.count?.audio} files</p>
                            </div>
                        </button>
                        <button className={`${styles.other}`}>
                            <img src="mycloud/others.png" alt="Button Image"/>
                            <div className={styles['filecategories-text']}>
                                <p className={styles['filecategories-text-name']}>Others</p>
                                <p className={styles['filecategories-text-number']}>{data?.count?.other} files</p>
                            </div>
                        </button>
                    </div>

                    <div className={styles.files}>
                        <p className={styles['files-font']}>Files</p>
                        {data?.files?.map((file, index) => (
                            <button key={index} className={styles['files-buttons']}>
                                <img src={file.url} alt="Profile Photo"/>
                                <p className={styles.filename}>{file.name.slice(0, 15)}...</p>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default FavoritesLayout;
