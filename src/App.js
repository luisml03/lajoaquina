import Sidebar from '../src/pages/homepage';
import Carrusel from './pages/slider';
import './App.css';
import { BrowserRouter, Route, Router, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>  
<Routes>

<Route path='/lajoaquina' element= {<Sidebar />}/>
<Route path='/ca' element= {<Carrusel />}/>

</Routes>
</BrowserRouter> 
  );
}

export default App;
