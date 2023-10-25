import React from 'react'
import Sectionhead from './Sectionhead'
import image from '../images/header.jpg'
import {IoDiamondSharp} from 'react-icons/io5'
import { values } from '../data'
import Card from '../UI/Card'

const Values = () => {
  return (
    <section className='values'>
        <div className="container values_container">
            <div className="values_left">
                <div className="values_image">
                    <img src={image} alt='value'/>
                </div>
            </div>
            <div className="values_right">
                <Sectionhead icon ={<IoDiamondSharp/>} title='Values'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Eligendi ex soluta aliquid, iure nam facere!
                </p>
                <div className="values_wrapper">
                    {
                        values.map(({id,icon,title,desc}) =>{
                            return(
                                <Card className='values_value'key={id}>
                                    <span>{icon}</span>
                                    <h4>{title}</h4>
                                    <small>{desc}</small>
                                </Card>
                            )
                        })
                    }
                </div>
            </div>
        </div>

    </section>
  )
}

export default Values