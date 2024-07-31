import img1 from "../../assets/logo1.png"
import img2 from "../../assets/logo2.png"
import img3 from "../../assets/logo3.png"
import img4 from "../../assets/logo4.png"
import img5 from "../../assets/logo5.png"
import img6 from "../../assets/logo6.png"
import img7 from "../../assets/logo7.png"
function Brands() {
    const items = [
        { img: img1, label: "Vector" },
        { img: img2, label: "Vimeo" },
        { img: img3, label: "Carbon" },
        { img: img4, label: "Gitlab" },
        { img: img5, label: "Tidal" },
        { img: img6, label: "Tux" },
        { img: img7, label: "Internet Explorer" }
    ];

   

  return (
    <div className='flex md:gap-10 flex-wrap gap-8 lg:gap-24 lg:justify-start justify-center md:px-0 lg:pl-56'>
        {items.map((data)=>{
            return (
                <div className="flex flex-col items-center gap-4" key={items.id}>
                    <img src={data.img} className='size-[30px] md:size-[40px] lg:size-[48px] object-contain' alt=""/>
                    <p className='text-[#535353] font-montserrat '>{data.label}</p>
                </div>
            )
        })}
       
    </div>
  )
}

export default Brands