import React from 'react'
import Hero from '../Components/Appfeaturess/Hero'
import Feattures from '../Components/Appfeaturess/Feattures'
import Features2 from '../Components/Appfeaturess/Features2'
import Update from '../Components/Parentfeatures/Update'
import { Individuals } from '../Components/Childera/Effective'
import Support from '../Components/Home/Support'
import { Form } from '../Components/Childera/Form'
import { Number } from '../Components/Childera/Number'

function Featuresofapp() {
  return (
    <div className='mt-10'>
    <Hero/>
    <Feattures/>
    <Features2/>
    <Update/>
    <Support/>
    <Individuals/>
    <Number/>
    <Form/>
    </div>
  )
}

export default Featuresofapp