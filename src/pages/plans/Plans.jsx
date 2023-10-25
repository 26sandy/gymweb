import React from 'react'
import './Plans.css'
import Header from '../../Components/Header'
import Headerimage from "../../images/fitness10.jpg"
import Card from '../../UI/Card'
import { plans } from '../../data'

const Plans = () => {
  return (
    <>
   <Header title="Membership Plans" image={Headerimage}>
 Soluta eligendi maxime dolore unde? Quis 
 ipsam consequuntur in. Atque quibusdam temporibus 
 dolores sit eaque totam dolorum magni, enim repellat deleniti ad.
    </Header>
    <section className="plans">
      <div className="container plans_container">
        {
          plans.map(({id,name,desc,price,features}) => {
            return(
            <Card key={id} className="plan">
              <h4>{name}</h4>
              <small>{desc}</small>
              <h1>{`Rs.${price}`}</h1>
              <h4>Features</h4>
              {
                features.map(({feature,available},index) => {
                  return <p key={index} className={!available ? 'disabled' :""}>{feature}</p>

                })
              }
              <button className='btn lg'>Choose Plan</button>
            </Card>
           ) })
        }
      </div>
    </section>
    </>
    
  )
}

export default Plans