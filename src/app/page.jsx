import React, {Fragment} from 'react';
import Link from "next/link";
import "./style.css"

const Page = () => {
    return (
        <Fragment>
            <div className="container">
                <div>
                    <h1>All your files in </h1>
                    <h2>one safe place</h2>
                    <h3>Free file storage for everyone. Store your</h3>
                    <h4>document, music, images for a low price</h4>
                </div>
                <Link href="/mycloud">
                    <button className="upload-button">
                        <span className="button-text">Start Uploading</span>
                    </button>
                </Link>
            </div>
            <img src="home.jpg" alt="Image" className="image"/>
        </Fragment>
    )
};

export default Page;
