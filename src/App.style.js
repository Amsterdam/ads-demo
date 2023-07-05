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

export const Wrapper = styled.div`
  max-width: 1504px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(1, auto);
  column-gap: 2vw;
  padding: 0 32px;

  @media screen and (max-width: 853px) {
    grid-template-columns: repeat(4, 1fr);
    padding: 0 16px;
  }
`

export const MetadataTitleContainer = styled.div`
  background-color: lightgrey;

  grid-area: auto / auto / auto / span 12;

  @media screen and (max-width: 853px) {
    grid-area: auto / auto / auto / span 4;
  }
`

export const MetadataContainer = styled.div`
  background-color: lightgrey;
  grid-area: auto / auto / auto / span 12;

  @media screen and (max-width: 853px) {
    grid-area: auto / auto / auto / span 4;
  }
`
