import type { NextApiRequest, NextApiResponse } from 'next'
import { validateJWT } from '../../../lib/validateCookie'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.status(404).json({})
  }

  try {
    const token = req.cookies['token']

    await validateJWT(token)

    const response = await fetch('http://localhost:4000/graphql', {
      method: 'post',
      body: req.body,
      headers: {
        'Content-Type': 'application/json',
        authorization: token,
      },
    })

    const responseBody = await response.json()
    res.status(200).json(responseBody)
  } catch (err) {
    console.error(err)
    res.status(500).json({})
  }
}
