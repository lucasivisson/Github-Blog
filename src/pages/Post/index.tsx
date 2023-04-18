import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faBackward, faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HeaderContainer, IconsContainer, InfoContainer, TitleContainer } from "./style";

export function Post() {
  return (
    <HeaderContainer>
      <TitleContainer>
        <a href=""><FontAwesomeIcon icon={faBackward} /> VOLTAR</a>
        <a href="">GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare}/></a>
      </TitleContainer>
      <InfoContainer>
        <span>JavaScript data types and data structures</span>
        <IconsContainer>
          <div><FontAwesomeIcon icon={faGithub} />cameronwll</div>
          <div><FontAwesomeIcon icon={faBuilding} />Rocketseat</div>
          <div><FontAwesomeIcon icon={faUserGroup} />32 seguidores</div>
        </IconsContainer>
      </InfoContainer>
    </HeaderContainer>
  )
}