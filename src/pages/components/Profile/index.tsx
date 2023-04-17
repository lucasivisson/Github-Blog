import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faUserGroup, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HeaderContainer, TitleContainer, IconsContainer, InfoContainer } from "./styles";

export function Profile() {
  return (
    <HeaderContainer>
      <img src="http://github.com/lucasivisson.png" alt="" />
      <InfoContainer>
        <div>
          <TitleContainer>
            <h2>Cameron Williamson</h2>
              <a href="">GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare}/></a>
          </TitleContainer>
          <span>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</span>
        </div>
        <IconsContainer>
          <div><FontAwesomeIcon icon={faGithub} />cameronwll</div>
          <div><FontAwesomeIcon icon={faBuilding} />Rocketseat</div>
          <div><FontAwesomeIcon icon={faUserGroup} />32 seguidores</div>
        </IconsContainer>
      </InfoContainer>
    </HeaderContainer>
  )
}