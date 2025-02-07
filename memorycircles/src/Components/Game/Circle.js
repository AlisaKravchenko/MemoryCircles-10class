import { useEffect, useState } from "react";
import './Game.css';
import { levels } from "../data";
import { redCircleNum } from "./Game";
export default function Circle(props){
    const [isHover, setIsHover] =useState(false);
    const count = levels[props.level][1]
    const size=(45-count*2)/count +'rem'
    const style1={
        width: size,
        height: size
    }
    const [style2, setStyle2] = useState({
        backgroundColor: props.color,
    })

    useEffect(() => {
        const speed = JSON.parse(localStorage.getItem('speed'))
        if (props.index === props.flashNum[0] && (redCircleNum ===-1 || props.flashState - 1 !== redCircleNum)){
            
            setStyle2(() => {
                return {
                    backgroundColor: props.color,
                    filter: 'brightness(50%)',
                }    
            } )
            setTimeout(() => {
                setStyle2(() => {
                    return {
                        backgroundColor: props.color,
                        filter: 'brightness(100%)',
                    }  
                })
            }, speed)
           
        }

        if (props.index === props.flashNum[0] && redCircleNum!==-1 && props.flashState - 1 === redCircleNum){
            
            setStyle2(() => {
                return {
                    backgroundColor: 'red',
                    border: '0.3rem solid red',
                    filter: 'brightness(80%)',
                }    
            } )
            setTimeout(() => {
                setStyle2(() => {
                    return {
                        backgroundColor: props.color,
                        filter: 'brightness(100%)',
                    }  
                })
            }, speed)
           
        }

    } , [props.flashState])
    
    function onMouseDown(){
        if (props.clickFlag){
            setStyle2(() => {
                return {
                    backgroundColor: props.color,
                    filter: 'brightness(70%)',
                }    
            } )
        }
        
         
    }
    function onMouseUp(){
        if (props.clickFlag){
            setStyle2(() => {
                return {
                    backgroundColor: props.color,
                    filter: 'brightness(100%)',
                }    
            } )
            props.onCircleClick(props.index);
         
        }
         
    }
    function onMouseEnter(){
        setIsHover(prevState => !prevState);
    }

  return (
    <div className='circleWrap' style={style1} onMouseEnter={onMouseEnter} onMouseLeave={onMouseEnter}>
        <button className={isHover ? 'circle circleHover' : 'circle'} style={style2} onMouseUp={onMouseUp} onMouseDown={onMouseDown}>

        </button>
    </div>
    
  );
}