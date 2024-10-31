import { useEffect, useState } from "react";
import './Game.css';
import { colors, levels } from "../data";
import Game from "./Game";
import { getRandomInt} from "../../utils";

export const orderCircles = [];
export default function GameOrder(props){ 
    const [score, setScore] = useState(-1);

    const allCircles = [];
    const count = levels[props.level][0]*levels[props.level][1];
    for (let i=0;i<count;i++){
        allCircles.push(colors[i]);
    }
  
    useEffect(() => {
        addRandomCircle();
    },[])
    function addRandomCircle(){
        orderCircles.push(getRandomInt(count))
        setScore(prevState => prevState+1)
        //props.setMistakeFlag(() => false)
    }
    
  return (
    <Game level={props.level} setScore={setScore} score={score} addRandomCircle={addRandomCircle} orderCircles={orderCircles}/>
  );
}