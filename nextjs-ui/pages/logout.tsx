import type { GetServerSidePropsContext, NextPage } from 'next'
import { serialize } from 'cookie'

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    context.res.setHeader('Set-Cookie', [
      serialize('token', '', {
        maxAge: -1,
        path: '/',
      }),
    ])

    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  } catch (err) {
    console.log(err)
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
}

const LogoutPage: NextPage = () => {
  return (
    <>
      <div className="flex w-full">
        <p>Logged out!</p>
      </div>
    </>
  )
}

export default LogoutPage
