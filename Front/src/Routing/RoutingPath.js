import React from 'react'
import { Routes, Route } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import Dj from '../Components/Dj';
import CaterersData from '../Components/Caterers';
import PhotoData from '../Components/PhotoData';
import Home from '../Components/Home';
import '../App.css';
import PhotoDetails from '../Components/PhotoDetails';
import DjDetails from '../Components/DjDetails';
import CaterersDetails from '../Components/CaterersDetails';

const RoutingPath = () => {
  return (
    <>
      <Routes>
        <Route path={"/"} element ={[<NavBar/>, <Home/> ]}  />
      </Routes>

      <Routes>
        <Route path={"/Photographer"} element = {[<NavBar/>,<PhotoData/>]}  />
      </Routes>

      <Routes>
        <Route path={"/Caterer"} element = {[<NavBar/>,<CaterersData/>]}  />
      </Routes>

      <Routes>
        <Route path={"/Dj"} element = {[<NavBar/>,<Dj/>]}  />
      </Routes>
     


      {/* <Routes>
        <Route path={"/Decortors"} element = {[]}  />
      </Routes>

      <Routes>
        <Route path={"/Mehandi"} element = {[]}  />
      </Routes> */}




      <Routes>
        <Route path={"/photo-shoot/1"} element = {[<NavBar/>,<PhotoDetails Path1={"/photo-shoot/1"}/>]}  />
        <Route path={"/photo-shoot/2"} element = {[<NavBar/>,<PhotoDetails Path2={"/photo-shoot/2"}/>]}  />
        <Route path={"/photo-shoot/3"} element = {[<NavBar/>,<PhotoDetails Path3={"/photo-shoot/3"}/>]}  />
      </Routes>


      <Routes>
        <Route path={"/Dj/Dj-Details/1"} element = {[<NavBar/>,<DjDetails Path1={"/Dj/Dj-Details/1"}/>]}  />
        <Route path={"/Dj/Dj-Details/2"} element = {[<NavBar/>,<DjDetails Path2={"/Dj/Dj-Details/2"}/>]}  />
        <Route path={"/Dj/Dj-Details/3"} element = {[<NavBar/>,<DjDetails Path3={"/Dj/Dj-Details/3"}/>]}  />
      </Routes>

      <Routes>
        <Route path={"/Caterers/Caterers-Details/1"} element = {[<NavBar/>,<CaterersDetails Path1={"/Caterers/Caterers-Details/1"}/>]}  />
        <Route path={"/Caterers/Caterers-Details/2"} element = {[<NavBar/>,<CaterersDetails Path2={"/Caterers/Caterers-Details/2"}/>]}  />
        <Route path={"/Caterers/Caterers-Details/3"} element = {[<NavBar/>,<CaterersDetails Path3={"/Caterers/Caterers-Details/3"}/>]}  />
      </Routes>

    </>    
  )
}

export default RoutingPath