import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../src/Header";
import Home from "../src/Home";
import About from "../src/About";
import Contact from "../src/Contact";
import Education from "../src/Education";
import Technical from "../src/Technical";
import Footer from "../src/Footer";
import Experienceproject from "../src/Experience-Project";

function App() {
  return (
    <Router>
      <Header /> 
      <Routes>
        <Route path="/" 
          element={
          <>
            <Home/>
            <About/>
            <Contact />
          </> 
        }/>
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experienceproject/>}/>
        <Route path="/education" element={<Education />} />
        <Route path="/technical" element={<Technical />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

