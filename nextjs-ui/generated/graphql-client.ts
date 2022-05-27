import { GraphQLResolveInfo } from 'graphql'
import {
  useMutation,
  useQuery,
  UseMutationOptions,
  UseQueryOptions,
} from 'react-query'
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
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>
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
  getAllGeographies: Array<Scalars['String']>
  getGoogleAuthUrl: Scalars['String']
}

export type SessionInput = {
  email: Scalars['String']
  password: Scalars['String']
}

export type CreateGoogleUserMutationVariables = Exact<{
  input: Scalars['String']
}>

export type CreateGoogleUserMutation = {
  __typename?: 'Mutation'
  createGoogleUser: string
}

export type CreateDbSignUpMutationVariables = Exact<{
  input: DbSignUpInput
}>

export type CreateDbSignUpMutation = {
  __typename?: 'Mutation'
  createDBSignUp: string
}

export type CreateSessionMutationVariables = Exact<{
  input: SessionInput
}>

export type CreateSessionMutation = {
  __typename?: 'Mutation'
  createSession: string
}

export type GetGoogleAuthUrlQueryVariables = Exact<{ [key: string]: never }>

export type GetGoogleAuthUrlQuery = {
  __typename?: 'Query'
  getGoogleAuthUrl: string
}

export type GetAllGeographiesQueryVariables = Exact<{ [key: string]: never }>

export type GetAllGeographiesQuery = {
  __typename?: 'Query'
  getAllGeographies: Array<string>
}

export type ResolverTypeWrapper<T> = Promise<T> | T

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>
  DbSignUpInput: DbSignUpInput
  Mutation: ResolverTypeWrapper<{}>
  Query: ResolverTypeWrapper<{}>
  SessionInput: SessionInput
  String: ResolverTypeWrapper<Scalars['String']>
}

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']
  DbSignUpInput: DbSignUpInput
  Mutation: {}
  Query: {}
  SessionInput: SessionInput
  String: Scalars['String']
}

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = {
  createDBSignUp?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateDbSignUpArgs, 'input'>
  >
  createGoogleUser?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateGoogleUserArgs, 'input'>
  >
  createSession?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateSessionArgs, 'input'>
  >
}

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  getAllGeographies?: Resolver<
    Array<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  getGoogleAuthUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>
}

export type Resolvers<ContextType = any> = {
  Mutation?: MutationResolvers<ContextType>
  Query?: QueryResolvers<ContextType>
}

export const CreateGoogleUserDocument = `
    mutation CreateGoogleUser($input: String!) {
  createGoogleUser(input: $input)
}
    `
export const useCreateGoogleUserMutation = <
  TError = unknown,
  TContext = unknown
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  options?: UseMutationOptions<
    CreateGoogleUserMutation,
    TError,
    CreateGoogleUserMutationVariables,
    TContext
  >
) =>
  useMutation<
    CreateGoogleUserMutation,
    TError,
    CreateGoogleUserMutationVariables,
    TContext
  >(
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
  useMutation<
    CreateDbSignUpMutation,
    TError,
    CreateDbSignUpMutationVariables,
    TContext
  >(
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
  useMutation<
    CreateSessionMutation,
    TError,
    CreateSessionMutationVariables,
    TContext
  >(
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
export const GetAllGeographiesDocument = `
    query GetAllGeographies {
  getAllGeographies
}
    `
export const useGetAllGeographiesQuery = <
  TData = GetAllGeographiesQuery,
  TError = unknown
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables?: GetAllGeographiesQueryVariables,
  options?: UseQueryOptions<GetAllGeographiesQuery, TError, TData>
) =>
  useQuery<GetAllGeographiesQuery, TError, TData>(
    variables === undefined
      ? ['GetAllGeographies']
      : ['GetAllGeographies', variables],
    fetcher<GetAllGeographiesQuery, GetAllGeographiesQueryVariables>(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      GetAllGeographiesDocument,
      variables
    ),
    options
  )
