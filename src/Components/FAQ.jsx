import React from 'react'
import { useState } from 'react'
import {AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai'


const FAQ = ({question,answer}) => {

const[isAnswer,setIsAnwer] = useState(false)

  return (
   <article className='faq' onClick={() =>setIsAnwer(prev => !prev)}>
    <div>
      <h4>{question}</h4>
      <button className='faq_icon'>
       {
        isAnswer ? <AiOutlineMinus/> : <AiOutlinePlus/>
       }
      </button>
      </div>
      {isAnswer &&<p>{answer}</p>}
    
   </article>
  )
}

export default FAQ