import { createContext, useMemo } from 'react'
import { useQuery } from 'react-query'
import { getUser } from '../pages/api/api'

type Props = {
  children: React.ReactNode
}

export interface TypeUserContext {
  currentUser?: any
  isLoading?: boolean
  refetch?: () => void
}


const UserContext = createContext<TypeUserContext>({})

const UserProvider = ({ children }: Props) => {
  const { data, isLoading, refetch, remove } = useQuery('currentUser', getUser, {
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })

  const contextValues: TypeUserContext = useMemo(
    () => ({
      currentUser: data,
      isLoading,
      refetch,
      remove,
    }),
    [data, isLoading, refetch],
  )

  return <UserContext.Provider value={contextValues}>{children}</UserContext.Provider>
}

export { UserContext, UserProvider }
