// font
import {Sora} from '@next/font/google'
import Nav from './Nav'
import TopLeftImg from './TopLeftImg'
import Header from './Header'


const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200','300', '400','500','600','700','800']
})

// bg-site in div className
const Layout = ({children}) => {
  return <div className={`page text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}>
    <TopLeftImg />
    <Nav />
    <Header />
    {children}
  </div>
};

export default Layout;
