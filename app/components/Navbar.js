import NavItems from './NavItems'

const Navbar = () => {
  return (
    <div className='h-16 bg-[#EBEAE6] flex mx-auto justify-center'>
      <div className=' w-full h-full max-w-6xl flex justify-between items-center p-5'>
        <div className='font-bold'>
          <NavItems title='ShaneRB' />
        </div>
        <div className='space-x-8 hidden sm:flex'>
          <NavItems title='Home' />
          <NavItems title='About' />
        </div>
      </div>
    </div>
  )
}
export default Navbar
