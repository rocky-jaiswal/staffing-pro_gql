import type { NextApiRequest, NextApiResponse } from 'next'

import { GRAPHQL_SERVER_URL } from '../../../lib/constants'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.status(404).json({})
  }

  try {
    const response = await fetch(GRAPHQL_SERVER_URL, {
      method: 'post',
      body: req.body,
      headers: { 'Content-Type': 'application/json' },
    })

    const responseBody = (await response.json()) as any
    res.status(200).json(responseBody)
  } catch {
    res.status(500).json({})
  }
}
