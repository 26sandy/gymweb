import React from 'react'
import { Link } from 'react-router-dom'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillTwitterSquare} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import logo from "../images/logo.jpg"


const Footer = () => {
  return (
   <footer>
        <div className="container footer_container">
            <article>
                <Link to="/" className='logo'>
                    <img src={logo} alt='footer logo'/>
                </Link>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Repellat rem molestiae architecto cum excepturi ratione quam
                     temporibus hic quibusdam ipsum.
                </p>
                <div className="footer_social-media">
                    
                    <a href='https://linkedin.com/' ><AiFillLinkedin/></a>
                
                    <a href='https://facebook.com/' ><AiFillFacebook/></a>

                    <a href='https://twitter.com/' ><AiFillTwitterSquare/></a>

                    <a href='https://instagram.com/' ><AiFillInstagram/></a>
                
                
                </div>
                </article>       
                <article>
                    <h4>Links</h4>
                    <Link to="/about" >About</Link>
                    <Link to="/plans" >Plans</Link>
                    <Link to="/trainers">Trainers</Link>
                    <Link to="/gallery" >Gallery</Link>
                    <Link to="/contact" >Contact</Link>
                </article>
                <article>
                    <h4>Insights</h4>
                    <Link to="/s">Blog</Link>
                    <Link to="/s" >Events</Link>
                    <Link to="/s">Community</Link>
                    <Link to="/s" >FAQs</Link>
                    <Link to="/s" >Case studies</Link>
                </article>
                <article>
                    <h4>Get In Touch</h4>
                    <Link to="/contact" >Contact us</Link>
                    <Link to= "/s" >Support</Link>
                </article>
          <div className='footer_copyright'>
            <small>2023 GYMSHARK &copy; All Rights Reserved</small>
          </div>
        </div>
   </footer>
  )
}

export default Footer
