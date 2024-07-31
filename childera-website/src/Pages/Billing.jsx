import React from 'react'
import Hero from '../Components/Billing/Hero'
import Secure from '../Components/Billing/Secure'
import Rate from '../Components/Billing/Rate'
import { Number } from '../Components/Childera/Number'
import { Form } from '../Components/Childera/Form'
import BillingForm from '../Components/Billing/BillingForm'
function Billing() {
  return (
    <div className='mt-10'>
    <Hero/>
    <Secure/>
  <Rate/>
  <BillingForm/>
  <Number/>
  <Form/>
    </div>
  )
}

export default Billing