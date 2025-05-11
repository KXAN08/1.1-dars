import { useState } from 'react'
import Header from  './components/header/Header'
import Hero from  './components/hero/hero'
import Footer from  './components/footer/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Hero/>
     <Footer/>
    </>
  )
}

export default App
