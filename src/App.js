import './App.css';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";    //npm install react-router-dom
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import NoteState from './context/notes/NoteState';


function App() {
  return (
   <>
    <NoteState> {/*from context we have to use this for the main if you want to use context */}
   <Router>
   <Navbar/>
   <div className="container">
   <Routes>
            <Route exact path="/" element={<Home/>}/>
                <Route exact path="/about" element={<About/>}/>          
          </Routes>
   </div>
   </Router>
   </NoteState>
   </>
  );
}

export default App;
