import { useNavigate } from "react-router-dom"
import { orderCircles } from "./Game/GameOrder";


export default function ExitButton(props){ 
    const navigate = useNavigate();

    function onClick(){
        if (props.score && JSON.parse(localStorage.getItem(props.level)) < props.score){
            localStorage.setItem(props.level, JSON.stringify(props.score))
        }
        navigate('/')
        orderCircles.length  = 0;
    }
    
    return (
        <div>
            
            <button className='mainButton exitButton' onClick={onClick} >
                <div className='mainButtonWrap'>
                    Exit
                </div>
            </button>
        </div>
        
    );
}