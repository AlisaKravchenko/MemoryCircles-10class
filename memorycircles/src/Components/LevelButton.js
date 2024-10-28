import { useState } from "react";
import { useNavigate } from "react-router";
export default function LevelButton (props){
    let level = props.level;
    const navigate = useNavigate();
    const [isHover, setIsHover] =useState(false);
    
    function onMouseEnter(){
        setIsHover(prevState => !prevState);
    }
    function onClick(){
        navigate('/');
        props.changeLevel(level);
    }

  return (
    <button className='mainButton levelsMainButton' onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseEnter}>
        <div className='mainButtonWrap'>
            Level {level}
            <div className={isHover ? 'arrow-1 arrow-hover' : 'arrow-1'}>
                <div className="arrow-1-div" ></div>
            </div>
        </div>
    </button>
    
  );
}