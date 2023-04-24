import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faBackward, faCalendarDay, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HeaderContainer, IconsContainer, InfoContainer, BodyContainer, LinksContainer, HeaderContainerSpinner } from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import moment from 'moment';
import { Spinner } from "react-activity";
import remarkGfm from 'remark-gfm'
import 'moment/dist/locale/pt-br';
import "react-activity/dist/library.css";

export interface IssueProps {
  title: string;
  issueId: number;
  body: string;
  createdAt: string;
  amountOfComments: number;
  username: string;
}

export function Post() {
  const navigate = useNavigate();
  const { issueId } = useParams();
  const [issue, setIssue] = useState<IssueProps>({} as IssueProps); 
  const [loading, setLoading] = useState<boolean>(false);

  async function loadIssue() {
    setLoading(true);
    const responseIssue = await api.get(`repos/lucasivisson/Github-Blog/issues/${issueId}`);
    const issueObject: IssueProps = {
      issueId: responseIssue.data.number,
      body: responseIssue.data.body || '',
      createdAt: responseIssue.data.created_at || new Date().toISOString(),
      title: responseIssue.data.title || '',
      amountOfComments: responseIssue.data.comments || 0,
      username: responseIssue.data.user.login || '',
    }
    setIssue(issueObject);
    setLoading(false)
  }

  useEffect(() => {
    loadIssue();
  }, []);

  const showPost = () => {
    return (
      <>
        <HeaderContainer>
          <LinksContainer>
            <a onClick={() => navigate(-1)}><FontAwesomeIcon icon={faBackward} /> VOLTAR</a>
            <Link to={`http://github.com/lucasivisson/Github-Blog/issues/${issueId}`} target="_blank">GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare}/></Link>
          </LinksContainer>
          <InfoContainer>
            <span><ReactMarkdown>{issue.title}</ReactMarkdown></span>
            <IconsContainer>
              <div><FontAwesomeIcon icon={faGithub} />{issue.username}</div>
              <div><FontAwesomeIcon icon={faCalendarDay} />{moment(issue.createdAt).locale('pt-br').fromNow()}</div>
              <div><FontAwesomeIcon icon={faComment} />{issue.amountOfComments} comentários</div>
            </IconsContainer>
          </InfoContainer>
        </HeaderContainer>
        <BodyContainer>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{issue.body}</ReactMarkdown>
        </BodyContainer>
      </>
    )
  }

  const showSpinner = () => {
    return (
      <>
        <HeaderContainerSpinner>
          <Spinner color="#727981" size={32} speed={1} animating={true} />
        </HeaderContainerSpinner>
        <BodyContainer>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{issue.body}</ReactMarkdown>
        </BodyContainer>
      </>
    )
  }

  return (!loading ? showPost() : showSpinner())
}