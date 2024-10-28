import './App.css';
import Main from './Components/Main'
import {HashRouter, Routes, Route, NavLink} from 'react-router-dom';



function Edit(){
  return (
    <div>
      <h1>Edit</h1>
      <NavLink to='/'>Go to Main!!</NavLink>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/edit' element={<Edit />}></Route>

        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
