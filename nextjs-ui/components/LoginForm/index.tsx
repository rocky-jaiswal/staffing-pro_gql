import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import {
  SessionInput,
  useCreateSessionMutation,
} from '../../generated/graphql-client'

interface Props {
  display: boolean
}

function LoginForm(props: Props) {
  const [email, setEmail] = useState<string | null>(null)
  const [password, setPassword] = useState<string | null>(null)

  const router = useRouter()
  const { mutate, status, isLoading } = useCreateSessionMutation({
    endpoint: '/api/graphql/ohneAuth',
  })

  useEffect(() => {
    if (status === 'success') {
      router.push('/home')
    }
  }, [status, router])

  const handleSubmit = (input: { input: SessionInput }) => {
    mutate(input)
  }

  return (
    <div
      className="flex flex-col p-4 lg:w-2/3"
      style={props.display ? { display: 'flex' } : { display: 'none' }}
    >
      <form method="post">
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="flex items-center">Email:</div>
          <input
            type="email"
            name="email"
            className="input"
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
        </div>
        <div className="grid grid-cols-2 gap-2 mb-8">
          <div className="flex items-center">Password:</div>
          <input
            type="password"
            name="password"
            className="input"
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={isLoading}
          onClick={(e) => {
            e.preventDefault()
            handleSubmit({ input: { email: email!, password: password! } })
          }}
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
