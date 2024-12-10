'use client'

import React, { Component } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css';
import LPP from "../../../public/images/slider/slideOne1.jpeg"
import LPP2 from "../../../public/images/slider/slideTwo.jpeg"
import LPP3 from "../../../public/images/slider/slideThree.jpeg"


const SliderOne = () => {
    return (
        <div className="slider-block style-one bg-linear xl:h-[860px] lg:h-[800px] md:h-[580px] sm:h-[500px] h-[350px] max-[420px]:h-[320px] w-full">
            <div className="slider-main h-full w-full">
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    pagination={{ clickable: true }}
                    modules={[Pagination, Autoplay]}
                    className="h-full relative"
                    autoplay={{
                        delay: 4000,
                    }}
                >
                    <SwiperSlide>
                        <div className="slider-item h-screen w-full relative mt-24">
                            <div className="container w-full h-full flex items-center relative">
                            <div className="text-content basis-1/2 relative z-10 px-6">
                            <div className="text-content basis-1/2 relative z-10 px-6">
                            <div className="relative">
    {/* Increased Black Overlay behind the text */}
    <div className="absolute inset-0 bg-black/60 z-0"></div>  {/* Increased opacity for the overlay to stand out more */}

    {/* Text content with enhanced styling */}
    <div className="text-sub-display text-white text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-shadow-lg relative z-10 mt-16"> 
        {/* Added margin-top for more space */}
        We are here
    </div>
    
    <div className="text-display md:mt-5 mt-2 text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight relative z-10">
        Book With Us And <strong>Enjoy</strong> Your Travel
    </div>

    {/* "Plan Your Trip" button below the text, centered with added space */}
    <div className="flex justify-center mt-10 relative z-10"> {/* More space between button and text */}
        <Link href="/shop/breadcrumb-img" className="button-main text-white bg-primary px-6 py-3 rounded-lg">
            Plan Your Trip
        </Link>
    </div>
</div>

</div>

</div>


                                <div className="sub-img absolute top-0 left-0 w-full h-full z-0 group">
                                    <Image
                                        src={LPP}
                                        alt="landing page photo"
                                        fill
                                        style={{
                                            objectFit: 'cover',
                                            objectPosition: 'center',
                                        }}
                                        priority={true}
                                    />

                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-40 transition-opacity duration-600 ease-in-out"></div>
                                </div>
                            </div>
                        </div>


                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="slider-item h-full w-full relative mt-24">
                            <div className="container w-full h-full flex items-center justify-between relative">
                                <div className="text-content basis-1/2">
                                    <div className="text-sub-display">Explore Now! Up To 50% Off!</div>
                                    <div className="text-display md:mt-5 mt-2">
                                        Discover Destinations for Every Traveler
                                    </div>
                                    <Link href="/shop/breadcrumb-img" className="button-main md:mt-8 mt-3">
                                        Book Your Journey
                                    </Link>
                                </div>
                                <div className="sub-img relative w-1/2 h-full flex justify-end items-center">
                                    <Image
                                        src={LPP2}
                                        alt="bg1-2"
                                        width={670}
                                        height={936}
                                        style={{
                                            objectFit: 'cover',
                                            objectPosition: 'center right',
                                        }}
                                        priority={true}
                                    />
                                </div>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-item h-full w-full relative mt-24">
                            <div className="container w-full h-full flex items-center justify-between relative">
                                <div className="text-content basis-1/2">
                                    <div className="text-sub-display">Explore Now! Up To 50% Off!</div>
                                    <div className="text-display md:mt-5 mt-2">
                                        Adventures Await All Year Round
                                    </div>
                                    <Link href="/shop/breadcrumb-img" className="button-main md:mt-8 mt-3">
                                        Discover More
                                    </Link>
                                </div>
                                <div className="sub-img relative w-1/2 h-full flex justify-end items-center">
                                    <Image
                                        src={LPP3}
                                        alt="landing page photo"
                                        width={1000}
                                        height={1000}
                                        style={{
                                            objectFit: 'cover',
                                            objectPosition: 'center right',
                                        }}
                                        priority={true}
                                    />
                                </div>
                            </div>
                        </div>

                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default SliderOne