
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Test from './components/Test';
import Modifier from './components/Modifier';
import Details from './components/Details';
import Search from './components/Search';
import Exercice from './components/Exercice';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/test' element={<Test/>}/>
      <Route path='/mod/:id' element={<Modifier/>}/>
      <Route path='/det/:id' element={<Details/>}/>
      <Route path='/se/:nom' element={<Search/>}/>
      <Route path='/exe' element={<Exercice/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
