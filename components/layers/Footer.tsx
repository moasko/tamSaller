import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import { BsLinkedin, BsTelegram, BsTwitter } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { ImHome } from 'react-icons/im'
import { IoMdMail } from "react-icons/io"
import { IoCallSharp } from "react-icons/io5"

interface FooterProps { }

const Footer: FC<FooterProps> = ({ }) => {
    return (
        <footer className='w-full sticky mt-5 top-0 z-10 shadow bg-neutral-100'>
            <div className='container'>
                <div className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">

                    <div className="mx-6 py-10 text-center md:text-left">
                        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                            <div className="space-y-4">
                                <Image src="/feetura-logo.png" alt="feetura logo" width={122} height={44} />
                                {/* <p>
                                    Here you can use rows and columns to organize your footer
                                    content. Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit.
                                </p> */}
                            </div>
                            <div className="">
                                <h6
                                    className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                                    Suivez nous
                                </h6>
                                <p className="mb-4 flex  items-center space-x-2">
                                    <FaFacebook size={20} />
                                    <Link href="#!" className="text-neutral-600 dark:text-neutral-200">Fcabook</Link>
                                </p>
                                <p className="mb-4 flex  items-center space-x-2">
                                    <BsTwitter size={20} />
                                    <Link href="#!" className="text-neutral-600 dark:text-neutral-200">Twitter</Link>
                                </p>
                                <p className="mb-4 flex  items-center space-x-2">
                                    <BsTelegram size={20} />
                                    <Link href="#!" className="text-neutral-600 dark:text-neutral-200">Twitter</Link>
                                </p>
                                <p className="mb-4 flex  items-center space-x-2">
                                    <BsLinkedin size={20} />
                                    <Link href="#!" className="text-neutral-600 dark:text-neutral-200">Linkedin</Link>
                                </p>
                            </div>

                            <div className="">
                                <h6
                                    className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                                    LIENS UTILES
                                </h6>
                                <p className="mb-4">
                                    <Link href="#!" className="text-neutral-600 dark:text-neutral-200">Forum</Link>
                                </p>
                                <p className="mb-4">
                                    <Link href="#!" className="text-neutral-600 dark:text-neutral-200">Boutique</Link>
                                </p>
                                <p className="mb-4">
                                    <Link href="#!" className="text-neutral-600 dark:text-neutral-200">Contact</Link>
                                </p>
                                <p>
                                    <Link href="#!" className="text-neutral-600 dark:text-neutral-200">Aide</Link>
                                </p>
                            </div>
                            <div>
                                <h6
                                    className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                                    Contact
                                </h6>
                                <p className="mb-4 flex items-center justify-center md:justify-start">
                                    <ImHome className='mr-3' size={20} />
                                    Codody,Abidjan
                                </p>

                                <p className="mb-4 flex items-center justify-center md:justify-start">
                                    <IoMdMail className='mr-3' size={20} />

                                    info@feetura.com
                                </p>
                                <p className="mb-4 flex items-center justify-center md:justify-start">
                                    <IoCallSharp className='mr-3' size={20} />

                                    + 225 07 00 00 00 00
                                </p>
                                <p className="flex items-center justify-center md:justify-start">
                                    <IoCallSharp className='mr-3' size={20} />
                                    + 225 05 00 00 00 00
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700">
                <span>© 2023 Copyright :</span>
                <Link
                    className="font-semibold text-neutral-600 dark:text-neutral-400"
                    href="https://feetura.com/"> Feetura Inc</Link>
            </div>
        </footer>

    );
}
export default Footer;