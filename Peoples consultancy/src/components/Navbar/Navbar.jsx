import { useState } from "react"
import items  from "./items";
import { Link } from "react-router-dom";
import logo from "../../assets/company-name.png"
import { FaBarsStaggered } from "react-icons/fa6";
function Navbar() {
  
    const [dropdown, setDropdown] = useState(false)
    const toggleMobileMenu = () => {
        setDropdown(!dropdown);
    };
    return (
        <div className="py-4 flex justify-between px-4 lg:justify-around items-center sticky top-0 left-0 w-full z-30 bg-slate-50">
            <div>
                <Link to="/">
                <img src={logo} className='w-[120px] object-cover' alt="" />
                </Link>
            </div>
            <div className='hidden lg:flex gap-20'>
                <ul className='flex gap-8 items-center'>
                    {items.map((item, index) => {
                        return <li className='font-poppins text-black ' key={index}>
                             <Link to={item.path}>{item.label}
                             </Link></li>
                    })}
                 
                </ul>
                <div>
                    <Link to={"/Contact"}>
                    <button className=" w-[130px] h-[40px] bg-[#111214] text-white font-poppins rounded-lg">Estimate</button>
                    </Link>
                    </div>
            </div>
           
            <div className='flex items-center gap-4 lg:hidden' >
                <Link to={"/Contact"}><button className=" w-[100px] text-sm md:text-base md:w-[130px]  h-[40px] bg-[#111214] text-white font-poppins  rounded-lg">Estimate</button></Link>
            <FaBarsStaggered  className=" w-[40px] h-[24px]" onClick={toggleMobileMenu}/>
            </div>
            <div className={dropdown ? "bg-[#111214] text-white z-[99] flex flex-col transition-all lg:hidden duration-300 gap-4 ps-2 fixed top-16 left-0 h-full w-full text-center" : "'bg-[#3F6955] flex flex-col gap-4 z-[99] ps-2 fixed top-16 -left-full transition-all lg:hidden duration-300 h-full w-[85%]'"}>
                <div className='mt-5'>
                    <ul className='flex flex-col ps-4 gap-4'>
                        {items.map((item, index) => {
                            return <li className='font-poppins text-white' key={index}><Link to={item.path}>{item.label}</Link></li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar