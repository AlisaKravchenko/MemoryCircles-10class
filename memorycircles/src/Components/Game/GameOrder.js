import { useEffect, useState } from "react";
import './Game.css';
import { colors, levels } from "../data";
import Game from "./Game";
import { getRandomInt} from "../../utils";

export const orderCircles = [];
export default function GameOrder(props){ 
    const [score, setScore] = useState(-1);
    const [render, setRender] = useState(true)
    const allCircles = [];
    const count = levels[props.level][0]*levels[props.level][1];
    for (let i=0;i<count;i++){
        allCircles.push(colors[i]);
    }
    function onRetryClick() {
      setScore(() => -1)
      setRender(prev => !prev)
      orderCircles.length = 0
    }
    useEffect(() => {
        addRandomCircle();
    }, [render])
    function addRandomCircle(){
        orderCircles.push(getRandomInt(count))
        setScore(prevState => prevState+1)
        
    }
    
  return (
    <Game 
    level={props.level} 
    onRetryClick={onRetryClick}
    score={score} 
    addRandomCircle={addRandomCircle} 
    />
  );
}