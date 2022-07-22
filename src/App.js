import { Route, Routes } from 'react-router';
import React from 'react';
import Home from './route/home/home.component';
import Navigation from './route/navigation/navigation.component';
import SignIn from './route/sign-in/sign-in.component';
const Shop =()=>{
return(
  <div>
  <h1> i am shop</h1>
  </div>
)
}

const App=()=> {  
  return (
    <Routes >
    <Route path='/' element={<Navigation/>}>
    <Route index element={<Home/>} />
    <Route path="shop" element={<Shop/>}/>
    <Route path="sign-in" element={<SignIn/>}/>
  </Route>
  </Routes>
  );
}

export default App;
