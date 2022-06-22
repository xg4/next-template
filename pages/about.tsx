import NavLayout from '../layouts/NavLayout'
import { NextPageWithLayout } from './_app'

const About: NextPageWithLayout = () => {
  return <div>About</div>
}

About.getLayout = (page) => {
  return <NavLayout>{page}</NavLayout>
}

export default About
