import styled, { css } from 'styled-components'
import { Heading, Paragraph } from '@amsterdam/design-system-react'
import { genericHeadingStyle, level1, level8 } from '../../Typography.style'
import {
  gridStyle,
  GridCell,
  columnGapOption3,
  breakpointsOption3,
  breakpointsOption2,
  breakpointOption1,
  columnGapOption1,
  columnGapOption2,
  breakpointsOption4,
  columnGapOption4,
  breakpointsOption5,
  columnGapOption5,
} from '../../components/Grid'

export const Hero = styled.h1`
  ${genericHeadingStyle}
  ${level1}

  display: none;
  margin-bottom: 64px;

  @media screen and (min-width: ${({ gridOption }) =>
      gridOption === 'optie 1'
        ? breakpointOption1
        : gridOption === 'optie 2'
        ? breakpointsOption2[1]
        : gridOption === 'optie 3'
        ? breakpointsOption3[1]
        : gridOption === 'optie 4'
        ? breakpointsOption4[1]
        : breakpointsOption5[1]}px) {
    display: block;
  }
`

export const NavBlock = styled(GridCell)`
  display: none;

  @media screen and (min-width: ${({ gridOption }) =>
      gridOption === 'optie 1'
        ? breakpointOption1
        : gridOption === 'optie 2'
        ? breakpointsOption2[1]
        : gridOption === 'optie 3'
        ? breakpointsOption3[1]
        : gridOption === 'optie 4'
        ? breakpointsOption4[1]
        : breakpointsOption5[1]}px) {
    display: block;
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

const mediumCardListSubgridOption1 = css`
  grid-template-columns: repeat(4, 1fr);
  column-gap: ${columnGapOption1};

  @media screen and (min-width: ${breakpointOption1}px) {
    grid-template-columns: repeat(8, 1fr);
  }
`

const mediumCardListSubgridOption2 = css`
  grid-template-columns: repeat(4, 1fr);
  column-gap: ${columnGapOption2};

  @media screen and (min-width: ${breakpointsOption2[0]}px) {
    grid-template-columns: repeat(8, 1fr);
  }

  @media screen and (min-width: ${breakpointsOption2[1]}px) {
    grid-template-columns: repeat(8, 1fr);
  }
`

const mediumCardListSubgridOption3 = css`
  grid-template-columns: repeat(4, 1fr);
  column-gap: ${columnGapOption3};

  @media screen and (min-width: ${breakpointsOption3[0]}px) {
    grid-template-columns: repeat(8, 1fr);
  }

  @media screen and (min-width: ${breakpointsOption3[1]}px) {
    grid-template-columns: repeat(8, 1fr);
  }
`

const mediumCardListSubgridOption4 = css`
  grid-template-columns: repeat(4, 1fr);
  column-gap: ${columnGapOption4};

  @media screen and (min-width: ${breakpointsOption4[0]}px) {
    grid-template-columns: repeat(8, 1fr);
  }

  @media screen and (min-width: ${breakpointsOption4[1]}px) {
    grid-template-columns: repeat(8, 1fr);
  }
`

const mediumCardListSubgridOption5 = css`
  grid-template-columns: repeat(4, 1fr);
  column-gap: ${columnGapOption5};

  @media screen and (min-width: ${breakpointsOption5[0]}px) {
    grid-template-columns: repeat(8, 1fr);
  }

  @media screen and (min-width: ${breakpointsOption5[1]}px) {
    grid-template-columns: repeat(8, 1fr);
  }
`

export const MediumCardList = styled(List)`
  display: grid;
  ${({ gridOption }) =>
    gridOption === 'optie 1'
      ? mediumCardListSubgridOption1
      : gridOption === 'optie 2'
      ? mediumCardListSubgridOption2
      : gridOption === 'optie 3'
      ? mediumCardListSubgridOption3
      : gridOption === 'optie 4'
      ? mediumCardListSubgridOption4
      : mediumCardListSubgridOption5}
`

export const MediumCardListItem = styled.li`
  grid-area: auto / auto / auto / span 4;

  :nth-child(even) {
    padding-top: 0;

    @media screen and (min-width: ${({ gridOption }) =>
        gridOption === 'optie 1'
          ? breakpointOption1
          : gridOption === 'optie 2'
          ? breakpointsOption2[1]
          : gridOption === 'optie 3'
          ? breakpointsOption3[1]
          : gridOption === 'optie 4'
          ? breakpointsOption4[1]
          : breakpointsOption5[1]}px) {
      padding-top: 80px;
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

const collectionSubgridOption1 = css`
  grid-template-columns: repeat(4, 1fr);
  column-gap: ${columnGapOption1};

  @media screen and (min-width: ${breakpointOption1}px) {
    grid-template-columns: repeat(12, 1fr);
  }
`

const collectionSubgridOption2 = css`
  grid-template-columns: repeat(4, 1fr);
  column-gap: ${columnGapOption2};

  @media screen and (min-width: ${breakpointsOption2[0]}px) {
    grid-template-columns: repeat(8, 1fr);
  }

  @media screen and (min-width: ${breakpointsOption2[1]}px) {
    grid-template-columns: repeat(12, 1fr);
  }
`

const collectionSubgridOption3 = css`
  grid-template-columns: repeat(4, 1fr);
  column-gap: ${columnGapOption3};

  @media screen and (min-width: ${breakpointsOption3[0]}px) {
    grid-template-columns: repeat(8, 1fr);
  }

  @media screen and (min-width: ${breakpointsOption3[1]}px) {
    grid-template-columns: repeat(12, 1fr);
  }
`

const collectionSubgridOption4 = css`
  grid-template-columns: repeat(4, 1fr);
  column-gap: ${columnGapOption4};

  @media screen and (min-width: ${breakpointsOption4[0]}px) {
    grid-template-columns: repeat(8, 1fr);
  }

  @media screen and (min-width: ${breakpointsOption4[1]}px) {
    grid-template-columns: repeat(12, 1fr);
  }
`

const collectionSubgridOption5 = css`
  grid-template-columns: repeat(4, 1fr);
  column-gap: ${columnGapOption5};

  @media screen and (min-width: ${breakpointsOption5[0]}px) {
    grid-template-columns: repeat(8, 1fr);
  }

  @media screen and (min-width: ${breakpointsOption5[1]}px) {
    grid-template-columns: repeat(12, 1fr);
  }
`

export const CollectionCardList = styled.div`
  display: grid;

  ${({ gridOption }) =>
    gridOption === 'optie 1'
      ? collectionSubgridOption1
      : gridOption === 'optie 2'
      ? collectionSubgridOption2
      : gridOption === 'optie 3'
      ? collectionSubgridOption3
      : gridOption === 'optie 4'
      ? collectionSubgridOption4
      : collectionSubgridOption5}
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
