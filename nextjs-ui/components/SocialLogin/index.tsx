// import { useQueryClient } from 'react-query'
import { useGetGoogleAuthUrlQuery } from '../../generated/graphql-client'

function SocialLogin() {
  // const queryClient = useQueryClient()
  const { data, refetch, status } = useGetGoogleAuthUrlQuery(
    {
      endpoint: '/api/graphql/passThrough',
    },
    undefined,
    { enabled: false }
  )

  const handleGoogleSignUp = () => {
    refetch()
  }

  if (status === 'success') {
    window.location.replace(data.getGoogleAuthUrl)
  }

  return (
    <div className="flex flex-col lg:w-1/2 mt-6 p-4">
      <button className="btn btn-info" onClick={handleGoogleSignUp}>
        Sign in with Google
      </button>
      <div className="h-10" />
      <button
        className="btn btn-success"
        onClick={() => alert('Not implemented!')}
      >
        Sign in with Apple
      </button>
    </div>
  )
}

export default SocialLogin
