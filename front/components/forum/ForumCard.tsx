import type { FC } from 'react';
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

import { FaWhatsapp } from 'react-icons/fa'
import { PiPhoneCallBold } from 'react-icons/pi'
import { BiLinkAlt, BiTimeFive } from 'react-icons/bi'
import { FiShare2 } from 'react-icons/fi'
import { AiOutlineEye } from 'react-icons/ai'
import { TiLocation } from 'react-icons/ti'

interface ForumCardProps { }

const ForumCard: FC<ForumCardProps> = ({ }) => {

    return (
        <article className='bg-white rounded-md p-3 flex space-x-4'>
            <div>
                <Image src="/posts/1.jpg" className='rounded-lg' alt="article" width={150} height={150} />
            </div>

            <div className='w-full space-y-4'>

                <div className='flex w-full justify-between items-center '>
                    <div className='flex space-x-2 items-center '>
                        <Avatar className='h-[30px] w-[30px]'>
                            <AvatarFallback className='text-xs'>
                                MS
                            </AvatarFallback>
                        </Avatar>
                        <div className='flex flex-col line-clamp-1'>
                            <h3 className='text-md font-bold'>moasko</h3>
                            <div className='flex items-center space-x-1'>
                                <TiLocation color='gray'/>
                                <p className='text-xs text-slate-600'>Koumassi, grand marcher</p>
                            </div>
                        </div>
                    </div>
                    <div className='text-xs flex items-center space-x-2'> <BiTimeFive size={15} color='#CACACA' /> <span>il y a 12 min</span></div>
                </div>
                <p>
                    Je suis a la recherche une montres Quamer de couleur rouge original et je suis a koumassi grand marché montres Quamer de couleur rouge montres Quamer de couleur rouge
                </p>
                <div className='w-full flex justify-between items-center'>
                    <div className='space-x-2'>
                        <Button className='rounded-full bg-[#1877F2]/10 h-[30px] w-[30px]' size="icon">
                            <PiPhoneCallBold color='#1877F2' size={18} />
                        </Button>
                        <Button className='rounded-full bg-[#05E700]/10 h-[30px] w-[30px]' size="icon">
                            <FaWhatsapp color='#05E700' size={18} />
                        </Button>
                        <Button className='rounded-full bg-[#CACACA]/10 h-[30px] w-[30px]' size="icon">
                            <BiLinkAlt color='#CACACA' size={18} />
                        </Button>
                        <Button className='rounded-full bg-[#FEAAAA]/10 h-[30px] w-[30px]' size="icon">
                            <FiShare2 color='#FEAAAA' size={16} />
                        </Button>
                    </div>
                    <div className='text-md flex items-center space-x-1'> <AiOutlineEye size={20} /> <span>56</span></div>
                </div>
            </div>
        </article>
    );
}
export default ForumCard;