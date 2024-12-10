'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ProductType } from '@/type/ProductType'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { useCart } from '@/context/CartContext'
import { useModalCartContext } from '@/context/ModalCartContext'
import { useWishlist } from '@/context/WishlistContext'
import { useModalWishlistContext } from '@/context/ModalWishlistContext'
import { useCompare } from '@/context/CompareContext'
import { useModalCompareContext } from '@/context/ModalCompareContext'
import { useModalQuickviewContext } from '@/context/ModalQuickviewContext'
import { useRouter } from 'next/navigation'
import Marquee from 'react-fast-marquee'
import Rate from '../Other/Rate'

interface ProductProps {
    data: ProductType
    type: string
}

const Product: React.FC<ProductProps> = ({ data, type }) => {
    const [activeColor, setActiveColor] = useState<string>('')
    const [activeSize, setActiveSize] = useState<string>('')
    const [openQuickShop, setOpenQuickShop] = useState<boolean>(false)
    const { addToCart, updateCart, cartState } = useCart();
    const { openModalCart } = useModalCartContext()
    const { addToWishlist, removeFromWishlist, wishlistState } = useWishlist();
    const { openModalWishlist } = useModalWishlistContext()
    const { addToCompare, removeFromCompare, compareState } = useCompare();
    const { openModalCompare } = useModalCompareContext()
    const { openQuickview } = useModalQuickviewContext()
    const router = useRouter()

    const handleActiveColor = (item: string) => {
        setActiveColor(item)
    }

    const handleActiveSize = (item: string) => {
        setActiveSize(item)
    }

    const handleAddToCart = () => {
        if (!cartState.cartArray.find(item => item.id === data.id)) {
            addToCart({ ...data });
            updateCart(data.id, data.quantityPurchase, activeSize, activeColor)
        } else {
            updateCart(data.id, data.quantityPurchase, activeSize, activeColor)
        }
        openModalCart()
    };

    const handleAddToWishlist = () => {
        // if product existed in wishlit, remove from wishlist and set state to false
        if (wishlistState.wishlistArray.some(item => item.id === data.id)) {
            removeFromWishlist(data.id);
        } else {
            // else, add to wishlist and set state to true
            addToWishlist(data);
        }
        openModalWishlist();
    };

    const handleAddToCompare = () => {
        // if product existed in wishlit, remove from wishlist and set state to false
        if (compareState.compareArray.length < 3) {
            if (compareState.compareArray.some(item => item.id === data.id)) {
                removeFromCompare(data.id);
            } else {
                // else, add to wishlist and set state to true
                addToCompare(data);
            }
        } else {
            alert('Compare up to 3 products')
        }

        openModalCompare();
    };

    const handleQuickviewOpen = () => {
        openQuickview(data)
    }

    const handleDetailProduct = (productId: string) => {
        // redirect to shop with category selected
        router.push(`/product/default?id=${productId}`);
    };

    let percentSale = Math.floor(100 - ((data.price / data.originPrice) * 100))
    let percentSold = Math.floor((data.sold / data.quantity) * 100)

    return (

        <div className="product-item grid-type">
            <div onClick={() => handleDetailProduct(data.id)} className="product-main cursor-pointer block">
                <div className="product-thumb bg-white relative overflow-hidden rounded-2xl">
                    <div className="product-img w-full h-full aspect-[3/4]">
                        {
                            data.thumbImage.map((img, index) => (
                                <Image
                                    key={index}
                                    src={img}
                                    width={500}
                                    height={500}
                                    priority={true}
                                    alt={data.name}
                                    className='w-full h-full object-cover duration-700'
                                />
                            ))
                        }
                        <div className="mt-4 text-9xl text-gray-800 uppercase un mb-5">
                            <p className="font-bold underline-custom">{data.name}</p>
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
                        <div className='mt-4 '>
                            <p className='mt-2'>{data.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Product