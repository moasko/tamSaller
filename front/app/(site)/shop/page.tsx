"use client";

import type { FC } from 'react';
import LeftAsid from '@/components/layers/LeftAsid';
import RightBanner from '@/components/layers/RightBanner';
import TopBanner from '@/components/layers/TopBanner';
import ShopCard from '@/components/shop/ShopCard';
import NewProductModal from '@/components/shop/NewProductModal';

interface ShopProps { }

const Shop: FC<ShopProps> = ({ }) => {
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
                                                        <ShopCard />
                                                        <ShopCard />
                                                        <ShopCard />
                                                        <ShopCard />
                                                        <ShopCard />
                                                        <ShopCard />
                                                        <ShopCard />
                                                        <ShopCard />
                                                        <ShopCard />
                                                        <ShopCard />
                                                        <ShopCard />
                                                        <ShopCard />
                                                </section>

                                        </div>
                                        <RightBanner />
                                </div>
                        </div>
                </div>
        );
}
export default Shop;