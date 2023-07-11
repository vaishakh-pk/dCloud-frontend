import './global.css'
import {Inter} from 'next/font/google'
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import {Toaster} from "react-hot-toast";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'dCloud',
    description: 'The future is here',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Toaster
            position="top-center"
            reverseOrder={true}
        />
        {children}
        </body>
        </html>
    )
}
