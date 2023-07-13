import Image from 'next/image';
import type { FC } from 'react';
import { TiLocation } from 'react-icons/ti'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

interface ShopCardProps { }

const ShopCard: FC<ShopCardProps> = ({ }) => {
    return (
        <div className='bg-white hover:border-sky-500 border rounded-lg overflow-hidden shadowrounded'>
            <div className='w-full relative h-[190px]'>
                <Image fill alt='la' src={"/posts/1.jpg"} />
            </div>

            <div className='p-3 space-y-1'>
                <h2 className='font-bold text-lg text-sky-600'>25 000 FCfA</h2>
                <p className='text-[13px] font-[700] line-clamp-2'>montre pa tres chere a koumassi de la </p>
                <div className='flex items-center space-x-1'>
                    <TiLocation />
                    <p className='text-sm text-[#6f8596]'>koumassi,cocody</p>
                </div>
            </div>
            <div>
                <div className='flex px-3 py-2 space-x-2 border-t justify-start items-center'>
                    <Avatar className='h-[24px] w-[24px]'>
                        <AvatarFallback className='text-xs bg-gray-400'>
                            M
                        </AvatarFallback>
                    </Avatar>
                    <p className='text-sm font-semibold text-slate-500'>moasko dev</p>
                </div>
            </div>
        </div>
    );
}
export default ShopCard;