import Header from '@/components/layers/Header'
import Footer from '@/components/layers/Footer'

import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function SitetLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main className='w-full relative'>
            <Header />
            {children}
            <Footer />
        </main>
    )
}