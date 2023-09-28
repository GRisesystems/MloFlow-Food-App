// TopNav, NavBar and Footer sections
import { Outlet } from 'react-router-dom'
import TopNav from '../includes/TopNav'
import NavBar from '../includes/NavBar'
import { FooterContainer } from '../includes/Footer'
import { AuthProvider } from './AuthContext'
import { ActivationProvider } from './ActivationContext'
const Root = () => {
  return (
    <AuthProvider>
      <ActivationProvider>
        <TopNav />
        <NavBar />
        <Outlet />
        <FooterContainer />
      </ActivationProvider>
    </AuthProvider>
  )
}

export default Root