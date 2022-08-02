// Imports
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from './protectedRoute'
import AuthProvider from '../Context/authContext';
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
      <AuthProvider>
        <Routes>
          <Route path='/' element={<App />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/signin' element={<Signin />}/>
          <Route 
            path='/home' 
            element={
              <ProtectedRoute>
                <Home/>
              </ProtectedRoute>
          }/>
          <Route 
            path='/poll' 
            element={
              <ProtectedRoute>
                <Poll/>
              </ProtectedRoute>
          }/>
          <Route 
            path='/tracking' 
            element={
              <ProtectedRoute>
                <Tracking/>
              </ProtectedRoute>
          }/>
          <Route 
            path='/profile' 
            element={
              <ProtectedRoute>
                <Profile/>
              </ProtectedRoute>
          }/>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
