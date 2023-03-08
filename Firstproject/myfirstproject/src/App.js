// import logo from './logo.svg';
// import './App.css';
// import Message from './message.js'
// import Count from './increment.js'
// import NameList from './array.js'
// import Form from './Form.js'
// import Hello from './click.js'
// import Hide from './show'
// import Side from './sidebar.js'
import Sidebar from "./components/sidebar1.js";
// import Home from './components/home.js'
import About from "./components/about.js";
import Contact from "./components/contact.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calendar from "./components/dashboard.js";
// import Modal1 from "./components/Modal1.js"
// import Tailwind from "./components/tailwind.js";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Calendar />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </div>
    // <Modal1/>
    // <Tailwind/>
  );
};

export default App;
