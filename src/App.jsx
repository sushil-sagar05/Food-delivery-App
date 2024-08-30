
import './App.css'
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Success from './Pages/Success.jsx'
import Layout from './Layout.jsx'
import Error from './Pages/Error.jsx'
import SignUp from './Pages/SignUp.jsx'

function App() {
 

  return (
    
  <BrowserRouter>
  <Routes>
        <Route path='/' element={<Layout />} >
        <Route path='' element={<Home />}/>
     
       </Route>
        <Route path='/*' element={<Error/>} />
        </Routes>
        </BrowserRouter>
      )

  
}

export default App
