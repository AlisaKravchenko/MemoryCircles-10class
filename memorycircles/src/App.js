import './App.css';
import Main from './Components/Main/Main'
import Game from './Components/Game/Game'
import Levels from './Components/Levels/Levels';
import {HashRouter, Routes, Route, NavLink} from 'react-router-dom';
import { useState } from 'react';


function App() {
  const [level, setLevel] = useState(1);
  const changeLevel = (newLevel) => {
    setLevel(newLevel)
  }
  return (
    <div className="App">
      <HashRouter>
        <Routes>
            <Route exact path='/' element={<Main level={level} />}></Route>
            <Route path='/game' element={<Game level={level}/>}  ></Route>
            <Route path='/levels' element={<Levels level={level} onChangeLevel={changeLevel}/>}  ></Route>

        </Routes>
        </HashRouter>
    </div>
  );
}

export default App;
