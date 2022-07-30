// Imports
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../components/App';
import Login from '../components/Login/Login';
import Signin from '../components/Singin/Signin';
import Home from '../components/Home/Home';
import Poll from '../components/Poll/Poll';
import Tracking from '../components/Tracking/Tracking';
import Profile from '../components/Profile/Profile';

// Router
export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signin' element={<Signin />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/poll' element={<Poll />}/>
        <Route path='/tracking' element={<Tracking />}/>
        <Route path='/profile' element={<Profile />}/>
      </Routes>
    </BrowserRouter>
  );
}
