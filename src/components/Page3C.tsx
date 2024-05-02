import React from "react";
import { Image , Flex } from 'antd'
import letter from "../Images/Screenshot (163).png"
import Resume from "../Images/Resume.png"

const Page3C: React.FC = () => {
    return (
        <div>
            <Flex vertical={false} justify="center">
                <Image src={Resume} preview={false} />
                <Image src={letter} preview={false} />
            </Flex>
            
        </div>
    )
}

export default Page3C