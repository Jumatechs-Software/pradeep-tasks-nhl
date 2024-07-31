import React from 'react'
import img from "../../assets/secure.png"
import img2 from "../../assets/secure2.png"
import img3 from "../../assets/secure3.png"
import img4 from "../../assets/secure4.png"
function Secure() {
    const list=[
        {
            image:img,
            label:"Save more time",
            parah:"Experience automated invoicing, payment notifications, and autopay features with our app, ChildEra Billing. Easy setup, confirmed by 99% of admins.",
            bg:"#fbf7e6"
        },
        {
            image:img2,
            label:"Ensure timely payments, consistently.",
            parah:"Experience improved punctuality as our App ensures 100% on-time payments in preschools. Eradicate late payments through automated billing services and payment reminders.",
            bg:"#eaf6f0"
        },
        {
            image:img3,
            label:"Simplify Payments for Families",
            parah:"Offer families a secure and hassle-free payment experience with our app, preferred by 91% of administrators at ChildEra.",
            bg:"#d9eff6"
        },
        {
            image:img4,
            label:"Effortlessly Monitor Every Dollar",
            parah:"Track your Funds easily with our instant Billing Dashboard. Customize and access real-time reports anytime, anywhere.",
            bg:"#fdeee5"
        },]
  return (
    <div className='px-4 md:px-0'>
        <h1 className='text-[22px] mx-auto pt-10 md:text-[28px] md:w-[600px] lg:text-[42px]  font-fredoka  lg:w-[900px]  text-[#546E62] text-center'>Secure Transactions, Confident Payments: Trust in Our Safe Billing System</h1> 

            <div className='grid grid-cols-1  md:grid-cols-2 pt-10 pb-10 gap-10 place-content-center place-items-center max-w-screen-lg mx-auto'>
            {list.map((items,index)=>{
                return(
                    <div key={index} className="w-[325px] md:w-[347px] lg:w-[472px] h-[250px] flex flex-col justify-center items-center gap-5" style={{ backgroundColor: items.bg }}>
                            <div className='flex justify-center w-full gap-10 items-center '>
                                <img src={items.image} className='size-[50px] lg:size-[80px]' alt="" />
                                <div>
                                    <h1 className='font-fredoka text-[22px] lg:text-2xl text-[#4CAF84] w-[164px] lg::w-[280px]'>{items.label}</h1>
                                </div>
                            </div>
                            <p className='text-[#5E5E5E] text-sm lg:text-base font-poppins w-[289px] lg:w-[400px]'>{items.parah}</p>
                    </div>
                )
            })}

        </div>
    </div>
  )
}

export default Secure