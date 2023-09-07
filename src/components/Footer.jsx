import styled from 'styled-components'
import { Heading, Link, Paragraph } from '@amsterdam/design-system-react'
import { contactList, panelsList, generalList } from '../data'

import { GridCell, gridStyle } from './Grid'

export const FooterWrapper = styled.div`
  ${gridStyle}

  background-color: #004699;
  padding-block: 2.5rem;
  margin-bottom: 40px;
`

export const FooterItem = styled(GridCell)`
  padding-block-end: 2.5rem;
`

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const Footer = ({ grid }) => (
  <FooterWrapper gridOption={grid}>
    <FooterItem
      gridOption={grid}
      start={{ small: 1, medium: 1, large: 1 }}
      span={{ small: 3, medium: 3, large: 3 }}
    >
      <Heading level={4} style={{ marginBottom: '40px' }}>
        Contact
      </Heading>
      <Paragraph size="small" style={{ marginBottom: '40px' }}>
        Heeft u een vraag en kunt u het antwoord niet vinden op deze site? Neem
        dan contact met ons op.
      </Paragraph>
      <List>
        {contactList.map((item) => (
          <li key={item}>
            <Link
              onBackground="dark"
              variant="inList"
              href="/"
              style={{ paddingTop: '12px', paddingBottom: '12px' }}
            >
              {item}
            </Link>
          </li>
        ))}
      </List>
    </FooterItem>
    <FooterItem
      gridOption={grid}
      start={{ small: 1, medium: 5, large: 5 }}
      span={{ small: 3, medium: 3, large: 3 }}
    >
      <Heading level={4} style={{ marginBottom: '40px' }}>
        Panels en enquêtes
      </Heading>
      <Paragraph size="small" style={{ marginBottom: '40px' }}>
        Bent u uitgenodigd om mee te doen aan onderzoek of heeft u vragen over
        het panel of stadspaspanel?
      </Paragraph>
      <List>
        {panelsList.map((item) => (
          <li key={item}>
            <Link
              onBackground="dark"
              variant="inList"
              href="/"
              style={{ paddingTop: '12px', paddingBottom: '12px' }}
            >
              {item}
            </Link>
          </li>
        ))}
      </List>
    </FooterItem>
    <FooterItem
      gridOption={grid}
      start={{ small: 1, medium: 1, large: 9 }}
      span={{ small: 3, medium: 3, large: 3 }}
    >
      <Heading level={4} style={{ marginBottom: '40px' }}>
        Onderzoek en Statistiek
      </Heading>
      <List>
        {generalList.map((item) => (
          <li key={item}>
            <Link
              onBackground="dark"
              variant="inList"
              href="/"
              style={{ paddingTop: '12px', paddingBottom: '12px' }}
            >
              {item}
            </Link>
          </li>
        ))}
      </List>
    </FooterItem>
  </FooterWrapper>
)

export default Footer
