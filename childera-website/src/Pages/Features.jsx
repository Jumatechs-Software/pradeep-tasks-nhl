import React from 'react'
import Hero from '../Components/Parentfeatures/Hero'
import Update from '../Components/Parentfeatures/Update'
import Faq from '../Components/Parentfeatures/Faq'
import { Individuals } from '../Components/Childera/Effective'
import { Number } from '../Components/Childera/Number'
import { Form } from '../Components/Childera/Form'

function Features() {
  return (
    <div className='mt-10'>
<Hero/>
<Update/>
<Faq/>
<Individuals/>
<Number/>
<Form/>
    </div>
  )
}

export default Features