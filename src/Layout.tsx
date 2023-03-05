import React from "react"

type LayoutProps = { children: React.ReactNode }

export const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-[#63baff30] h-full py-4 flex justify-center">
      {children}
    </div>
  )
}
