import React from 'react'
import './Gallery.css'
import Header from '../../Components/Header'
import Headerimage from '../../images/fitness7.jpg'



const Gallery = () => {

  const galleryLength =15;
  const images =[]

  for(let i=1; i<=galleryLength;i++){
    images.push(require(`../../images/fitness${i}.jpg`))
    console.log(images)
  }

  return (
    <>
    <Header title=' Our Gallery' image={Headerimage}>
         laudantium corporis quia ducimus illo est officia nesciunt enim molestiae reprehenderit quidem, debitis animi vitae. Sit est officia error nulla tempore.
    </Header>
      <section className ="gallery">
        <div className="container gallery_container">
          {
            images.map((image,index)=> {
              return <article key={index}>
                <img src ={image} alt ={`Gallery ${index+1}`}/>
              </article>

            })
          }
        </div>
      </section>
    </>
  )
}

export default Gallery