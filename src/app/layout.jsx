import './global.css'
import {Inter} from 'next/font/google'
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'dCloud',
    description: 'The future is here',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        {children}
        </body>
        </html>
    )
}
