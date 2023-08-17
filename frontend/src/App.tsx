import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import HomeScreen from "./screens/homeScreen/HomeScreen"
import SignInScreen from './screens/SignInScreen/SignInScreen'
import ChefDashBoardScreen from './screens/chefDashboardScreen/ChefDashBoardScreen'
import Root from './Root'
import FarmProduceScreen from './screens/farmProduceScreen/FarmProduceScreen'
import Cart from './components/homeScreen/Cart/Cart'

const router = createBrowserRouter(
  // App router configuration. 
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route index element={<HomeScreen />} />
      <Route path='/login' element={<SignInScreen />} />
      <Route path='/chefs' element={<ChefDashBoardScreen />} />
      <Route path='/farmproduce' element={<FarmProduceScreen />} />
      <Route path='/cart' element={<Cart onClose={function (): void {
        throw new Error('Function not implemented.')
      } } />} />
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
