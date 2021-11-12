import { useEffect, useRef, useReducer, useCallback } from 'react'

interface IAction {
  type: 'FETCHING' | 'FETCHED' | 'FETCH_ERROR'
  payload?: any
}

interface IState {
  status: IFetchStatus
  error: any
  data: any
}

export type IFetchStatus = 'idle' | 'fetching' | 'fetched' | 'error'

export const useFetch = (url: string) => {
  const cache = useRef<any>({})

  const initialState: IState = {
    status: 'idle',
    error: null,
    data: []
  }

  const [state, dispatch] = useReducer((state: IState, action: IAction) => {
    switch (action.type) {
      case 'FETCHING':
        return { ...initialState, status: 'fetching' } as IState
      case 'FETCHED':
        return {
          ...initialState,
          status: 'fetched',
          data: action.payload
        } as IState
      case 'FETCH_ERROR':
        return {
          ...initialState,
          status: 'error',
          error: action.payload
        } as IState
      default:
        return state
    }
  }, initialState)

  const fetchData = useCallback(
    async (cancelRequest: boolean) => {
      dispatch({ type: 'FETCHING' })
      if (cache.current[url]) {
        const data = cache.current[url]
        dispatch({ type: 'FETCHED', payload: data })
      } else {
        try {
          const response = await fetch(url)
          const data = await response.json()
          cache.current[url] = data
          if (cancelRequest) return
          dispatch({ type: 'FETCHED', payload: data })
        } catch (error: any) {
          if (cancelRequest) return
          dispatch({ type: 'FETCH_ERROR', payload: error.message })
        }
      }
    },
    [url]
  )

  useEffect(() => {
    let cancelRequest = false
    if (!url) return

    fetchData(cancelRequest)

    return function cleanup() {
      cancelRequest = true
    }
  }, [url, fetchData])

  return state
}
