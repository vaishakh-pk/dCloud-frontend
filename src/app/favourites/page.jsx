import React, {Fragment} from 'react';
import styles from './favourites.module.css';
import Navbar from "../../components/Navbar/Navbar";

function FavoritesLayout() {
    return (
        <Fragment>
            <Navbar/>
            <div className={styles.container}>
                <div className={styles['main-content']}>
                    {/* Main content in the middle */}
                    <div className={styles['search-bar']}>
                        <input type="text" className={styles['search-input']} placeholder="Search" />
                    </div>

                    <div className={styles.favorites}>
                        <p className={styles['favorites-font']}>Favorites</p>
                        <button className={styles['favorites-button']}>
                            <img src="camera.png" alt="Button Image" />
                            <div className={styles['favorites-button-text']}>
                                <p className={styles['favorites-button-text-name']}>Pictures</p>
                                <p className={styles['favorites-button-text-number']}>100 files</p>
                            </div>
                        </button>
                    </div>

                    <div className={styles.files}>
                        <p className={styles['files-font']}>Files</p>
                        <button className={styles['files-buttons']}>
                            <img src="picture.png" alt="Profile Photo" />
                            <p className={styles.filename}>file_0001</p>
                        </button>
                        <button className={styles['files-buttons']}>
                            <img src="picture.png" alt="Profile Photo" />
                            <p className={styles.filename}>file_0001</p>
                        </button>
                        <button className={styles['files-buttons']}>
                            <img src="picture.png" alt="Profile Photo" />
                            <p className={styles.filename}>file_0001</p>
                        </button>
                        <button className={styles['files-buttons']}>
                            <img src="picture.png" alt="Profile Photo" />
                            <p className={styles.filename}>file_0001</p>
                        </button>
                        <button className={styles['files-buttons']}>
                            <img src="picture.png" alt="Profile Photo" />
                            <p className={styles.filename}>file_0001</p>
                        </button>
                        <button className={styles['files-buttons']}>
                            <img src="picture.png" alt="Profile Photo" />
                            <p className={styles.filename}>file_0001</p>
                        </button>
                    </div>

                    <div className={styles.files}>
                        <p className={styles['files-font']}></p>
                        <button className={styles['files-buttons']}>
                            <img src="picture.png" alt="Profile Photo" />
                            <p className={styles.filename}>file_0001</p>
                        </button>
                        <button className={styles['files-buttons']}>
                            <img src="picture.png" alt="Profile Photo" />
                            <p className={styles.filename}>file_0001</p>
                        </button>
                        <button className={styles['files-buttons']}>
                            <img src="picture.png" alt="Profile Photo" />
                            <p className={styles.filename}>file_0001</p>
                        </button>
                        <button className={styles['files-buttons']}>
                            <img src="picture.png" alt="Profile Photo" />
                            <p className={styles.filename}>file_0001</p>
                        </button>
                        <button className={styles['files-buttons']}>
                            <img src="picture.png" alt="Profile Photo" />
                            <p className={styles.filename}>file_0001</p>
                        </button>
                        <button className={styles['files-buttons']}>
                            <img src="picture.png" alt="Profile Photo" />
                            <p className={styles.filename}>file_0001</p>
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default FavoritesLayout;
