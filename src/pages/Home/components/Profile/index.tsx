import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faUserGroup, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HeaderContainer, TitleContainer, IconsContainer, InfoContainer } from "./styles";
import { api } from "../../../../lib/axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export interface ProfileProps {
  avatar_url: string;
  name: string;
  bio: string;
  company: string;
  followers: number;
  login: string;
}

export function Profile() {
  const [profile, setProfile] = useState<ProfileProps>({} as ProfileProps);

  async function loadProfile() {
    const responseProfile = await api.get('users/lucasivisson');
    const profileObject: ProfileProps = {
      avatar_url: responseProfile.data.avatar_url || '',
      name: responseProfile.data.name || '',
      bio: responseProfile.data.bio || '',
      company: responseProfile.data.company || '',
      followers: responseProfile.data.followers || 0,
      login: responseProfile.data.login || '',
    }
    setProfile(profileObject);
  }

  useEffect(() => {
    loadProfile();
  }, [])

  return (
    <HeaderContainer>
      <img src={profile.avatar_url} alt="" />
      <InfoContainer>
        <div>
          <TitleContainer>
            <h2>{profile.name}</h2>
            <Link to="http://github.com/lucasivisson" target="_blank">GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare}/></Link>
          </TitleContainer>
          <span>{profile.bio}</span>
        </div>
        <IconsContainer>
          <div><FontAwesomeIcon icon={faGithub} />{profile.login}</div>
          <div><FontAwesomeIcon icon={faBuilding} />{profile.company}</div>
          <div><FontAwesomeIcon icon={faUserGroup} />{profile.followers} seguidores</div>
        </IconsContainer>
      </InfoContainer>
    </HeaderContainer>
  )
}