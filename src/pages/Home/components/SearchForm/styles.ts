import styled from "styled-components";

export const SearchFormContainer = styled.div`
  width: 100%;

  input {
    width: 100%;
    border-radius: 0.4rem;
    padding: 1rem 1rem;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  span:first-child {
    color: ${props => props.theme["base-subtitle"]};
    font-weight: 700;
    font-size: 1.125rem;
  }

  span:nth-child(2) {
    font-weight: 400;
    font-size: 0.925rem;
  }
`