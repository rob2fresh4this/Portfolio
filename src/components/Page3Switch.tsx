import Page3A from "./Page3A";
import Page3B from "./Page3B";
import logo from "../Images/istockphoto-1311429811-612x612.jpg"
import { Image, Flex } from 'antd';

interface MainDisplayProps {
    displayKey: number 
}

const P3Switch: React.FC<MainDisplayProps> = ({displayKey}) => {

    switch (displayKey) {
        case 1:
            return (
                <Page3A />
            )
        case 2:
            return (
                <Page3B />
            )
        default:
            return (
                <Flex justify="center">
                <Image src={logo} preview={false} className="center"/>
              </Flex>
            )
    }
};

export default P3Switch;