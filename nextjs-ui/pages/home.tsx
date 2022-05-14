import type { GetServerSidePropsContext, NextPage } from 'next'
import { ReactElement } from 'react'
import Link from 'next/link'

import { validateCookieOrRedirect, validateJWT } from '../lib/validateCookie'
import { useGetAllProjectsQuery } from '../generated/graphql-client'

import NavBar from '../components/NavBar'
import TopBar from '../components/TopBar'

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return validateCookieOrRedirect(context.req.cookies['token'])
}

const HomePage: NextPage = () => {
  const { data, status } = useGetAllProjectsQuery({
    endpoint: '/api/graphql/withAuth',
  })

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
