import { useEffect, useState } from "react";
import './Game.css';
import { useNavigate } from "react-router-dom"
import { colors, levels } from "../data";
import Circle from "./Circle";
import { getCirclesOrder, getRandomInt } from "../../utils";
import ExitButton from "../ExitButton";
export default function Game(props){ 
    
    console.log('render', props.orderCircles)
    const allCircles = [];
    let currentNum = 0;
    const count = levels[props.level][0]*levels[props.level][1];
    // console.log(count);
    const [clickFlag, setClickFlag] = useState(false);
    //console.log(props.flash)
    for (let i=0;i<count;i++){
        allCircles.push(colors[i]);
    }
    const [flashState, setFlashState] = useState(0);
    console.log(flashState)
    //const [flashNum, setFlashNum] = useState(-1)
    useEffect(() => {
        console.log('effect')
        let timerId = setInterval(() => {
            //const num = getRandomInt(count)
            //props.addRandomCircle(num)
            //setFlashNum(prevState => prevState+1)
            setFlashState(prevState => prevState+1)
        }, 1000);
        setTimeout(() => { 
            clearInterval(timerId)
            setClickFlag(() => true)
            currentNum = 0
        }, 1000*(props.score));
        
        //setTimeout(() => { clearInterval(timerId); alert('stop'); }, 10000);

    }, [props.score])

    // const [score, setScore] = useState(0);
    
    function onCircleClick(number){
        if (props.orderCircles[currentNum] === number){
            currentNum++;
            //console.log(currentNum, 'cu')
            if (currentNum-1===props.score){
                setClickFlag(() => false)
                props.addRandomCircle()
                
                setFlashState(() => 0)
            }
        } else {
            alert('mistake')
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
                    flashNum={props.orderCircles[flashState]} 
                    flashState={flashState} 
                    clickFlag={clickFlag}
                />
            } )}
        </div>
        <ExitButton />
      </div>
    
  );
}