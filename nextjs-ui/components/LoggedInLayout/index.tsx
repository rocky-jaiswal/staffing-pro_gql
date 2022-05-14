import { ReactElement } from 'react'

import NavBar from '../NavBar'
import TopBar from '../TopBar'

interface Props {
  page: ReactElement
}

function LoggedInLayout(props: Props) {
  return (
    <>
      <div className="flex flex-col min-h-screen text-slate-700">
        <TopBar />
        <div className="flex flex-col-reverse lg:flex-row grow h-full w-full">
          <NavBar />
          <main role="main" className="flex flex-col grow p-6">
            {props.page}
          </main>
        </div>
      </div>
    </>
  )
}

export default LoggedInLayout
