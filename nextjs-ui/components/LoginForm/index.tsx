import { useEffect, useState } from 'react'
import Link from 'next/link'

// import { useAuth } from '@redwoodjs/auth'
// import { useMutation } from '@redwoodjs/web'
// import { toast, Toaster } from '@redwoodjs/web/toast'
// import { Link, routes, navigate } from '@redwoodjs/router'

// import { SessionInput } from 'types/client'

interface Props {
  display: boolean
}

// const CREATE_SESSION = gql`
//   mutation createSession($input: SessionInput!) {
//     createSession(input: $input)
//   }
// `

function LoginForm(props: Props) {
  const [email, setEmail] = useState<string | null>(null)
  const [password, setPassword] = useState<string | null>(null)
  const [signedIn, setSignedIn] = useState<boolean | null>(false)

  // const { isAuthenticated, logIn } = useAuth()

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     navigate(routes.home())
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

  // const [createSession, { loading }] = useMutation(CREATE_SESSION, {
  //   onCompleted: (data: Record<string, string>) => {
  //     setSignedIn(true)
  //     toast.success('Signing in ...')
  //     sessionStorage.setItem('token', data.createSession)
  //     navigate(routes.home())
  //   },
  //   onError: () => {
  //     toast.error('Oops! Something went wrong ...')
  //   },
  // })

  const handleSubmit = (input: unknown) => {
    if (!signedIn) {
      // createSession({ variables: { input } })
    }
  }

  return (
    <div
      className="flex flex-col p-4"
      style={props.display ? { display: 'flex' } : { display: 'none' }}
    >
      <form method="post">
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="flex items-center">Email:</div>
          <input
            type="email"
            name="email"
            className="border border-sky-900"
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
        </div>
        <div className="grid grid-cols-2 gap-2 mb-8">
          <div className="flex items-center">Password:</div>
          <input
            type="password"
            name="password"
            className="border border-sky-900"
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={(e) => {
            e.preventDefault()
            handleSubmit({ email, password })
          }}
          // disabled={loading}
        >
          Submit
        </button>
      </form>
      <Link href={'/'} className="py-4 text-blue-500 underline">
        Forgot password?
      </Link>
    </div>
  )
}

export default LoginForm
