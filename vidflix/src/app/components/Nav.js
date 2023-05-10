import React from 'react'
import styl from  "@/app/styles/navbar.module.css"
import Link from 'next/link'
const Nav = () => {
  return (
    <nav className={styl.navbar}>
    <div>
        <ul className={styl.navbarList}>

            <li className={styl.navbarItem}>
                <Link className={styl.navbarLink} href="/">
                    HOME
                </Link>
            </li>
            <li className={styl.navbarItem}>
                <Link className={styl.navbarLink} href="/">
                    ABOUT
                </Link>
            </li>
            <li className={styl.navbarItem}>
                <Link className={styl.navbarLink} href="/">
                    MOVIE
                </Link>
            </li>
            <li className={styl.navbarItem}>
                <Link className={styl.navbarLink} href="/">
                    CONTACT
                </Link>
            </li>
        </ul>
    </div>

    </nav>
  )
}

export default Nav