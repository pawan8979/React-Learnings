import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {Home} from "./pages/Home";
import {Menu} from "./pages/Menu";
import {Contact} from "./pages/Contact";
import {Error} from "./pages/Error";
import {Nav} from "./pages/Nav";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
         <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<Error/> }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
