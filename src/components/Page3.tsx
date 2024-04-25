import React from "react";
import "./Page3.css"
import { Button, Flex } from 'antd';
import { useState } from 'react';
import P3Switch from "./Page3Switch";



const Page3: React.FC = () => {
    const [displayKey, setDisplayKey] = useState(0);
    function handleClick(pageNum: number) {
        console.log(pageNum)
        setDisplayKey(pageNum)
    }

    return (
    <div className="gap2">
      <Flex gap="30px" wrap="wrap" justify="center">
        <Button type="primary" onClick={()=> handleClick(1)} size="middle" className="sizes font">Plan A</Button>
        <Button type="primary" onClick={()=> handleClick(2)} size="middle" className="sizes font">Plan B</Button>
      </Flex>
      <P3Switch displayKey={displayKey}/>
      
      
    </div>
    );
    
}

export default Page3;