import type { GetServerSidePropsContext, NextPage } from 'next'
import { ReactElement } from 'react'
import Link from 'next/link'

import { validateCookieOrRedirect, validateJWT } from '../lib/validateCookie'
import { useGetAllProjectsQuery } from '../generated/graphql-client'

import LoggedInLayout from '../components/LoggedInLayout'

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return validateCookieOrRedirect(context.req.cookies['token'])
}

const HomePage: NextPage = () => {
  const { data, status } = useGetAllProjectsQuery({
    endpoint: '/api/graphql/withAuth',
  })

  console.log({ data, status })

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

HomePage.getLayout = (page: ReactElement) => {
  return <LoggedInLayout page={page} />
}

export default HomePage
