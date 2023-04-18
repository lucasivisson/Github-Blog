import styled from "styled-components";

export const SummaryPostContainer = styled.div`
  width: 48.5%;
  border-radius: 0.6rem;
  background: ${props => props.theme["base-post"]};
  margin-bottom: 2rem;
  padding: 2rem;

  > span {
    line-height: 160%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export const TitleSummaryPostContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1rem;

  span:first-child {
    color: ${props => props.theme["base-title"]};
    line-height: 160%;
    display: block;
    font-size: 1.25rem;
    font-weight: 700;
    width: 60%;
  }
`