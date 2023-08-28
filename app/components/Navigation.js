'use client'

import Link from 'next/link'
import { useState } from 'react'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { FaFacebook, FaTiktok, FaFacebookMessenger } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'

const Navigation = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
    // document.querySelector('body').classList.toggle('overflow-inactive')
  }
  return (
    <>
      <div
        onClick={handleNav}
        className='bg-[#FCCA45] absolute right-9 hover:rotate-6 cursor-pointer z-10 '
      >
        <HiOutlineMenuAlt4 size={32} className='m-1 sm:hidden' />
      </div>
      <div
        className={
          nav
            ? 'fixed top-0 right-0 left-0 bottom-0 bg-black/60 z-20 h-screen ease-in duration-300'
            : 'duration-300 z-30 ease-in'
        }
      >
        <div
          className={
            nav
              ? 'fixed bg-white shadow-2xl top-0 right-0 bottom-0 h-full w-[70%] translate-x-[0%] p-10 ease-in duration-500 z-30 '
              : 'fixed bg-white shadow-2xl top-0 right-0 bottom-0 h-full w-[70%] translate-x-[100%] ease-in duration-300 z-30 p-10'
          }
        >
          <div
            onClick={handleNav}
            className='flex w-full items-center justify-between'
          >
            <p className='font-bold'>ShaneRB</p>
            <div
              onClick={handleNav}
              className='bg-[#FCCA45] absolute right-5 top-10 translate-y-[-20px] hover:rotate-6'
            >
              <MdClose size={32} className='m-1' />
            </div>
          </div>
          <div className='border-b border-gray-300 my-4'>
            <p className='w-[85%] md:w-[90%] py-4'>let&apos;s work together!</p>
          </div>
          <div className='py-4 flex flex-col '>
            <ul className='uppercase font-bold [&>*]:text-lg'>
              <Link href='/' onClick={handleNav}>
                <li className='py-4'>HOME</li>
              </Link>
              <Link href='/about' onClick={handleNav}>
                <li className='py-4'>ABOUT</li>
              </Link>
              <Link href='/projects' onClick={handleNav}>
                <li className='py-4'>PROJECTS</li>
              </Link>
              <Link href='/contact' onClick={handleNav}>
                <li className='py-4'>CONTACT</li>
              </Link>
            </ul>
            <div className='pt-28 space-y-3'>
              <p className='tracking-widest font-bold '>Let&apos;s Connect</p>
              <div className='flex space-x-3 '>
                <Link
                  href='https://www.facebook.com/ladychin.rose'
                  target='_blank'
                >
                  <FaFacebook size={28} className='m-1 text-blue-500' />
                </Link>

                <FaTiktok size={28} className='m-1' />
                <Link href='https://m.me/ladychin.rose' target='_blank'>
                  <FaFacebookMessenger
                    size={28}
                    className='m-1 text-blue-500'
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Navigation
