'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { FaFacebook } from 'react-icons/fa'

export default function Home() {
  const [nav, setNav] = useState(false)

  // const handleNav = () => {
  //   setNav(!nav)
  // }

  const [img, setImg] = useState('/images/profile.png')

  return (
    <div className='bg-[#EBEAE6] relative'>
      <div className='mx-auto max-w-6xl p-5 '>
        <div className='bg-white shadow-xl relative'>
          {/* <div
            onClick={handleNav}
            className='bg-[#FCCA45] absolute right-4 translate-y-[-20px] hover:rotate-6 cursor-pointer'
          >
            <HiOutlineMenuAlt4 size={32} className='m-1 sm:hidden' />
          </div> */}
          <div className='pt-8 px-5 sm:p-0 sm:flex sm:pl-6 ease-in duration-300 '>
            <div className='p-5 sm:w-[500px] sm:h-[500px]'>
              <Image src={img} alt='profile' width={350} height={100} />
            </div>
            <div className='text-center space-y-5 sm:w-[500px] sm:h-[550px] sm: mt-7'>
              <div className=''>
                <div className=''>
                  <h1 className='text-xl sm:text-6xl font-bold '>
                    Hi! I am Shane Rose Borela
                  </h1>
                  <p className='sm:text-3xl mt-4'>Your Claims Specialist</p>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit delectus minus officiis voluptas porro? Suscipit
                obcaecati quos provident veritatis! Aliquam beatae non est
                voluptatibus saepe unde fuga, ipsam esse animi??
              </p>
              <div className='flex justify-center gap-6 p-3 pb-6'>
                <Link href='/projects'>
                  <p className='cursor-pointer bg-[#FCCA45] p-2 rotate-3 shadow-xl hover:rotate-12 relative sm:ease-in sm:duration-150'>
                    Look at my work
                    <Image
                      src='/images/pin.png'
                      alt='pin'
                      width={14}
                      height={8}
                      className='absolute -top-6 left-0'
                    />
                  </p>
                </Link>

                <Link href='/about'>
                  <p className='cursor-pointer bg-[#FCCA45] p-2 -rotate-6 shadow-xl hover:rotate-0 sm:ease-in sm:duration-150'>
                    <Image
                      src='/images/pin.png'
                      alt='pin'
                      width={14}
                      height={8}
                      className='absolute -top-6 -right-1'
                    />
                    About me
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      {/* <div
        className={
          nav
            ? 'fixed top-0 right-0 left-0 bottom-0 bg-black/60 z-20 duration-300'
            : 'duration-300'
        }
      >
        <div
          className={
            nav
              ? 'fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed right-[-100%] top-0 p-10 ease-in duration-500 bg-[#ecf0f3]'
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
              <HiOutlineMenuAlt4 size={32} className='m-1' />
            </div>
          </div>
          <div className='border-b border-gray-300 my-4'>
            <p className='w-[85%] md:w-[90%] py-4'>let's work together!</p>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li className='py-4 text-sm'>HOME</li>
              </Link>
              <Link href='/about'>
                <li className='py-4 text-sm'>ABOUT</li>
              </Link>
              <Link href='/about'>
                <li className='py-4 text-sm'>CONTACT</li>
              </Link>
            </ul>
            <div className='pt-40 '>
              <p className='tracking-widest font-bold '>Let's Connect</p>
              <div className='flex'>
                <HiOutlineMenuAlt4 size={32} className='m-1' />
                <HiOutlineMenuAlt4 size={32} className='m-1' />
                <HiOutlineMenuAlt4 size={32} className='m-1' />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}
