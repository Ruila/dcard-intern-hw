import { IssueRow } from "../components/IssueRow"
import React from "react"

const data = new Array(10).fill(null)

export const IssueOverview: React.FunctionComponent = () => {
  const renderIssues = data.map((item, index) => <IssueRow key={index} />)
  return (
    <>
      <div className="min-w-[80%] bg-white p-4">{renderIssues}</div>
    </>
  )
}
