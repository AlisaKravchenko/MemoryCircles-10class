import { useState } from "react";
import './Main.css';
import { useNavigate } from "react-router-dom"
export default function Main(){
    let level = '1';
    const [isHoverPlay, setIsHoverPlay] =useState(false);
    const [isHoverLevels, setIsHoverLevels] =useState(false);
    const navigate = useNavigate();
    function onClickPlay(){
        navigate('/game')
    }
    function onClickLevels(){
        navigate('/levels')
    }
    function onHoverPlay(){
        setIsHoverPlay(prevState => !prevState);
    }
    function onHoverLevels(){
        setIsHoverLevels(prevState => !prevState);
    }

  return (
    <div>
      <h1>TRAIN YOUR MEMORY!</h1>
      <h3 >LEVEL: {level}</h3>
        <div className='playButton'>
            <button className='mainButton .play' onClick={onClickPlay} onMouseEnter={onHoverPlay} onMouseLeave={onHoverPlay}>
            <div className='mainButtonWrap'>
                PLAY
                <div className={isHoverPlay ? 'arrow-1 arrow-hover' : 'arrow-1'}>
                    <div className="arrow-1-div" ></div>
                </div>
            </div>
        </button>
        </div>
        <div >
        <button className='mainButton .levels' onClick={onClickLevels} onMouseEnter={onHoverLevels} onMouseLeave={onHoverLevels}>
            <div className='mainButtonWrap'>
                LEVELS
                <div className={isHoverLevels ? 'arrow-1 arrow-hover' : 'arrow-1'}>
                    <div className="arrow-1-div" ></div>
                </div>
            </div>
        </button>
      </div>
      </div>
    
  );
}