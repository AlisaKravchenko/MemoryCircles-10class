import { useEffect, useState } from "react";
import './Game.css';
import { colors, levels } from "../data";
import Circle from "./Circle";
import { orderCircles } from "./GameOrder";
import ExitButton from "../ExitButton";
import Mistake from "./Mistake";
export default function Game(props){ 
    const allCircles = [];
    let currentNum = 0;
    const count = levels[props.level][0]*levels[props.level][1];
    const [mistakeFlag, setMistakeFlag] = useState(false)
    const [clickFlag, setClickFlag] = useState(false);

    for (let i=0;i<count;i++){
        allCircles.push(colors[i]);
    }
    const [flashState, setFlashState] = useState(0);

    useEffect(() => {
        let timerId = setInterval(() => {
            setFlashState(prevState => prevState+1)
        }, 1000);
        setTimeout(() => { 
            clearInterval(timerId)
            setClickFlag(() => true)
            currentNum = 0;
        }, 1000*(props.score+1));

    }, [props.score])
    
    function onCircleClick(number){
        if (props.orderCircles[currentNum] === number){
            currentNum++;
            if (currentNum-1===props.score){
                setClickFlag(() => false)
                props.addRandomCircle()
                setFlashState(() => 0)
            }
        } else {
            setMistakeFlag(() => true)
        }
    }
    
  return (
    <div>
            <h1 className='score' >
                Score: {props.score}
            </h1>
        
        <div className='circles' >
            {Object.keys(allCircles).map((key,index) => {
                return <Circle 
                    color={colors[index]} 
                    key={colors[index]} 
                    number={index} 
                    level={props.level} 
                    onCircleClick={onCircleClick} 
                    flashNum={orderCircles[flashState-1]} 
                    flashState={flashState} 
                    clickFlag={clickFlag}
                />
            } )}
        </div>
        <ExitButton />
        {mistakeFlag ? <Mistake score={props.score} setMistakeFlag={setMistakeFlag} setScore={props.setScore}/> : ''}
      </div>
      
    
  );
}