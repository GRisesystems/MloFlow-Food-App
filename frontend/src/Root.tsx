// TopNav, NavBar and Footer sections
import { Outlet } from 'react-router-dom'
// import TopNav from './includes/TopNav'
// import NavBar from './includes/NavBar'
// import { FooterContainer } from './includes/Footer'
import {AuthProvider} from './utils/AuthContext'
// import Cart from './components/homeScreen/Cart/Cart'
// import { CartContext } from './cartContext'
const Root = () => {
  return (
    // <CartContext.Provider value={Cart}>
    <AuthProvider>
     
        {/* <TopNav/>         
       <NavBar/> */}
            <Outlet/>
        {/* <FooterContainer />        */}
        {/* <Cart onClose={function (): void {
        throw new Error('Function not implemented.')
      } } /> */}
    </AuthProvider>
    // </CartContext.Provider>
  )
}

export default Root