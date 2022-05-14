import type { NextApiRequest, NextApiResponse } from 'next'

import setCookieToken from '../../../lib/setCookieToken'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.status(404).json({})
  }

  try {
    const response = await fetch('http://localhost:4000/graphql', {
      method: 'post',
      body: req.body,
      headers: { 'Content-Type': 'application/json' },
    })

    const responseBody = (await response.json()) as any
    const data = responseBody.data
    const token = data.createSession || data.createDBSignUp

    if (!token) {
      throw new Error('No valid token found!')
    }

    setCookieToken(res, token)

    res.status(200).json({})
  } catch (err) {
    console.error(err)
    res.status(401).json({})
  }
}
