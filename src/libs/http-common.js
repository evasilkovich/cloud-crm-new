import axios from 'axios'

/* eslint-disable no-console */
console.log(`API_BASE_URL: ${process.env.VUE_APP_API_BASE_URL}`)

export const HTTP = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL
})
