import Head from 'next/head';
import './login.css';
export default function Login() {
    return (
        <div className="login-container">
            <Head>
                <title>Sign in to your account</title>
            </Head>
            <div className="logo-container">
                <img src="/dcloud.png" alt="dCloud" className="logo-img"/>

            </div>
            <h2 className="title">Sign in to your account</h2>

            <form action="src/app#" method="POST" className="form">
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
                <div className="text-sm">
                    <a href="src/app#" className="forgot-password">Forgot password?</a>
                </div>
                <div className="form-group">
                    <button type="submit" className="button">Sign in</button>
                </div>
            </form>

            <p className="not-a-member">Not a member? <a href="/signup" className="signup-link">Sign Up</a></p>
        </div>
    )
}
