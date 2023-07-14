"use client"
import React, {Fragment, useEffect, useState} from 'react';
import Navbar from "@/components/Navbar/Navbar";
import styles from "./profile.module.css";
import {baseUrl} from "@/app/api/api";
import {toast} from "react-hot-toast";
import Modal from "@/components/Modal/Modal";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {useRouter} from "next/navigation";
import {ClipLoader} from "react-spinners";


const Page = () => {

    const router = useRouter();

    const [user, setUser] = useState({
        name: "",
        email: "",
        avatar: "",
    });
    const [loading, setLoading] = useState(false);
    const [isAvatarChanged, setIsAvatarChanged] = useState(false);

    const [showModal, setShowModal] = useState(false);

    const handleModalClose = () => {
        setShowModal(false);
    }


    useEffect(() => {
        if (!localStorage.getItem("token")) {
            toast("Please login to continue")
            router.push("/login");
        }

        fetch(`${baseUrl}api/auth/profile`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setUser(data.user);
                } else {
                    toast("Please login to continue")
                    router.push("/login");
                }
            })
            .catch((err) => {
                console.error(err);
                toast.error(err)
            })
    }, []);

    const onEditClick = () => {
        setShowModal(true);
    }


    const handleImageChange = (event) => {
        const image = event.target.files?.[0];
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onloadend = () => {
            setUser({
                ...user,
                avatar: reader.result
            })
        }
        setIsAvatarChanged(true);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", user.name);
        formData.append("email", user.email);
        if(isAvatarChanged)
            formData.append("avatar", user.avatar);
        console.log(user)
        setLoading(true)
        fetch(`${baseUrl}api/auth/profile/update`, {
            method: "PUT",
            headers: {
                // "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.success) {
                    toast.success("Profile updated successfully");
                    setShowModal(false);
                    setUser(data.user)
                } else {
                    toast.error(data.message)
                }
                setLoading(false)
            })
            .catch((err) => {
                console.error(err);
                toast.error(err)
                setLoading(false)
            });
    }

    return (
        <Fragment>
            <div className={styles['left-side']}>
                <div className={styles['profile-photo']}>
                    <img src={user?.avatar.url ? user?.avatar.url : "/avatar.png"} alt="Profile Photo"/>
                </div>
                <div>
                    <button onClick={() => router.push('/mycloud')} className={`${styles.button1} ${styles.home}`}>My
                        Cloud
                    </button>
                    <button onClick={() => router.push('/shared')} className={`${styles.button1} ${styles.home}`}>Shared
                        Files
                    </button>
                    <button onClick={() => router.push('/favourites')}
                            className={`${styles.button1} ${styles.home}`}>Favorites
                    </button>
                    <button onClick={() => router.push('/upload')} className={`${styles.button1} ${styles.home}`}>Upload
                        Files
                    </button>
                </div>
                <div className={styles.leftbuttonbottom}>
                    <button className={styles.button2} onClick={() => router.push('/profile')}>Profile</button>
                    <button className={styles.button2} onClick={() => {
                        toast.success("Logged out successfully");
                        localStorage.removeItem("token");
                        router.push("/login");
                    }}>Log out
                    </button>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles['main-content']}>
                    <div className={styles.profile}>
                        <h2>My Profile</h2>
                        <div className={styles.profileDetails}>
                            <div className={styles.profileDetailsLeft}>
                                <img src={user?.avatar.url} alt={user?.name}/>
                                <button onClick={onEditClick}>Edit Profile</button>
                            </div>
                            <div className={styles.profileDetailsRight}>
                                <div>
                                    <h4>Full Name</h4>
                                    <p>{user?.name}</p>
                                </div>
                                <div>
                                    <h4>Email Address</h4>
                                    <p>{user?.email}</p>
                                </div>
                                <div>
                                    <h4>Joined On</h4>
                                    <p>
                                        {String(user?.createdAt).substring(8, 10)}-
                                        {String(user?.createdAt).substring(5, 7)}-
                                        {String(user?.createdAt).substring(0, 4)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Modal open={showModal} onClose={handleModalClose}>
                    <div className={`${styles.wrapperContainer}`}>
                        <div className={`${styles.wrapper}`}>
                            <div className={`${styles['title-text']}`}>
                                <div className={`${styles['title']} ${styles.login}`}>Update Profile</div>
                            </div>
                            <div className={`${styles['form-container']}`}>
                                <div className={`${styles['form-inner']}`}>
                                    <form className={`${styles.signup}`} onSubmit={handleSubmit}>
                                        <div className={`${styles.field} ${styles.flex}`}>
                                            <input
                                                className={`${styles.inputBox}`}
                                                type="text"
                                                placeholder="Name"
                                                name="name"
                                                value={user?.name}
                                                onChange={(e) => setUser({...user, [e.target.name]: e.target.value})}
                                            />
                                        </div>
                                        <div className={`${styles.field} ${styles.flex}`}>
                                            <input
                                                className={`${styles.inputBox}`}
                                                type="text"
                                                placeholder="Email Address"
                                                name="email"
                                                value={user?.email}
                                                onChange={(e) => setUser({...user, [e.target.name]: e.target.value})}
                                            />
                                        </div>
                                        <div className={`${styles.field} ${styles.FileSelector}`}>
                                            {user?.avatar ? (
                                                <img className={`${styles.avatar}`} src={user?.avatar.url}
                                                     alt="Uploaded Avatar"/>
                                            ) : (
                                                <AccountCircleIcon fontSize="large"/>
                                            )}
                                            <input type="file" accept="image/*" name="avatar"
                                                   onChange={handleImageChange}/>
                                        </div>
                                        <div className={`${styles.field} ${styles.btn}`}>
                                            <div className={`${styles['btn-layer']}`}></div>
                                            {loading ?
                                            <ClipLoader
                                                color="#fffffd"
                                                size={20}
                                            /> :
                                            <input type="submit" value="SAVE"/>
                                            }

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </Modal>
            </div>
        </Fragment>
    );
};

export default Page;
