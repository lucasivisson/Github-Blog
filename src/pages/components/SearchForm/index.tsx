import { SearchFormContainer } from "./styles";

export function SearchForm() {
  return (
    <SearchFormContainer>
      <span>Publicações</span>
      <span>6 publicações</span>
      <form action="">
        <input type="text" />
      </form>
    </SearchFormContainer>
  );
}