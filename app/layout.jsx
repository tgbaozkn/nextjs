import './globals.css'
import Head from './head'
import {Montserrat} from "@next/font/google"
import image from "../public/film.jpg"
import Image from "next/image";
const montserrat = Montserrat({
  weight: ['400', '700'],
  subsets : ['latin'],
  variable : '--font-montserrat',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head/>
      
      <body className={`${montserrat.className} `}>
      <nav className='bg-gray-500 px-20 sticky top-0 z-50'>
      <div class="relative flex h-16 items-center justify-between">
         <Image src={image} height={70} width={70}/>
        
        
            <a href='/' >Home </a>
            <a href='/about'>About </a>
         
          

      
        </div>
      </nav>
        {children}</body>
    </html>
  )
}
