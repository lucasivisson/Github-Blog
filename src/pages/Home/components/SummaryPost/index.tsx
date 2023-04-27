import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { SummaryPostContainer, TitleSummaryPostContainer } from "./styles";
import moment from 'moment';
import 'moment/dist/locale/pt-br';
import { useMemo } from "react";

export interface IssuesProps {
  title: string;
  issueId: number;
  body: string;
  createdAt: string;
}

export function SummaryPost({ issueId, body, createdAt, title }: IssuesProps) {
  
  const subtitle = useMemo(() => {
    const strings = body.split('\r');
    let subtitle = '';
    for(let string of strings) {
      if( string !== '' && string !== '\n' && string !== '\r') {
        subtitle = string;
        break;
      }
    }
    return subtitle;
  }, [body])

  return (
    <SummaryPostContainer to={`issue/${issueId}`}>
      <TitleSummaryPostContainer>
        <span>
          <ReactMarkdown>
            {title}
          </ReactMarkdown>
        </span>
        <span>{moment(createdAt).locale('pt-br').fromNow()}</span>
      </TitleSummaryPostContainer>
      <span>
      <ReactMarkdown>
        {subtitle}
      </ReactMarkdown>
      </span>
    </SummaryPostContainer>
  )
}