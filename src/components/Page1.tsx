import React from "react";
import "./Page1.css"
import { Flex } from 'antd'
import logo from "../Images/Placeholder.svg"
import logo1x1 from "../Images/placeholder1x1.jpg"



const Page1: React.FC = () => {
    return (

        <div className="gap">
        
        <Flex justify={"center"} gap="50px" vertical={false}>
            <Flex vertical={true}>
            <img src={logo1x1} alt="" width="50%" />
            <img src={logo1x1} alt="" width="50%" />
            </Flex>
        <Flex justify={"center"} vertical={true} >
            <img className="img1x1" src={logo} alt="" />
        </Flex>
        </Flex>
        </div>
    )
    
}

export default Page1;