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
import {
  Heading1,
  Heading3,
  Heading4,
  ParagraphSmall,
} from '../article/article.style'
import logo from '/logo-gemeente-amsterdam-large.svg'

const Homepage = () => {
  const HighlightCardData = mockData.featured[0].publications

  const MediumCardData = mockData.featured.slice(1, 7)

  const CollectionData = mockData.featuredCollections

  return (
    <>
      <Styled.Header>
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
        <Heading4 style={{ marginTop: '112px', marginBottom: '12px' }}>
          Thema’s
        </Heading4>
        <Styled.List>
          {themes.map(({ label }) => (
            <li key={label}>
              <Styled.Link href="/">{label}</Styled.Link>
            </li>
          ))}
        </Styled.List>
        <Heading4 style={{ marginTop: '56px', marginBottom: '12px' }}>
          Snel naar
        </Heading4>
        <Styled.List>
          {quickLinks.map((item) => (
            <li key={item}>
              <Styled.Link href="/">{item}</Styled.Link>
            </li>
          ))}
        </Styled.List>
        <Heading4 style={{ marginTop: '56px', marginBottom: '12px' }}>
          Meer feiten en cijfers
        </Heading4>
        <Styled.List>
          {moreLinks.map((item) => (
            <li key={item}>
              <Styled.Link href="/">{item}</Styled.Link>
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
          <Styled.HighlightCardSmallText>
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
        <Heading3>Uitgelicht</Heading3>
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
                <Styled.MediumCardText>Publicatie</Styled.MediumCardText>
                <Styled.MediumCardHeading>
                  {item.title}
                </Styled.MediumCardHeading>
                <Styled.MediumCardText>{item.teaser}</Styled.MediumCardText>
              </Styled.MediumCard>
            </Styled.MediumCardListItem>
          ))}
        </Styled.MediumCardList>
      </Styled.EightColumn>
      <Styled.TwelveColumn style={{ marginBottom: '80px' }}>
        <Heading1>Dossiers</Heading1>
        <Styled.CollectionCardList>
          {CollectionData.map((item) => (
            <Styled.CollectionCardListItem key={item.collections.title}>
              <Styled.CollectionCardTitle style={{ marginBottom: '8px' }}>
                {item.collections.title}
              </Styled.CollectionCardTitle>
              <Styled.CollectionCardText>
                {item.collections.teaser}
              </Styled.CollectionCardText>
            </Styled.CollectionCardListItem>
          ))}
        </Styled.CollectionCardList>
      </Styled.TwelveColumn>
      <Styled.Footer>
        <Styled.FooterItem>
          <Heading4>Contact</Heading4>
          <ParagraphSmall>
            Heeft u een vraag en kunt u het antwoord niet vinden op deze site?
            Neem dan contact met ons op.
          </ParagraphSmall>
          <Styled.List>
            {contactList.map((item) => (
              <li key={item}>
                <Styled.Link href="/" style={{ color: 'white' }}>
                  {item}
                </Styled.Link>
              </li>
            ))}
          </Styled.List>
        </Styled.FooterItem>
        <Styled.FooterItem second>
          <Heading4>Panels en enquêtes</Heading4>
          <ParagraphSmall>
            Bent u uitgenodigd om mee te doen aan onderzoek of heeft u vragen
            over het panel of stadspaspanel?
          </ParagraphSmall>
          <Styled.List>
            {panelsList.map((item) => (
              <li key={item}>
                <Styled.Link href="/" style={{ color: 'white' }}>
                  {item}
                </Styled.Link>
              </li>
            ))}
          </Styled.List>
        </Styled.FooterItem>
        <Styled.FooterItem third>
          <Heading4>Onderzoek en Statistiek</Heading4>
          <Styled.List>
            {generalList.map((item) => (
              <li key={item}>
                <Styled.Link href="/" style={{ color: 'white' }}>
                  {item}
                </Styled.Link>
              </li>
            ))}
          </Styled.List>
        </Styled.FooterItem>
      </Styled.Footer>
    </>
  )
}

export default Homepage
