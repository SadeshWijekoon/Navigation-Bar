import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./Componts/Header"
import Home from "./Componts/Home"
import About from "./Componts/About"
import Contact from "./Componts/Contact"
import Project from "./Componts/Project"

const App = () => {
  // Move useLocation inside the component rendered by Router
  return (
    <Router>
      <InnerApp />
    </Router>
  );
};

const InnerApp = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      {isHomePage && <Header />}
      
      <AppContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </AppContainer>
    </>
  );
};

const AppContainer = styled.main`
  width: 100vw;
  overflow-x: hidden;
`;

export default App;






