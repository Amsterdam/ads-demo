import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }
`

export const NonDSElements = createGlobalStyle`
  * {
    outline: 2px solid hotpink;
  }

  [class^='amsterdam-'],
  [class*=' amsterdam-'],
  svg,
  path {
    outline: none;
  }
`

export const MetadataTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: lightgrey;
  max-width: 1504px;
  margin: 0 auto;

  grid-area: auto / auto / auto / span 12;

  @media screen and (max-width: 853px) {
    grid-area: auto / auto / auto / span 4;
  }
`

export const MetadataContainer = styled.div`
  background-color: lightgrey;
  grid-area: auto / auto / auto / span 12;
  max-width: 1504px;
  margin: 0 auto;

  @media screen and (max-width: 853px) {
    grid-area: auto / auto / auto / span 4;
  }
`
