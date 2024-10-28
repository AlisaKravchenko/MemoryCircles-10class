import { useState } from "react";
import './Levels.css';
import { useNavigate } from "react-router-dom"
import { levels } from "../data";
import LevelButton from "../LevelButton";
export default function Levels({onChangeLevel}){
    const handleChangeLevel = (level) => {
        onChangeLevel(level);
    }
    const [isHover, setIsHover] =useState(false);
    const navigate = useNavigate();
    function onClick(){
        navigate('/')
    }
    function onMouseEnter(){
        setIsHover(prevState => !prevState);
    }
    
  return (
    <div>
        <h1>LEVELS</h1>
        <div>
            {Object.keys(levels).map((key,index) => <LevelButton changeLevel={handleChangeLevel} key={levels[key]} level={index+1} />)}
        </div>
        <button className='mainButton exitButton' onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseEnter}>
            <div className='mainButtonWrap'>
                Exit
                {/* <div className={isHover ? 'arrow-1 arrow-hover' : 'arrow-1'}>
                    <div className="arrow-1-div" ></div>
                </div> */}
            </div>
        </button>
      </div>
    
  );
}