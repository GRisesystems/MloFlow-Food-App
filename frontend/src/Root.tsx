// TopNav, NavBar and Footer sections
import { Outlet } from 'react-router-dom'
import TopNav from './includes/TopNav'
import NavBar from './includes/NavBar'
import { FooterContainer } from './includes/Footer'



const Root = () => {
  return (
    <>
        <TopNav/>
        <NavBar/>
            <Outlet/>
        <FooterContainer />

    </>
  )
}

export default Root