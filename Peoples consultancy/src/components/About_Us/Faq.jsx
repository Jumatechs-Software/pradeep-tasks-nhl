
function Faq() {
    const detailsData = [
        {
          id: 1,
          summary: "Which industries of software development do you specialize in?",
          content: "We have extensive practical experience across 25+ sectors. Our focus areas include healthcare, finance, government, automobile, legal, and professional services. Our consultants at Peoples Consulting can help you comply with industry-specific regulations, regardless of your sector."
        },
        {
          id: 2,
          summary: "Can you demonstrate examples of successful development projects?",
          content: "We have numerous successful projects, including the Childera app, the Taxmize app, Spotpay, and Easylearn. These projects have been widely acclaimed and have achieved significant success in their respective markets."
        },
        {
          id: 3,
          summary: "What are the main skillsets and tech stacks within your organization?",
          content: "The main skillsets within our organisation include expertise in software development, project management, UI/UX design, data analysis, marketing and customer service. We have a strong command of different operating systems including Linux, Windows, and macOS. In server-side programming, we excel in handling business logic, data processing, and database communication through languages such as Java, Python, Ruby, PHP, and Node.js. Our expertise extends to configuring and managing web servers like Apache HTTP Server, Nginx, and Microsoft IIS to handle HTTP requests and serve web pages efficiently. When it comes to databases, we are skilled in selecting and configuring database management systems (DBMS) like MySQL, PostgreSQL, MongoDB, and Oracle to effectively store and manage application data. We are proficient in client-side programming, utilizing languages, frameworks, and libraries such as HTML, CSS, JavaScript, Angular, React, and Vue.js to craft compelling user interfaces and client-side logic. Leveraging specialized frameworks and libraries like React, Angular, Vue.js, and Ember.js, we streamline the development of interactive user interfaces and frontend components. Our deployment and infrastructure capabilities encompass deploying, hosting, and managing applications in production environments using cloud platforms like AWS, Azure, and Google Cloud, along with containerization technologies such as Docker and Kubernetes. We also employ deployment automation tools and monitoring systems to ensure efficient management throughout the development process."
        },
        {
          id: 4,
          summary: "How do you keep data and IP secure, and do you meet key standards such as ISO27001?",
          content: "Governmental organizations prioritize secure software development and compliance with standards like ISO 27001 and ISO 9001. Peoples Consulting offers comprehensive consultancy services to ensure data and intellectual property security, aligning with industry standards like ISO 27001. Ou consultants assist clients in adhering to region-specific regulations such as HIPAA, PCI DSS, SEC, NYDFS, CCPA, GDPR, and SAMA."
        }
        ,
        {
          id: 5,
          summary: "Which development methodology do you use and how do you apply it to get the maximum success from your development projects?",
          content: "We work with multiple methodologies, including Agile, DevOps, Waterfall, and Rapid Application Development (RAD), depending on the project's requirements and objectives. We mainly use Agile for its focus on user satisfaction and communication. Agile adapts well to changing requirements and allows quick responses to market needs. Additionally, we employ DevOps for collaboration, Waterfall for clear-cut projects, and RAD for rapid prototyping and customer involvement."
        }
      ];
  return (
    <div className='bg-white mt-20 pt-20 pb-10 px-4 md:px-0'>
        <h1 className='text-[32px] font-montserrat font-bold text-center lg:text-[42px] text-[#303030]'>Frequently asked questions</h1>
        <p className='text-lg lg:text-[20px] mt-4 font-poppins text-center text-[#999999CC] lg:w-[535px] lg:h-[60px] mx-auto'> Here, we've gathered answers to the most common questions our customers ask.</p>
        <div className="flex justify-center">
      <div className="space-y-4 mt-8 mx-auto">
        {detailsData.map((item) => (
          <details key={item.id} className="group rounded-lg border-b  p-6 lg:w-[700px] [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
              <h2 className="text-lg font-poppins font-medium ">{item.summary}</h2>

              <span className="relative size-5 shrink-0">
    
                <svg xmlns="http://www.w3.org/2000/svg"  className="absolute inset-0 opacity-100 group-open:opacity-0" width="24" height="26" viewBox="0 0 24 26" fill="none">
<path d="M12 10V18M8 14H16M22 14C22 19.5228 17.5228 24 12 24C6.47715 24 2 19.5228 2 14C2 8.47715 6.47715 4 12 4C17.5228 4 22 8.47715 22 14Z" stroke="#3F6955" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24"  className="absolute inset-0 opacity-0 group-open:opacity-100" height="26" viewBox="0 0 24 26" fill="none">
<path d="M8 14H16M22 14C22 19.5228 17.5228 24 12 24C6.47715 24 2 19.5228 2 14C2 8.47715 6.47715 4 12 4C17.5228 4 22 8.47715 22 14Z" stroke="#3F6955" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-[#5E5E5E] font-poppins">
              {item.content}
            </p>
          </details>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Faq