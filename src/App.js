import logo from './logo.svg';
import './index.css'
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Skills from "./components/Skills/Skills";
import Works from './components/Works/Works';
import Client from './components/Clients/Clients';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Intro></Intro>
      <Skills></Skills>
      <Works></Works>
      <Client></Client>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
