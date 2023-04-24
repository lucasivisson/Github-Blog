import styled from "styled-components";

export const HomeContainer = styled.div`
  max-width: 60rem;
`

export const MainContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3%;
  margin: 3% 0;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`
