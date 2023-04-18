import { PostContainer, TitlePostContainer } from "./styles";

export function Post() {
  return (
    <PostContainer>
      <TitlePostContainer>
        <span>JavaScript data types and data structures</span>
        <span>Há 1 dia</span>
      </TitlePostContainer>
      <span>
        Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
      </span>
    </PostContainer>
  )
}