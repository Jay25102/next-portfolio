import Link from "@node_modules/next/link";

const Header = () => {
  return (
    <header className='bg-white-cust'>
      <Link href="#">WallAisle</Link>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </header>
  )
}

export default Header;