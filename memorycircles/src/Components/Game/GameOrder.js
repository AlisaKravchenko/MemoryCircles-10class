import { useEffect, useState } from "react";
import './Game.css';
import { useNavigate } from "react-router-dom"
import { colors, levels } from "../data";
import Circle from "./Circle";
import { getCirclesOrder, getRandomInt } from "../../utils";
import ExitButton from "../ExitButton";
import Game from "./Game";

export default function GameOrder(props){ 
    const allCircles = [];
    const count = levels[props.level][0]*levels[props.level][1];
    // console.log(count);
    const orderCircles = [];
    console.log(orderCircles)
    // console.log(orderCircles)
    for (let i=0;i<count;i++){
        allCircles.push(colors[i]);
    }
    // const [flashNum, setFlashNum] = useState(0)
    // useEffect(() => {
    //     let timerId = setInterval(() => {
    //         setFlashNum(prevState => prevState+1)
    //     }, 1000);
    //     setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);

    // }, [])
    function addRandomCircle(num){
        orderCircles.push(num)
        console.log(orderCircles)
    }
    const [score, setScore] = useState(0);

    //function onCircleClick(number){
        //setScore(() => 1)
        // console.log(orderCircles)
    //}
    
  return (
    <Game level={props.level} addRandomCircle={addRandomCircle} />
    // <Game level={props.level} flashNum={orderCircles[flashNum]}/>
    
  );
}