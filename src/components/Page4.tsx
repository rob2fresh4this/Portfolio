import React from "react";
import "./Page4.css";
import { Flex } from 'antd';
import logo from "../Images/B1.jpg"


const Page4: React.FC = () => {
    return (

        <div className="gap1">
        
        <Flex justify={"center"} gap="50px" vertical={false}>
        <img src={logo} alt="" className="size1" />
        <Flex justify={"center"} vertical={true} >
            <div>
                <h1>Duties / Responsibilities: </h1>
                <h1>Skills gained:</h1>
                <div>
                    <h1>Did this experience benefit you or someone else? How?</h1>
                    <p>words</p>
                </div>
            </div>
        </Flex>
        </Flex>
        </div>
    )
}

export default Page4;