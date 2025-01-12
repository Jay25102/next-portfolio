import Link from "@node_modules/next/link";

const Footer = () => {
  return (
    <footer className='flex flex-nowrap justify-between sticky bottom-0 z-10 m-0 items-center font-medium'>
      {/* replace with logo */}
      <Link href="#">WallAisle</Link>
      <Link href="#">This Project</Link>
      <Link href="#">About</Link>
      <Link href="#">Contact</Link>
    </footer>
  )
}

export default Footer