import React from 'react'
import { Link } from 'react-router-dom'
import header from "../images/mainheader.jpg"
import "../pages/home/Home.css"
import "../index.css"

const Mainheader = () => {
  return (
    <header className='main_header'>
        <div className="container main_header-container">
            <div className="main_header-left">
                <h4>ARE YOU READY TO</h4>
                <h1>GET FIT,STRONG</h1>
                <h1>& MOTIVATED!</h1>
                <p>Lorem ipsum dolor sit amet consectetur
                 adipisicing elit.mollitia, cupiditate
                  harum dolore illum!</p>

                
                 <Link to="/plans" className="btn lg">Get started</Link>
            </div>
            <div className="main_header-right">
              
                <div className="main_header-image lg">
                    <img src={header}  className="header-image"alt='header-imag'/>
                </div>
            </div>
        </div>

    </header>
  )
}

export default Mainheader