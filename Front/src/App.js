import NavBar from './Components/NavBar';


import Dj from './Components/Dj';
import { Routes, Route } from 'react-router-dom';
import CaterersData from './Components/Caterers';
import PhotoData from './Components/PhotoData';
import Home from './Components/Home';
import './App.css';
import PhotoDetails from './Components/PhotoDetails';


function App() {
  return (
    <div className="App">

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
        <Route path={"/Dj"} element = {[<NavBar/>
        ,<Dj/>]}  />
      </Routes>

      <Routes>
        <Route path={"/Decortors"} element = {[]}  />
      </Routes>

      <Routes>
        <Route path={"/Mehandi"} element = {[]}  />
      </Routes>




      <Routes>
        <Route path={"/photo-shoot/1"} element = {<PhotoDetails Path={"/photo-shoot/1"}/>}  />
      </Routes>



       

    </div>
  );
}

export default App;
