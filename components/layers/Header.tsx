import Image from 'next/image';
import type { FC } from 'react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { BsSearch } from 'react-icons/bs'

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
        return (
            <header className='w-full sticky top-0 z-10 shadow bg-white'>
            <div className='container'>
              <div className='py-4 w-full flex  justify-between items-center'>
                <div className='flex justify-center flex-row items-center space-x-5'>
                  <div>
                    <Image src="/sallerlogo.png" alt="feetura logo" width={122} height={44} />
                  </div>
                  <div className='bg-slate-200 flex justify-center items-center rounded-sm h-10 px-2'>
                    <BsSearch color='gray' size={20} />
                    <input placeholder='Trouver quelque chose...' type='text' className='h-full outline-none p-2 lg:w-[380px] w-full bg-transparent' />
                  </div>
                </div>
                <div>
                  <Avatar>
                    <AvatarFallback>
                      MS
                    </AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>
          </header>
        );
}
export default Header;