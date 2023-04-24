import { ReactNode, createContext, useContext, useState } from "react";
import { api } from "../lib/axios";

type IssuesProps = {
  title: string;
  issueId: number;
  body: string;
  createdAt: string;
};

type IssueContextType = {
  issues: IssuesProps[],
  numberOfIssues: number,
  loadIssues: (queryParam?: string) => void;
}

type IssueContextProviderProps = {
  children: ReactNode;
}

const IssueContext = createContext({} as IssueContextType);

export const useIssueContext = () => {
  return useContext(IssueContext)
};

export function IssueContextProvider({ children }: IssueContextProviderProps) {
  const [issues, setIssues] = useState<IssuesProps[]>({} as IssuesProps[]);
  const [numberOfIssues, setNumberOfIssues] = useState<number>(0);

  async function loadIssues(queryParam?: string | '') {
    const responseIssues = await api.get(`search/issues?q=${queryParam}%20repo:lucasivisson/Github-Blog`);
    let issuesArray: IssuesProps[] = [];
    for(let issue of responseIssues.data.items) {
      const issueObject: IssuesProps = {
        issueId: issue.number,
        body: issue.body || '',
        createdAt: issue.created_at || new Date().toISOString(),
        title: issue.title || ''
      }
      issuesArray.push(issueObject);
    }
    setIssues([...issuesArray]);
    setNumberOfIssues(issuesArray.length);
  }

  return (<IssueContext.Provider value={{issues, numberOfIssues, loadIssues}}>{children}</IssueContext.Provider>)
}