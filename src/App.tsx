import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Login from './screens/Login/Login'
import Home from "./screens/Home/Home";
import Favorite from "./screens/Favorite/Favorite";
import AddItem from "./screens/AddItem/AddItem";
import NavBar from './components/NavBar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


const App: React.FC = () => {


  return (
      <BrowserRouter>

                  <NavBar/>
                      <Route path="/home/" component={Home}/>
                      <Route path="/login/" component={Login} />
                      <Route path="/favorite/" component={Favorite} />
                      <Route path="/addItem/" component={AddItem}/>

      </BrowserRouter>
  );
};

export default App;
