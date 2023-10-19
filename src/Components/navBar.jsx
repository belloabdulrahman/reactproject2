import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom'
import {FaHome } from 'react-icons/fa'
import {RiContactsFill} from 'react-icons/ri'
import {FcAbout} from 'react-icons/fc'

const NavBar = () => {
    return (
     <>
        <header className='container'>
          <nav className='nav-container'>
             <img src= "../src/assets/images/logo.PNG" alt="logo" className='logo' />
             <ul className='inner-container'>
                <li><Link to = {`/`} className='nav'><FaHome/>Home</Link></li>
                <li><Link to = {`/about`} className='nav'><FcAbout/>About Us</Link></li>
                <li><Link to = {`/job`} className='nav'>Jobs</Link></li>
                <li><Link to = {`/contact`} className='nav'><RiContactsFill/>Contact Us</Link></li>
             </ul>
             <div>
               <p><Link to = {`/job`} className='get'>Get Started</Link></p>
             </div>
           </nav>
        </header>    
    </>
    )
}

export default NavBar