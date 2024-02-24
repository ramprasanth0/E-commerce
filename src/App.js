// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Home from './pages/Home';
// import Login from './pages/Login';
// import SignUp from './pages/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/login' element={<Login />} /> */}
        {/* <Route path='/signup' element={<SignUp />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
