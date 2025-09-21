import { useState } from 'react';
import { Link } from 'react-router-dom';

function Footer() {

  return (
    <footer>
      <h1 className='blurring'><i className="logo">  ♠</i>Scriptor</h1>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/dashboard'>Dashboard</Link></li>
        <li><Link to='/progress'>Progress</Link></li>
      </ul>
      <ul>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/more'>More</Link></li>
        <li><Link to='/*'></Link></li>
      </ul>
      <Link to='/login'><button className='login_btn'>LOGIN</button></Link>
    </footer>
  )
}

export default Footer;
