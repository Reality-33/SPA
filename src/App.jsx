import {motion,AnimatePresence} from "framer-motion"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <AnimatedRoutes />
    </BrowserRouter>
  );
}
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition>
              <About />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function PageTransition({ children }) {
  return (
    <motion.main
      className="page"
      initial={{ opacity: 0 ,x:50}}
      animate={{ opacity: 1 ,x:0}}
      exit={{ opacity: 0 ,x:-50}}
      transition={{ duration: 0.35,ease:"easeOut" }}
    >
      {children}
    </motion.main>
  );
}
export default App;
