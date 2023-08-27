import Image from 'next/image'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'

export default function Home() {
  return (
    <div className='bg-[#EBEAE6] h-[100vh] relative'>
      <div className='mx-auto max-w-6xl p-5 '>
        <div className='bg-white shadow-xl relative'>
          <div className='bg-[#FCCA45] absolute right-4 translate-y-[-20px]'>
            <HiOutlineMenuAlt4 size={32} className='m-1 sm:hidden' />
          </div>
          <div className='pt-8 px-5 sm:p-0 sm:flex sm:pl-6 '>
            <div className='p-5 sm:w-[500px] sm:h-[500px]'>
              <Image
                src='/images/profile.png'
                alt=''
                width={350}
                height={100}
              />
            </div>
            <div className='text-center mt-4 sm:w-[500px] sm:h-[500px]'>
              <h1 className='text-xl font-bold'>Hi! I am Shane Rose Borela</h1>
              <p>Your Claims Specialist</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
                voluptate illo eos illum cum architecto fugiat voluptatum
                deserunt nam nobis?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
