import {create} from 'zustand'

type RouterStoreType = {
  param: string
}

export const useRouterStore = create<RouterStoreType>(() => ({
  param: '/',
}))
