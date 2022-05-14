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
    <div className="flex justify-between h-20 bg-slate-300 border-b border-slate-900/10">
      <div className="p-6">
        <h1 className="text-lg font-bold">Staffing Pro</h1>
      </div>
      <div className="p-4">
        <button
          className="bg-yellow-500 hover:bg-yellow-700 text-white p-2 rounded"
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
