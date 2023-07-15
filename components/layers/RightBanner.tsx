import Image from 'next/image';
import type { FC } from 'react';

interface RightBannerProps {}

const RightBanner: FC<RightBannerProps> = ({}) => {
        return (
            <div className='overflow-hidden w-2/12'>
            <div className='w-full relative h-[600px]'>
                <Image width={250} src="/banner3.png" height={600} alt='dd' />
            </div>

        </div>
        );
}
export default RightBanner;