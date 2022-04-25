import Link from 'next/link'
import React from 'react'

function Header() {
  return (
      <header>
          <div>
              <Link href="/">
                  <img
                      className="object-contain w-44 cursor-pointer" src="https://links.papareact.com/yvf" alt="" />               
                  <div>
                      <h3>About</h3>
                      <h3>Contact</h3>
                      <h3>Follow</h3>
                  </div>
              </Link>
         </div>
         <div></div>
    </header>
  )
}

export default Header