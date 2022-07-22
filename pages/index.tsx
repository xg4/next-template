import NavLayout from '../components/NavLayout'
import { NextPageWithLayout } from './_app'

const Home: NextPageWithLayout = () => {
  return <div>Home</div>
}

Home.getLayout = (page) => {
  return <NavLayout>{page}</NavLayout>
}

export default Home
