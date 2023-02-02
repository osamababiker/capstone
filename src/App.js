import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import Booking from './pages/booking';
import BookingConfirmed from './pages/booking/confirmedBooking';
import './App.css';


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/booking' element={<Booking />} />
        <Route exact path='/bookingConfirmed' element={<BookingConfirmed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
