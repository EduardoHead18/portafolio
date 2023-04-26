import { Navbar_app } from '../header/Navbar_app'
import { Footer_app } from '../footer/Footer_app'
import Head from 'next/head'

export const Layaut = ({children}) => {
  return (
    <>
    <Head>
      <title>Eduardo Hm</title>
    </Head>
    <div className='bg-slate-900'>
      <Navbar_app></Navbar_app>
      <div className='ml-10 mr-10 md:ml-20 md:mr-20'>
        {children}
      </div>
      <Footer_app></Footer_app>
    </div>
    </>
  )
}
