import Image from 'next/image';
import type { FC } from 'react';
import { TiLocation } from 'react-icons/ti'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import Link from 'next/link';

interface ShopCardProps {
    productProps: {
        id?: string,
        price: number,
        name: string,
        image: string
    }

}

const ShopCard: FC<ShopCardProps> = ({ productProps }) => {

    const { image, price, name, id } = productProps

    return (
        <Link href={"/"} className='bg-white hover:border-sky-500 border rounded-lg overflow-hidden shadowrounded'>
            <div className='w-full relative h-[190px]'>
                <Image fill alt='la' src={image} />
            </div>

            <div className='p-3 space-y-1'>
                <h2 className='text-lg '>{price} FCfA</h2>
                <p className='text-[13px] font-[500] line-clamp-2'>{name}</p>
                <div className='flex items-center space-x-1'>
                    <TiLocation color='orange' />
                    <p className='text-sm text-[#6f8596]'>koumassi,cocody</p>
                </div>
            </div>
            <div>
                <div className='flex px-3 py-2 space-x-2 border-t justify-start items-center'>
                    <Avatar className='h-[24px] w-[24px]'>
                        <AvatarFallback className='text-xs bg-blue-400'>
                            M
                        </AvatarFallback>
                    </Avatar>
                    <p className='text-sm font-semibold text-slate-500'>moasko dev</p>
                </div>
            </div>
        </Link>
    );
}
export default ShopCard;