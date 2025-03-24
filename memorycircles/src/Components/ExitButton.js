import { useNavigate } from "react-router-dom"
import { orderCircles } from "./Game/Game";


export default function ExitButton(props){ 
    const navigate = useNavigate();

    function onClick(){
        if (props.score && JSON.parse(localStorage.getItem(props.level)) < props.score){
            localStorage.setItem(props.level, JSON.stringify(props.score))
        }
        //props.exitFunc()
        orderCircles.length = 0
        navigate('/')
        
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