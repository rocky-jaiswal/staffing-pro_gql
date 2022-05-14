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
      <button
        className="bg-teal-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleGoogleSignUp}
      >
        Sign in with Google
      </button>
      <div className="h-10" />
      <button
        className="bg-sky-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => alert('Not implemented!')}
      >
        Sign in with Apple
      </button>
    </div>
  )
}

export default SocialLogin
