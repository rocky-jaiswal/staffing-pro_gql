import type { NextPage } from 'next'

import { ReactElement, useState } from 'react'

import Image from 'next/image'

import LoginForm from '../components/LoginForm'
import SocialLogin from '../components/SocialLogin'
import RegistrationForm from '../components/RegistrationForm'
import DefaultLayout from '../components/DefaultLayout'

const RootPage: NextPage = () => {
  const [display, setDisplay] = useState({ showLogin: true })

  return (
    <>
      <main className="flex w-full flex-col lg:flex-row">
        <div className="lg:w-1/2 flex flex-col p-8">
          <div className="p-4 bg-blue-900 text-white">
            <h1 className="text-4xl">Welcome to Staffing Pro</h1>
          </div>
          <div className="w-full mt-4">
            <Image
              src="/team.svg"
              alt="illustration"
              width="800px"
              height="500px"
            />
          </div>
        </div>
        <div className="lg:w-1/2 h-full flex flex-col bg-blue-200 p-8">
          <div className="mb-8">
            <button
              disabled={display.showLogin}
              onClick={() => setDisplay({ showLogin: true })}
              className="p-4"
              style={
                display.showLogin
                  ? { color: 'black', opacity: 1 }
                  : { color: 'blue' }
              }
            >
              Login
            </button>
            <span>|</span>
            <button
              disabled={!display.showLogin}
              className="p-4"
              onClick={() => setDisplay({ showLogin: false })}
              style={
                display.showLogin
                  ? { color: 'blue' }
                  : { color: 'black', opacity: 1 }
              }
            >
              Register
            </button>
          </div>
          <LoginForm display={display.showLogin} />
          <RegistrationForm display={!display.showLogin} />
          <hr />
          <SocialLogin />
        </div>
      </main>
    </>
  )
}

RootPage.getLayout = (page: ReactElement) => <DefaultLayout page={page} />

export default RootPage
