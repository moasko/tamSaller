"use client";

import type { FC } from 'react';
import LeftAsid from '@/components/layers/LeftAsid';
import RightBanner from '@/components/layers/RightBanner';
import TopBanner from '@/components/layers/TopBanner';
import ShopCard from '@/components/shop/ShopCard';
import NewProductModal from '@/components/shop/NewProductModal';

interface ShopProps { }

const Shop: FC<ShopProps> = ({ }) => {
        const products = [
                {
                        id: "1",
                        name: "PC Microsoft Surface Laptop 5 12th Gen intel core i7-1265u",
                        price: 999,
                        image: "/products/1.jpg",
                        slug:"produit1"
                },
                {
                        id: "2",
                        name: "Produit 2",
                        price: 1999,
                        image: "/products/2.jpg",
                        slug:"produit2"
                },
                {
                        id: "3",
                        name: "Produit 3",
                        price: 1499,
                        image: "/products/3.jpg",
                        slug:"produit3"
                },
                {
                        id: "4",
                        name: "Produit 4",
                        price: 2499,
                        image: "/products/4.jpg",
                        slug:"produit4"
                },
                {
                        id: "5",
                        name: "Produit 5",
                        price: 2999,
                        image: "/products/5.jpg",
                        slug:"produit5"
                }
        ];

        return (
                <div className='container mx-auto'>
                        {/* content container */}
                        <div className='mt-5 space-y-5'>
                                <TopBanner />
                                {/* fil layer */}
                                <div className='flex flex-col lg:flex-row lg:space-x-5 space-x-0 space-y-5 lg:space-y-0'>
                                        {/* left asid */}
                                        <LeftAsid />
                                        {/* middle conatiner */}
                                        <div className='lg:w-7/12 w-full space-y-5'>

                                                <div className='bg-white rounded-md p-3 flex space-x-3'>
                                                        <div className='w-16 h-16 bg-blue-100 flex justify-center items-center rounded-sm'>
                                                                <img src="/products_icon_p.svg" alt="ff" />
                                                        </div>
                                                        <NewProductModal />
                                                </div>

                                                <section className='grid grid-cols-4 gap-3'>
                                                        {
                                                                products.map(product => {
                                                                        return <ShopCard key={product.id} productProps={product} />
                                                                })
                                                        }

                                                </section>

                                        </div>
                                        <RightBanner />
                                </div>
                        </div>
                </div>
        );
}
export default Shop;