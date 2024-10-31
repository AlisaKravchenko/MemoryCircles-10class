import { useEffect, useState } from "react";
import './Game.css';
import { useNavigate } from "react-router-dom"
import { colors, levels } from "../data";
import Circle from "./Circle";
import { getCirclesOrder, getRandomInt } from "../../utils";
import ExitButton from "../ExitButton";
export default function Game(props){ 
    //console.log(props.flashNum)
    const allCircles = [];
    const count = levels[props.level][0]*levels[props.level][1];
    // console.log(count);

    //console.log(props.flash)
    for (let i=0;i<count;i++){
        allCircles.push(colors[i]);
    }
    const [flashState, setFlashState] = useState(0);
    const [flashNum, setFlashNum] = useState(-1)
    useEffect(() => {
        let timerId = setInterval(() => {
            const num = getRandomInt(count)
            props.addRandomCircle(num)
            setFlashNum(() => num)
            setFlashState(prevState => prevState+1)
            console.log(flashState)
        }, 1000);
        setTimeout(() => { clearInterval(timerId); alert('stop'); }, 10000);

    }, [])

    // const [score, setScore] = useState(0);

    function onCircleClick(number){
        //setScore(() => 1)
        //console.
    }
    const score=0;
    
  return (
    <div>
            <h1 className='score' >
                Score: {score}
            </h1>
        
        <div className='circles' >
            {Object.keys(allCircles).map((key,index) => <Circle color={colors[index]} key={colors[index]} number={index} level={props.level} onCircleClick={onCircleClick} flashNum={flashNum} flashState={flashState}/>)}
        </div>
        <ExitButton />
      </div>
    
  );
}