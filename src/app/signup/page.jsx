import Head from 'next/head';
import "./signup.css"
import Link from "next/link";
export default function Signup() {
    return (
        <div className="login-container">
            <Head>
                <title>Sign up</title>
            </Head>
            <div className="logo-container">
                <img src="/dcloud.png" alt="dCloud" className="logo-img"/>

            </div>
            <h2 className="title">Sign Up</h2>

            <form action="src/app#" method="POST" className="form">
                <div className="form-group">
                    <label htmlFor="name" className="label">Name</label>
                    <input id="name" name="name" type="text" required className="input"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="label">Email address</label>
                    <input id="email" name="email" type="email" autoComplete="email" required className="input"/>
                </div>

                <div className="form-group">
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="label">Password</label>

                    </div>
                    <input id="password" name="password" type="password" autoComplete="current-password" required
                           className="input"/>
                </div>
                <div className="form-group">
                    <button type="submit" className="button">Sign Up</button>
                </div>
            </form>

            <p className="already-a-member">Already a member? <Link href="/login" className="signin-link">Sign In</Link></p>
        </div>
    )
}
