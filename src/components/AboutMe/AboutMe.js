import './AboutMe.css'

import React from 'react'

import MyPhoto from '../../Assets/My-photo.jpeg'


const AboutMe = () => {

  return (
    <section className='about-me component-setting'>
      <div className='about-me__container'>
        <h2 className='about-me__heading'>
          Little bit about me
        </h2>
        <p className='about-me__text'>
          The guy in the photo is me!
        </p>
        <img 
          className='about-me__photo' 
          src={MyPhoto} 
          alt='MyPhoto'
        />
      </div>
      <p className='about-me__text about-me__text_type_second'>
        I'm a junior frontend developer from Belarus. 
        I like programming, playing games, traveling and playing sports.
      </p>
    </section>
  )
}

export default AboutMe