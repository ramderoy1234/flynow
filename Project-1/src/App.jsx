import { useState } from 'react'
import Footer from './Components/Footer/Footer.jsx'
import Home from './Components/Home/Home.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Main from './Components/Main/Main.jsx'




function App() {

  return (
   <div>
   <Navbar/>
   <Home/>
   <Main/>
   <Footer/>
   </div>
  )
}

export default App