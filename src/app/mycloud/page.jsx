"use client"
import React, {Fragment, useEffect, useState} from 'react';
import styles from './mycloud.module.css';
import Navbar from "../../components/Navbar/Navbar";
import {baseUrl} from "@/app/api/api";
import {toast} from "react-hot-toast";
import {useRouter} from "next/navigation";
import Modal from "@/components/Preview/preview";
import Menu from "@/components/Menu/Menu";

const HomePageLayout = () => {

    const router = useRouter();
    const [data, setData] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);


    useEffect(() => {
        fetch(`${baseUrl}api/files`, {
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
    }, [])

    const onDownloadClick = (cid) => {
        const url = `${baseUrl}api/file/download/${cid}/`;
        window.open(url, '_blank');
    };


    return (
        <Fragment>
            <Navbar/>
            <div className={styles.container}>
                {/*{modalOpen && <Modal setOpenModal={setModalOpen} />}*/}
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
                    {/*<div className={styles.filedivision}>*/}
                    {/*    <p>Files</p>*/}
                    {/*    <button className={styles.filesbutton}>*/}
                    {/*        <img src="mycloud/work.png" alt="Button Image"/>*/}
                    {/*        <div className={styles['filedivision-text']}>*/}
                    {/*            <p className={styles['filedivision-text-name']}>Work</p>*/}
                    {/*            <p className={styles['filedivision-text-number']}>100 files</p>*/}
                    {/*        </div>*/}
                    {/*    </button>*/}
                    {/*    <button className={styles.filesbutton}>*/}
                    {/*        <img src="mycloud/person.png" alt="Button Image"/>*/}
                    {/*        <div className={styles['filedivision-text']}>*/}
                    {/*            <p className={styles['filedivision-text-name']}>Personal</p>*/}
                    {/*            <p className={styles['filedivision-text-number']}>540 files</p>*/}
                    {/*        </div>*/}
                    {/*    </button>*/}
                    {/*    <button className={styles.filesbutton}>*/}
                    {/*        <img src="mycloud/school.png" alt="Button Image"/>*/}
                    {/*        <div className={styles['filedivision-text']}>*/}
                    {/*            <p className={styles['filedivision-text-name']}>School</p>*/}
                    {/*            <p className={styles['filedivision-text-number']}>92 files</p>*/}
                    {/*        </div>*/}
                    {/*    </button>*/}
                    {/*    <button className={styles.filesbutton}>*/}
                    {/*        <img src="mycloud/archive.png" alt="Button Image"/>*/}
                    {/*        <div className={styles['filedivision-text']}>*/}
                    {/*            <p className={styles['filedivision-text-name']}>Archive</p>*/}
                    {/*            <p className={styles['filedivision-text-number']}>113 files</p>*/}
                    {/*        </div>*/}
                    {/*    </button>*/}
                    {/*</div>*/}
                    <div className={styles.recentfiles}>
                        <p className={styles.recentflcapt}>Recent files</p>
                        {data?.files.map((file, index) => (
                            <div>
                                <button className={styles.longbutton} onClick={() => {
                                    setModalOpen(true);}}>
                                    <div className={styles['longbutton-elements']}>
                                        <div className={styles['longbutton-icon']}>
                                            <img src="mycloud/camerawhite.png" alt="Profile Photo"/>
                                        </div>
                                        <div className={styles['longbutton-filename']}>{file.name.slice(0, 20)}</div>
                                        <div className={styles['longbutton-fileformat']}>{file.type}</div>
                                        <div className={styles['longbutton-fileformat']}>{file.size}MB</div>
                                        <div className={styles.options}>
                                            <Menu cid={file.cid}/>
                                            {/*<img onClick={() => onDownloadClick(file.cid)} style={{cursor: "pointer"}}*/}
                                            {/*     src="mycloud/download.png" alt="share"/>*/}
                                            {/*<img src="mycloud/options.png" alt="options"/>*/}
                                        </div>
                                    </div>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>


                <div className={styles['right-side']}>
                    <div className={styles['right-content']}>
                        <div className={styles['right-group']}>
                            <div className={styles.addfl}>
                                <button style={{cursor: "pointer"}} className={styles.addfiles}
                                        onClick={() => router.push("/upload")}>
                                    <img src="mycloud/addfiles.png" alt="Upload Icon"
                                         className={styles['upload-icon']}/>
                                    <div className={styles.label}>Add new files</div>
                                </button>
                            </div>
                            <div className={styles.rectanglestorage}>
                                <div className={styles['stor-flex-container']}>
                                    <p className={styles.stor}>Your storage</p>
                                    <div className={styles['stor-flex-grow']}></div>
                                </div>
                                <div className={styles['storage-meter']}>
                                    <p className={styles.stor} style={{fontWeight: 'normal'}}>
                                        {data?.storageInGB.toFixed(2)} GB Used
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
                                            <img src="avatar.png" alt="user"/>
                                            <img src="avatar.png" alt="user"/>
                                        </div>
                                    </div>
                                </button>
                                <button className={`${styles.sharedbutton} ${styles['sharedbutton-colored']}`}>
                                    <div className={styles['sharedbutton-elements']}>
                                        <div className={styles['sharedbutton-filename']}>Vacation photos</div>
                                        <div className={styles.sharedoptions}>
                                            <img src="avatar.png" alt="user"/>
                                        </div>
                                    </div>
                                </button>
                                <button className={`${styles.sharedbutton} ${styles['sharedbutton-colored2']}`}>
                                    <div className={styles['sharedbutton-elements']}>
                                        <div className={styles['sharedbutton-filename']}>Project report</div>
                                        <div className={styles.sharedoptions}>
                                            <img src="avatar.png" alt="user"/>
                                            <img src="mycloud/avatar.png" alt="user"/>
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
