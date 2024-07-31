import React from 'react'
import Hero from '../Components/Help/Hero'
import { Form } from '../Components/Childera/Form'
import Help from '../Components/Help/Link'
import Video from '../Components/Help/Video'

function Helpcenter() {
  return (
    <div className='mt-10'>
    <Hero/>
    <Help/>
    {/* <Video/> */}
    <Form/>
    </div>
  )
}

export default Helpcenter