import { useQuery, UseQueryOptions } from 'react-query'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}

function fetcher<TData, TVariables>(
  endpoint: string,
  requestInit: RequestInit,
  query: string,
  variables?: TVariables
) {
  return async (): Promise<TData> => {
    const res = await fetch(endpoint, {
      method: 'POST',
      ...requestInit,
      body: JSON.stringify({ query, variables }),
    })

    const json = await res.json()

    if (json.errors) {
      const { message } = json.errors[0]

      throw new Error(message)
    }

    return json.data
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Query = {
  __typename?: 'Query'
  getGoogleAuthUrl: Scalars['String']
}

export type GetGoogleAuthUrlQueryVariables = Exact<{ [key: string]: never }>

export type GetGoogleAuthUrlQuery = {
  __typename?: 'Query'
  getGoogleAuthUrl: string
}

export const GetGoogleAuthUrlDocument = `
    query GetGoogleAuthUrl {
  getGoogleAuthUrl
}
    `
export const useGetGoogleAuthUrlQuery = <
  TData = GetGoogleAuthUrlQuery,
  TError = unknown
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables?: GetGoogleAuthUrlQueryVariables,
  options?: UseQueryOptions<GetGoogleAuthUrlQuery, TError, TData>
) =>
  useQuery<GetGoogleAuthUrlQuery, TError, TData>(
    variables === undefined
      ? ['GetGoogleAuthUrl']
      : ['GetGoogleAuthUrl', variables],
    fetcher<GetGoogleAuthUrlQuery, GetGoogleAuthUrlQueryVariables>(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      GetGoogleAuthUrlDocument,
      variables
    ),
    options
  )
