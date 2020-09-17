import { AppProps } from 'next/app';
import '../assets/dracula.css';
import '../assets/tailwind.css';
import Layout from '../comps/Layout';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
    	<Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;