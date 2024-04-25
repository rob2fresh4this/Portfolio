import React from "react";
import "./Page2.css"
import { Flex , Image } from 'antd'
import logo1x1 from "../Images/placeholder1x1.jpg"


const Page2: React.FC = () => {
    return (
    <div className="gap">
        <Flex vertical={false} justify="space-evenly">

        <div className="fixDiv">
            <div  className="size">
                <Image src={logo1x1} alt=""/>
            </div>
            <h1>Strengths</h1>
                <div className="left">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </div>
        </div>
        <div className="fixDiv">
            <div  className="size">
                <Image src={logo1x1} alt=""/>
            </div>
            <h1>Challenges</h1>
                <div className="left">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </div>
        </div >
        </Flex>
        <div className="box">
            <h1>Skills Learned in the one.Program</h1>
                <li>1</li>
                <li>2</li>
                <li>3</li>

        </div>
        
    </div>
    )
}

export default Page2;