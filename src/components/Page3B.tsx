import React from "react";
import logo from "../Images/delta.jpg"
import logo2 from "../Images/computer.jpg"
import { Flex , Image } from 'antd'


const Page3B: React.FC = () => {
    return (

        <div className="gap7 font">
            <div className="box1">
                <Flex justify={"center"} gap="400px" vertical={false}>
                    <Flex vertical={true}>
                        <h1>Plan B: College/Computer Science </h1>
                        <h2 className="marginTopBottom">What I'll learn Going to Collage:</h2>
                        <p className="marginTopBottom1">code, design and analyze algorithms, and develop software to better my skill</p>
                        <h2 className="marginTopBottom">Cost of Going to Collage:</h2>
                        <p className="marginTopBottom1">Avg cost after aid $14K</p>
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
                        <h1>Computer Science</h1>
                        <h2 className="marginTopBottom">Money Made:</h2>
                        <p className="marginTopBottom1">98k to 180k</p>
                        <h2 className="marginTopBottom">Why I'm interested in this career:</h2>
                        <p className="marginTopBottom1">It like is said "I really like to code" because I really would like a job to code stuff up.</p>
                    </Flex>
                    <Flex justify={"center"} vertical={true} >
                        <div className="size5 gap">
                            <Image src={logo2} preview={false} alt=""/>
                        </div>

                    </Flex>
                </Flex>
            </div>
            
        </div>
        
    )
}

export default Page3B;