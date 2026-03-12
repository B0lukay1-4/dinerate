'use client'

import Link from "next/link"
import Image from "next/image"
import { useState,useEffect } from "react"
import {signIn,signOut,useSession,getProviders} from 'next-auth/react'
const Nav = () => {
    const isUserLoggedIn = true

    const [providers, setProviders] = useState(null); 
const [toggleDropdown, setToggleDropdown] = useState(false); 
    useEffect(()=>{
      const setProviders = async ()=>{
          const response = await getProviders();

          setProviders(response)
      }
      setProviders();
    },[])
  return (
    <nav className="flex justify-between w-full mb-16 px-4 mt-2">
       <Link href="/">
        <h1><span className="text-[#c9a84c]">DINE</span>RATE</h1>
       </Link>

       {/* Desktop navigation*/}
       <div className="sm:flex hidden">
        {/*  to know whethere a user is logged in or not to know which button to show*/}
        {isUserLoggedIn ? (
            <div className="flex gap-3 md:gap-5">
              <button type="button" onClick={signOut} className="rounded-full border  border-[#c9a84c] px-3 py-2 hover:bg-[#c9a84c] hover:text-white font-mono">
                Sign Out
              </button>
{/*It will render the source of a real user image  */}
              <Image src=""
              width={37}
              height={37}
              className="rounded-full"
              alt="profile"
              />
            </div>
        ): (
            <>
            {/* we need to have a button to sign in and to be able to do that usign next/auth we need to have access soemthing know as providers  */}
{providers && Object.values(providers).map((provider) =>(
<button
type="button"
key={provider.name}
onClick={()=> signIn(provider.id)}
className="rounded-full border  border-[#c9a84c] px-3 py-2 hover:bg-[#c9a84c] hover:text-white font-mono"
>
  Sign In
</button>
)) }

            </>
        )}
       </div>

       {/* Mobile Navigation */}
       <div className="sm:hidden flex relative">
        {isUserLoggedIn ?(
<div className="flex">
  {/* we want the profile to open a menu we have to create a state */}
<Image src=""
              width={37}
              height={37}
              className="rounded-full"
              alt="profile"

              // the onclick will handle the dropdown for the navigation bar
              // we want to set the toggle dropdown to the opposite of it value
              onClick={()=> setToggleDropdown((prev)=> !prev)}
              />
              {toggleDropdown &&(

                <div className="dropdown">
                  <button type="button" onClick={()=>{
                    setToggleDropdown(false);
                    signOut();
                  }} className="rounded-full border  border-[#c9a84c] px-3 py-2 hover:bg-[#c9a84c] hover:text-white font-mono mt-5">
                Sign Out
              </button>
                </div>
              )}
</div>

        ):(
          <>
            {/* we need to have a button to sign in and to be able to do that usign next/auth we need to have access soemthing know as providers  */}
{providers && Object.values(providers).map((provider) =>(
<button
type="button"
key={provider.name}
onClick={()=> signIn(provider.id)}
className="rounded-full border  border-[#c9a84c] px-3 py-2 hover:bg-[#c9a84c] hover:text-white font-mono"
>
  Sign In
</button>
)) }

            </>
        )}
       </div>
    </nav>
  )
}

export default Nav