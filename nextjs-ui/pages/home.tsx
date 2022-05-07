import { ReactElement } from 'react'
import type { NextPage } from 'next'

import Link from 'next/link'

import NavBar from '../components/NavBar'
import TopBar from '../components/TopBar'

const HomePage: NextPage = () => {
  return (
    <>
      <h1>HomePage</h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.tsx</code>
      </p>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link href={'/home'}>Home</Link>`
      </p>
    </>
  )
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <div className="flex flex-col min-h-screen text-slate-700">
        <TopBar />
        <div className="flex flex-col-reverse lg:flex-row grow h-full w-full">
          <NavBar />
          <main role="main" className="flex flex-col grow p-6">
            {page}
          </main>
        </div>
      </div>
    </>
  )
}

export default HomePage
