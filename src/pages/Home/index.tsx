
import { useEffect } from "react";
import { Profile } from "./components/Profile";
import { SearchForm } from "./components/SearchForm";
import { HomeContainer, MainContainer } from "./styles";
import { SummaryPost } from "./components/SummaryPost";
import { useIssueContext } from "../../contexts/IssueContext";

export function Home() {
  const { issues, loadIssues } = useIssueContext();

  useEffect(() => {
    loadIssues();
  }, []);

  return (
    <HomeContainer>
      <Profile/>
      <SearchForm/>
      <MainContainer>
        {issues.length > 0 && issues.map(issue => {
          return <SummaryPost key={issue.issueId} issueId={issue.issueId} body={issue.body} createdAt={issue.createdAt} title={issue.title}/>
        })}
      </MainContainer>
    </HomeContainer>
  )
}