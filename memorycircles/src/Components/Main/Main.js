import { useState } from "react";
import './Main.css';
import { useNavigate } from "react-router-dom"
export default function Main(props){
    
    const [isHoverPlay, setIsHoverPlay] =useState(false);
    const [isHoverLevels, setIsHoverLevels] =useState(false);
    const navigate = useNavigate();
    function onClickPlay(){
        navigate('/game')
    }
    function onClickLevels(){
        navigate('/levels')
        
    }
    function onClickSettings(){
        navigate('/settings')
        
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
      <h2 >LEVEL: {props.level} <br></br>BEST: {localStorage.getItem(props.level)}</h2>
        <div className='playButton'>
            <button className='mainButton .play' >
            <div className='mainButtonWrap forMainWidth' onClick={onClickPlay}  onMouseEnter={onHoverPlay} onMouseLeave={onHoverPlay}>
                PLAY
                <div className={isHoverPlay ? 'arrow-1 arrow-hover' : 'arrow-1'}>
                    <div className="arrow-1-div" ></div>
                </div>
            </div>
        </button>
        </div>
        <div >
        <button className='mainButton .levels' >
            <div className='mainButtonWrap forMainWidth' onClick={onClickLevels} onMouseEnter={onHoverLevels} onMouseLeave={onHoverLevels}>
                LEVELS
                {/* <div className={isHoverLevels ? 'arrow-1 arrow-hover' : 'arrow-1'}>
                    <div className="arrow-1-div" ></div>
                </div> */}
            </div>
        </button>
        <button className='mainButton .levels' >
            <div className='mainButtonWrap forMainWidth' onClick={onClickSettings} onMouseEnter={onHoverLevels} onMouseLeave={onHoverLevels}>
                SETTINGS
            </div>
        </button>
      </div>
      </div>
    
  );
}