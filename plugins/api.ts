import axios from 'axios'
import { useStorage } from '@vueuse/core'

export default defineNuxtPlugin(async (nuxtApp) => {
  const { BASE_URL } = useRuntimeConfig()
  const baseURL = BASE_URL ?? 'https://rickandmortyapi.com/api'
  const defaultTokenName = 'app_default_token_name'

  const token = await useStorage(defaultTokenName, null)
  const authHeader =
token === null ? {} : { Authorization: `Bearer ${token}` }

  const apiClient = axios.create({
    baseURL,
    headers: {
      common: {
        'Content-Type': 'application/json',
        ...authHeader
      }
    }
  })

  nuxtApp.apiClient = apiClient
  nuxtApp.provide('apiClient', apiClient)
})
