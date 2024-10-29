import { useState } from "react";
import './Game.css';
import { useNavigate } from "react-router-dom"
import { colors, levels } from "../data";
import Circle from "./Circle";
export default function Game(props){

    const currentCircles = [];
    const count = levels[props.level][0]*levels[props.level][1];
    console.log(count);
    for (let i=0;i<count;i++){
        currentCircles.push(colors[i]);
    }
    //console.log(currentCircles);
    const [score, setScore] = useState(0);

    const [isHover, setIsHover] =useState(false);
    const navigate = useNavigate();
    function onClick(){
        navigate('/')
    }
    function onMouseEnter(){
        setIsHover(prevState => !prevState);
    }

  return (
    <div>
            <h1 className='score'>
                Score: {score}
            </h1>
        
        <div className='circles'>
            {Object.keys(currentCircles).map((key,index) => <Circle color={colors[index]} key={colors[index]} level={props.level}/>)}
        </div>
        <button className='mainButton exitButton' onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseEnter}>
            <div className='mainButtonWrap'>
                Exit
                {/* <div className={isHover ? 'arrow-1 arrow-hover' : 'arrow-1'}>
                    <div className="arrow-1-div" ></div>
                </div> */}
            </div>
        </button>
      </div>
    
  );
}