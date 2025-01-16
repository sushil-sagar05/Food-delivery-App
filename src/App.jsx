
import './App.css'
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Layout from './Layout.jsx'
import Error from './Pages/Error.jsx'
import SignUp from './Pages/SignUp.jsx'
import Login from './Pages/Login.jsx'
import Help from './Pages/Help.jsx'
function App() {
 

  return (
    
  <BrowserRouter>
  <Routes>
        <Route path='/' element={<Layout />} >
        <Route path='' element={<Home />}/>
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/help' element={<Help/>}/>
       </Route>
        <Route path='/*' element={<Error/>} />

        </Routes>
        </BrowserRouter>
      )

  
}

export default App
