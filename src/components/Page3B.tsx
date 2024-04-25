import React from "react";
import logo from "../Images/placeholder1x1.jpg"
import { Flex , Image } from 'antd'


const Page3B: React.FC = () => {
    return (

        <div className="gap7 font">
            <div className="box1">
                <Flex justify={"center"} gap="400px" vertical={false}>
                    <Flex vertical={true}>
                        <h1>Plan B: </h1>
                        <h2 className="marginTopBottom">Words:</h2>
                        <p className="marginTopBottom1">Words</p>
                        <h2 className="marginTopBottom">Words:</h2>
                        <p className="marginTopBottom1">words</p>
                    </Flex>
                    <Flex justify={"center"} vertical={true} >
                        <div className="size4">
                            <Image src={logo} alt=""/>
                        </div> 
                    </Flex>
                </Flex>
            </div>
            <div className="box2">
                <Flex justify={"center"} gap="350px" vertical={false}>
                    <Flex vertical={true}>
                        <h1>Words</h1>
                        <h2 className="marginTopBottom">Money Made:</h2>
                        <p className="marginTopBottom1">Numbers</p>
                        <h2 className="marginTopBottom">Why I'm interested in this career:</h2>
                        <p className="marginTopBottom1">Words</p>
                    </Flex>
                    <Flex justify={"center"} vertical={true} >
                        <div className="size5 gap">
                            <Image src={logo} alt=""/>
                        </div>

                    </Flex>
                </Flex>
            </div>
            
        </div>
        
    )
}

export default Page3B;