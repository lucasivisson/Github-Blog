import { Post } from "../components/Post";
import { Profile } from "../components/Profile";
import { SearchForm } from "../components/SearchForm";
import { HomeContainer, MainContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Profile/>
      <SearchForm/>
      <MainContainer>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </MainContainer>
    </HomeContainer>
  )
}