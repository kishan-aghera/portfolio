import React, { Fragment } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import About from './About/About'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'
import Contact from './Contact/Contact'
import './App.css'

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<About />} exact />
          <Route path="/projects" element={<Projects />} exact />
          <Route path="/skills" element={<Skills />} exact />
          <Route path="/contact" element={<Contact />} exact />
          <Route path="/" element={<Home />} exact />
        </Routes>
      </BrowserRouter>
    </Fragment>
  )
}

export default App
