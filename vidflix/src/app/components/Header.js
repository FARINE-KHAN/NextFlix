import React from 'react'
import styl from "@/app/styles/navbar.module.css"
import Link from 'next/link'
import Image from 'next/image'
import Nav from './Nav'
const Header = () => {
  return (

 <header className={styl.main_header}>
    <div className={styl.navbar_brand}>
    <Link href="/">
      <Image src="/logoo.png" alt="logo" width={170} height={50}/>
    </Link>
    </div>
  <Nav/>
 </header>
  )
}

export default Header