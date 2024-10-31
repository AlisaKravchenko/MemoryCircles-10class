import {useState } from "react";
import { useNavigate } from "react-router-dom"
export default function ExitButton(props){ 
    const [isHover, setIsHover] = useState(false);
    const navigate = useNavigate();
    function onClick(){
        navigate('/')
    }
    function onMouseEnter(){
        setIsHover(prevState => !prevState);
    }
    
  return (
    <div>
         
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