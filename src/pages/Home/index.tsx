
import { Profile } from "./components/Profile";
import { SearchForm } from "./components/SearchForm";
import { SummaryPost } from "./components/SummaryPost";
import { HomeContainer, MainContainer } from "./styles";

export function Home() {

  return (
    <HomeContainer>
      <Profile/>
      <SearchForm/>
      <MainContainer>
        <SummaryPost/>
        <SummaryPost/>
        <SummaryPost/>
        <SummaryPost/>
      </MainContainer>
    </HomeContainer>
  )
}