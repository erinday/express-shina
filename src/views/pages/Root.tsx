import { JSX } from 'react'
import { Outlet } from 'react-router-dom'
import '../../styles/tools/app.sass'
import '../../styles/tools/fonts.sass'
import Header from '../components/_layout/header.tsx'
import Footer from '../components/_layout/footer.tsx'
import Menu from '../components/_layout/menu.tsx'
import Loading from '../components/_layout/loading.tsx'

export default function Root (): JSX.Element {
  return (
    <>
      <Loading/>
      <Header/>
      <Menu/>
      <div className="wrapper">
        <Outlet/>
      </div>
      <Footer/>
    </>
  )
}
