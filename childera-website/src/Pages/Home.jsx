import React from 'react'
import Benifits from '../Components/Home/Benifits'
import Start from '../Components/Home/Start'
import Hero from '../Components/Home/Homehero/Hero'
import { Features } from '../Components/Home/Features'
import Support from '../Components/Home/Support'
import Welcome from '../Components/Home/Welcome'


function Home() {
  return (
    <div className='mt-10'>
        <Hero/>
        <Benifits/>
        <Welcome/>
        <Features/>
        <Support/>
        <Start/>
    </div>
  )
}

export default Home