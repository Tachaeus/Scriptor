import { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const [click, setClick] = useState(false);
  const Hamburger = <button onClick={() => setClick(!click)}>≣</button>
  const Close = <button onClick={() => setClick(!click)}>⨉</button>

  return (
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/register'>Start</Link></li>
          <li><Link to='/dashboard'>Dashboard</Link></li>
        </ul>
        <span className="menu">
          {click ? Close : Hamburger}
          {
            click &&
            <ul className="dropDown">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/register'>Start</Link></li>
              <li><Link to='/dashboard'>Dashboard</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/more'>More</Link></li>
              <Link to='/login'><button>LOGIN</button></Link>
              <li><Link to='/*'></Link></li>
            </ul>
          }
        </span>
        <h1><i className="logo">♠</i>Scriptor</h1>
        <ul>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/more'>More</Link></li>
          <li><Link to='/*'></Link></li>
        </ul>
        <Link to='/login'><button className='login_btn'>LOGIN</button></Link>
      </nav>
  )
}

export default NavBar
