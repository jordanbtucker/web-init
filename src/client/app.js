import React from 'react'
import {NavLink, Route} from 'react-router-dom'
// import api from './api'

const Home = () => (
  <>
    <h2>Home</h2>
  </>
)

const About = () => (
  <>
    <h2>About</h2>
  </>
)

const App = () => (
  <>
    <div className="container">
      <h1>App</h1>
      <ul className="nav">
        <li className="nav-item">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </li>
      </ul>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
    </div>
  </>
)

export default App
