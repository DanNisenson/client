import React from 'react';
import Link from 'next/link';


const Navbar = () => {
  return (
    <div className='navbar'>
      <Link href="/">Home</Link>
      <Link href="/heroes">All Heroes</Link>
      <Link href="/addHero">Add Hero</Link>
    </div>
  )
}

export default Navbar