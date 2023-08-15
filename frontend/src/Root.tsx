// TopNav, NavBar and Footer sections
import { Outlet } from 'react-router-dom'
import TopNav from './includes/TopNav'
import NavBar from './includes/NavBar'
import { FooterContainer } from './includes/Footer'
import {AuthProvider} from './utils/AuthContext'

const Root = () => {
  return (
    <AuthProvider>
        <TopNav/>        
        <NavBar/>
            <Outlet/>
        <FooterContainer />       
    </AuthProvider>
  )
}

export default Root