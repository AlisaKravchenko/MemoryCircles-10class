import './App.css';
import Main from './Components/Main/Main'
import Game from './Components/Game/Game'
import Levels from './Components/Levels/Levels';
import {HashRouter, Routes, Route, NavLink} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
            <Route exact path='/' element={<Main />}></Route>
            <Route path='/game' element={<Game level='1'/>}  ></Route>
            <Route path='/levels' element={<Levels level='1'/>}  ></Route>

        </Routes>
        </HashRouter>
    </div>
  );
}

export default App;
