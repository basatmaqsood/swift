import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <div className="bg-black text-white py-8 px-8" >
      <Link href="/"><h1 className="text-3xl font-bold">Swift<span className='text-yellow-400'>!</span></h1></Link>
    </div>
  );
}

export default Footer;