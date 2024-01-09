import Image from 'next/image';
import type { FC } from 'react';

interface TopBannerProps {}

const TopBanner: FC<TopBannerProps> = ({}) => {
        return (
                <div className='w-full lg:h-[314px] overflow-hidden h-[150px] relative bg-slate-300 rounded-lg'>
                    <Image objectFit='cover' alt='banner' src="/top-banner-pub.png" fill />
                </div>
        );
}
export default TopBanner;