import { Heading, Link } from '@amsterdam/design-system-react'

import * as Styled from './testpage2.style'
import { themes, mockData, quickLinks, moreLinks } from '../../data'

import { Grid, GridCell } from '../../components/Grid'
import Header from '../../components/Header'

import '@amsterdam/design-system-css/dist/paragraph/paragraph.css'
import '@amsterdam/design-system-css/dist/heading/heading.css'
import '@amsterdam/design-system-css/dist/link/link.css'
import '@amsterdam/design-system-css/dist/icon/icon.css'
import Footer from '../../components/Footer'

const Testpage2 = ({ grid }) => {
  const HighlightCardData = mockData.featured[0].publications

  const MediumCardData = mockData.featured.slice(1, 7)

  const CollectionData = mockData.featuredCollections

  return (
    <>
      <Header gridOption={grid} />
      <Grid gridOption={grid}>
        <GridCell
          gridOption={grid}
          start={{ small: 1, medium: 1, large: 1 }}
          span={{ small: 4, medium: 8, large: 12 }}
        >
          <Styled.Hero gridOption={grid}>Project Management</Styled.Hero>
        </GridCell>
        <GridCell
          gridOption={grid}
          start={{ small: 1, medium: 1, large: 1 }}
          span={{ small: 4, medium: 8, large: 12 }}
        >
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
          <Heading level={3} style={{ marginBottom: 40 }}>
            Uitgelicht
          </Heading>
          <Styled.MediumCardList gridOption={grid}>
            {MediumCardData.map(({ item }) => (
              <Styled.MediumCardListItem key={item.title} gridOption={grid}>
                <Styled.MediumCard>
                  <Styled.MediumCardImgContainer
                    style={{ marginBottom: '20px' }}
                  >
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
                  {/* <Styled.MediumCardText size="small">
                    Publicatie
                  </Styled.MediumCardText> */}
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
        </GridCell>
        <GridCell
          gridOption={grid}
          start={{ small: 1, medium: 1, large: 1 }}
          span={{ small: 4, medium: 8, large: 12 }}
          style={{ marginBottom: '80px' }}
        >
          <Heading style={{ marginBottom: '40px' }}>Dossiers</Heading>
          <Styled.CollectionCardList gridOption={grid}>
            {CollectionData.map((item) => (
              <GridCell
                gridOption={grid}
                span={{ small: 4, medium: 4, large: 4 }}
                subgrid
                key={item.collections.title}
              >
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
              </GridCell>
            ))}
          </Styled.CollectionCardList>
        </GridCell>
      </Grid>
      <Footer grid={grid} />
    </>
  )
}

export default Testpage2
