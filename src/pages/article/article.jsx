import { Paragraph, Heading } from '@amsterdam/design-system-react'
import { Grid, GridCell } from '../../components/Grid'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import * as Styled from './article.style'

import '@amsterdam/design-system-css/dist/paragraph/paragraph.css'
import '@amsterdam/design-system-css/dist/heading/heading.css'

const Article = ({ grid }) => (
  <>
    <Header gridOption={grid} />
    <Grid gridOption={grid}>
      <GridCell
        gridOption={grid}
        span={{ small: 4, medium: 8, large: 10 }}
        start={{ small: 1, medium: 1, large: 2 }}
        style={{ marginTop: '80px' }}
      >
        <Heading style={{ marginBottom: '40px' }}>
          Voorlopige uitslag Provinciale Statenverkiezingen 2023
        </Heading>
        <Paragraph size="large" style={{ marginBottom: '40px' }}>
          GroenLinks blijft in Amsterdam de grootste partij. Dat blijkt na het
          tellen van 100 procent van de stemmen. In deze voorlopige uitslag van
          de verkiezingen voor de Provinciale Staten staat de partij op 18,3
          procent. Dat is minder dan bij de verkiezingen van 2019, toen de
          partij 23,8 procent van de stemmen kreeg.
        </Paragraph>
      </GridCell>

      <GridCell
        gridOption={grid}
        span={{ small: 6, medium: 10, large: 14 }}
        start={{ small: 1, medium: 1, large: 1 }}
        subgrid
      >
        <img
          src="https://picsum.photos/1600/900"
          style={{ width: '100%', marginBottom: '40px' }}
        />
      </GridCell>

      <GridCell
        gridOption={grid}
        span={{ small: 4, medium: 8, large: 8 }}
        start={{ small: 1, medium: 1, large: 3 }}
      >
        <Heading level={2} style={{ marginBottom: '40px' }}>
          Voorlopige uitslag Provinciale
        </Heading>
        <Paragraph style={{ marginBottom: '40px' }}>
          De verkiezingen zijn, landelijk gezien, uitgelopen op aanzienlijke
          verschuivingen in electorale voorkeur, met name aan de
          rechts-conservatieve kant van het politieke spectrum. BBB is de grote
          winnaar, FvD de grote verliezer. Ja21 wint ook, terwijl VVD en PVV
          verliezen; het CDA verliest bijna de helft van zijn electoraat, maar
          ook SGP en CU verliezen.
        </Paragraph>
        <Heading level={3} style={{ marginBottom: '40px' }}>
          Voorlopige uitslag Provinciale
        </Heading>
        <Paragraph style={{ marginBottom: '40px' }}>
          Aan de linkerkant van het politiek spectrum zijn de verschuivingen
          veel minder groot. GroenLinks en PvdA blijven gezamenlijk ongeveer
          even groot. D66 en SP verliezen licht terwijl de Partij voor de Dieren
          en Volt juist kiezers winnen.
        </Paragraph>
        <Heading level={4} style={{ marginBottom: '40px' }}>
          Voorlopige uitslag Provinciale
        </Heading>
        <Paragraph style={{ marginBottom: '40px' }}>
          Aan de linkerkant van het politiek spectrum zijn de verschuivingen
          veel minder groot. GroenLinks en PvdA blijven gezamenlijk ongeveer
          even groot. D66 en SP verliezen licht terwijl de Partij voor de Dieren
          en Volt juist kiezers winnen.
        </Paragraph>
        <Paragraph size="small" style={{ marginBottom: '40px' }}>
          Aan de linkerkant van het politiek spectrum zijn de verschuivingen
          veel minder groot. GroenLinks en PvdA blijven gezamenlijk ongeveer
          even groot.
        </Paragraph>
        <Styled.Quote>
          Aan de linkerkant van het politiek spectrum zijn de verschuivingen
          veel minder groot. GroenLinks en PvdA blijven gezamenlijk ongeveer
          even groot.
        </Styled.Quote>
      </GridCell>
    </Grid>
    <Footer grid={grid} />
  </>
)

export default Article
