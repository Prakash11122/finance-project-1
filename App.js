import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import Otppage from './components/Otppage';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';



import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Otppage' element={<Otppage/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
      </Routes>
      
     
    </div>
  );
}

export default App;
