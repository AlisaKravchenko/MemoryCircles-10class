import { useNavigate } from "react-router-dom"


export default function ExitButton(props){ 
    const navigate = useNavigate();

    function onClick(){
        if (props.score && JSON.parse(localStorage.getItem(props.level)) < props.score){
            localStorage.setItem(props.level, JSON.stringify(props.score))
        }
        props.exitFunc()
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