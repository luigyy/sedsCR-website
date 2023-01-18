import Landing from "./pages/Landing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import { Routes, Route, useLocation } from "react-router-dom";
import NavbarForMd from "./components/NavbarForMd";

//
function App() {
  const location = useLocation();

  return (
    <div>
      <Routes location={location}>
        <Route index element={<Landing />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <div className="ml-14">
        <NavbarForMd />
      </div>
    </div>
  );
}

export default App;
