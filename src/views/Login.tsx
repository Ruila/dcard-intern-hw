import { AppContext } from "../AppContext"
import React, { useEffect, useState } from "react"
import { Button, TextField } from "@mui/material"

export const Login: React.FunctionComponent = () => {
  const [clientId, setClientId] = useState<string>("")
  const [clientSecret, setClientSecret] = useState<string>("")
  const [canLogin, setCanLogin] = useState<boolean>(false)
  const exchangeAccessToken = async (code: string) => {
    const res = await AppContext.ApiExecutor.exchangeAccessToken({
      client_id: AppContext.getClientId(),
      client_secret: AppContext.getClientSecret(),
      code: code,
    })
    const findAccessToken = res.data.match(
      /(?<=access_token=)(.*?)(?=&)/
    ) as Array<string>
    AppContext.setAccessToken(
      findAccessToken.length > 0 ? findAccessToken[0] : ""
    )
  }

  const confirmInfo = () => {
    AppContext.setClientId(clientId)
    AppContext.setClientSecret(clientSecret)
    setCanLogin(true)
  }

  useEffect(() => {
    const code = new URLSearchParams(location.search).get("code")
    if (code) exchangeAccessToken(code)
  }, [])

  return (
    <div className="min-w-[80%] bg-white p-4 flex flex-col items-center justify-center">
      <div className="drop-shadow-md flex flex-col w-[250px]">
        <TextField
          value={clientId}
          onChange={event => setClientId(event.target.value)}
          required
          label="client_id"
          variant="standard"
        />
        <TextField
          value={clientSecret}
          onChange={event => setClientSecret(event.target.value)}
          required
          sx={{
            margin: "16px 0",
          }}
          label="client_secret"
          variant="standard"
        />
        <div className="flex justify-between mt-4">
          <Button
            variant="outlined"
            disabled={clientId.length === 0 || clientSecret.length === 0}
            onClick={confirmInfo}
          >
            Confirm
          </Button>
          <Button
            variant="outlined"
            disabled={!canLogin}
            href={`https://github.com/login/oauth/authorize?client_id=${AppContext.getClientId()}&scope=public_repo`}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  )
}
