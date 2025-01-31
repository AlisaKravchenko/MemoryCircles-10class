import './Settings.css';
import ExitButton from "../ExitButton";
import { useState } from 'react';


export default function Settings(props){
    const [currentSpeed, setCurrentSpeed] = useState(localStorage.getItem('speed'))
    
    function changeTheme(){
        const onSetTheme = props.setTheme
        onSetTheme()
    }

    function changeSpeed(value){
        localStorage.setItem('speed', value.target.value)
        setCurrentSpeed(() => value.target.value)
    }

    return (
        <div>
        <h1>SETTINGS</h1>
            <div className='settingsWrap1'>
                
                <div className='settingsWrap2' >
                    <div className='settingsWindow'>
                        <table>
                            <tr>
                                <th>
                                    <div className='settingsOption'>DARK THEME</div>
                                </th>
                                <th>
                                    <div className="form-check form-switch themeSwitch"  onClick={changeTheme}>
                                        <input className="form-check-input" defaultChecked={props.checkedTheme} type="checkbox" id="flexSwitchCheckChecked" />
                                    </div>
                                </th>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div className='settingsWrap1'>
                <div className='settingsWrap2' >
                    <div className='settingsWindow'>
                        <table>
                            <tr>
                                <th>
                                    <div className='settingsOption'>BLINK SPEED</div>
                                </th>
                                <th>
                                    <select value={currentSpeed} className='settingsSelect' onChange={changeSpeed}>
                                        <option value='100'>100 ms</option>
                                        <option value='200'>200 ms</option>
                                        <option value='300'>300 ms</option>
                                        <option value='400'>400 ms</option>
                                        <option value='500'>500 ms</option>
                                        <option value='600'>600 ms</option>
                                        <option value='700'>700 ms</option>
                                        <option value='800'>800 ms</option>
                                        <option value='900'>900 ms</option>
                                        <option value='1000'>1000 ms</option>
                                    </select>
                                </th>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <ExitButton />
        </div>
        
    );
}