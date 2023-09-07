import styled, { css } from 'styled-components'

const maxWidthOption1 = 1504
const maxWidthOption2 = 1568
const maxWidthOption3 = 1632

const breakpointOption1 = 854
const breakpointsOption2 = [600, 1000]
const breakpointsOption3 = [600, 1000]

const columnGapOption1 = css`clamp(
  0.5rem,
  calc(0.5rem + 0.0142857143 * (100vw - 20rem)),
  1.5rem
)`

const columnGapOption2 = css`clamp(
  1rem,
  1rem + 1 * (100vw - 20rem) / 70,
  2rem
)`

const columnGapOption3 = css`clamp(
  1rem,
  1rem + 1.5 * (100vw - 20rem) / 70,
  2rem
)`

const extraMarginSpacingOption1 = css`clamp(0.25rem, 0.25rem + 0.25 * (100vw - 20rem) / 70, 0.5rem)`

const extraMarginSpacingOption2 = css`clamp(
  1rem,
  1rem + 1 * (100vw - 20rem) / 70,
  2rem
)`

const extraMarginSpacingOption3 = css`clamp(
  0rem,
  0rem + 4 * (100vw - 20rem) / 70,
  4rem
)`

const mediaQueriesOption1 = css`
  @media screen and (min-width: 854px) {
    grid-template-columns:
      [bleed-start] ${extraMarginSpacingOption1}
      [bleed-end] repeat(12, [content] 1fr)
      [content bleed-start] ${extraMarginSpacingOption1}
      [bleed-end];
  }
`

const mediaQueriesOption2 = css`
  @media screen and (min-width: 600px) {
    grid-template-columns:
      [bleed-start] ${extraMarginSpacingOption2}
      [bleed-end] repeat(8, [content] 1fr)
      [content bleed-start] ${extraMarginSpacingOption2}
      [bleed-end];
  }

  @media screen and (min-width: 1000px) {
    grid-template-columns:
      [bleed-start] ${extraMarginSpacingOption2}
      [bleed-end] repeat(12, [content] 1fr)
      [content bleed-start] ${extraMarginSpacingOption2}
      [bleed-end];
  }
`

const mediaQueriesOption3 = css`
  @media screen and (min-width: 600px) {
    grid-template-columns:
      [bleed-start] ${extraMarginSpacingOption3}
      [bleed-end] repeat(8, [content] 1fr)
      [content bleed-start] ${extraMarginSpacingOption3}
      [bleed-end];
  }

  @media screen and (min-width: 1000px) {
    grid-template-columns:
      [bleed-start] ${extraMarginSpacingOption3}
      [bleed-end] repeat(12, [content] 1fr)
      [content bleed-start] ${extraMarginSpacingOption3}
      [bleed-end];
  }
`

export const gridStyle = css`
  column-gap: ${columnGapOption3};
  display: grid;
  grid-template-columns: /* the margin size is the gutter size + extra space, that's what the variable after bleed-start does */
    [bleed-start] ${extraMarginSpacingOption3}
    [bleed-end] repeat(4, [content] 1fr)
    [content bleed-start] ${extraMarginSpacingOption3}
    [bleed-end];
  max-width: ${maxWidthOption3}px;
  margin: 0 auto; /* If we make all grids completely modular, without a max-width wrapper, we could use this to center everything */

  ${mediaQueriesOption3}
`

export const GridCell = styled.div`
  grid-column-start: 1;
  grid-column-end: span 12;
`
