import React, {Fragment, useEffect, useState} from 'react';
import styles from './editProfile.module.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const LoginSignup = () => {


    const [userData, setUserData] = useState({
        name: "",
        email: "",
        avatar: ""
    });


    const handleImageChange = (event) => {
        const image = event.target.files?.[0];
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onloadend = () => {
            setUserData({
                ...userData,
                avatar: reader.result
            })
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(userData)
        const formData = new FormData();
        formData.append("name", userData.name);
        formData.append("email", userData.email);
        formData.append("password", userData.password);
        formData.append("avatar", userData.avatar);

        console.log(formData)

    }

    const handleRegisterEmailChange = async (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        });
    }


    return (
        <Fragment>
            <div className="wrapperContainer" style={{display: loading ? "none" : ""}}>
                <div className="wrapper">
                    <div className="title-text">
                        <div className="title login">Update Profile</div>
                    </div>
                    <div className="form-container">
                        <div className="form-inner">
                            <form className="signup" onSubmit={handleSubmit}>
                                <div className="field flex">
                                    <input type="text" placeholder="Name" name="name" value={userData.name}
                                           onChange={(e) => setUserData({
                                               ...userData,
                                               [e.target.name]: e.target.value
                                           })}/>
                                </div>
                                <div className="field flex">
                                    <input type="text" placeholder="Email Address" name="email"
                                           value={userData.email} onChange={(e) => setUserData({
                                        ...userData,
                                        [e.target.name]: e.target.value
                                    })}/>
                                </div>
                                <div className="field flex FileSelector">
                                    {userData.avatar ? (
                                        <img className="avatar" src={userData.avatar} alt="Uploaded Avatar"/>
                                    ) : (
                                        <AccountCircleIcon fontSize="large"/>
                                    )}
                                    <input type="file" accept="image/*" name="avatar" onChange={handleImageChange}/>
                                </div>
                                <div className="field btn">
                                    <div className="btn-layer"></div>
                                    <input type="submit" value="SAVE"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default LoginSignup;
