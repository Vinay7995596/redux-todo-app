import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Components/Home';
import NewList from './Components/Adding';
import Editing from './Components/Editing';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/new' element={<NewList/>}/>
      <Route path='/edit/:id' element={<Editing/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
