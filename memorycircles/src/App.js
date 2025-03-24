import './App.css';
import Main from './Components/Main/Main'
import Levels from './Components/Levels';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Settings from './Components/Settings/Settings';
import Game from './Components/Game/Game';


function App() {
  const [level, setLevel] = useState(JSON.parse(localStorage.getItem('currentLevel')));
  const [checkedTheme, setCheckedTheme] = useState(JSON.parse(localStorage.getItem('darkTheme')))
  function changeLevel(newLevel){
    setLevel(newLevel)
  }

  function setTheme(){
    localStorage.setItem('darkTheme', !checkedTheme)
    setCheckedTheme(prev => !prev)
    
  }
  
  return (
    <div className={checkedTheme ? 'darkTheme App' : 'App'}>
      <HashRouter>
        <Routes>
            <Route exact path='/' element={<Main level={level} />}></Route>
            <Route path='/game' element={<Game level={level}/>}  ></Route>
            <Route path='/levels' element={<Levels level={level} onChangeLevel={changeLevel}/>}  ></Route>
            <Route path='/settings' element={<Settings setTheme={setTheme} checkedTheme={checkedTheme}/>}  ></Route>

        </Routes>
        </HashRouter>
    </div>
  );
}

export default App;
