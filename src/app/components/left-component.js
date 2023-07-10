"use client";
import React from 'react';
import Link from "next/link";
import { useRouter } from 'next/navigation';
import './styles/left-component.css';

function LeftSide() {
    const router = useRouter();
    return (
        <div className="left-side">
            <div className="profile-photo">
                <img src="/avatar.png" alt="Profile Photo" />
            </div>
            <div>
                <button onClick={() => router.push("/mycloud")} className="button1 home">My Cloud</button>
                <button onClick={() => router.push("/shared")} className="button1 home">Shared Files</button>
                <button onClick={() => router.push("/favourites")} className="button1 home">Favorites</button>
                <button onClick={() => router.push("/upload")} className="button1 home">Upload Files</button>
            </div>
            <div className="leftbuttonbottom">
                <button className="button2">Settings</button>
                <button className="button2">Log out</button>
            </div>
        </div>
    );
}

export default LeftSide;
