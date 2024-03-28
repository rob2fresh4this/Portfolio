import React from 'react';
import '../index.css';
import logo from '../Images/image.png'
import {  Layout, Menu, Image } from 'antd';

interface BodyProps {
    key: number
}

const Body: React.FC<BodyProps> = ({key}) => {

    switch (key) {
        case 1:
            return (
                <h1>page1</h1>
            )
        case 2:
            return (
                <h1>page2</h1>
            )

        case 3:
            return (
                <h1>page3</h1>
            )
    }
};

export default Body;