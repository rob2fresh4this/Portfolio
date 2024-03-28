import './Portfolio.css';
import NavBar from './components/NavBar';
import Body from './components/Body';
import { useState } from 'react';

const [key, setKey] = useState(0);
function handleClick(pageNum: number) {
  setKey(pageNum)
}

function Portfolio() {
  return (
    <div className="App">
      <NavBar onClick={handleClick} />
      <Body key={key}/>
      
      
    </div>
  );
}

export default Portfolio;
