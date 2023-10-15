import { useLayoutEffect, useState } from 'react'
import Article from './pages/article/article'
import Homepage from './pages/homepage/homepage'
import Testpage from './pages/testpage/testpage'
import * as Styled from './App.style'

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [page, setPage] = useState('homepage')
  const [showNonDSElements, setShowNonDSElements] = useState(false)
  const [grid, setGrid] = useState('optie 1')

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
      <Styled.MetadataTitleContainer className="amsterdam-meta">
        <h1 className="amsterdam-meta">Meta</h1>

        <div>
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
            <option value="testpage">testpage</option>
          </select>
        </div>

        <div>
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
        </div>

        <div>
          <label htmlFor="page" className="amsterdam-meta">
            Kies een grid optie:
          </label>

          <select
            name="page"
            id="page"
            value={grid}
            onChange={(e) => setGrid(e.target.value)}
            className="amsterdam-meta"
          >
            <option value="optie 1">optie 1</option>
            <option value="optie 2">optie 2</option>
            <option value="optie 3">optie 3</option>
            <option value="optie 4">optie 4</option>
            <option value="optie 5">optie 5</option>
          </select>
        </div>
      </Styled.MetadataTitleContainer>
      <Styled.MetadataContainer className="amsterdam-meta">
        <p className="amsterdam-meta">{`Screenwidth: ${screenWidth}px`}</p>
      </Styled.MetadataContainer>
      {showNonDSElements && <Styled.NonDSElements />}
      {page === 'homepage' ? <Homepage grid={grid} /> : <Article grid={grid} />}
    </>
  )
}

export default App
