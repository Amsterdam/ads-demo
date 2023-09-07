import styled, { css } from 'styled-components'
import { calculateFluidStyle } from '../utils'

const maxWidthOption1 = 1504
const maxWidthOption2 = 1568
const maxWidthOption3 = 1632

export const breakpointOption1 = 854
export const breakpointsOption2 = [744, 1312]
export const breakpointsOption3 = [744, 1120]

export const columnGapOption1 = css`
  ${calculateFluidStyle(8, 24, 320, 1440)}
`

export const columnGapOption2 = css`
  ${calculateFluidStyle(16, 32, 320, 1440)}
`

export const columnGapOption3 = css`
  ${calculateFluidStyle(16, 32, 320, 1440)}
`

const extraMarginSpacingOption1 = css`
  ${calculateFluidStyle(4, 8, 320, 1440)}
`

const extraMarginSpacingOption2 = css`
  ${calculateFluidStyle(16, 32, 320, 1440)}
`

const extraMarginSpacingOption3 = css`
  ${calculateFluidStyle(0, 64, 320, 1440)}
`

const mediaQueriesOption1 = css`
  @media screen and (min-width: ${breakpointOption1}px) {
    grid-template-columns:
      [bleed-start] ${extraMarginSpacingOption1}
      [bleed-end] repeat(12, [content] 1fr)
      [content bleed-start] ${extraMarginSpacingOption1}
      [bleed-end];
  }
`

const mediaQueriesOption2 = css`
  @media screen and (min-width: ${breakpointsOption2[0]}px) {
    grid-template-columns:
      [bleed-start] ${extraMarginSpacingOption2}
      [bleed-end] repeat(8, [content] 1fr)
      [content bleed-start] ${extraMarginSpacingOption2}
      [bleed-end];
  }

  @media screen and (min-width: ${breakpointsOption2[1]}px) {
    grid-template-columns:
      [bleed-start] ${extraMarginSpacingOption2}
      [bleed-end] repeat(12, [content] 1fr)
      [content bleed-start] ${extraMarginSpacingOption2}
      [bleed-end];
  }
`

const mediaQueriesOption3 = css`
  @media screen and (min-width: ${breakpointsOption3[0]}px) {
    grid-template-columns:
      [bleed-start] ${extraMarginSpacingOption3}
      [bleed-end] repeat(8, [content] 1fr)
      [content bleed-start] ${extraMarginSpacingOption3}
      [bleed-end];
  }

  @media screen and (min-width: ${breakpointsOption3[1]}px) {
    grid-template-columns:
      [bleed-start] ${extraMarginSpacingOption3}
      [bleed-end] repeat(12, [content] 1fr)
      [content bleed-start] ${extraMarginSpacingOption3}
      [bleed-end];
  }
`

export const gridStyle = css`
  column-gap: ${({ gridOption }) =>
    gridOption === 'optie 1'
      ? columnGapOption1
      : gridOption === 'optie 2'
      ? columnGapOption2
      : columnGapOption3};
  display: grid;
  grid-template-columns: /* the margin size is the gutter size + extra space, that's what the variable after bleed-start does */
    [bleed-start] ${({ gridOption }) =>
      gridOption === 'optie 1'
        ? extraMarginSpacingOption1
        : gridOption === 'optie 2'
        ? extraMarginSpacingOption2
        : extraMarginSpacingOption3}
    [bleed-end] repeat(4, [content] 1fr)
    [content bleed-start] ${({ gridOption }) =>
      gridOption === 'optie 1'
        ? extraMarginSpacingOption1
        : gridOption === 'optie 2'
        ? extraMarginSpacingOption2
        : extraMarginSpacingOption3}
    [bleed-end];
  max-width: ${({ gridOption }) =>
    gridOption === 'optie 1'
      ? maxWidthOption1
      : gridOption === 'optie 2'
      ? maxWidthOption2
      : maxWidthOption3}px;
  margin: 0 auto; /* If we make all grids completely modular, without a max-width wrapper, we could use this to center everything */

  ${({ gridOption }) =>
    gridOption === 'optie 1'
      ? mediaQueriesOption1
      : gridOption === 'optie 2'
      ? mediaQueriesOption2
      : mediaQueriesOption3}
`

const gridCellMediaQueriesOption1 = css`
  @media screen and (min-width: ${breakpointOption1}px) {
    grid-column-start: ${({ subgrid }) => (subgrid ? '' : 'content')}
      ${({ start }) => start?.large || 'auto'};
    grid-column-end: span ${({ span }) => span.large || 12};
  }
`

const gridCellMediaQueriesOption2 = css`
  @media screen and (min-width: ${breakpointsOption2[0]}px) {
    grid-column-start: ${({ subgrid }) => (subgrid ? '' : 'content')}
      ${({ start }) => start?.medium || 'auto'};
    grid-column-end: span ${({ span }) => span.medium || 8};
  }

  @media screen and (min-width: ${breakpointsOption2[1]}px) {
    grid-column-start: ${({ subgrid }) => (subgrid ? '' : 'content')}
      ${({ start }) => start?.large || 'auto'};
    grid-column-end: span ${({ span }) => span.large || 12};
  }
`

const gridCellMediaQueriesOption3 = css`
  @media screen and (min-width: ${breakpointsOption3[0]}px) {
    grid-column-start: ${({ subgrid }) => (subgrid ? '' : 'content')}
      ${({ start }) => start?.medium || 'auto'};
    grid-column-end: span ${({ span }) => span.medium || 8};
  }

  @media screen and (min-width: ${breakpointsOption3[1]}px) {
    grid-column-start: ${({ subgrid }) => (subgrid ? '' : 'content')}
      ${({ start }) => start?.large || 'auto'};
    grid-column-end: span ${({ span }) => span.large || 12};
  }
`

export const Grid = styled.div`
  ${gridStyle}
`

export const GridCell = styled.div`
  grid-column-start: ${({ subgrid }) => (subgrid ? '' : 'content')}
    ${({ start }) => start?.small || 'auto'};
  grid-column-end: span ${({ span }) => span.small || 4};

  ${({ gridOption }) =>
    gridOption === 'optie 1'
      ? gridCellMediaQueriesOption1
      : gridOption === 'optie 2'
      ? gridCellMediaQueriesOption2
      : gridCellMediaQueriesOption3}
`
