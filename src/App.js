import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Booking from './pages/booking';
import './App.css';


function App() {
  
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/booking' element={<Booking />} />
    </Routes>
  );
}

export default App;
