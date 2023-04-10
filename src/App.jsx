import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'

function App() {
  return (
    <div className="App">
     <Header></Header>
     <div>
      <Outlet></Outlet>
      </div>
    </div>
  )
}

export default App
