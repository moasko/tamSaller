"use client";

import type { FC } from 'react';
import ForumCard from '@/components/forum/ForumCard'


import Image from 'next/image'
import LeftAsid from '@/components/layers/LeftAsid';
import RightBanner from '@/components/layers/RightBanner';
import NewSubjectModal from '@/components/forum/NewSubjectModal';
interface ForumProps { }

const Forum: FC<ForumProps> = ({ }) => {
    return (
        <div className='container mx-auto'>
            {/* content container */}
            <div className='mt-5 space-y-5'>
                {/* top ads banner */}
                <div className='w-full lg:h-[314px] overflow-hidden h-[150px] relative bg-slate-300 rounded-lg'>
                    <Image objectFit='cover' alt='banner' src="/top-banner.png" fill />
                </div>
                {/* fil layer */}
                <div className='flex flex-col lg:flex-row lg:space-x-5 space-x-0 space-y-5 lg:space-y-0'>
                    {/* left asid */}
                    <LeftAsid />
                    {/* middle conatiner */}
                    <div className='lg:w-7/12 w-full space-y-5'>
                        <div className='bg-white rounded-md p-3 flex space-x-3'>
                            <div className='w-16 h-16 bg-orange-100 flex justify-center items-center rounded-sm'>
                                <img src="/forum_icon_p.svg" alt="ff" />
                            </div>

                            <NewSubjectModal />
                        </div>
                        <section className='flex flex-col space-y-2'>
                            <ForumCard />
                            <ForumCard />
                            <ForumCard />
                        </section>


                    </div>

                    <RightBanner />
                </div>
            </div>
        </div>
    );
}
export default Forum;