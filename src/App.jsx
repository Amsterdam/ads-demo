import { useLayoutEffect, useState } from 'react'
import Article from './pages/article/article'
import Homepage from './pages/homepage/homepage'
import * as Styled from './App.style'

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [page, setPage] = useState('homepage')
  const [showNonDSElements, setShowNonDSElements] = useState(false)

  useLayoutEffect(() => {
    const getSizes = () => {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener('resize', getSizes)

    return () => {
      window.removeEventListener('resize', getSizes)
    }
  }, [])

  return (
    <>
      <Styled.GlobalStyle />
      {/* <Styled.Wrapper> */}
      <Styled.MetadataTitleContainer className="amsterdam-meta">
        <h1 className="amsterdam-meta">Meta</h1>
        <label htmlFor="page" className="amsterdam-meta">
          Choose a page:
        </label>

        <select
          name="page"
          id="page"
          value={page}
          onChange={(e) => setPage(e.target.value)}
          className="amsterdam-meta"
        >
          <option value="homepage">homepage</option>
          <option value="article">article</option>
        </select>

        <input
          type="checkbox"
          id="showds"
          name="showds"
          value={showNonDSElements}
          onChange={() => setShowNonDSElements(!showNonDSElements)}
          className="amsterdam-meta"
        />
        <label htmlFor="showds" className="amsterdam-meta">
          Toon elementen die niet uit Design System komen
        </label>
      </Styled.MetadataTitleContainer>
      <Styled.MetadataContainer className="amsterdam-meta">
        <p className="amsterdam-meta">{`Screenwidth: ${screenWidth}px`}</p>
      </Styled.MetadataContainer>
      {showNonDSElements && <Styled.NonDSElements />}
      {page === 'homepage' ? <Homepage /> : <Article />}
      {/* </Styled.Wrapper> */}
    </>
  )
}

export default App
