import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Resume1 from './components/resume1/Resume1'
import Resume2 from './components/resume2/Resume2'
import Resume3 from './components/resume3/Resume3'

function App () {
  return (
    <Router>
      <div className='App'>
      <nav className='navbar'>
          <ul>
            <li>
              
              <Link to="/resume1">Resume 1</Link>
            </li>
            <li>
              <Link to="/resume2">Resume 2</Link>
            </li>
            <li>
              <Link to="/resume3">Resume 3</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/resume1' element={<Resume1 />} />
          <Route path='/resume2' element={<Resume2 />} />
          <Route path='/resume3' element={<Resume3 />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
