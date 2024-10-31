import { useEffect, useState } from "react";
import './Game.css';
import { colors, levels } from "../data";
import Game from "./Game";
import { getRandomInt } from "../../utils";
export const orderCircles = [0];
//const orderCircles = [getRandomInt(count)];
export default function GameOrder(props){ 
    const [score, setScore] = useState(0);
    console.log('ggggg')
    const allCircles = [];
    const count = levels[props.level][0]*levels[props.level][1];
    // console.log(count);
    //const orderCircles = [getRandomInt(count)];
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
    useEffect(() => {
        addRandomCircle();
        console.log('hhhhhhhhhhh')
    },[])
    function addRandomCircle(){
        orderCircles.push(getRandomInt(count))
        setScore(prevState => prevState+1)
        console.log(orderCircles)
    }

    //function onCircleClick(number){
        //setScore(() => 1)
        // console.log(orderCircles)
    //}
    useEffect(() => {
        return () => {
            //console.log('fff')
            //orderCircles.length = 0;
        }
    })
    
  return (
    <Game level={props.level} score={score} addRandomCircle={addRandomCircle} orderCircles={orderCircles}/>
    // <Game level={props.level} flashNum={orderCircles[flashNum]}/>
    
  );
}