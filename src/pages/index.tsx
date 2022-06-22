import type { NextPage } from 'next'
import GlobalStyle from '../styles/globalStyle'
import HomeComponent from '../components/Home'

const Home: NextPage = () => {
  return (
    <div className='App'>
      <GlobalStyle/>
      <HomeComponent/>
    </div>
  )
}

export default Home
