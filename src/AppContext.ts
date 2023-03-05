import { Apis } from "./core/api"

export class AppContext {
  public static get ApiExecutor(): Apis {
    return new Apis()
  }

  public static getClientId(): string {
    return sessionStorage.getItem("dcard-client-id") || ""
  }

  public static setClientId(token: string): void {
    sessionStorage.setItem("dcard-client-id", token)
  }

  public static getClientSecret(): string {
    return sessionStorage.getItem("dcard-client-secret") || ""
  }

  public static setClientSecret(token: string): void {
    sessionStorage.setItem("dcard-client-secret", token)
  }

  public static getAccessToken(): string {
    return sessionStorage.getItem("dcard-access-token") || ""
  }

  public static setAccessToken(token: string): void {
    sessionStorage.setItem("dcard-access-token", token)
  }
}
