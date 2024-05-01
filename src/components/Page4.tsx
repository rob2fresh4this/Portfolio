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
                <h1>Duties / Responsibilities:</h1><p>Help with unloading boxes, help with passing out donations food and clothes, watching the gate and guiding people to where they need to go</p>
                <h1>Skills gained:</h1><p></p>
                <div>
                    <h1>Did this experience benefit you or someone else? How?</h1>
                    <p>A little to have think and ask questions on the costomer to know what they like</p>
                </div>
            </div>
        </Flex>
        </Flex>
        </div>
    )
}

export default Page4;