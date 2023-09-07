import { Heading, Link, Paragraph } from '@amsterdam/design-system-react'
import { Email } from '@amsterdam/design-system-react-icons'

import * as Styled from './homepage.style'
import {
  themes,
  mockData,
  contactList,
  panelsList,
  generalList,
  quickLinks,
  moreLinks,
} from '../../data'
import logo from '/logo-gemeente-amsterdam-large.svg'
import { calculateFluidStyle } from '../../utils'

import '@amsterdam/design-system-css/dist/paragraph/paragraph.css'
import '@amsterdam/design-system-css/dist/heading/heading.css'
import '@amsterdam/design-system-css/dist/link/link.css'
import '@amsterdam/design-system-css/dist/icon/icon.css'

const Homepage = () => {
  const HighlightCardData = mockData.featured[0].publications

  const MediumCardData = mockData.featured.slice(1, 7)

  const CollectionData = mockData.featuredCollections

  console.log(calculateFluidStyle(0, 64, 320, 1440))

  return (
    <>
      {/* <Styled.Header>
        <Styled.HeaderLogo src={logo} />
        <div>
          <Styled.HeaderButtons>Zoek</Styled.HeaderButtons>
          <Styled.HeaderButtons>Menu</Styled.HeaderButtons>
        </div>
      </Styled.Header>

      <Styled.TwelveColumn>
        <Styled.Hero>Onderzoek en Statistiek</Styled.Hero>
      </Styled.TwelveColumn>
      <Styled.NavBlock>
        <Heading level={4} style={{ marginTop: '112px', marginBottom: '12px' }}>
          Thema’s
        </Heading>
        <Styled.List>
          {themes.map(({ label }) => (
            <li key={label}>
              <Link
                variant="inList"
                href="/"
                style={{ paddingTop: '12px', paddingBottom: '12px' }}
              >
                {label}
              </Link>
            </li>
          ))}
        </Styled.List>
        <Heading level={4} style={{ marginTop: '56px', marginBottom: '12px' }}>
          Snel naar
        </Heading>
        <Styled.List>
          {quickLinks.map((item) => (
            <li key={item}>
              <Link
                variant="inList"
                href="/"
                style={{ paddingTop: '12px', paddingBottom: '12px' }}
              >
                {item}
              </Link>
            </li>
          ))}
        </Styled.List>
        <Heading level={4} style={{ marginTop: '56px', marginBottom: '12px' }}>
          Meer feiten en cijfers
        </Heading>
        <Styled.List>
          {moreLinks.map((item) => (
            <li key={item}>
              <Link
                variant="inList"
                href="/"
                style={{ paddingTop: '12px', paddingBottom: '12px' }}
              >
                {item}
              </Link>
            </li>
          ))}
        </Styled.List>
      </Styled.NavBlock>
      <Styled.EightColumn>
        <Styled.HighlightCard style={{ marginBottom: '120px' }}>
          <Styled.HightlightCardImgContainer>
            <img
              src="https://cms.onderzoek-en-statistiek.nl/uploads/rt_11875_dappermarkt_034_25sep2014_e_v_eis_8543a8dd86.jpg"
              style={{ position: 'absolute', top: 0, width: '100%' }}
            />
          </Styled.HightlightCardImgContainer>
          <Styled.HighlightCardSmallText size="small">
            Publicatie
          </Styled.HighlightCardSmallText>
          <Styled.HighlightCardHeading>
            {HighlightCardData.title}
          </Styled.HighlightCardHeading>
          <Styled.HighlightCardText>
            {HighlightCardData.teaser}
          </Styled.HighlightCardText>
        </Styled.HighlightCard>
      </Styled.EightColumn>
      <Styled.EightColumn>
        <Heading level={3}>Uitgelicht</Heading>
        <Styled.MediumCardList>
          {MediumCardData.map(({ item }) => (
            <Styled.MediumCardListItem key={item.title}>
              <Styled.MediumCard>
                <Styled.MediumCardImgContainer style={{ marginBottom: '20px' }}>
                  <img
                    src={`https://cms.onderzoek-en-statistiek.nl${item.rectangularImage.url}`}
                    style={{
                      position: 'absolute',
                      top: 0,
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'grey',
                      objectFit: 'cover',
                    }}
                  />
                </Styled.MediumCardImgContainer>
                <Styled.MediumCardText size="small">
                  Publicatie
                </Styled.MediumCardText>
                <Styled.MediumCardHeading level={4}>
                  {item.title}
                </Styled.MediumCardHeading>
                <Styled.MediumCardText size="small">
                  {item.teaser}
                </Styled.MediumCardText>
              </Styled.MediumCard>
            </Styled.MediumCardListItem>
          ))}
        </Styled.MediumCardList>
      </Styled.EightColumn>
      <Styled.TwelveColumn style={{ marginBottom: '80px' }}>
        <Heading style={{ marginBottom: '40px' }}>Dossiers</Heading>
        <Styled.CollectionCardList>
          {CollectionData.map((item) => (
            <Styled.CollectionCardListItem key={item.collections.title}>
              <Styled.CollectionCardTitle
                level={4}
                style={{ marginBottom: '8px' }}
              >
                {item.collections.title}
              </Styled.CollectionCardTitle>
              <Styled.CollectionCardText
                size="small"
                style={{ marginBottom: '40px' }}
              >
                {item.collections.teaser}
              </Styled.CollectionCardText>
            </Styled.CollectionCardListItem>
          ))}
        </Styled.CollectionCardList>
      </Styled.TwelveColumn> */}
      <Styled.Footer>
        <Styled.FooterItem>
          <Heading level={4} style={{ marginBottom: '40px' }}>
            Contact
          </Heading>
          <Paragraph size="small" style={{ marginBottom: '40px' }}>
            Heeft u een vraag en kunt u het antwoord niet vinden op deze site?
            Neem dan contact met ons op.
          </Paragraph>
          <Styled.List>
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
          </Styled.List>
        </Styled.FooterItem>
        <Styled.FooterItem second>
          <Heading level={4} style={{ marginBottom: '40px' }}>
            Panels en enquêtes
          </Heading>
          <Paragraph size="small" style={{ marginBottom: '40px' }}>
            Bent u uitgenodigd om mee te doen aan onderzoek of heeft u vragen
            over het panel of stadspaspanel?
          </Paragraph>
          <Styled.List>
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
          </Styled.List>
        </Styled.FooterItem>
        <Styled.FooterItem third>
          <Heading level={4} style={{ marginBottom: '40px' }}>
            Onderzoek en Statistiek
          </Heading>
          <Styled.List>
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
          </Styled.List>
        </Styled.FooterItem>
      </Styled.Footer>
    </>
  )
}

export default Homepage
