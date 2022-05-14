import type { NextApiRequest, NextApiResponse } from 'next'
import cookie from 'cookie'
import { ServerResponse } from 'http'

const setCookieToken = (
  res: NextApiResponse<any> | ServerResponse,
  token: any
) => {
  res.setHeader(
    'Set-Cookie',
    cookie.serialize('token', token, {
      httpOnly: true,
      maxAge: 60 * 60,
      path: '/',
      sameSite: 'strict',
    })
  )
}

export default setCookieToken
