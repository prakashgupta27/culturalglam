'use client'
import Image from 'next/image';
import React from 'react'
import incdibleIndia from "../../../public/images/tourTravel/incedibleIndia.jpg"
import varanasi from "../../../public/images/tourTravel/varanasi.jpg"


const Benefit = () => {
    return (
        <>
            <div className="whate-new-block md:pt-20 pt-10">
                <div className="container">
                    <div className="heading flex flex-col">
                        <div className="heading3 pt-10 pb-5 pl-4 pr-2 bg-[#f5f5f5]">About India</div>
                    </div>

                    <div className='flex flex-row'>
                        {/* <div className="heading5 text-black ml-20 mt-10 mb-5">About <br />Incredible India</div><br /> */}

                        {/* The paragraph comes below heading5 */}
                        <div className="text-black ml-20 mt-10 mb-5 ">
                            <span className='text-2xl text-black font-bold under'>About <br/>Incredible India</span><br /><p></p>India offers incredible holiday experiences through its cultural, topography, and wildlife diversity. With these amazing and unique experiences, this south Asian country conveniently finds its way into the world tourism map as one of the finest destinations for a holistic vacation. India establishes its identity as the country of architectural masterpieces, making it an ideal travel destination to plan a heritage tour in the world. While Taj Mahal makes for the major draw on an India tour, there are a plethora of monuments and edifices in every India travel guide displaying the fine architecture and grandiose of different eras in the country. The diverse Indian topography adorned with the impressive Himalayas; long stretches of coastline; expansive hot, cold and white salt deserts; dense forests; alpine meadows and lakes; and scenic waterfalls pique the tourists’ interest. Along with the best nature sightseeing tours, India offers an opportunity to visitors to have a little adventure of their own. The numerous spell-binding and less-trodden trails give trekking tour opportunities in South Asia unlike any other. India Tours offers a chance to explore its biodiversity in the country's many national parks and wildlife reserves. An enthralling experience entails in the India wildlife tour packages that take tourists to the habitats of Royal Bengal Tigers, one-horned rhinos, and snow leopards amongst many rare, endangered, and unique species of flora and fauna.</div>
                        <Image src={incdibleIndia} width={500} alt='image of showing Incredible-india'
                            className=' bg-foo mx-20 mt-10 rounded-xl hover:scale-110 transition-transform duration-700 ' />

                    </div>

                </div>
            </div>

        </>
    )
}

export default Benefit
