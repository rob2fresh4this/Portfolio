import React from 'react';
import '../index.css';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';


interface MainDisplayProps {
    displayKey: number
}

const MainDisplay: React.FC<MainDisplayProps> = ({displayKey}) => {

    switch (displayKey) {
        case 1:
            return (
                <Page1 />
            )
        case 2:
            return (
                <Page2 />
            )

        case 3:
            return (
                <Page3 />
            )
        
        default:
            return (
                <h1>nothing to display</h1>
            )
    }
};

export default MainDisplay;