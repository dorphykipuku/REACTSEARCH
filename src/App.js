
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Test from './components/Test';
import Modifier from './components/Modifier';
import Details from './components/Details';

import Exercice from './components/Exercice';
import Cherche from './components/Cherche';
import Pagination from './components/Pagination';

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
      <Route path='/se' element={<Cherche/>}/>
      <Route path='/exe' element={<Exercice/>}/>
      <Route path='/pa' element={<Pagination/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
