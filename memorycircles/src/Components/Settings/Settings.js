import './Settings.css';
import ExitButton from "../ExitButton";


export default function Settings(props){
    
    function changeTheme(){
        const onSetTheme = props.setTheme
        onSetTheme()
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
                                    {/* <select className='themeSelect' onChange={changeTheme}>
                                        <option defaultValue='0' >White</option>
                                        <option defaultValue='1' >Dark</option>
                                    </select> */}
                                    <div className="form-check form-switch themeSwitch"  onClick={changeTheme}>
                                        <input className="form-check-input" checked={props.checkedTheme} type="checkbox" id="flexSwitchCheckChecked" />
                                    </div>
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