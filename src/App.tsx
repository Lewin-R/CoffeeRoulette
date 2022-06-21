import React from 'react';
import logo from './logoCoffeeRoulette.svg';
import './App.css';
import { NavLink } from 'react-router-dom';
import { Routes ,Route } from 'react-router-dom';

const App = () => (
    <div className='app'>
      <h1>React Router Demo</h1>
      <Navigation />
      <Main />
    </div>
);

let activeStyle = {
    textDecoration: "underline",
};

const Navigation = () => (
    <nav>
      <ul>
        <li><NavLink to='/' >Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
      </ul>
    </nav>
);

const Main = () => (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<Home/>}></Route>
      <Route path='/contact' element={<Home/>}></Route>
    </Routes>
);

const Home = () => (
    <div className='home'>
      <h1>Welcome to my portfolio website</h1>
      <p> Feel free to browse around and learn more about me.</p>
    </div>
);

const About = () => (
    <div className='about'>
      <h1>About Me</h1>
      <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
      <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
    </div>
);

const Contact = () => (
    <div className='contact'>
      <h1>Contact Me</h1>
      <p>You can reach me via email: <strong>hello@example.com</strong></p>
    </div>
);

export default App;
