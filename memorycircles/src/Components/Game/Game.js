import { useState } from "react";
import './Game.css';
import { useNavigate } from "react-router-dom"
export default function Game(props){

    const [score, setScore] = useState(0);
    let level = '1';
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
        <div className='score-wrap'>
            <div className='score'>
                Score: {score}
            </div>
        </div>
        <button className='mainButton' onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseEnter}>
            <div className='mainButtonWrap'>
                Exit
                <div className={isHover ? 'arrow-1 arrow-hover' : 'arrow-1'}>
                    <div className="arrow-1-div" ></div>
                </div>
            </div>
        </button>
      </div>
    
  );
}