import React from 'react';
import '../index.css';
import logo from '../Images/image.png'
import {  Layout, Menu, Image } from 'antd';

interface MainDisplayProps {
    displayKey: number
}

const MainDisplay: React.FC<MainDisplayProps> = ({displayKey}) => {

    switch (displayKey) {
        case 1:
            return (
                <h1>Landing Page</h1>
            )
        case 2:
            return (
                <h1>page2</h1>
            )

        case 3:
            return (
                <h1>page3</h1>
            )
        
        default:
            return (
                <h1>nothing to display</h1>
            )
    }
};

export default MainDisplay;