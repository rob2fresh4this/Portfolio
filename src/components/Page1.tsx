import React from "react";
import "./Page1.css"
import { Flex , Image } from 'antd'
import logo from "../Images/20230915_103402.jpg"
import logo1x1 from "../Images/placeholder1x1.jpg"



const Page1: React.FC = () => {
    return (

        <div className="gap">
        
        <Flex justify={"center"} gap="50px" vertical={false}>
            <Flex vertical={true}>
            <Image src={logo1x1} alt="" width="50%" />
            <Image src={logo1x1} alt="" width="50%" />
            </Flex>
        <Flex justify={"center"} vertical={true} >
            <Image className="img1x1" width="600px" src={logo} alt="" />
        </Flex>
        </Flex>
        </div>
    )
    
}

export default Page1;