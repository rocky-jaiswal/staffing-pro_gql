import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

function TopBar() {
  const router = useRouter()
  const [isLoggedOut, setLoggedOut] = useState(false)

  useEffect(() => {
    if (isLoggedOut) {
      router.push('/logout')
    }
  }, [router, isLoggedOut])

  return (
    <div className="navbar bg-base-200 flex justify-between">
      <div className="p-6">
        <h1 className="text-lg font-bold">Staffing Pro</h1>
      </div>
      <div className="p-4">
        <button
          className="btn btn-secondary"
          onClick={() => {
            setLoggedOut(true)
          }}
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default TopBar
