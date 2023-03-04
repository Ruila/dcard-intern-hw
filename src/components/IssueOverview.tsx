import IssueRow from "./IssueRow";

const data = new Array(10).fill(null)

function IssueOverview() {
  const renderIssues = data.map(() => <IssueRow />)
  return (
    <div className="min-w-[80%] bg-white p-4">
      {renderIssues}
    </div>
  )
}

export default IssueOverview
