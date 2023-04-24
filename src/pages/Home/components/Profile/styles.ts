import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  background-color: ${props => props.theme["base-profile"]};
  padding: 2rem;
  border-radius: 0.6rem;
  gap: 2rem;
  margin-bottom: 5rem;

  img {
    width: 10rem;
    border-radius: 0.6rem;
  }

  @media (max-width: 600px) {
    padding: 1rem;
    gap: 1rem;

    img {
      width: 8rem;
      height: 8rem;
    }
  }

  @media (max-width: 460px) {
    padding: 1rem;
    gap: 1rem;

    img {
      width: 3rem;
      height: 3rem;
    }
  }
`

export const HeaderContainerSpinner = styled.header`
  background-color: ${props => props.theme["base-profile"]};
  height: 14rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5rem;
`;

export const InfoContainer = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    line-height: 160%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
    text-overflow: ellipsis;
  }
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

  @media (max-width: 600px) {
    align-items: center;
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

  @media (max-width: 600px) {
    flex-wrap: wrap;

    svg {
      margin-right: 0.2rem;
    }
  }
`