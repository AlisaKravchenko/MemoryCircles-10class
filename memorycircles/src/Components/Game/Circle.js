import { useState } from "react";
import './Game.css';
import { levels } from "../data";
export default function Circle(props){
    const count = levels[props.level][1]
    //const size = (55-2*count)/count +'rem';
    const size=(45-count*2)/count +'rem'
    console.log(size)
    const style1={
        
        width: size,
        height: size
    }
    const style2 = {
        backgroundColor: props.color,
        // height: '100%'
    }
    //const [score, setScore] = useState(0);

    //const [isHover, setIsHover] =useState(false);
    // function onClick(){
        
    // }
    // function onMouseEnter(){
    //     setIsHover(prevState => !prevState);
    // }

  return (
    <div className='circleWrap' style={style1}>
        <div className='circle' style={style2}>

        </div>
    </div>
    
  );
}