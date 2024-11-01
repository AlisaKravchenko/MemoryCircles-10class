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

    function retryClick(){
        setMistakeFlag(() => false)
        setFlashState(() => -1)
        setClickFlag(() => false)
        currentNum=0
        const onRetryClick = props.onRetryClick
        onRetryClick()
    }


    useEffect(() => {
        let timerId = setInterval(() => {
            setFlashState(prevState => prevState+1)
        }, 1000);
        const timeout = setTimeout(() => { 
            clearInterval(timerId)
            setClickFlag(() => true)
            currentNum = 0;
        }, 1000*(orderCircles.length+1));
        return () => {
            clearTimeout(timeout)
            clearInterval(timerId)
        }
    }, [props.score])
    
    function onCircleClick(number){
        if (orderCircles[currentNum] === number){
            currentNum++;
            if (currentNum-1===orderCircles.length-1){
                setClickFlag(() => false)
                props.addRandomCircle()
                setFlashState(() => 0)
            }
        } else {
            orderCircles.length  = 0;
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
                    key={index} 
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
        {mistakeFlag ? <Mistake score={props.score}  retryClick={retryClick}/> : ''}
      </div>
      
    
  );
}