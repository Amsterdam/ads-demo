import styled from 'styled-components'

import logo from '/logo-gemeente-amsterdam-large.svg'
import { GridCell, gridStyle } from './Grid'
import { level8 } from '../Typography.style'

export const HeaderWrapper = styled.header`
  ${gridStyle}
`

export const HeaderLogo = styled.img`
  width: 134px;
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

const Header = ({ gridOption }) => (
  <HeaderWrapper gridOption={gridOption}>
    <GridCell
      gridOption={gridOption}
      start={{ small: 1, medium: 1, large: 1 }}
      span={{ small: 4, medium: 8, large: 12 }}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        paddingBlock: '20px',
        marginBottom: '56px',
      }}
    >
      <HeaderLogo src={logo} />
      <div>
        <HeaderButtons>Zoek</HeaderButtons>
        <HeaderButtons>Menu</HeaderButtons>
      </div>
    </GridCell>
  </HeaderWrapper>
)

export default Header
