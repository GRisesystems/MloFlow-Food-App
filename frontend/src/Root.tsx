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
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}>
        <FooterContainer />
      </div>
         
      

    </>
  )
}

export default Root