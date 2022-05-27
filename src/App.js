import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import NotFound from './Pages/NotFound/NotFound';
import Navbar from './Pages/Shared/Navbar';
import Dashboard from './Pages/Dashboard/Dashboard';
import RequireAuth from './Pages/Shared/RequireAuth';
import Purchase from './Pages/Purchase/Purchase';
import Blog from './Pages/Blog/Blog';
import MyOrder from './Pages/Dashboard/MyOrder';
import MyProfile from './Pages/Dashboard/MyProfile';
import AddReview from './Pages/Dashboard/AddReview';
import AddParts from './Pages/Dashboard/AddParts';
import UpdateProfile from './Pages/Dashboard/UpdateProfile';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="home" element={<Home></Home>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="signup" element={<SignUp></SignUp>}></Route>
        <Route path='blog' element={<Blog></Blog>}></Route>
        <Route path='purchase/:purchaseId' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
        <Route path="dashboard" element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path='addReview' element={<AddReview></AddReview>}></Route>
          <Route path='myProfile' element={<MyProfile></MyProfile>}></Route>
          <Route path='profile/:id' element={<UpdateProfile></UpdateProfile>}></Route>
          <Route path='addParts' element={<AddParts></AddParts>}></Route>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
