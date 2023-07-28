// TopNav, NavBar and Footer sections
import { Outlet } from 'react-router-dom'
import TopNav from './includes/TopNav'
const Root = () => {
  return (
    <>
        <TopNav/>
            <Outlet/>
        {/* footer section */}
    </>
  )
}

export default Root