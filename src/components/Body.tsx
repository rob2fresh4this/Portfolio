import React from 'react';
import '../index.css';
import { useState } from 'react';
import NavBar from './NavBar';
import MainDisplay from './MainDisplay';

const Body: React.FC = () => {
    const [displayKey, setDisplayKey] = useState(1);
    function handleClick(pageNum: number) {
        console.log(pageNum)
        setDisplayKey(pageNum)
    }
    
    return (
        <>
            <NavBar onClick={handleClick} />
            <MainDisplay displayKey={displayKey} />
        </>
    )
};

export default Body;