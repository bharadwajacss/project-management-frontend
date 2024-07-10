
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import {  useEffect } from "react";
import CreateProject from './Components/CreateProject';
import TrackProject from './Components/TrackProject';
import EditProject from './Components/EditProject';
import Home from './Components/Home';
import ViewProject from "./Components/ViewProject";
import Login from './Components/Login';
import Signup from './Components/SignupPage';
import UserHome from "./Components/UserHome";

function App() {
  

  useEffect(() => {
    // You can add logic to check authentication state here, for now, it's false by default
  }, []);

  return (
    <div className="container">
      <HashRouter>
        
            
            <Routes>
              <Route path='/login' element={<Login/>}   /> 
              <Route path='/signup' element={<Signup/>}   /> 
              <Route path="/" element={<Home />} />
              <Route path="/createProject" element={<CreateProject />} />
              <Route path="/trackProject" element={<TrackProject />} />
              <Route path="/editProject/:id" element={<EditProject />} />
              <Route path="/viewProject/:id" element={<ViewProject />} />
              <Route path="/login/userHome" element={<UserHome/>} />
            </Routes>
          
        
      </HashRouter>
    </div>
  );
}

export default App;
