"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, type FC } from 'react';

interface LeftAsidProps { }

const LeftAsid: FC<LeftAsidProps> = ({ }) => {
    const pathname = usePathname()
    return (
        <aside className='lg:w-3/12 w-full space-y-4'>
            <div className='bg-white rounded-md p-3'>
                <Link href={'/forum'} className={`w-full p-3 flex items-center hover:bg-slate-100 ${pathname==="/forum"&& 'bg-orange-100'} rounded-sm space-x-2`}>
                    <img src="/forum_icon_p.svg" alt="ff" />
                    <div>
                        <h2 className='text-lg font-bold'>Forum</h2>
                        <p className='text-sm'>Chercher et trouvez des produits</p>
                    </div>
                </Link>
                <Link href={"/shop"} className={`w-full p-3 flex items-center  hover:bg-slate-100 ${pathname==="/shop"&& 'bg-blue-100'} rounded-sm space-x-2`}>
                    <img src="/products_icon_p.svg" alt="ff" />
                    <div>
                        <h2 className='text-lg font-bold'>Boutique</h2>
                        <p className='text-sm'>Vendez et trouvez des produits</p>
                    </div>
                </Link>

            </div>
            <div className='bg-white rounded-md p-3'>

                <div className='w-full p-2 cursor-pointer justify-between flex items-center hover:bg-slate-100 rounded-sm space-x-2'>
                    <h2 className='font-bold'>Montres</h2>
                    <span className=''>45</span>
                </div>

                <div className='w-full p-2 cursor-pointer justify-between flex items-center hover:bg-slate-100 rounded-sm space-x-2'>
                    <h2 className='font-bold'>Electonique</h2>
                    <span className=''>4</span>
                </div>
                <div className='w-full p-2 cursor-pointer justify-between flex items-center hover:bg-slate-100 rounded-sm space-x-2'>
                    <h2 className='font-bold'>Vetelements Hommes</h2>
                    <span className=''>1k</span>
                </div>

                <div className='w-full p-2 cursor-pointer justify-between flex items-center hover:bg-slate-100 rounded-sm space-x-2'>
                    <h2 className='font-bold'>Vehicules</h2>
                    <span className=''>240</span>
                </div>
                <div className='w-full p-2 cursor-pointer justify-between flex items-center hover:bg-slate-100 rounded-sm space-x-2'>
                    <h2 className='font-bold'>Electromenager</h2>
                    <span className=''>80</span>
                </div>
                <div className='w-full p-2 cursor-pointer justify-between flex items-center hover:bg-slate-100 rounded-sm space-x-2'>
                    <h2 className='font-bold'>Smartphones et PC</h2>
                    <span className=''>12</span>
                </div>
                <div className='w-full p-2 cursor-pointer justify-between flex items-center hover:bg-slate-100 rounded-sm space-x-2'>
                    <h2 className='font-bold'>Accessoires de mode</h2>
                    <span className=''>25</span>
                </div>

            </div>
        </aside>
    );
}
export default LeftAsid;