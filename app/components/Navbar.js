import NavItems from './NavItems'

const Navbar = () => {
  return (
    <div className='h-16 bg-[#EBEAE6] flex mx-auto justify-center'>
      <div className=' w-full h-full max-w-6xl flex justify-between items-center p-5'>
        <div className='font-bold'>
          <NavItems title='ShaneRB' address='/' />
        </div>
        <div className='space-x-8 hidden sm:flex'>
          <NavItems title='Home' address='/' />
          <NavItems title='About' address='/about' />
          <NavItems title='Contact' address='/contact' />
        </div>
        <div className='bg-[#FCCA45] absolute right-4 translate-y-[-20px] hover:rotate-6 cursor-pointer'></div>
      </div>
    </div>
  )
}
export default Navbar
