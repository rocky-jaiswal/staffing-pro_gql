import jwt, { JwtHeader, JwtPayload } from 'jsonwebtoken'
import jwksClient from 'jwks-rsa'

import { AUTH_SERVER_URL } from './constants'

const client = jwksClient({
  jwksUri: `${AUTH_SERVER_URL}/.well-known/jwks.json`,
})

const getKey = async (header: JwtHeader) => {
  return client.getSigningKey(header.kid)
}

export const validateJWT = async (cookieToken: string) => {
  const header = jwt.decode(cookieToken, { complete: true })!.header
  const key = await getKey(header)

  const decoded = await new Promise<JwtPayload>((resolve, reject) => {
    jwt.verify(cookieToken, key.getPublicKey(), (err: any, decoded: any) =>
      err ? reject(err) : resolve(decoded as JwtPayload)
    )
  })

  if (!decoded.id || decoded.id === '') {
    throw new Error('Invalid user / token')
  }
}

export const validateCookieOrRedirect = async (cookieToken: string) => {
  try {
    if (!cookieToken || cookieToken === '') {
      throw new Error('invalid cookie token')
    }

    await validateJWT(cookieToken)

    return {
      props: {}, // will be passed to the page component as props
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
