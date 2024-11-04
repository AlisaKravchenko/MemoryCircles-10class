import { useEffect, useState } from "react";
import './Game.css';
import { colors, levels } from "../data";
import Circle from "./Circle";
import { orderCircles } from "./GameOrder";
import ExitButton from "../ExitButton";
import Mistake from "./Mistake";


export let currentNum = 0;
export default function Game(props){ 
    const allCircles = [];
    const headStyle = {
        marginTop: '0.7rem',
        marginBottom: '0'
    }
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
        const onRetryClick = props.onRetryClick
        onRetryClick()
    }


    useEffect(() => {
        currentNum = 0;
        const speed = JSON.parse(localStorage.getItem('speed'))
        let timerId = setInterval(() => {
            setFlashState(prevState => prevState+1)
        }, speed*2);
        const timeout = setTimeout(() => { 
            clearInterval(timerId)
            setClickFlag(() => true)
            
        }, speed*2*(orderCircles.length+1)-speed);
        return () => {
            clearTimeout(timeout)
            clearInterval(timerId)
        }
    }, [props.score])
    
    function onCircleClick(number){
        if (orderCircles[currentNum] === number){
            currentNum=currentNum+1;
            if (currentNum===orderCircles.length){
                setClickFlag(() => false)
                setFlashState(() => 0)
                props.addRandomCircle()
                
            }
        } else {
            orderCircles.length  = 0;
            setMistakeFlag(() => true)
            if (JSON.parse(localStorage.getItem(props.level)) < props.score){
                localStorage.setItem(props.level, JSON.stringify(props.score))
            }
            
            
        }
    }
    
  return (
    <div>
            <h1 className='score' style={props.level === 1 ? headStyle : {}}>
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
        <ExitButton level={props.level} score={props.score} />
        {mistakeFlag ? <Mistake score={props.score}  retryClick={retryClick}/> : ''}
      </div>
      
    
  );
}