import { useEffect, useState } from "react";
import './Game.css';
import { colors, levels } from "../data";
import Circle from "./Circle";
import { orderCircles } from "./GameOrder";
import ExitButton from "../ExitButton";
import Mistake from "./Mistake";
import { getRandomInt } from "../../utils";


export let currentNum = 0;
export let redCircleNum=-1;

export const clickCircles = [];
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
        setFlashState(() => 0)
        setClickFlag(() => false)
        const onRetryClick = props.onRetryClick
        onRetryClick()
    }


    useEffect(() => {
        let clicksCount = 0;
        orderCircles.forEach((item)=>{
            console.log(item)
            if (item[1]){
                clicksCount++;
            }    
        })
        if (orderCircles.length>=5 && getRandomInt(10)<=4 && clicksCount>=2){
            redCircleNum=getRandomInt(orderCircles.length)
            orderCircles[redCircleNum][1]=false;
        }
        currentNum = 0;
        const speed = JSON.parse(localStorage.getItem('speed'))
        let timerId = setInterval(() => {
            setFlashState(prevState => prevState+1)
        }, speed*2);
        const timeout = setTimeout(() => { 
            clearInterval(timerId)
            setClickFlag(() => true)

            console.log(redCircleNum)
            // if (redCircleNum!=-1){
            //     orderCircles[redCircleNum][1]=false;
            //     console.log('g')
            // }
            redCircleNum=-1;
            console.log(orderCircles)
            clickCircles.length = 0;
            //console.log(orderCirclesRed)
            orderCircles.forEach((item)=>{
                console.log(item)
                if (item[1]){
                    clickCircles.push(item[0])
                }    
            })
            console.log(clickCircles)
             
        }, speed*2*(orderCircles.length+1)-speed);
        return () => {
            clearTimeout(timeout)
            clearInterval(timerId)

            
            
        }
    }, [props.score])
    
    function onCircleClick(number){
        if (clickCircles[currentNum] === number){
            currentNum=currentNum+1;
            if (currentNum===clickCircles.length){
                setClickFlag(() => false)
                setFlashState(() => 0)
                props.addRandomCircle()
                
            }
        } else {
            //orderCirclesRed.length  = 0;
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
        <h1 style={{color: (clickFlag ? '#32CD32' : '#FF0000')}}>
            {clickFlag ? "CLICK!" : "REMEMBER!"}
        </h1>
        
        <div className='circles' >
            {Object.keys(allCircles).map((key,index) => {
                return <Circle 
                    color={colors[index]} 
                    key={index} 
                    index={index} 
                    level={props.level} 
                    onCircleClick={onCircleClick} 
                    flashNum={flashState >= 1 ? orderCircles[flashState-1] : [-1]} 
                    flashState={flashState} 
                    redCircleNum={redCircleNum}
                    clickFlag={clickFlag}
                />
            } )}
        </div>
        <ExitButton level={props.level} score={props.score} />
        {mistakeFlag ? <Mistake score={props.score}  retryClick={retryClick}/> : ''}
      </div>
      
    
  );
}
