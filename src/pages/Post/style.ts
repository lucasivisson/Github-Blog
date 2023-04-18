import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme["base-profile"]};
  padding: 2rem;
  border-radius: 0.6rem;
  gap: 1.5rem;
  margin-bottom: 5rem;
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const InfoContainer = styled.div`
  span {
    margin-bottom: 1rem;
    display: block;
  }
`

export const IconsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;

  svg {
    margin-right: 0.5rem;
    color: ${props => props.theme["base-label"]};
  }
`