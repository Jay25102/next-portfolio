import Link from "@node_modules/next/link";

const Footer = () => {
  return (
    <footer className='flex flex-nowrap justify-between sticky bottom-0 z-10 m-0 items-center font-medium'>
      {/* make the last three links into a menu */}
      <Link href="#">LinkedIn</Link>
      <Link href="#">Github</Link>
      <div>jasonhuang25102@gmail.com</div>
    </footer>
  )
}

export default Footer