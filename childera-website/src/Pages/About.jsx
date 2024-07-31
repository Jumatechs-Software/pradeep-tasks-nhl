import React from 'react'
import Hero from '../Components/About/Hero'
import Story from '../Components/About/Story'
import Vision from '../Components/About/Vision'
import Mission from '../Components/About/Mission'
import Value from '../Components/About/Value'
import Start from '../Components/About/Start'
import Ourjourney from '../Components/About/Ourjourney'

function About() {
  return (
    <div className='mt-10'>
    <Hero/>
    <Story/>
    <Vision/>
    <Mission/>
    <Value/>
    <Ourjourney/>
    <Start/>
    </div>
  )
}

export default About