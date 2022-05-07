import type { NextPage } from 'next'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import Link from 'next/link'

// const CREATE_GOOGLE_USER = gql`
//   mutation createGoogleUser($input: String!) {
//     createGoogleUser(input: $input)
//   }
// `

const GoogleCallbackPage: NextPage = () => {
  const router = useRouter()
  const [signedIn, setSignedIn] = useState<boolean>(false)
  // const { isAuthenticated, logIn } = useAuth()

  const params = new URLSearchParams(window.location.search)
  const code = params.get('code')

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     router.push('/home')
  //   }
  // }, [isAuthenticated])

  // useEffect(() => {
  //   if (signedIn) {
  //     const reAuth = async () => {
  //       await logIn()
  //       return {}
  //     }

  //     reAuth().catch(console.error)
  //   }
  // }, [signedIn, logIn])

  // const [createGoogleUser, { loading }] = useMutation(CREATE_GOOGLE_USER, {
  //   onCompleted: (data: Record<string, string>) => {
  //     sessionStorage.setItem('token', data.createGoogleUser)
  //     setSignedIn(true)
  //   },
  //   onError: () => {
  //     console.error('Oops! Something went wrong ...')
  //   },
  // })

  // useEffect(() => {
  //   createGoogleUser({ variables: { input: code } })
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  return (
    <>
      <div className="flex w-full">
        {/* <p>{loading ? 'loading...' : ''}</p> */}
      </div>
    </>
  )
}

export default GoogleCallbackPage
