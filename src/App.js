import './App.css';
import About from './component/About';
import Award from './component/Award';
import Blog from './component/Blog';
import Contact from './component/Contact';
import Creative from './component/Creative';
import Education from './component/Education';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Portfolio from './component/Portfolio';
import Work from './component/Work';


function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Creative />
      <Education />
      <Work />
      <Portfolio />
      <Award />
      <Blog />
      <Contact />
    </>
  );
}

export default App;
