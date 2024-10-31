import { useState } from 'react';
import ExitButton from '../ExitButton';
import './Game.css';
import { useNavigate } from 'react-router';
export default function Mistake(props){ 
    const [isHoverRetry, setIsHoverRetry] = useState(false);
    const [isHoverExit, setIsHoverExit] = useState(false);
    const navigate = useNavigate()
    
    function onClickRetry(){
        props.setScore(() => -1)
    }
    function onMouseEnterRetry(){
        setIsHoverRetry(prevState => !prevState);
    }

    function onClickExit(){
        navigate('/')
    }
    function onMouseEnterExit(){
        setIsHoverExit(prevState => !prevState);
    }
    
    
  return (
    <div className='mistakeWindowWrap1'>
        <div className='mistakeWindowWrap2' >
            <div className='mistakeWindow'>
                <h1>MISTAKE!</h1>
                <h2>Score: {props.score}</h2>
                <button className={isHoverRetry ? 'mainButton exitButton  retryHover' : 'mainButton exitButton'} onClick={onClickRetry} onMouseEnter={onMouseEnterRetry} onMouseLeave={onMouseEnterRetry}>
                    <div className={isHoverRetry ? 'mainButtonWrap hoverRetryBg' : 'mainButtonWrap'}>
                        Retry
                        {/* <div className={isHover ? 'arrow-1 arrow-hover' : 'arrow-1'}>
                            <div className="arrow-1-div" ></div>
                        </div> */}
                    </div>
                </button>
                <button className={isHoverExit ? 'mainButton exitButton  retryHover' : 'mainButton exitButton'} onClick={onClickExit} onMouseEnter={onMouseEnterExit} onMouseLeave={onMouseEnterExit}>
                    <div className={isHoverExit ? 'mainButtonWrap hoverRetryBg' : 'mainButtonWrap'}>
                        Exit
                        {/* <div className={isHover ? 'arrow-1 arrow-hover' : 'arrow-1'}>
                            <div className="arrow-1-div" ></div>
                        </div> */}
                    </div>
                </button>
            </div>
        </div>
    </div>
    
  );
}