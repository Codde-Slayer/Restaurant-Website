import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Nav from './components/Nav';
import Dishes from './components/Dishes';
import Gallery from './components/Gallery';
import Menu from './Menu';
import About from './components/about';
import Admin from './components/admin';
import Recipes from './components/recipes';
import {
  BrowserRouter as Router,
  Route,
  Routes,
}from "react-router-dom"
import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props)
  }

render(){

  return (
    <Router>
      <Nav/>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/dishes" element={<Dishes/>}/>
          <Route path="/gallery" element={<Gallery />}/>
          <Route path="/menu" element={<Menu />}/>
          <Route path="/recipes" element={<Recipes />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/admin" element={<Admin />}/>

        </Routes>
      </div>
    </Router>
  )
}
}
export default App;
