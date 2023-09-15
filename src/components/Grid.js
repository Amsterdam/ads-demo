import styled, { css } from 'styled-components'
import { calculateFluidStyle } from '../utils'

const maxWidthOption1 = 1504
const maxWidthOption2 = 1568
const maxWidthOption3 = 1632
const maxWidthOption4 = 1632
const maxWidthOption5 = 1584

export const breakpointOption1 = 854
export const breakpointsOption2 = [744, 1312]
export const breakpointsOption3 = [744, 1120]
export const breakpointsOption4 = [567, 1120]
export const breakpointsOption5 = [576, 1088]

export const columnGapOption1 = css`
  ${calculateFluidStyle(8, 24, 320, 1440)}
`

export const columnGapOption2 = css`
  ${calculateFluidStyle(16, 32, 320, 1440)}
`

export const columnGapOption3 = css`
  ${calculateFluidStyle(16, 32, 320, 1440)}
`

export const columnGapOption4 = css`
  ${calculateFluidStyle(16, 48, 320, 1440)}
`

export const columnGapOption5 = css`
  ${calculateFluidStyle(16, 48, 320, 1440)}
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

const extraMarginSpacingOption4 = css`
  ${calculateFluidStyle(8, 48, 320, 1440)}
`

const extraMarginSpacingOption5 = css`
  ${calculateFluidStyle(8, 24, 320, 1440)}
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

const mediaQueriesOption4 = css`
  @media screen and (min-width: ${breakpointsOption4[0]}px) {
    grid-template-columns:
      [bleed-start] ${extraMarginSpacingOption4}
      [bleed-end] repeat(8, [content] 1fr)
      [content bleed-start] ${extraMarginSpacingOption4}
      [bleed-end];
  }

  @media screen and (min-width: ${breakpointsOption4[1]}px) {
    grid-template-columns:
      [bleed-start] ${extraMarginSpacingOption4}
      [bleed-end] repeat(12, [content] 1fr)
      [content bleed-start] ${extraMarginSpacingOption4}
      [bleed-end];
  }
`

const mediaQueriesOption5 = css`
  @media screen and (min-width: ${breakpointsOption5[0]}px) {
    grid-template-columns:
      [bleed-start] ${extraMarginSpacingOption5}
      [bleed-end] repeat(8, [content] 1fr)
      [content bleed-start] ${extraMarginSpacingOption5}
      [bleed-end];
  }

  @media screen and (min-width: ${breakpointsOption5[1]}px) {
    grid-template-columns:
      [bleed-start] ${extraMarginSpacingOption5}
      [bleed-end] repeat(12, [content] 1fr)
      [content bleed-start] ${extraMarginSpacingOption5}
      [bleed-end];
  }
`

export const gridStyle = css`
  column-gap: ${({ gridOption }) =>
    gridOption === 'optie 1'
      ? columnGapOption1
      : gridOption === 'optie 2'
      ? columnGapOption2
      : gridOption === 'optie 3'
      ? columnGapOption3
      : gridOption === 'optie 4'
      ? columnGapOption4
      : columnGapOption5};
  display: grid;
  grid-template-columns: /* the margin size is the gutter size + extra space, that's what the variable after bleed-start does */
    [bleed-start] ${({ gridOption }) =>
      gridOption === 'optie 1'
        ? extraMarginSpacingOption1
        : gridOption === 'optie 2'
        ? extraMarginSpacingOption2
        : gridOption === 'optie 3'
        ? extraMarginSpacingOption3
        : gridOption === 'optie 4'
        ? extraMarginSpacingOption4
        : extraMarginSpacingOption5}
    [bleed-end] repeat(4, [content] 1fr)
    [content bleed-start] ${({ gridOption }) =>
      gridOption === 'optie 1'
        ? extraMarginSpacingOption1
        : gridOption === 'optie 2'
        ? extraMarginSpacingOption2
        : gridOption === 'optie 3'
        ? extraMarginSpacingOption3
        : gridOption === 'optie 4'
        ? extraMarginSpacingOption4
        : extraMarginSpacingOption5}
    [bleed-end];
  max-width: ${({ gridOption }) =>
    gridOption === 'optie 1'
      ? maxWidthOption1
      : gridOption === 'optie 2'
      ? maxWidthOption2
      : gridOption === 'optie 3'
      ? maxWidthOption3
      : gridOption === 'optie 4'
      ? maxWidthOption4
      : maxWidthOption5}px;
  margin: 0 auto; /* If we make all grids completely modular, without a max-width wrapper, we could use this to center everything */

  ${({ gridOption }) =>
    gridOption === 'optie 1'
      ? mediaQueriesOption1
      : gridOption === 'optie 2'
      ? mediaQueriesOption2
      : gridOption === 'optie 3'
      ? mediaQueriesOption3
      : gridOption === 'optie 4'
      ? mediaQueriesOption4
      : mediaQueriesOption5}
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

const gridCellMediaQueriesOption4 = css`
  @media screen and (min-width: ${breakpointsOption4[0]}px) {
    grid-column-start: ${({ subgrid }) => (subgrid ? '' : 'content')}
      ${({ start }) => start?.medium || 'auto'};
    grid-column-end: span ${({ span }) => span.medium || 8};
  }

  @media screen and (min-width: ${breakpointsOption4[1]}px) {
    grid-column-start: ${({ subgrid }) => (subgrid ? '' : 'content')}
      ${({ start }) => start?.large || 'auto'};
    grid-column-end: span ${({ span }) => span.large || 12};
  }
`

const gridCellMediaQueriesOption5 = css`
  @media screen and (min-width: ${breakpointsOption5[0]}px) {
    grid-column-start: ${({ subgrid }) => (subgrid ? '' : 'content')}
      ${({ start }) => start?.medium || 'auto'};
    grid-column-end: span ${({ span }) => span.medium || 8};
  }

  @media screen and (min-width: ${breakpointsOption5[1]}px) {
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
      : gridOption === 'optie 3'
      ? gridCellMediaQueriesOption3
      : gridOption === 'optie 4'
      ? gridCellMediaQueriesOption4
      : gridCellMediaQueriesOption5}
`
