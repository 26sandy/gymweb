 import React from 'react'
import {FaCrown} from "react-icons/fa"
import Sectionhead from './Sectionhead'
import {programs} from "../data"
import Card from '../UI/Card'
import { Link } from 'react-router-dom'
import {BiSolidRightArrow} from 'react-icons/bi'




const Programs = () => {
  return (
   <section className='programs'>
        <div className='container programs_container'>
                <Sectionhead icon= {<FaCrown/>} title= 'programs'/>
         
         <div className='programs_wrapper'>
            {
                programs.map(({id,icon,title,info,path})=> {
                    return (
                    <Card className='programs_programs' key={id}>
                        <span>{icon}</span>
                        <h4>{title}</h4>
                        <small>{info}</small>
                        <Link to={path} className='btn sm'>View more<BiSolidRightArrow></BiSolidRightArrow></Link>
                    </Card>
                    
                )})
            }
         </div>
         </div>
   </section>
  )
}

export default Programs



