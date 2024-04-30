import React from "react";
import "./Page2.css"
import { Flex , Image } from 'antd'
import logo1x1 from "../Images/strength-post.jpg"
import logo from "../Images/Sales-challenges.jpg"


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
                    <li>Learned A lot from school</li>
                    <li>Know how to code</li>
                    <li>Better understanding of Problem Solving</li>
                </div>
        </div>
        <div className="fixDiv">
            <div  className="size">
                <Image src={logo} alt=""/>
            </div>
            <h1>Challenges</h1>
                <div className="left">
                    <li>Living Situation</li>
                    <li>Getting ready for the big leap</li>
                    <li>The Changes</li>
                </div>
        </div >
        </Flex>
        <div className="box">
            <h1>Skills Learned in the one.Program</h1>
                <li>Learned How to use html/css JavaScript TypeScript</li>
                <li>How to use Unity</li>
                <li>Better Time Management</li>

        </div>
        
    </div>
    )
}

export default Page2;