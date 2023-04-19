
import { useEffect, useState } from "react";
import { Profile } from "./components/Profile";
import { SearchForm } from "./components/SearchForm";
import { HomeContainer, MainContainer } from "./styles";
import { api } from "../../lib/axios";
import { SummaryPost } from "./components/SummaryPost";

export interface IssuesProps {
  issueId: string;
  body: string;
}

export function Home() {
  const [issues, setIssues] = useState<IssuesProps[]>({} as IssuesProps[]);

  async function loadIssues() {
    const responseIssues = await api.get(`search/issues?q=%20repo:lucasivisson/Github-Blog`);
    console.log(responseIssues.data.items);
    let issuesArray: IssuesProps[] = [];
    for(let issue of responseIssues.data.items) {
      const issueObject: IssuesProps = {
        issueId: issue.number,
        body: issue.body || '',
      }
      issuesArray.push(issueObject);
    }
    setIssues([...issuesArray]);
    console.log(issues)
  }

  useEffect(() => {
    loadIssues();
  }, []);

  return (
    <HomeContainer>
      <Profile/>
      <SearchForm/>
      <MainContainer>
        {issues && issues.map(issue => {
          return <SummaryPost issueId={issue.issueId} body={issue.body}/>
        })}
      </MainContainer>
    </HomeContainer>
  )
}