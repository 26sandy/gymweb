import React from 'react'
import './Contact.css'
import Header from "../../Components/Header"
import {GrMail} from "react-icons/gr"
import {BsMessenger} from "react-icons/bs"
import {IoLogoWhatsapp} from "react-icons/io"
import Headerimage from "../../images/fitness5.jpg"


const Contact = () => {
  return (
    <>
    <Header title="Contact Us"  image={Headerimage}>
      dolor sit amet consectetur adipisicing elit. Placeat itaque sapiente quae quos ex expedita
      exercitationem rem unde atque quod?
    </Header>

    <section className='contact'>
      <div className="container contact_container">
        <div className="contact_wrapper">
          <a href='mailto:santhoshdharan474@gmail.com'><GrMail/></a>

          <a href='https://www.messenger.com/'><BsMessenger/></a>

          <a href='https://web.whatsapp.com/'><IoLogoWhatsapp/></a>
        </div>
      </div>

    </section>
  
    </>
  )
}

export default Contact