"use client";
import React from 'react';
import Link from "next/link";
import { useRouter } from 'next/navigation';
import styles from './Navbar.module.css';

function Navbar() {
    const router = useRouter();
    return (
        <div className={styles['left-side']}>
            <div className={styles['profile-photo']}>
                <img src="/avatar.png" alt="Profile Photo" />
            </div>
            <div>
                <button onClick={() => router.push('/mycloud')} className={`${styles.button1} ${styles.home}`}>My Cloud</button>
                <button onClick={() => router.push('/shared')} className={`${styles.button1} ${styles.home}`}>Shared Files</button>
                <button onClick={() => router.push('/favourites')} className={`${styles.button1} ${styles.home}`}>Favorites</button>
                <button onClick={() => router.push('/upload')} className={`${styles.button1} ${styles.home}`}>Upload Files</button>
            </div>
            <div className={styles.leftbuttonbottom}>
                <button className={styles.button2}>Settings</button>
                <button className={styles.button2}>Log out</button>
            </div>
        </div>
    );
}

export default Navbar;
