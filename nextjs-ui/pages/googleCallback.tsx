import type { GetServerSidePropsContext, NextPage } from 'next'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

import setCookieToken from '../lib/setCookieToken'

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const code: string = context.query.code as string

    if (!code || code === '') {
      throw new Error('bad Google code!')
    }

    const response = await fetch('http://localhost:4000/graphql', {
      body: `{\"query\":\"mutation {\\n  createGoogleUser(\\n    input: \\\"${code}\\\"\\n  )\\n}\",\"variables\":null,\"extensions\":{\"headers\":null}}`,
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json, multipart/mixed',
      },
      method: 'POST',
    })

    const responseBody = (await response.json()) as any
    const token = responseBody.data.createGoogleUser

    setCookieToken(context.res, token)

    return {
      props: {}, // will be passed to the page component as props
    }
  } catch (err) {
    console.log(err)
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
}

const GoogleCallbackPage: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('/home')
  }, [router])

  return (
    <>
      <div className="flex w-full">
        <p>Loading user...</p>
      </div>
    </>
  )
}

export default GoogleCallbackPage
