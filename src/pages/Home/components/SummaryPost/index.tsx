import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { SummaryPostContainer, TitleSummaryPostContainer } from "./styles";

export interface IssuesProps {
  issueId: string;
  body: string;
  createdAt: string;
}

export function SummaryPost({ issueId, body, createdAt }: IssuesProps) {
  let strings = []
  const stringsWithoutBackslashR = body.split('\r');
  for(let string of stringsWithoutBackslashR) {
    const stringsWithoutBackslashN = string.split('\n');
    for(let finalString of stringsWithoutBackslashN) {
      strings.push(finalString);
    }
  }
  let subtitle = '';
  for(let string of strings) {
    if(string !== strings[0] && string !== '') {
      subtitle = string;
      break;
    }
  }
  
  return (
    <SummaryPostContainer>
      <TitleSummaryPostContainer>
        <span>
          <ReactMarkdown>
            {strings[0]}
          </ReactMarkdown>
        </span>
        <span>Há 1 dia</span>
      </TitleSummaryPostContainer>
      <span>
      <ReactMarkdown>
        {subtitle}
      </ReactMarkdown>
      </span>
    </SummaryPostContainer>
  )
}