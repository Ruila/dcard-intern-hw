import { useRoutes, Navigate } from "react-router-dom"
import React, { ReactElement, Suspense } from "react"

const LoginView = React.lazy(() =>
  import("../views/Login").then(({ Login }) => ({
    default: Login,
  }))
)

const IssueOverview = React.lazy(() =>
  import("../views/IssueOverview").then(({ IssueOverview }) => ({
    default: IssueOverview,
  }))
)

const NotFoundPage = React.lazy(() =>
  import("../views/404").then(({ NotFoundPage }) => ({
    default: NotFoundPage,
  }))
)

export const RouterMap = (): ReactElement | null =>
  useRoutes([
    {
      path: "/",
      element: (
        <Suspense>
          <LoginView />
        </Suspense>
      ),
    },
    {
      path: "/overview",
      element: (
        <Suspense>
          <IssueOverview />
        </Suspense>
      ),
    },
    {
      path: "/404",
      element: (
        <Suspense>
          <NotFoundPage />
        </Suspense>
      ),
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ])
