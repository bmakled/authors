import logo from './logo.svg';
import './App.css';
import axios from "axios"
import {useState, useEffect} from "react"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Form from './components/Form'
import Home from './components/Home'
function App() {
  const [allAuthors, setAllAuthors] = useState([])
  return (
    <div className="App">
    <BrowserRouter>
    <div className="App">
    <Routes>
    <Route path='/' element={<Home allAuthors = {allAuthors} setAllAuthors={setAllAuthors}/> } />
    <Route path='/newAuthor/new' element={<Form/>}/>
    </Routes>
    
    </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
