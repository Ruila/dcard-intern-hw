import { apiInstance } from "./instance"
import { ExchangeAccessTokenRequest } from "../types/ExchangeAccessTokenRequest"
import { AxiosResponse } from "axios"

export class Apis {
  async exchangeAccessToken(
    data: ExchangeAccessTokenRequest
  ): Promise<AxiosResponse<string>> {
    return await apiInstance.post("/login/oauth/access_token", data)
  }
}
