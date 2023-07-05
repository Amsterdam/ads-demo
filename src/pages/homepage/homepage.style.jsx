import styled, { css } from 'styled-components'
import { Heading, Paragraph } from '@amsterdam/design-system-react'
import { genericHeadingStyle, level1, level8 } from '../../Typography.style'

export const Header = styled.header`
  display: flex;
  grid-area: auto / auto / auto / span 12;
  justify-content: space-between;
  padding: 20px 0;
  margin-bottom: 56px;

  @media screen and (max-width: 853px) {
    grid-area: auto / auto / auto / span 4;
  }
`

export const HeaderLogo = styled.img`
  width: 134px;
  max-width: 100%;
  height: auto;
  grid-column: auto / span 2;
`

export const HeaderButtons = styled.button`
  ${level8}

  background-color: transparent;
  border: none;

  display: inline-flex;
  -webkit-box-align: baseline;
  align-items: baseline;
  font-weight: 400;
  color: rgb(0, 70, 153);
  text-decoration: none;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-top: 0px;
  margin-bottom: 0px;

  height: 100%;
  color: rgb(50, 50, 50);
  -webkit-box-align: center;
  align-items: center;
  padding: 8px 24px;
`

export const Hero = styled.h1`
  ${genericHeadingStyle}
  ${level1}

  margin-bottom: 64px;

  @media screen and (max-width: 853px) {
    display: none;
  }
`

export const NavBlock = styled.div`
  grid-area: auto / auto / span 6 / span 3;

  @media screen and (max-width: 853px) {
    display: none;
  }
`

export const TwelveColumn = styled.div`
  grid-area: auto / auto / auto / span 12;

  @media screen and (max-width: 853px) {
    grid-area: auto / auto / auto / span 4;
  }
`

export const EightColumn = styled.div`
  grid-area: auto / 5 / auto / span 8;

  @media screen and (max-width: 853px) {
    grid-area: auto / auto / auto / span 4;
  }
`

export const FourColumn = styled.div`
  grid-area: auto / auto / auto / span 4;

  @media screen and (max-width: 853px) {
    grid-area: auto / auto / auto / span 4;
  }
`

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

export const Link = styled.a`
  ${level8}

  font-weight: 400;
  color: #004699;
  text-decoration: none;
  padding-top: 12px;
  padding-bottom: 12px;
  display: inline-block;

  :focus,
  :hover {
    text-decoration: underline;
  }
`

export const HighlightCard = styled.a`
  display: block;
  height: fit-content;
  text-decoration: none;
  overflow: hidden;
  margin-bottom: 40px;
`

export const HightlightCardImgContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
  aspect-ratio: 1.77778 / 1;
  padding-top: 56.25%;
  overflow: hidden;
  margin-bottom: 20px;
`

export const HighlightCardHeading = styled(Heading)`
  margin-bottom: 8px;
`

export const HighlightCardText = styled(Paragraph)`
  margin-bottom: 4px;
`

export const HighlightCardSmallText = styled(Paragraph)`
  margin-bottom: 4px;
`

export const MediumCardList = styled(List)`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(1, auto);
  column-gap: 2vw;

  @media screen and (max-width: 853px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const MediumCardListItem = styled.li`
  grid-area: auto / auto / auto / span 4;

  :nth-child(even) {
    padding-top: 80px;

    @media screen and (max-width: 853px) {
      padding-top: 0;
    }
  }
`

export const MediumCard = styled.a`
  display: block;
  height: fit-content;
  text-decoration: none;
  overflow: hidden;
  margin-bottom: 40px;
`

export const MediumCardImgContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
  aspect-ratio: 1.33333 / 1;
  padding-top: 75%;
  overflow: hidden;
`

export const MediumCardHeading = styled(Heading)`
  margin-bottom: 8px;
`

export const MediumCardText = styled(Paragraph)`
  margin-bottom: 4px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const CollectionCardList = styled(List)`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(1, auto);
  column-gap: 2vw;

  @media screen and (max-width: 853px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const CollectionCardListItem = styled.li`
  grid-area: auto / auto / auto / span 4;
`

export const CollectionCardTitle = styled(Heading)`
  color: #004699;
`

export const CollectionCardText = styled(Paragraph)`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const Footer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(1, auto);
  column-gap: 2vw;
  background-color: #004699;
  padding: 40px 32px;
  grid-area: auto / auto / auto / span 12;
  margin-bottom: 40px;
  color: white !important;

  margin-left: -32px;
  margin-right: -32px;

  @media screen and (max-width: 853px) {
    grid-template-columns: repeat(4, 1fr);
    grid-area: auto / auto / auto / span 4;

    padding: 40px 16px;

    margin-left: -16px;
    margin-right: -16px;
  }
`

export const FooterItem = styled.div`
  grid-area: auto / auto / auto / span 3;

  ${({ second }) =>
    second &&
    css`
      grid-column-start: 5;
    `}

  ${({ third }) =>
    third &&
    css`
      grid-column-start: 9;
    `}

  @media screen and (max-width: 853px) {
    grid-area: auto / 1 / auto / span 4;
    margin-bottom: 40px;
  }
`
