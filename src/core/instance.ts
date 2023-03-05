import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios"
import HttpStatus from "http-status-codes"

function setInterceptors(service: AxiosInstance): void {
  service.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
      config.headers["Authorization"] = `Bearer 123`
      return config
    },
    error => {
      return Promise.reject(error)
    }
  )

  service.interceptors.response.use(
    response => {
      return response
    },
    error => {
      // for local test
      if (process.env.NODE_ENV === "development") {
        console.info("env")
        return Promise.reject(error)
      }
      if (error.response && error.response.status === HttpStatus.UNAUTHORIZED) {
        console.info("unauth")
      }

      return Promise.reject(error)
    }
  )
}

export const apiInstance = axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://github.com",
  timeout: 1000,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
})

setInterceptors(apiInstance)
