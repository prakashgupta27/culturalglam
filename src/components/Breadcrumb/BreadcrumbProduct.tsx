'use client'

import React from 'react'
import Link from 'next/link'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { ProductType } from '@/type/ProductType'
import { useRouter } from 'next/navigation'

interface Props {
    data: Array<ProductType>
    productPage: string | null
    productId: string | number | null
}

const BreadcrumbProduct: React.FC<Props> = ({ data, productPage, productId }) => {
    const productMain = data.filter(product => product.id === productId)
    const router = useRouter()

    const handleDetailProduct = (productId: string | number | null) => {
        // Chuyển hướng đến trang shop với category được chọn
        router.push(`/product/${productPage}?id=${productId}`);
    };

    return (
        <>
           
        </>
    )
}

export default BreadcrumbProduct