import { Paragraph, Heading } from '@amsterdam/design-system-react'

import * as Styled from './article.style'

import '@amsterdam/design-system-css/dist/paragraph/paragraph.css'
import '@amsterdam/design-system-css/dist/heading/heading.css'

const Article = () => (
  <>
    <Styled.HeadingAndIntroContainer style={{ marginTop: '80px' }}>
      <Heading style={{ marginBottom: '40px' }}>
        Voorlopige uitslag Provinciale Statenverkiezingen 2023
      </Heading>
      <Paragraph size="large" style={{ marginBottom: '40px' }}>
        GroenLinks blijft in Amsterdam de grootste partij. Dat blijkt na het
        tellen van 100 procent van de stemmen. In deze voorlopige uitslag van de
        verkiezingen voor de Provinciale Staten staat de partij op 18,3 procent.
        Dat is minder dan bij de verkiezingen van 2019, toen de partij 23,8
        procent van de stemmen kreeg.
      </Paragraph>
    </Styled.HeadingAndIntroContainer>
    <Styled.TextContainer>
      <Heading level={2} style={{ marginBottom: '40px' }}>
        Voorlopige uitslag Provinciale
      </Heading>
      <Paragraph style={{ marginBottom: '40px' }}>
        De verkiezingen zijn, landelijk gezien, uitgelopen op aanzienlijke
        verschuivingen in electorale voorkeur, met name aan de
        rechts-conservatieve kant van het politieke spectrum. BBB is de grote
        winnaar, FvD de grote verliezer. Ja21 wint ook, terwijl VVD en PVV
        verliezen; het CDA verliest bijna de helft van zijn electoraat, maar ook
        SGP en CU verliezen.
      </Paragraph>
      <Heading level={3} style={{ marginBottom: '40px' }}>
        Voorlopige uitslag Provinciale
      </Heading>
      <Paragraph style={{ marginBottom: '40px' }}>
        Aan de linkerkant van het politiek spectrum zijn de verschuivingen veel
        minder groot. GroenLinks en PvdA blijven gezamenlijk ongeveer even
        groot. D66 en SP verliezen licht terwijl de Partij voor de Dieren en
        Volt juist kiezers winnen.
      </Paragraph>
      <Heading level={4} style={{ marginBottom: '40px' }}>
        Voorlopige uitslag Provinciale
      </Heading>
      <Paragraph style={{ marginBottom: '40px' }}>
        Aan de linkerkant van het politiek spectrum zijn de verschuivingen veel
        minder groot. GroenLinks en PvdA blijven gezamenlijk ongeveer even
        groot. D66 en SP verliezen licht terwijl de Partij voor de Dieren en
        Volt juist kiezers winnen.
      </Paragraph>
      <Paragraph size="small" style={{ marginBottom: '40px' }}>
        Aan de linkerkant van het politiek spectrum zijn de verschuivingen veel
        minder groot. GroenLinks en PvdA blijven gezamenlijk ongeveer even
        groot.
      </Paragraph>
      <Styled.Quote>
        Aan de linkerkant van het politiek spectrum zijn de verschuivingen veel
        minder groot. GroenLinks en PvdA blijven gezamenlijk ongeveer even
        groot.
      </Styled.Quote>
    </Styled.TextContainer>
  </>
)

export default Article
