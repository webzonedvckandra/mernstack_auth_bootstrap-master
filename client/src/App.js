import React,{useEffect} from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header';
import {useDispatch} from 'react-redux';
import { setUser } from './redux/features/AuthSlice';



function App() {
  const dispatch=useDispatch();
  const user=JSON.parse(localStorage.getItem("profile"))
  useEffect(()=>{
    dispatch(setUser(user))
  },[])
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
