import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import GraphicDesign from "./pages/GraphicDesign";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import ManageDesigns from "./pages/ManageDesigns";
import ManageAlbums from "./pages/ManageAlbums";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/design" element={<GraphicDesign />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />

        {/* Admin Pages */}
        <Route 
          path="/manage-designs" 
          element={<ManageDesigns />} 
          />

        <Route 
          path="/manage-albums" 
          element={<ManageAlbums />} 
        />
      </Routes>
      <Footer />
    </>
  );
}
export default App;