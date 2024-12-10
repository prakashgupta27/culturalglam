'use client'

import React, { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ProductType } from '@/type/ProductType'
import Product from '../Product'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs, Scrollbar } from 'swiper/modules'
import 'swiper/css/bundle'
import * as Icon from "@phosphor-icons/react/dist/ssr"
import SwiperCore from 'swiper/core'
import { useCart } from '@/context/CartContext'
import { useModalCartContext } from '@/context/ModalCartContext'
import { useWishlist } from '@/context/WishlistContext'
import { useModalWishlistContext } from '@/context/ModalWishlistContext'
import { useCompare } from '@/context/CompareContext'
import { useModalCompareContext } from '@/context/ModalCompareContext'
import ModalSizeguide from '@/components/Modal/ModalSizeguide'

import rajasthanifood from "../../../../public/images/tourTravel/rajasthanifood.png"

SwiperCore.use([Navigation, Thumbs])

interface Props {
    data: Array<ProductType>
    productId: string | number | null
}

const Default: React.FC<Props> = ({ data, productId }) => {
    const swiperRef = useRef<any>(null)
    const [photoIndex, setPhotoIndex] = useState(0)
    const [openPopupImg, setOpenPopupImg] = useState(false)
    const [openSizeGuide, setOpenSizeGuide] = useState<boolean>(false)
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null)
    const [activeColor, setActiveColor] = useState<string>('')
    const [activeSize, setActiveSize] = useState<string>('')
    const [activeTab, setActiveTab] = useState<string | undefined>('description')

    const { addToCart, updateCart, cartState } = useCart()
    const { openModalCart } = useModalCartContext()
    const { addToWishlist, removeFromWishlist, wishlistState } = useWishlist()
    const { openModalWishlist } = useModalWishlistContext()
    const { addToCompare, removeFromCompare, compareState } = useCompare()
    const { openModalCompare } = useModalCompareContext()

    let productMain = data.find(product => product.id === productId) as ProductType
    if (!productMain) {
        productMain = data[0]
    }

    const percentSale = Math.floor(100 - ((productMain?.price / productMain?.originPrice) * 100))

    const handleOpenSizeGuide = () => setOpenSizeGuide(true)
    const handleCloseSizeGuide = () => setOpenSizeGuide(false)

    const handleSwiper = (swiper: SwiperCore) => setThumbsSwiper(swiper)
    const handleActiveColor = (item: string) => setActiveColor(item)
    const handleActiveSize = (item: string) => setActiveSize(item)

    const handleIncreaseQuantity = () => {
        productMain.quantityPurchase += 1
        updateCart(productMain.id, productMain.quantityPurchase + 1, activeSize, activeColor)
    }

    const handleDecreaseQuantity = () => {
        if (productMain.quantityPurchase > 1) {
            productMain.quantityPurchase -= 1
            updateCart(productMain.id, productMain.quantityPurchase - 1, activeSize, activeColor)
        }
    }

    const handleAddToCart = () => {
        if (!cartState.cartArray.find(item => item.id === productMain.id)) {
            addToCart({ ...productMain })
            updateCart(productMain.id, productMain.quantityPurchase, activeSize, activeColor)
        } else {
            updateCart(productMain.id, productMain.quantityPurchase, activeSize, activeColor)
        }
        openModalCart()
    }

    const handleAddToWishlist = () => {
        if (wishlistState.wishlistArray.some(item => item.id === productMain.id)) {
            removeFromWishlist(productMain.id)
        } else {
            addToWishlist(productMain)
        }
        openModalWishlist()
    }

    const handleAddToCompare = () => {
        if (compareState.compareArray.length < 3) {
            if (compareState.compareArray.some(item => item.id === productMain.id)) {
                removeFromCompare(productMain.id)
            } else {
                addToCompare(productMain)
            }
        } else {
            alert('Compare up to 3 products')
        }
        openModalCompare()
    }

    const handleActiveTab = (tab: string) => setActiveTab(tab)

    return (
        <div className="product-detail default mt-10">
            <div className="featured-product py-10 md:py-20">
                <div className="container flex justify-between gap-y-6 flex-wrap">
                    <div className="list-img md:w-1/2 w-full md:pr-[45px]">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={0}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[Thumbs]}
                            className="mySwiper2 rounded-2xl overflow-hidden"
                        >
                            {productMain.images.map((item, index) => (
                                <SwiperSlide
                                    key={index}
                                    onClick={() => {
                                        swiperRef.current?.slideTo(index)
                                        setOpenPopupImg(true)
                                    }}
                                >
                                    <Image
                                        src={rajasthanifood}
                                        width={1000}
                                        height={1000}
                                        alt='prd-img'
                                        className='w-full aspect-[3/4] object-cover'
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className={`popup-img ${openPopupImg ? 'open' : ''}`}>
                            <span
                                className="close-popup-btn absolute top-4 right-4 z-[2] cursor-pointer"
                                onClick={() => setOpenPopupImg(false)}
                            >
                                <Icon.X className="text-3xl text-white" />
                            </span>
                            <Swiper
                                spaceBetween={0}
                                slidesPerView={1}
                                modules={[Navigation, Thumbs]}
                                navigation={true}
                                loop={true}
                                className="popupSwiper"
                                onSwiper={(swiper) => swiperRef.current = swiper}
                            >
                                {productMain.images.map((item, index) => (
                                    <SwiperSlide
                                        key={index}
                                        onClick={() => setOpenPopupImg(false)}
                                    >
                                        <Image
                                            src={item}
                                            width={1000}
                                            height={1000}
                                            alt='prd-img'
                                            className='w-full aspect-[3/4] object-cover rounded-xl'
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                    <div className="product-infor md:w-1/2 w-full lg:pl-[15px] md:pl-2">
                        <div className="flex justify-between">
                            <div>
                                <div className="heading4 mt-1">{productMain.name}</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 flex-wrap mt-5 pb-6 border-b border-line">
                            <div className="desc text-secondary mt-3">
                                Rajasthani food is renowned for its bold flavors, rich spices, and a mix of traditional and royal influences. The cuisine reflects the region’s history, climate, and culture, which combines royal feasts with simple, everyday meals, shaped by desert living, hospitality, and vibrant festivals. Some key aspects of Rajasthani food include:
                            </div>
                        </div>
                        <section className="space-y-10 ">
                            {/* Spices and Ingredients */}
                            <div>
                                <h4 className="text-2xl font-semibold text-gray-800 mt-10">Spices and Ingredients</h4>
                                <ul className="list-disc pl-5 text-lg text-gray-700 space-y-2">
                                    <li><strong>Spicy and Tangy:</strong> Rajasthani food is known for being spicy and tangy. It uses a variety of spices such as cumin, coriander, red chili powder, turmeric, fenugreek, and garlic. Dried fruits and yogurt are also commonly used to add richness and flavor.</li>
                                    <li><strong>Dairy Products:</strong> Dairy, particularly ghee, yogurt, and buttermilk, plays a significant role in the cuisine, adding creaminess and flavor to many dishes.</li>
                                    <li><strong>Flour-based Dishes:</strong> As wheat is a staple, dishes made from flour such as dal baati churma and gatte ki sabzi (gram flour dumplings) are common.</li>
                                </ul>
                            </div>

                            {/* Notable Dishes */}
                            <div>
                                <h4 className="text-2xl font-semibold text-gray-800">Notable Dishes</h4>
                                <ul className="list-disc pl-5 text-lg text-gray-700 space-y-2">
                                    <li><strong>Dal Baati Churma:</strong> A quintessential Rajasthani dish, it consists of lentils (dal) served with round wheat flour dumplings (baati) that are baked and then dipped in ghee. The meal is often completed with churma, a sweet dish made from crushed baati mixed with sugar and ghee.</li>
                                    <li><strong>Gatte Ki Sabzi:</strong> A popular vegetarian dish made with gram flour dumplings cooked in a spicy yogurt-based gravy.</li>
                                    <li><strong>Laal Maas:</strong> A fiery, red meat curry made with mutton and cooked in a sauce made of red chilies and spices. It’s a specialty for meat lovers and is extremely spicy.</li>
                                    <li><strong>Ker Sangri:</strong> A traditional Rajasthani vegetable dish made from dried beans (ker) and desert berries (sangri), typically cooked with spices and served with roti or rice.</li>
                                    <li><strong>Panchmel Dal:</strong> A combination of five types of lentils cooked together and flavored with ghee, garlic, and cumin.</li>
                                    <li><strong>Bajra Roti:</strong> A flatbread made from pearl millet, often served with vegetables or chutneys.</li>
                                </ul>
                            </div>

                            {/* Sweets and Desserts */}
                            <div>
                                <h4 className="text-2xl font-semibold text-gray-800">Sweets and Desserts</h4>
                                <ul className="list-disc pl-5 text-lg text-gray-700 space-y-2">
                                    <li><strong>Ghevar:</strong> A traditional Rajasthani dessert made from flour, ghee, and sugar syrup, often topped with dry fruits. It is especially popular during festivals like Teej and Raksha Bandhan.</li>
                                    <li><strong>Mawa Kachori:</strong> A deep-fried pastry filled with sweetened mawa (reduced milk) and nuts.</li>
                                    <li><strong>Rabri:</strong> A sweet, thickened milk dessert flavored with cardamom and saffron.</li>
                                    <li><strong>Imarti:</strong> A sweet made from urad dal flour, shaped into intricate coils and fried, then soaked in sugar syrup.</li>
                                </ul>
                            </div>

                            {/* Beverages */}
                            <div>
                                <h4 className="text-2xl font-semibold text-gray-800">Beverages</h4>
                                <ul className="list-disc pl-5 text-lg text-gray-700 space-y-2">
                                    <li><strong>Chaas (Buttermilk):</strong> A cooling, spiced yogurt drink, often served as a digestive aid after meals.</li>
                                    <li><strong>Lassi:</strong> A sweet or salted yogurt drink, sometimes flavored with fruits or spices.</li>
                                    <li><strong>Masala Chai:</strong> A strong, spiced tea, often enjoyed with snacks.</li>
                                </ul>
                            </div>

                            {/* Vegetarian Dominance */}
                            <div>
                                <h4 className="text-2xl font-semibold text-gray-800">Vegetarian Dominance</h4>
                                <p className="text-lg text-gray-700">
                                    Rajasthani cuisine is predominantly vegetarian, with a vast variety of vegetable dishes. Due to the arid climate, farming is often limited, and the food uses ingredients that are available in the desert, such as dried beans, millet, and various preserved foods.
                                </p>
                            </div>

                            {/* Traditional Cooking Methods */}
                            <div>
                                <h4 className="text-2xl font-semibold text-gray-800">Traditional Cooking Methods</h4>
                                <p className="text-lg text-gray-700">
                                    Cooking methods like slow cooking, grilling, and roasting over open flames are common, giving dishes a unique flavor. Some meals are traditionally served in large thalis (trays), offering a variety of dishes all at once, reflecting the hospitality of Rajasthan.
                                </p>
                            </div>

                            {/* Cultural Influence */}
                            <div>
                                <h4 className="text-2xl font-semibold text-gray-800">Cultural Influence</h4>
                                <p className="text-lg text-gray-700">
                                    Rajasthani food is influenced by royal Rajputana traditions, which is why many dishes have a royal touch, with ingredients like dry fruits, ghee, and saffron. The cuisine also incorporates flavors from Mughal influences, particularly in meat dishes and desserts.
                                </p>
                            </div>
                        </section>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Default
