import React from 'react'
import './Trainers.css'
import Header from '../../Components/Header'
import Headerimage from "../../images/fitness15.jpg"
import Trainer from '../../Components/Trainer'
import { trainers } from '../../data'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FiTwitter} from "react-icons/fi" 
import { AiOutlineFacebook} from "react-icons/ai"
import {BiLogoLinkedinSquare} from "react-icons/bi"


const Trainers = () => {
  return (
  <>
  <Header title="Our Trainers" image={Headerimage}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Et, quas.
  </Header>
  <section className='trainers'>
    <div className="container trainers_container">
      {
        trainers.map(({id,image,name,job,socials}) =>{
          return(
          <Trainer key={id} image={image} name={name}job={job} socials={
            [
              {icon:<AiOutlineInstagram/>,link:socials[0]},
              {icon:<FiTwitter/>,link:socials[1]},
              {icon:<AiOutlineFacebook/>,link:socials[2]},
              {icon:<BiLogoLinkedinSquare/>,link:socials[3]}
            ]
          }></Trainer>
        )})
      }

    </div>
  </section>
  </>
  )
}

export default Trainers