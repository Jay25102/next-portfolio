import Link from "@node_modules/next/link";

const Header = () => {
  return (
    <header className='bg-white-cust flex flex-nowrap justify-between'>
      <Link href="#" className="flex">WallAisle</Link>
      <Link href="#" className="flex">Home</Link>
      <Link href="#" className="flex">About</Link>
      <Link href="#" className="flex">Contact</Link>
    </header>
  )
}

export default Header;