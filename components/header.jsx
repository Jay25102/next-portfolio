import Link from "@node_modules/next/link";

const Header = () => {
  return (
    <header className='flex flex-nowrap justify-between sticky top-0 z-10 m-0 items-center font-semibold'>
      {/* make the last three links into a menu */}
      <Link href="#" className="flex flex-nowrap">
        <img src="icon.png" alt="logo" className="logo h-8 pr-4"></img>
        <div>WallAisle</div>
      </Link>
      <Link href="#">This Project</Link>
      <Link href="#">About</Link>
      <Link href="#">Contact</Link>
    </header>
  )
}

export default Header;