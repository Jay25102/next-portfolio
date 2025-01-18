import Link from "@node_modules/next/link";

const Header = () => {
  return (
    <header className='flex flex-nowrap justify-between sticky top-0 z-10 m-0 items-center font-semibold'>
      {/* make the last three links into a menu */}
      <Link href="#home" className="flex flex-nowrap">
        {/* make this  a cirlce */}
        <img src="icon.png" alt="logo" className="logo h-8 pr-4"></img>
        <div>JC</div>
      </Link>
      <Link href="#about-me">About Me</Link>
      <Link href="#">Projects</Link>
      <Link href="#">Resume</Link>
    </header>
  )
}

export default Header;