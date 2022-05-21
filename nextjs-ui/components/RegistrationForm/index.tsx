import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import {
  DbSignUpInput,
  useCreateDbSignUpMutation,
} from '../../generated/graphql-client'

interface Props {
  display: boolean
}

function RegistrationForm(props: Props) {
  const [email, setEmail] = useState<string | null>(null)
  const [password, setPassword] = useState<string | null>(null)
  const [confirmedPassword, setConfirmedPassword] = useState<string | null>(
    null
  )

  const router = useRouter()
  const { mutate, status, isLoading } = useCreateDbSignUpMutation({
    endpoint: '/api/graphql/ohneAuth',
  })

  useEffect(() => {
    if (status === 'success') {
      router.push('/home')
    }
  }, [status, router])

  const handleSubmit = (input: { input: DbSignUpInput }) => {
    mutate(input)
  }

  return (
    <div
      className="flex flex-col p-4"
      style={props.display ? { display: 'flex' } : { display: 'none' }}
    >
      <form>
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="flex items-center">Email:</div>
          <input
            type="email"
            name="email"
            className="input"
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
        </div>
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="flex items-center">Password:</div>
          <input
            type="password"
            name="password"
            className="input"
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
        </div>
        <div className="grid grid-cols-2 gap-2 mb-8">
          <div className="flex items-center">Confirm password:</div>
          <input
            type="password"
            name="confirmPassword"
            className="input"
            onChange={(e) => setConfirmedPassword(e.currentTarget.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-accent"
          disabled={isLoading}
          onClick={(e) => {
            e.preventDefault()
            handleSubmit({
              input: {
                email: email!,
                password: password!,
                confirmedPassword: confirmedPassword!,
              },
            })
          }}
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default RegistrationForm
