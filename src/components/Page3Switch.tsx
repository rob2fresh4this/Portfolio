import Page3A from "./Page3A";
import Page3B from "./Page3B";

interface MainDisplayProps {
    displayKey: number 
}

const P3Switch: React.FC<MainDisplayProps> = ({displayKey}) => {

    switch (displayKey) {
        case 1:
            return (
                <Page3B />
            )
        case 2:
            return (
                <Page3A />
            )
        default:
            return (
                <div></div>
            )
    }
};

export default P3Switch;