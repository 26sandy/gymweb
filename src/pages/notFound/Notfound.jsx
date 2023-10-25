import React from 'react'
import './Notfound.css'
import {Link} from "react-router-dom"

const Notfound = () => {
  return (
    <section >
       <div className="container notfound_container">
        <h2>Page Not Found</h2>
        <Link to='/' className='btn'>  Back to Home</Link>
       </div>
    </section>
  )
}

export default Notfound