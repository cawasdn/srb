import Image from 'next/image'

const Projects = () => {
  return (
    <div className='bg-[#EBEAE6] relative'>
      <div className='mx-auto max-w-6xl p-5 '>
        <div className='bg-white shadow-xl relative '>
          <div className='p-3 sm:p-0 sm:flex sm:pl-6'>
            <div className='hidden sm:mx-auto sm:block'>
              <Image
                src='/images/profile.png'
                alt='profile'
                width={350}
                height={100}
              />
            </div>
            <div className='text-center space-y-5 sm:w-[500px] sm:h-[550px] mx-auto'>
              <h1 className='text-xl sm:text-3xl font-bold '>PROJECTS</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Projects
