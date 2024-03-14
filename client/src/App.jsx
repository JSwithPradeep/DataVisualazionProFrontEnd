import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/layout/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Chart from "./pages/Chart";

import Table from "./pages/Table";
import Login from "./pages/Login";
import { useSelector } from "react-redux";
import ProtectedRoute from "./components/layout/ProtectedRoute";
import Entry from "./pages/Entry";
function App() {
  const isAuthenticated = useSelector((state)=> state.root)
 return(
  <>
  <BrowserRouter>
<Header/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/chart" element={<Chart/>}/>
  <Route path="/entry" element={<Entry/>}/>
  <Route path="/table" element={<Table/>}/>
  <Route path="/login" element={<Login/>}/>
</Routes>
</BrowserRouter>
  </>
 )
}

export default App;
