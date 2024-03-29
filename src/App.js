import logo from './logo.svg';
import './App.css';
import StateBasics from './components/StateBasics';
import { Route, Routes } from 'react-router-dom';
import SampleForm from './components/SampleForm';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='App'>
     <Navbar/>
      <Routes >
        <Route path='/' element ={<StateBasics/>}/>
        <Route path='/form' element={<SampleForm/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
