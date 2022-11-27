import Axios from 'axios'

// http://193.43.147.117:8086/
export const useAxios = () => {
  const axios = Axios.create({
    baseURL: 'http://193.43.147.117:8323/',
  })

  // axios.defaults.headers.common = {
  //   'Access-Control-Allow-Origin': '*',
  //   'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  //   'Content-Type': 'application/json',
  // }

  axios.interceptors.response.use(
    response => {
      return response.data
    },
    error => {
      const message = error.response?.data?.message || error.message
      console.log({
        type: 'error',
        title: 'Error',
        message,
      })

      return Promise.reject(error)
    },
  )

  return axios
}
