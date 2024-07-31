import React from 'react'
import { Link } from 'react-router-dom'

function Button() {
  return (
    <div className='flex justify-center items-center pt-20 pb-5' >
    <Link to="/support">
    <button className='flex items-center justify-center gap-1 px-5 py-3 rounded-lg bg-[#DBDBDB]'><svg xmlns="http://www.w3.org/2000/svg" className='size-[20px]' viewBox="0 0 24 25" fill="none">
<g filter="url(#filter0_d_1168_477)">
<path d="M5.83361 9.26851L5.24444 9.85768L4.65527 9.26851L5.24444 8.67935L5.83361 9.26851ZM20.0003 15.9352C20.0003 16.1562 19.9125 16.3682 19.7562 16.5244C19.5999 16.6807 19.388 16.7685 19.1669 16.7685C18.9459 16.7685 18.734 16.6807 18.5777 16.5244C18.4214 16.3682 18.3336 16.1562 18.3336 15.9352H20.0003ZM9.41111 14.0243L5.24444 9.85768L6.42277 8.67935L10.5894 12.846L9.41111 14.0243ZM5.24444 8.67935L9.41111 4.51268L10.5894 5.69101L6.42277 9.85768L5.24444 8.67935ZM5.83361 8.43518H14.1669V10.1018H5.83361V8.43518ZM20.0003 14.2685V15.9352H18.3336V14.2685H20.0003ZM14.1669 8.43518C15.714 8.43518 17.1978 9.04976 18.2917 10.1437C19.3857 11.2377 20.0003 12.7214 20.0003 14.2685H18.3336C18.3336 13.1634 17.8946 12.1036 17.1132 11.3222C16.3318 10.5408 15.272 10.1018 14.1669 10.1018V8.43518Z" fill="black"/>
</g>
<defs>
<filter id="filter0_d_1168_477" x="-1.5" y="0.935181" width="28" height="28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1168_477"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1168_477" result="shape"/>
</filter>
</defs>
</svg> Back</button>
</Link>
  </div>
  )
}

export default Button