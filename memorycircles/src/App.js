import './App.css';
import Main from './Components/Main/Main'
import Levels from './Components/Levels';
import {HashRouter, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import GameOrder from './Components/Game/GameOrder';


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
            <Route path='/game' element={<GameOrder level={level}/>}  ></Route>
            <Route path='/levels' element={<Levels level={level} onChangeLevel={changeLevel}/>}  ></Route>

        </Routes>
        </HashRouter>
    </div>
  );
}

export default App;
