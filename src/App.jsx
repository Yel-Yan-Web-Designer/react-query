import { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar';
import Characters from './components/Characters';
import Planets from './components/Planets';

function App() {
  const [page , setPage] = useState('characters');
  return (
    <div className="App">
        <Navbar setPage = {setPage}/>
        <div className="content">
          {page === "characters" ? <Characters/> : <Planets/>}
        </div>
    </div>
  )
}

export default App
