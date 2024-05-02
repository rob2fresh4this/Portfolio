import React from "react";
import "./Page4.css";
import { Flex } from 'antd';
import logo from "../Images/hatch.png"


const Page4: React.FC = () => {
    return (

        <div className="gap1">
        
        <Flex justify={"center"} gap="50px" vertical={false}>
        <img src={logo} alt="" className="size1" />
        <Flex justify={"center"} vertical={true} >
            <div>
                <h1>Duties / Responsibilities:</h1><p>Help with unloading boxes, help with passing out donations food and clothes, watching the gate and guiding people to where they need to go</p>
                <h1>Did this experience benefit you or someone else? How?</h1><p>From the experience I got to meet a lot of people. Bunch of them told me storys and there experiences and what they learned</p>
                <div>
                    <h1>The Best Part:</h1>
                    <p>The Best Part At Hatch Workshop whould have to be after some work and spaced out time there would be bands/artist perfroming there music</p>
                </div>
                <a href="https://linktr.ee/HATCHWorkshop">Hatch Workshop</a>
            </div>
        </Flex>
        </Flex>
        </div>
    )
}

export default Page4;