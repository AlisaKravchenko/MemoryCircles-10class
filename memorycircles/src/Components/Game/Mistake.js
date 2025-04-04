import { useState } from 'react';
import './Game.css';
import { useNavigate } from 'react-router';
export default function Mistake({score, retryClick}){ 
    const [isHoverRetry, setIsHoverRetry] = useState(false);
    const [isHoverExit, setIsHoverExit] = useState(false);
    const navigate = useNavigate()
    
    function onClickRetry(){
        retryClick()
        
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
    <div>
        <div className="mistakeOpacity"></div>
    
        <div className='mistakeWindowWrap1'>
            
            <div className='mistakeWindowWrap2' >
                <div className='mistakeWindow'>
                    <h1>MISTAKE!</h1>
                    <h2>Score: {score}</h2>
                    <button className={isHoverRetry ? 'mainButton exitButton  retryHover' : 'mainButton exitButton'} onClick={onClickRetry} onMouseEnter={onMouseEnterRetry} onMouseLeave={onMouseEnterRetry}>
                        <div className={isHoverRetry ? 'mainButtonWrap hoverRetryBg' : 'mainButtonWrap'}>
                            Retry
                        </div>
                    </button>
                    <button className={isHoverExit ? 'mainButton exitButton  retryHover' : 'mainButton exitButton'} onClick={onClickExit} onMouseEnter={onMouseEnterExit} onMouseLeave={onMouseEnterExit}>
                        <div className={isHoverExit ? 'mainButtonWrap hoverRetryBg' : 'mainButtonWrap'}>
                            Exit
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
}