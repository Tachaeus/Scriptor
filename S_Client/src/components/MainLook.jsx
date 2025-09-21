import { useState } from 'react';
import NavBar from './NavBar.jsx'
import Footer from './Footer.jsx'
import '../App.css';
import './Animation.css';

function MainLook({ children }) {
  return (
    <>
      <NavBar />
      <div>
        {children}
      </div>
      <Footer />
    </>
  )
}

export default MainLook;