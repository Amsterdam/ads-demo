import styled from 'styled-components'
import {
  genericHeadingStyle,
  genericParagraphStyle,
  level2,
  level3,
  level4,
  level5,
  level6,
  level7,
  level8,
} from '../../Typography.style'

export const HeadingAndIntroContainer = styled.div`
  grid-area: auto / 2 / auto / span 10;

  @media screen and (max-width: 853px) {
    grid-column-start: 1;
    grid-column-end: span 4;
  }
`

export const TextContainer = styled.div`
  grid-area: auto / 3 / auto / span 8;

  @media screen and (max-width: 853px) {
    grid-column-start: 1;
    grid-column-end: span 4;
  }
`

export const Heading1 = styled.h1`
  ${genericHeadingStyle}
  ${level2}

  margin-bottom: 40px;

  @media screen and (max-width: 853px) {
    margin-bottom: 24px;
  }
`

export const Heading2 = styled.h1`
  ${genericHeadingStyle}
  ${level3}

  margin-bottom: 40px;

  @media screen and (max-width: 853px) {
    margin-bottom: 24px;
  }
`

export const Heading3 = styled.h1`
  ${genericHeadingStyle}
  ${level4}

  margin-bottom: 40px;

  @media screen and (max-width: 853px) {
    margin-bottom: 24px;
  }
`

export const Heading4 = styled.h1`
  ${genericHeadingStyle}
  ${level6}

  margin-bottom: 40px;

  @media screen and (max-width: 853px) {
    margin-bottom: 24px;
  }
`

export const Intro = styled.p`
  ${genericParagraphStyle}
  ${level5}

  margin-bottom: 80px;

  @media screen and (max-width: 853px) {
    margin-bottom: 56px;
  }
`

export const Paragraph = styled.p`
  ${genericParagraphStyle}
  ${level7}

  margin-bottom: 40px;
`

export const ParagraphSmall = styled.p`
  ${genericParagraphStyle}
  ${level8}

  margin-bottom: 40px;
`

export const Quote = styled.blockquote`
  ${level4}

  color: black;
  box-sizing: border-box;
  -webkit-text-size-adjust: 100%;
  margin-bottom: 40px;
  font-weight: 800;
  font-style: italic;
  quotes: '“' '”';
  margin: 0;

  &::before {
    content: open-quote;
  }

  &::after {
    content: close-quote;
  }
`
