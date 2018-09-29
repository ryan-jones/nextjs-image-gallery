import Link from 'next/link'
import '../styles/main.scss';
import Layout from '../components/Layout';

export default () => (
  <Layout>
    <h1>Hello Next.js 👋</h1>
    <p><Link href='/about'><a>About</a></Link></p>
  </Layout>
)
