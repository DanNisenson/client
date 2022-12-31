import React from 'react';
import Link from 'next/link';

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='navbar'>
      <Link href="/">Home</Link>
      <Link href="/heroes">All Heroes</Link>
      <Link href="*">Add Hero</Link>
    </div>
  )
}

export default Navbar