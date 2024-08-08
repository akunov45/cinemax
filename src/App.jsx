import Header from "./components/header/Header"
import bgImage from './assets/joker.png'
import Hero from "./components/hero/Hero";
import { useContext } from 'react'
import { MOVIE_CONTEXT } from "./context/AppContext";
import { img_url } from "./constants";
import Search from "./components/section-search/Search";

const App = () => {
  const { img } = useContext(MOVIE_CONTEXT)

  return (
    <div>
      <div id="banner" style={{
        backgroundImage: `url(${img_url + img})`,
        backgroundPosition: 'center top',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }} className="max-container">
        <Header />
        <Hero />
      </div>

      <Search />
    </div>
  )
}


export default App