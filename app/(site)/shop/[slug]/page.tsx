"use client"

import { ClockIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { TiLocation } from 'react-icons/ti'
import { LuMapPin } from "react-icons/lu";
import Sticky from 'react-sticky-el';
import { Avatar, AvatarImage } from '@/components/ui/avatar'


const ProductDetails = () => {

    const slug = usePathname()

    return <div className='w-full scrollarea space-x-5 flex flex-row justify-center py-6'>
        <div className='w-2/5 bg-white rounded-sm p-5 flex justify-center flex-col'>
            {/* image section */}
            <div className='flex justify-center items-center mb-8'>
                <Image src={"/products/1.jpg"} alt='ee' width={400} height={400} />
            </div>
            <div className='space-y-20'>
                <div className='space-y-4'>
                    <div>
                        <h1 className='text-[2rem] font-bold mb-2'>10 000 CFA</h1>
                        <h2 className='text-[1rem] font-semibold'>PC Microsoft Surface Laptop 5 12th Gen intel core i7-1265u</h2>
                    </div>
                    <div className='flex space-x-5'>
                        <div className='flex items-center flex-row space-x-3 text-sm'>  <ClockIcon /> 45 minutes</div>
                        <div className='flex items-center flex-row space-x-3 text-sm'>  <LuMapPin /> Angré, Abidjan, Côte d Ivoire</div>
                    </div>
                </div>


                <div>
                    <h2 className='font-semibold'>Détails du produit</h2>
                    <p className='text-sm'>Culotte 100% coton disponible avec des tailles allant de m à 3 xl. la livraison est à partir de 1000 fr</p>
                </div>
            </div>

        </div>
        <div className='w-1/5 max-h-min '>
            <Sticky scrollElement=".scrollarea">
                <div className=' bg-white rounded-sm p-5'>
                    <div className='flex flex-col space-y-5 justify-center items-center'>
                        <div>
                            <Avatar className='h-20 w-20'>
                                <AvatarImage src='https://coinafrique-ads-photos.s3.amazonaws.com/5b4db421-5e5a-4061-93e8-c5ef18bd396b_H5zxoqzYcdSW5XS.jpeg' />
                            </Avatar>
                        </div>
                        <div className='space-y-2'>
                            <h2 className='font-bold text-lg text-center'>ange assalé</h2>
                            <div className='flex items-center flex-row space-x-3 text-sm'>  <LuMapPin /> Angré, Abidjan, Côte d Ivoire</div>
                            <p className='font-semibold text-center text-xs'>145 annonces</p>
                        </div>
                    </div>
                </div>
            </Sticky>
        </div>
    </div>
}

export default ProductDetails