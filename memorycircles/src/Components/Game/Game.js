import { useEffect, useState } from "react";
import './Game.css';
import { colors, levels } from "../../data";
import Circle from "./Circle";
import ExitButton from "../ExitButton";
import Mistake from "./Mistake";
import { getRandomInt } from "../../utils";

export default function Game(props){ 
    let orderCircles = props.orderCircles
    const clickCircles = props.clickCircles
    let redCircleNum = props.redCircleNum
    let currentNum = props.currentNum
    console.log("d")
    const allCircles = [];
    const headStyle = {
        marginTop: '0.7rem',
        marginBottom: '0'
    }
    const count = levels[props.level][0]*levels[props.level][1];
    const [mistakeFlag, setMistakeFlag] = useState(false)
    const [clickFlag, setClickFlag] = useState(false);
    const [score, setScore] = useState(0);
    
    

    for (let i=0;i<count;i++){
        allCircles.push(colors[i]);
    }
    const [flashState, setFlashState] = useState(0);
    function retryClick(){
        setMistakeFlag(() => false)
        setFlashState(() => 0)
        setClickFlag(() => false)

        
        setScore(() => -1)
        orderCircles.length = 0
        addRandomCircle()
        
    }
    function addRandomCircle(){
        const newNum = getRandomInt(count)
        orderCircles.push([newNum, true])
        setScore(prevState => prevState+1)
        
    }
    const speed = JSON.parse(localStorage.getItem('speed'))
    const time = orderCircles.length > 0 ? speed*2*(orderCircles.length+1)-speed : 2*speed;
    useEffect(() => {
        if (orderCircles.length===0){
            const newNum = getRandomInt(count)
            orderCircles.push([newNum, true])
        }
        let clicksCount = 0;
        orderCircles.forEach((item)=>{
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
            console.log("flash")
            setFlashState(prevState => prevState+1)
            
        }, speed*2);
        const timeout = setTimeout(() => { 
            console.log("flash1")
            clearInterval(timerId)
            setClickFlag(() => true)

            
            redCircleNum=-1;
            clickCircles.length = 0;
            orderCircles.forEach((item)=>{
                if (item[1]){
                    clickCircles.push(item[0])
                }    
            })
             
        }, time);
        return () => {
            clearTimeout(timeout)
            clearInterval(timerId)

            
            
        }
    }, [score])
    
    function onCircleClick(number){
        if (clickCircles[currentNum] === number){
            currentNum=currentNum+1;
            if (currentNum===clickCircles.length){
                setClickFlag(() => false)
                setFlashState(() => 0)
                addRandomCircle()
                
            }
        } else {
            orderCircles.length  = 0;
            setMistakeFlag(() => true)
            if (JSON.parse(localStorage.getItem(props.level)) < score){
                localStorage.setItem(props.level, JSON.stringify(score))
            }
            
            
        }
    }
    function exitFunc(){
        orderCircles.length=0
    }
  return (
    <div>
        <h1 className='score' style={props.level === 1 ? headStyle : {}}>
            Score: {score}
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
                    flashNum={flashState >= 1 && orderCircles.length ? orderCircles[flashState-1] : [-1]} 
                    flashState={flashState} 
                    redCircleNum={redCircleNum}
                    clickFlag={clickFlag}
                />
            } )}
        </div>
        <ExitButton level={props.level} score={score} exitFunc={exitFunc} />
        {mistakeFlag ? <Mistake score={score}  retryClick={retryClick}/> : ''}
      </div>
      
    
  );
}
