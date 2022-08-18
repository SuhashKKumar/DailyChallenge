import { useState } from 'react'
import ProjectLayout from './components/projectLayout'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <h1 className='project_title' >Pixels</h1>
      <ProjectLayout/>
    </div>
  )
}

export default App
