'use client'

import car1 from "../../../public/images/tourTravel/car1.jpeg"
import car2 from "../../../public/images/tourTravel/car2.jpeg"
import car3 from "../../../public/images/tourTravel/car3.jpeg"
import car4 from "../../../public/images/tourTravel/car4.jpeg"
import Image from 'next/image';

const carsDetails = [
    {src: car1, name: "TOYOTA INNOVA", description: "Budgeted and cheaper rates Guaranteed  * Toyota Innova Luxury car * Both A.C & NON-A.C * Music system *Ice box Ample luggage space * Spacious and omfortable seats *White seat covers & curtains"},
    {src: car2, name: "TOYOTA ETIOS", description: "Budgeted and cheaper rates Guaranteed *TOYOTA ETIOS * Both A.C & NON-A.C *First aid box *Music system *Ice box *Ample seprate luggage space * Spacious and comfortable seats"},
    {src: car3, name: "Bus", description: "Comfortable Seating * Air Conditioning / Ventilation *Wi-Fi and Charging Ports *Refreshments / Water Availability"},
    {src: car4, name: "MINI BUS", description: "    Comfortable and Adjustable Seating * Air Conditioning / Heating * Wi-Fi and Charging Stations * Safety Features and Entertainment"}
];

const ChauffeurCars = () => {
    return (
        <>
            <div className="whate-new-block md:pt-20 pt-10">
                <div className="container">
                    <div className="heading flex flex-col mb-10 ">
                        <div className="heading3 pt-10 pb-5 pl-4 pr-2 bg-[#f5f5f5]">Chauffeur Car Service</div>
                    </div>
                </div>
            </div>
            <div className="product-item grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {carsDetails.map((car, index) => (
                    <div key={index} className="product-main cursor-pointer block">
                        <div className="product-thumb bg-white relative overflow-hidden rounded-2xl">
                            <div className="product-img w-full h-48 sm:h-56 md:h-64 lg:h-72 aspect-[3/4] pt-10 pb-5 pl-10 pr-10">
                                <Image
                                    src={car.src}
                                    width={500}
                                    height={500}
                                    priority={true}
                                    alt={car.name}
                                    className='w-full h-full object-cover duration-700 '
                                />
                            </div>
                            <div className="mt-4 text-lg font-semibold text-gray-800 uppercase mb-2">
                                <p className="font-bold underline-custom pt-10 ml-10 pr-10">{car.name}</p>
                            </div>
                            <style jsx>{`
                                .underline-custom {
                                    position: relative;
                                    display: inline-block;
                                }

                                .underline-custom::after {
                                    content: '';
                                    position: absolute;
                                    bottom: 0;
                                    left: 0;
                                    width: 100%;
                                    height: 1px;
                                    background: linear-gradient(to right, #0d1b2a, #1b263b); /* Gradient underline */
                                    border-radius: 10px; /* Rounded ends */
                                }
                            `}</style>
                            <div className="mt-2">
                                <p className="text-sm text-gray-600 pt-2 pb-5 pl-10 pr-10">{car.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ChauffeurCars;
