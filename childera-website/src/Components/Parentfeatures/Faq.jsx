import React from 'react'

function Faq() {
    const detailsData = [
        {
          id: 1,
          summary: "Why is it important to have a dedicated section for provider profiles?",
          content: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
        },
        {
          id: 2,
          summary: "What are the key features of an effective childcare application website menu?",
          content: "The key features of an effective childcare application website menu include intuitive navigation, clear categorization of services, quick access to important sections like scheduling, billing, and parent resources, and responsive design for seamless usability across devices."
        },
        {
          id: 3,
          summary: "What role does community engagement play in a childcare application platform? ",
          content: "Community engagement in a childcare app platform brings together parents, caregivers, and educators to share insights, answer questions, and celebrate experiences. It boosts communication, builds relationships, and fosters a sense of belonging among all involved. "
        },
        {
          id: 4,
          summary: "How can a childcare application website maintain user trust and security?",
          content: "A childcare application website can maintain user trust and security by implementing encryption protocols, regularly updating security measures, and ensuring transparent data handling practices. Additionally, providing clear privacy policies and offering secure payment options enhances user confidence in the platform."
        }
        ,
        {
          id: 5,
          summary: "How can a childcare application website ensure easy navigation for new users?",
          content: "A childcare application website can ensure easy navigation for new users by implementing intuitive design elements, clear menu structures, and interactive tutorials. Additionally, providing a search function and concise instructions can help users find what they need quickly and easily."
        }
      ];
  return (
    <div className='bg-[#EFFFF7] mt-20 pt-20 pb-32 px-4 md:px-0'>
        <h1 className='text-[32px] font-fredoka text-[#3F6955] text-center lg:text-[42px]'>Frequently asked questions</h1>
        <p className='text-lg lg:text-[20px] mt-4 text-[#3F6955] font-poppins text-center'>Everything you need to know about the Application and billing.</p>
        <div className="flex justify-center">
      <div className="space-y-4 mt-20 mx-auto">
        {detailsData.map((item) => (
          <details key={item.id} className="group rounded-lg border-b  p-6 lg:w-[700px] [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
              <h2 className="text-lg font-poppins font-medium text-[#3F6955]">{item.summary}</h2>

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