import styled from 'styled-components'
import { level4 } from '../../Typography.style'

export const TextContainer = styled.div`
  grid-area: auto / 3 / auto / span 8;

  @media screen and (max-width: 853px) {
    grid-column-start: 1;
    grid-column-end: span 4;
  }
`

export const Quote = styled.blockquote`
  ${level4}

  color: black;
  box-sizing: border-box;
  -webkit-text-size-adjust: 100%;
  font-weight: 800;
  font-style: italic;
  quotes: '“' '”';
  margin: 0;
  margin-bottom: 40px;

  &::before {
    content: open-quote;
  }

  &::after {
    content: close-quote;
  }
`
