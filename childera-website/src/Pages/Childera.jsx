import React from 'react'
import { Hero } from '../Components/Childera/Hero'
import { Features } from '../Components/Childera/Features'
import { Individuals } from '../Components/Childera/Effective'
import { Number } from '../Components/Childera/Number'
import { Form } from '../Components/Childera/Form'
import Administrative from '../Components/Childera/Administrative'
import Attendance from '../Components/Childera/Attendance'

export const Childera = () => {
  return (
    <div className='bg-[#F8FFFB] mt-10'>
        <Hero/>
        <Features/>
        <Administrative/>
        <Attendance/>
        <Individuals/>
        <Number/>
        <Form/>
    </div>
  )
}
