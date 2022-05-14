import { useMutation, useQuery, UseMutationOptions, UseQueryOptions } from 'react-query'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }

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
      body: JSON.stringify({ query, variables })
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

export type DbSignUpInput = {
  confirmedPassword: Scalars['String']
  email: Scalars['String']
  password: Scalars['String']
}

export type Mutation = {
  __typename?: 'Mutation'
  createDBSignUp: Scalars['String']
  createGoogleUser: Scalars['String']
  createSession: Scalars['String']
}

export type MutationCreateDbSignUpArgs = {
  input: DbSignUpInput
}

export type MutationCreateGoogleUserArgs = {
  input: Scalars['String']
}

export type MutationCreateSessionArgs = {
  input: SessionInput
}

export type Query = {
  __typename?: 'Query'
  getAllProjects: Array<Scalars['String']>
  getGoogleAuthUrl: Scalars['String']
}

export type SessionInput = {
  email: Scalars['String']
  password: Scalars['String']
}

export type CreateGoogleUserMutationVariables = Exact<{
  input: Scalars['String']
}>

export type CreateGoogleUserMutation = { __typename?: 'Mutation'; createGoogleUser: string }

export type CreateDbSignUpMutationVariables = Exact<{
  input: DbSignUpInput
}>

export type CreateDbSignUpMutation = { __typename?: 'Mutation'; createDBSignUp: string }

export type CreateSessionMutationVariables = Exact<{
  input: SessionInput
}>

export type CreateSessionMutation = { __typename?: 'Mutation'; createSession: string }

export type GetGoogleAuthUrlQueryVariables = Exact<{ [key: string]: never }>

export type GetGoogleAuthUrlQuery = { __typename?: 'Query'; getGoogleAuthUrl: string }

export type GetAllProjectsQueryVariables = Exact<{ [key: string]: never }>

export type GetAllProjectsQuery = { __typename?: 'Query'; getAllProjects: Array<string> }

export const CreateGoogleUserDocument = `
    mutation CreateGoogleUser($input: String!) {
  createGoogleUser(input: $input)
}
    `
export const useCreateGoogleUserMutation = <TError = unknown, TContext = unknown>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  options?: UseMutationOptions<
    CreateGoogleUserMutation,
    TError,
    CreateGoogleUserMutationVariables,
    TContext
  >
) =>
  useMutation<CreateGoogleUserMutation, TError, CreateGoogleUserMutationVariables, TContext>(
    ['CreateGoogleUser'],
    (variables?: CreateGoogleUserMutationVariables) =>
      fetcher<CreateGoogleUserMutation, CreateGoogleUserMutationVariables>(
        dataSource.endpoint,
        dataSource.fetchParams || {},
        CreateGoogleUserDocument,
        variables
      )(),
    options
  )
export const CreateDbSignUpDocument = `
    mutation CreateDBSignUp($input: DbSignUpInput!) {
  createDBSignUp(input: $input)
}
    `
export const useCreateDbSignUpMutation = <TError = unknown, TContext = unknown>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  options?: UseMutationOptions<
    CreateDbSignUpMutation,
    TError,
    CreateDbSignUpMutationVariables,
    TContext
  >
) =>
  useMutation<CreateDbSignUpMutation, TError, CreateDbSignUpMutationVariables, TContext>(
    ['CreateDBSignUp'],
    (variables?: CreateDbSignUpMutationVariables) =>
      fetcher<CreateDbSignUpMutation, CreateDbSignUpMutationVariables>(
        dataSource.endpoint,
        dataSource.fetchParams || {},
        CreateDbSignUpDocument,
        variables
      )(),
    options
  )
export const CreateSessionDocument = `
    mutation CreateSession($input: SessionInput!) {
  createSession(input: $input)
}
    `
export const useCreateSessionMutation = <TError = unknown, TContext = unknown>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  options?: UseMutationOptions<
    CreateSessionMutation,
    TError,
    CreateSessionMutationVariables,
    TContext
  >
) =>
  useMutation<CreateSessionMutation, TError, CreateSessionMutationVariables, TContext>(
    ['CreateSession'],
    (variables?: CreateSessionMutationVariables) =>
      fetcher<CreateSessionMutation, CreateSessionMutationVariables>(
        dataSource.endpoint,
        dataSource.fetchParams || {},
        CreateSessionDocument,
        variables
      )(),
    options
  )
export const GetGoogleAuthUrlDocument = `
    query GetGoogleAuthUrl {
  getGoogleAuthUrl
}
    `
export const useGetGoogleAuthUrlQuery = <TData = GetGoogleAuthUrlQuery, TError = unknown>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables?: GetGoogleAuthUrlQueryVariables,
  options?: UseQueryOptions<GetGoogleAuthUrlQuery, TError, TData>
) =>
  useQuery<GetGoogleAuthUrlQuery, TError, TData>(
    variables === undefined ? ['GetGoogleAuthUrl'] : ['GetGoogleAuthUrl', variables],
    fetcher<GetGoogleAuthUrlQuery, GetGoogleAuthUrlQueryVariables>(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      GetGoogleAuthUrlDocument,
      variables
    ),
    options
  )
export const GetAllProjectsDocument = `
    query GetAllProjects {
  getAllProjects
}
    `
export const useGetAllProjectsQuery = <TData = GetAllProjectsQuery, TError = unknown>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables?: GetAllProjectsQueryVariables,
  options?: UseQueryOptions<GetAllProjectsQuery, TError, TData>
) =>
  useQuery<GetAllProjectsQuery, TError, TData>(
    variables === undefined ? ['GetAllProjects'] : ['GetAllProjects', variables],
    fetcher<GetAllProjectsQuery, GetAllProjectsQueryVariables>(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      GetAllProjectsDocument,
      variables
    ),
    options
  )
