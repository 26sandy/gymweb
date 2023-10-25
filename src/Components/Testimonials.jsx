import React from 'react'
import Sectionhead from './Sectionhead'
import { testimonials } from '../data'
import{RiDoubleQuotesL} from 'react-icons/ri'
import{IoIosArrowDropleftCircle,IoIosArrowDroprightCircle} from 'react-icons/io'
import Card from '../UI/Card'
import { useState } from 'react'


const Testimonials = () => {
    const[index,setIndex] = useState(0);
    const{name,quote,job,avatar}=testimonials[index]


    const prevTestmonial = () =>{
        setIndex(prev => prev -1);
        if(index <= 0){
            setIndex(testimonials.length - 1)
        }
    }

    const nextTestimonial = () =>{
        setIndex(prev => prev + 1);
        if(index >= testimonials.length - 1){
            setIndex(0);
        }
    }



  return (
    <section className='testimonials'>
        <div className="container testimonial_container">
            <Sectionhead  className= 'testimonials_head'icon={<RiDoubleQuotesL/>} title="Testimonials"/>
            <Card className='testimonial'>
                <div className="testimonial_avatar">
                    <img src={avatar} alt = {name}/>
                </div>
                <p className='testimonial_quote'>{`${quote}`}</p>
                <h5>{name}</h5>
                <small className='testimonial_title'>{job}</small>
            </Card>
            <div className="testimonials_btn-container">
                <button className='testimonials_btn' onClick={prevTestmonial}><IoIosArrowDropleftCircle/></button>
                <button className='testimonials_btn' onClick={nextTestimonial}><IoIosArrowDroprightCircle/></button>
            </div>
        </div>

    </section>
  )
}

export default Testimonials