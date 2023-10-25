import React from 'react'
import './About.css'
import Header from '../../Components/Header'
import Headerimage from "../../images/fitness2.jpg"
import storyimage from "../../images/fitness3.jpg"
import visionimage from "../../images/About.jpg"
import missionimage from "../../images/fitness15.jpg"

const About = () => {
  return (
  <>
  <Header title="About Us" image={Headerimage}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur veritatis rem quia voluptatem in 
    nesciunt rerum dolore quae eveniet accusamus!
  </Header>

  <section className="about_story">
    <div className="container about_story-container">
      <div className="about_image">
        <img src={storyimage} alt ="story"/>
      </div>
      <div className="about_content">
        <h1>Our Story</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptas cumque voluptates harum veniam sunt
           expedita! Unde harum quam corrupti? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, fugiat.
          </p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio natus atque dolore pariatur blanditiis nemo, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, dolores!
            culpa qui corrupti! Illum, aliquam!!
          </p>
          <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quae!
    
          </p>

      </div>
    </div>
  </section>
  
  <section className="about_vision">
    <div className="container about_vision-container">
      
      <div className="about_content">
        <h1>Our Vision</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptas cumque voluptates harum veniam sunt
           expedita! Unde harum quam corrupti? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, fugiat.
          </p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio natus atque dolore pariatur blanditiis nemo, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, dolores!
            culpa qui corrupti! Illum, aliquam!!
          </p>
          <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quae!
    
          </p>

      </div>
      <div className="about_image">
        <img src={visionimage} alt ="vision "/>
      </div>
    </div>
  </section>
  <section className="about_mission">
    <div className="container about_mission-container">
      <div className="about_image">
        <img src={missionimage} alt ="mission"/>
      </div>
      <div className="about_content">
        <h1>Our Mission</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptas cumque voluptates harum veniam sunt
           expedita! Unde harum quam corrupti? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, fugiat.
          </p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio natus atque dolore pariatur blanditiis nemo, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, dolores!
            culpa qui corrupti! Illum, aliquam!!
          </p>
          <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quae!
    
          </p>

      </div>
    </div>
  </section>
  </>
  )
}

export default About