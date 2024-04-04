import React from "react";
import "./Page1.css"
import logo from "../Images/Placeholder.svg"
import logo1x1 from "../Images/placeholder1x1.jpg"
import { Flex } from 'antd'


const Page1: React.FC = () => {
    return (
        <Flex justify={"center"} gap="150px" vertical={false}>
            <Flex vertical={true}>
            <img src={logo1x1} alt="" width="50%" />
            <img src={logo1x1} alt="" width="50%" />
            </Flex>
        <Flex justify={"center"} vertical={true} >
            <img className="img1x1" src={logo} alt="" />
        </Flex>
        </Flex>


    )
    
}

export default Page1;