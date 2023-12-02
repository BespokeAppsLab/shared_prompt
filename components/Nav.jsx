"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {signIn, signOut, useSession, getProviders} from 'next-auth/react';

const Nav = () => {

  const {data: session} = useSession()

  const [providers, setProviders] = useState(null)
  const [toggleDropdown, setToggleDropdown] = useState(false)

  useEffect(() => {
    const setProvidersList = async () => {
      const response = await getProviders()

      setProviders(response)
    }

    setProvidersList()
  }, [])

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href='/' className="flex gap-2 flex-center">
        <Image 
        src="/assets/images/logo.svg" 
        alt="Shared Prompts Logo"
        width={30}
        height={30}
        className="object-contain"
        />
        <p className="logo_text">
          Shared Prompts
        </p>
      </Link>

      {/* desktop nav */}
      <div className="sm:flex hidden">
        {session?.user 
        ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="Create-Prompt" className="black_btn">
              Create Post
            </Link>

             <button
              type="button"
              className="outline_btn"
              onClick={signOut}
            > 
              Sign Out
            </button>

            <Link href="/Profile">
              <Image
                src={session?.user.image}
                alt="Profile"
                width={37}
                height={37}
              />
            </Link>
          </div>
        ) : <>
          {providers && Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                type="button"
                className="black_btn"
                onClick={() => signIn(provider.id)}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </>}
      </div>
            
      {/* mobile nav */}
      <div className="sm:hidden flex relative">
        {session?.user 
          ? (
            <div className="flex">
              <Image
                src={session?.user.image}
                alt="Profile"
                width={37}
                height={37}
                onClick={() => setToggleDropdown((prevState) => !prevState)}
              />

              {toggleDropdown && (
                <div className="dropdown">
                  <Link 
                    href="/Profile"
                    className="dropdown_link"
                    onClick={() => setToggleDropdown(false)}
                  >
                    My Profile
                  </Link>
                  
                  <Link 
                    href="/Create-Prompt"
                    className="dropdown_link"
                    onClick={() => setToggleDropdown(false)}
                  >
                    Create Post
                  </Link>

                  <button
                    type="button"
                    className="mt-5 w-full black_btn"
                    onClick={() => {
                      signOut();
                      setToggleDropdown(false);
                      }}
                  >
                    Sign Out
                  </button>
                </div>
                )}
            </div>
          )
          : (
            <>
              {providers && Object.values(providers).map((provider) => (
              <div key={provider.name}>
                <button
                  type="button"
                  className="black_btn"
                  onClick={() => signIn(provider.id)}
                >
                  Sign in with {provider.name}
                </button>
              </div>
              ))}
            </>)
        }
      </div>
     

    </nav>
  )
}

export default Nav
