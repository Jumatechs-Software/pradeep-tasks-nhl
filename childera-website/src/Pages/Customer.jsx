import React from 'react'
import Hero from '../Components/Customer/Hero'
import Number from '../Components/Customer/Number'
import Testimonal from '../Components/Customer/Testimonal'
import Sucess from '../Components/Customer/Sucess'
import Journey from '../Components/Customer/Journey'

function Customer() {
  return (
    <div className='mt-10'>
    <Hero/>
    <Number/>
    <Testimonal/>
    <Sucess/>
    <Journey/>
    </div>
  )
}

export default Customer