import React from 'react'
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import SliderOne from '@/components/Slider/SliderOne'
import WhatNewOne from '@/components/Home1/WhatNewOne'
import productData from '@/data/Product.json'
import Collection from '@/components/Home1/Collection'
import TabFeatures from '@/components/Home1/TabFeatures'
import TabFeatures2 from '@/components/Home1/TabFeatures2'

import Banner from '@/components/Home1/Banner'
import Benefit from '@/components/Home1/Benefit'
import testimonialData from '@/data/Testimonial.json'
import Testimonial from '@/components/Home1/Testimonial'
import Instagram from '@/components/Home1/Instagram'
import Brand from '@/components/Home1/Brand'
import Footer from '@/components/Footer/Footer'
import ModalNewsletter from '@/components/Modal/ModalNewsletter'
import Cars from "@/components/Home1/caars"
import YoutubeVideo from "@/components/Home1/youtube"
import Special from "@/components/Home1/special"

export default function Home() {
  return (
    <>
      <TopNavOne props="style-one bg-black" slogan="New customers save 10% with the code GET10" />
      <div id="header" className='relative w-full'>
        <MenuOne props="bg-transparent" />
        <SliderOne />
      </div>
      <Special/>
      <WhatNewOne data={productData} start={0} limit={4} />
      <Cars/>
      <Collection />
      <TabFeatures data={productData} start={0} limit={6} />
      <TabFeatures2/>
      <Banner />
      <Benefit props="md:py-20 py-10" />
      <Testimonial data={testimonialData} limit={6} />
      <YoutubeVideo/>
      <Instagram />
      <Brand />
      <Footer />
      <ModalNewsletter />
    </>
  )
}
