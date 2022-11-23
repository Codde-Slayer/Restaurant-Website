import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Nav from './components/Nav';
import Dishes from './components/Dishes';
import Gallery from './components/Gallery';
import About from './components/about';
import Admin from './components/admin';
import Recipes from './components/recipes';
import AddDish from './components/AddDish';
import Menu from './components/Menu';
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
          <Route path="/add_dish" element={<AddDish />}/>

        </Routes>
      </div>
    </Router>
  )
}
}
export default App;
