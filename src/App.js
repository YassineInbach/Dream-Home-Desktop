import React , { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Service from './Pages/Service';
import Property from './Pages/Property';
import Blog from "./Pages/Blog"
import Contact from './Pages/Contact';
import Loading from './Components/Loading';
import Logo from './Components/Logo';
function App() {
  const [isLoading , setLoading] = useState(true);
  const [showLogo , setShowLogo] = useState(true);

  useEffect(() => {
    setTimeout(() =>{
      setShowLogo(false);
      setTimeout(() => {
        setLoading(false);
        document.body.style.overflow = 'auto';
      },1150)
    },1000)
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    }
  },[]) // execution seule fois lors de download
  return (
    <div>
     {showLogo && <Logo />}
     {isLoading && !showLogo && <Loading />}
      {
        !isLoading && (
          <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='service' element={<Service />} />
            <Route path="property" element={<Property />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
          </BrowserRouter>
        )
      }
     
    </div>
  );
}

export default App;
