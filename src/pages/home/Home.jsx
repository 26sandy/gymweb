import React from 'react'
import './Home.css'
import Mainheader from '../../Components/Mainheader'
import Programs from '../../Components/Programs'
import Values from '../../Components/Values'
import FAQs from '../../Components/FAQs'
import Testimonials from '../../Components/Testimonials'


const Home = () => {
  return (
    <div>
      <Mainheader/>
      <Programs/>
      <Values/>
      <FAQs/>
      <Testimonials/>
    
    </div>
  )
}

export default Home