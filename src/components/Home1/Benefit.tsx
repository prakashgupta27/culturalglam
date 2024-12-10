import Image from 'next/image';
import React from 'react'
import indiatIcon from "../../../public/images/tourTravel/india.png"
import international from "../../../public/images/tourTravel/tourism.png"
import yatra from "../../../public/images/tourTravel/greeting.png"
import honeymoon from "../../../public/images/tourTravel/honeymoon.png"


interface Props {
    props: string;
}

const Benefit: React.FC<Props> = ({ props }) => {
    return (
        <>
            <div className="whate-new-block md:pt-20 pt-10">
                <div className="container">
                    <div className="heading flex flex-col ">
                        <div className="heading3 pt-10 pb-5 pl-4 pr-2   bg-[#f5f5f5]">Our Services</div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className={`benefit-block ${props}`}>
                    <div className="list-benefit grid items-start lg:grid-cols-4 grid-cols-2 gap-[30px]">
                        <div className="benefit-item flex flex-col items-center justify-center">
                        <Image src={indiatIcon} width={80} alt='image of india-map-icon png' className="hover:scale-110 transition-transform duration-200"/>

                            <div className="heading6 text-center mt-5">India Tour</div>
                            <div className="caption1 text-secondary text-center mt-3">"Explore India&#39;s rich culture, history, and scenic beauty with us."</div>
                        </div>
                        <div className="benefit-item flex flex-col items-center justify-center">
                            <Image src={international} width={80} alt='international-tour-icon png' className="hover:scale-110 transition-transform duration-200"/>
                            <div className="heading6 text-center mt-5">International Tour</div>
                            <div className="caption1 text-secondary text-center mt-3">Explore diverse cultures, iconic landmarks, and unforgettable experiences on international tours.</div>
                        </div>
                        <div className="benefit-item flex flex-col items-center justify-center">
                            <Image src={yatra} width={80} alt='yatra-tour-icon png' className="hover:scale-110 transition-transform duration-200"/>

                            <div className="heading6 text-center mt-5">Yatra</div>
                            <div className="caption1 text-secondary text-center mt-3"> Embark on a memorable Yatra, exploring spiritual destinations and enriching experiences.</div>
                        </div>
                        <div className="benefit-item flex flex-col items-center justify-center">
                            <Image src={honeymoon} width={80} alt='honnymoon-tour-icon png' className="hover:scale-110 transition-transform duration-200"/>
                            <div className="heading6 text-center mt-5">Honeymoon Package</div>
                            <div className="caption1 text-secondary text-center mt-3">Experience romance and luxury with our unforgettable honeymoon packages worldwide.</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Benefit