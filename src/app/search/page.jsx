"use client"
import React, {Fragment, useState, useEffect} from 'react';
import styles from './search.module.css';
import Navbar from "../../components/Navbar/Navbar";
import {baseUrl} from "@/app/api/api";
import {toast} from "react-hot-toast";
import Menu from "@/components/Menu/Menu";

const SharedFilesLayout = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [data, setData] = useState();

    useEffect(() => {
        fetch(`${baseUrl}api/files/search?keyword=${searchQuery}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setData(data)
            })
            .catch((err) => {
                console.error(err);
                toast.error(err)
            })
    }, [searchQuery])

    return (
        <Fragment>
            <Navbar/>
            <div className={styles.container}>
                <div className={styles['main-content']}>
                    <div className={styles['search-bar']}>
                        <input  type="text" className={styles['search-input']} placeholder="Search"
                                value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className={styles.sharedfiles}>
                        {data?.files?.length > 0
                            ? <p className={styles.sharedfilesfont}>Your shared files</p>
                            : <p className={styles.sharedfilesfont}>No files found</p> }
                    </div>

                    <div className={styles.recentfiles}>
                        {data?.files?.map((file, index) => (
                            <div key={index} title={file.name}>
                                <button className={styles.longbutton}>
                                    <div className={styles['longbutton-elements']}>
                                        <div className={styles['longbutton-icon']}>
                                            <img src="mycloud/camerawhite.png" alt="Profile Photo"/>
                                        </div>
                                        <div className={styles['longbutton-filename']}>{file.name.slice(0, 20)}</div>
                                        <div className={styles['longbutton-fileformat']}>{file.type}</div>
                                        <div className={styles['longbutton-fileformat']}>{file.size}MB</div>
                                        <div className={styles.options}>
                                            <Menu cid={file.cid}
                                                  id={file._id}
                                                  isFavorite={file.isFavorite}
                                                  downloadMenu={true}
                                                  shareMenu={true}
                                                  deleteMenu={true}
                                                  favoriteMenu={true}
                                            />
                                        </div>
                                    </div>
                                </button>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </Fragment>
    );
};

export default SharedFilesLayout;
