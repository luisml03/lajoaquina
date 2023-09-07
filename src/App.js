import HomePage from '../src/pages/homepage';
import './App.css';
import { BrowserRouter, Route, Router, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>  
<Routes>

<Route path='/' element= {<HomePage />}/>

</Routes>
</BrowserRouter> 
  );
}

export default App;
