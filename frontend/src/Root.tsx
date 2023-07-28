// TopNav, NavBar and Footer sections
import { Outlet } from 'react-router-dom'
import TopNav from './includes/TopNav'
import NavBar from './includes/NavBar'

const Root = () => {
  return (
    <>
        <TopNav/>
        <NavBar/>
            <Outlet/>
        {/* footer section */}
    </>
  )
}

export default Root