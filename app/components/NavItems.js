import Link from 'next/link'

const NavItems = ({ title, address }) => {
  return (
    <div>
      <Link href={address}>
        <div className='logo'>{title}</div>
      </Link>
    </div>
  )
}
export default NavItems
