import { SearchFormContainer } from "./styles";

export function SearchForm() {
  return (
    <SearchFormContainer>
      <div>
        <span>Publicações</span>
        <span>6 publicações</span>
      </div>
      <form action="">
        <input type="text" placeholder='Buscar conteúdo'/>
      </form>
    </SearchFormContainer>
  );
}