const Newsletter = () => {
  return (
    <div className="text-center mb-20 lg:mt-20 mt-10">
      <p className="font-montserrat font-semibold pb-2">GET IN UPDATE</p>
      <p className="font-redhat text-xl lg:text-4xl pb-2">Newsletter</p>
      <input type="email" placeholder="YOUR EMAIL" className="border-[#999999] border rounded-lg lg:w-96 w-[90%] px-4 py-2 mb-4"/>
      <div>
      <button className="bg-black text-white px-4 py-2 rounded-lg">Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter
