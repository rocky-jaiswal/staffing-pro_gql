import { useEffect, useState } from 'react'

// import { useAuth } from '@redwoodjs/auth'
// import { useMutation } from '@redwoodjs/web'
// import { toast, Toaster } from '@redwoodjs/web/toast'
// import { routes, navigate } from '@redwoodjs/router'

// import { DbSignUpInput } from 'types/client'

interface Props {
  display: boolean
}

// const CREATE_DB_SIGNUP = gql`
//   mutation createDBSignUp($input: DbSignUpInput!) {
//     createDBSignUp(input: $input)
//   }
// `

function RegistrationForm(props: Props) {
  const [signedIn, setSignedIn] = useState<boolean>(false)
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

  // const [createDBSignUp, { loading }] = useMutation(CREATE_DB_SIGNUP, {
  //   onCompleted: (data: Record<string, string>) => {
  //     toast.success('Signing in ...')
  //     sessionStorage.setItem('token', data.createDBSignUp)
  //     setSignedIn(true)
  //   },
  //   onError: () => {
  //     toast.error('Oops! Something went wrong ...')
  //   },
  // })

  const handleSubmit = (input: unknown) => {
    // createDBSignUp({ variables: { input } })
  }

  const [email, setEmail] = useState<string | null>(null)
  const [password, setPassword] = useState<string | null>(null)
  const [confirmedPassword, setConfirmedPassword] = useState<string | null>(
    null
  )

  return (
    <div
      className="flex p-4"
      style={props.display ? { display: 'flex' } : { display: 'none' }}
    >
      <form>
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="flex items-center">Email:</div>
          <input
            type="email"
            name="email"
            className="border border-sky-900"
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
        </div>
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="flex items-center">Password:</div>
          <input
            type="password"
            name="password"
            className="border border-sky-900"
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
        </div>
        <div className="grid grid-cols-2 gap-2 mb-8">
          <div className="flex items-center">Confirm password:</div>
          <input
            type="password"
            name="confirmPassword"
            className="border border-sky-900"
            onChange={(e) => setConfirmedPassword(e.currentTarget.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          // disabled={loading}
          onClick={(e) => {
            e.preventDefault()
            handleSubmit({ email, password, confirmedPassword })
          }}
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default RegistrationForm
