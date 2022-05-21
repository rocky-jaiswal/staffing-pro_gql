import { ReactElement } from 'react'

import Footer from '../Footer'

interface Props {
  page: ReactElement
}

function DefaultLayout(props: Props) {
  return (
    <>
      <div className="flex flex-col h-screen">
        <main role="main" className="flex flex-auto min-w-full">
          {props.page}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default DefaultLayout
