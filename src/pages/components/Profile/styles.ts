import { text } from "@fortawesome/fontawesome-svg-core";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  background-color: ${props => props.theme["base-profile"]};
  padding: 2rem;
  border-radius: 0.6rem;
  gap: 2rem;
  width: 60rem;

  img {
    width: 10rem;
    border-radius: 0.6rem;
  }
`

export const InfoContainer = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  h2, span {
    margin-bottom: 0.6rem;
  }

  h2 {
    color: ${props => props.theme["base-title"]};
    font-weight: 700;
    font-size: 1.5rem;
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