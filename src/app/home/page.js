import React, { useState } from 'react';
import LeftSide from '../components/left-component';
import MyCloudLayout from '../components/mycloud-layout';
import SharedFilesLayout from '../components/sharedFiles-layout';

const Home = () => {
    const [currentComponent, setCurrentComponent] = useState('My Cloud');

    const handleClick = (componentName) => {
        setCurrentComponent(componentName);
    };

    return (
        <div className="container">
            <LeftSide />
            <div className="main-content">
                {currentComponent === 'My Cloud' ? <MyCloudLayout /> : currentComponent === 'Shared Files' ? <SharedFilesLayout /> : null}
            </div>
        </div>
    );
};

export default Home;
