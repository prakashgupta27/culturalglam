'use client'

import React, { useState } from 'react'
import Product from '../Product/Product'
import { ProductType } from '@/type/ProductType'
import { motion } from 'framer-motion'

interface Props {
    data: Array<ProductType>;
    start: number;
    limit: number;
}

const WhatNewOne: React.FC<Props> = ({ data, start, limit }) => {
    const [activeTab, setActiveTab] = useState<string>('t-shirt');

    const handleTabClick = (type: string) => {
        setActiveTab(type);
    };

    const filteredProducts = data.filter((product) => product.type === activeTab && (product.category === 'fashion'));

    return (
        <>
            <div className="whate-new-block md:pt-20 pt-10">
                <div className="container">
                    <div className="heading flex flex-col ">
                        <div className="heading3 pt-10 pb-5 pl-4 pr-2   bg-[#f5f5f5]">Premium Chauffeur Services</div>
                    </div>

                    <div className="list-product hide-product-sold grid lg:grid-cols-4 grid-cols-2 sm:gap-[30px] gap-[20px] md:mt-10 mt-6">
                        {filteredProducts.slice(start, limit).map((prd, index) => (
                            <Product data={prd} type='grid' key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhatNewOne