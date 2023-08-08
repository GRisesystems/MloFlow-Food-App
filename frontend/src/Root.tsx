// TopNav, NavBar and Footer sections
import { Outlet } from 'react-router-dom'
import TopNav from './includes/TopNav'
import NavBar from './includes/NavBar'
import { FooterContainer } from './includes/Footer'
// import Form from './components/homeScreen/SignUp'



const Root = () => {
  return (
    <>
        <TopNav/>
        <NavBar/>
            <Outlet/>
              {/* <Form /> */}
        <FooterContainer />   

    </>
  )
}

export default Root