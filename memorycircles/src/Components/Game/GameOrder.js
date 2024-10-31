import { useEffect, useState } from "react";
import './Game.css';
import { colors, levels } from "../data";
import Game from "./Game";

export default function GameOrder(props){ 
    const [score, setScore] = useState(0);
    const [clickFlag, setClickFlag] = useState(false);
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

    //function onCircleClick(number){
        //setScore(() => 1)
        // console.log(orderCircles)
    //}
    useEffect(() => {
        return () => {
            orderCircles.length = 0;
        }
    })
    
  return (
    <Game level={props.level} addRandomCircle={addRandomCircle} />
    // <Game level={props.level} flashNum={orderCircles[flashNum]}/>
    
  );
}