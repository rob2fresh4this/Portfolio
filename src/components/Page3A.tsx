import React from "react";
import logo from "../Images/CodeStack1.png"
import code from "../Images/Code.png"
import { Flex , Image } from 'antd'


const Page3A: React.FC = () => {
    return (

        <div className="gap7 font">
            <div className="box1">
                <Flex justify={"center"} gap="400px" vertical={false}>
                    <Flex vertical={true}>
                        <h1>Plan A: CodeStack/Software Developer</h1>
                        <h2 className="marginTopBottom">What I'll learn Going to CodeStack:</h2>
                        <p className="marginTopBottom1">web, mobile, and software application development; graphic and multimedia design; and video production</p>
                        <h2 className="marginTopBottom">Cost of Going to CodeStack:</h2>
                        <p className="marginTopBottom1">$5,000</p>
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
                        <h1>Software Developer</h1>
                        <h2 className="marginTopBottom">Potential Salary</h2>
                        <p className="marginTopBottom1">75,000 to 110,000</p>
                        <h2 className="marginTopBottom">Why I'm interested in this career:</h2>
                        <p className="marginTopBottom1">The reason why I want this job is because I really enjoy this and would like this job. With the fact that i really enjoyed making the site</p>
                    </Flex>
                    <Flex justify={"center"} vertical={true} >
                        <div className="size5 gap">
                            <Image src={code} alt=""/>
                        </div>

                    </Flex>
                </Flex>
            </div>
            
        </div>
        
    )
}

export default Page3A;

