
import './App.css'
import{ BrowserRouter, Routes, Route, Link }from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
function App() {
  

  return (
    <BrowserRouter>
   <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
   </nav>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/" element={<Contact />} />
    <Route path="/" element={<About />} /> 
   </Routes>
    </BrowserRouter>
  )
}

export default App
