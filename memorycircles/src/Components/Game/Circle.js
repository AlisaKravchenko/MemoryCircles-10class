import { useEffect, useState } from "react";
import './Game.css';
import { levels } from "../data";
export default function Circle(props){
    console.log('render')
   
    console.log(props.flashState)
    
        
    // }, [])
    //const [stateForTimer, setStateForTimer] = useState("state For Timer");

  // useEffect(() => {
  //   const timeout = setTimeout(() => console.log(stateForTimer), 1000);
  //   return () => clearTimeout(timeout);
  // }, [stateForTimer]);
    const [isHover, setIsHover] =useState(false);
    const count = levels[props.level][1]
    const size=(45-count*2)/count +'rem'
    const style1={
        
        width: size,
        height: size
    }
    const [style2, setStyle2] = useState({
        backgroundColor: props.color,
        // height: '100%'
    })
    //const [score, setScore] = useState(0);
    useEffect(() => {
        console.log(props.number, props.flashNum)
        if (props.number === props.flashNum){
            setStyle2(() => {
                return {
                    // opacity: '0.5',
                    backgroundColor: props.color,
                    filter: 'brightness(50%)',
                }    
            } )
            const timer = setTimeout(() => {
                setStyle2(() => {
                    return {
                        // opacity: '0.5',
                        backgroundColor: props.color,
                        filter: 'brightness(100%)',
                    }  
                })
            }, 500)
           
        }
        // setStyle2(() => {
        //    return {
        //         // opacity: '0.5',
        //         backgroundColor: props.color,
        //         filter: 'brightness(100%)',
        //     }    
        //  } )
        //  const timer = setTimeout(() => {
        //     if (props.number === props.flashNum){
        //         setStyle2(() => {
        //             return {
        //                 // opacity: '0.5',
        //                 backgroundColor: props.color,
        //                 filter: 'brightness(100%)',
        //             }  
        //         })
        //     }
        // }, 1000)
        // return () => clearTimeout(timer)
    } , [props.flashState])
    //const [isHover, setIsHover] =useState(false);
    function onMouseDown(){
        setStyle2(() => {
           return {
                // opacity: '0.5',
                backgroundColor: props.color,
                filter: 'brightness(70%)',
            }    
         } )
         props.onCircleClick(props.number);
    }
    function onMouseUp(){
        setStyle2(() => {
           return {
            opacity: '1',
            backgroundColor: props.color,
            filter: 'brightness(100%)',
        }    
         } )
    }
    function onMouseEnter(){
        setIsHover(prevState => !prevState);
    }

  return (
    <div className={isHover ? 'circleWrap circleHover' : 'circleWrap'} style={style1} onMouseEnter={onMouseEnter} onMouseLeave={onMouseEnter}>
        <button className='circle' style={style2} onMouseUp={onMouseUp} onMouseDown={onMouseDown}>

        </button>
    </div>
    
  );
}