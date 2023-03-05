import React from "react"
import ReactDOM from "react-dom/client"
import "./styles/global.css"
import { BrowserRouter } from "react-router-dom"
import { RouterMap } from "./router"
import { Layout } from "./Layout"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Layout>
    <BrowserRouter>
      <RouterMap />
    </BrowserRouter>
  </Layout>
)
