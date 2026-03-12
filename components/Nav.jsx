'use client'

import Link from "next/link"
import Image from "next/image"
import { useState,useEffect } from "react"
import {signIn,signOut,useSession,getProviders} from 'next-auth/react'
const Nav = () => {
    const isUserLoggedIn = false

    const [providers, setProviders] = useState(null); 

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
            </div>
        ): (
            <>
            {/* we need to have a button to sign in and to be able to do that usign next/auth we need to have access soemthing know as providers  */}
{providers && Object.values(providers).map((provider) =>(
<button
type="button"
></button>
)) }

            </>
        )}
       </div>
    </nav>
  )
}

export default Nav