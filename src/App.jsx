import { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar';
import Characters from './components/Characters';
import Planets from './components/Planets';

function App() {
  const [page , setPage] = useState('planets');
  return (
    <div className="App">
        <Navbar setPage = {setPage}/>
        <div className="content">
          {page === "planets" ? <Planets/> : <Characters/>}
        </div>
    </div>
  )
}

export default App
