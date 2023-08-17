import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import HomeScreen from "./screens/homeScreen/HomeScreen"
import SignInScreen from './screens/SignInScreen/SignInScreen'
import ChefDashBoardScreen from './screens/chefDashboardScreen/ChefDashBoardScreen'
import Root from './Root'
import FarmProduceScreen from './screens/farmProduceScreen/FarmProduceScreen'

import Cart from './components/homeScreen/Cart/Cart'
import AboutScreen from './screens/aboutScreen/AboutScreen'
import VendorDashboardScreen from './screens/vendorDashboardScreen/VendorDashboardScreen'
import CustomerDashboardScreen from './screens/customerDashBoardScreen/CustomerDashboardScreen'
import CheckoutScreen from './screens/checkoutScreen/CheckoutScreen'


const router = createBrowserRouter(
  // App router configuration. 
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route index element={<HomeScreen />} />
      <Route path='/login' element={<SignInScreen />} />
      <Route path='/chef-dashboard' element={<ChefDashBoardScreen />} />
      <Route path='/vendor-dashboard' element={<VendorDashboardScreen />} />
      <Route path='/customer-dashboard' element={<CustomerDashboardScreen />} />
      <Route path='/farmproduce' element={<FarmProduceScreen />} />

      <Route path='/cart' element={<Cart onClose={function (): void {
        throw new Error('Function not implemented.')
      } } />} />

      <Route path='/checkout' element={<CheckoutScreen />} />
      <Route path='/about' element={<AboutScreen />} />

    </Route>
  )
)

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
