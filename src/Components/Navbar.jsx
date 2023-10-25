import React from 'react'
import './Navbar.css'
import {Link,NavLink} from 'react-router-dom'
import logo from '../images/logo.jpg'
import { navLinks } from '../data'
import {FaBars} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'
import { useState } from 'react'


const Navbar = () => {
    const[isNavShow,setIsNavShow]=useState(false);
  return (
    <nav>
        <div className='container nav_container'>
            <Link to="/" className='logo' onClick={() =>setIsNavShow(false)}>
                <img src={logo} alt='logo'></img>
            </Link>
                <ul className={`nav_lists ${isNavShow ? 'display_Nav':'hide_Nav'}`}>
                    {
                        navLinks.map(({name,path},index)=>{
                            return(
                                <li key={index}>
                                    <NavLink to={path} className={({isActive})=>isActive ? 'active-nav'
                                    :''} onClick={()=>{
                                        setIsNavShow(prev =>!prev)}}>{name}</NavLink>
                                </li>
                            )
                        })
                    }

                </ul>
                <button className='nav_toggle-btn' onClick={()=>{
                     setIsNavShow(prev =>!prev);
                }}>
                    {
                        isNavShow ? <AiOutlineClose/>:<FaBars/>
                    }
                          
                </button>
        </div>
    </nav>
  )
}

export default Navbar
