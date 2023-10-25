import React from 'react'
import {faqs} from '../data'
import Sectionhead from './Sectionhead'
import FAQ from './FAQ'
import {BsQuestionLg} from 'react-icons/bs'
const FAQs = () => {
  return (
  <section className='faqs'>
    <div className='container faqs_container'>
    <Sectionhead icon ={<BsQuestionLg/>} title ='FAQs'/>
    <div className="faqs_wrapper">
      {
        faqs.map(({id,question,answer}) =>{
          return <FAQ key={id} question={question} answer={answer}/>

        })
      }
    </div>
    </div>
  </section>
  )
}

export default FAQs