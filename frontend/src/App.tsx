import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from 'react-router-dom'
import HomeScreen from "./screens/homeScreen/HomeScreen"
import SignInScreen from './screens/SignInScreen/SignInScreen'
import ActivateAccountScreen from './screens/activateAccountScreen/ActivateAccountScreen'
import ChefDashBoardScreen from './screens/chefDashboardScreen/ChefDashBoardScreen'
import Root from './Root'
import FarmProduceScreen from './screens/farmProduceScreen/FarmProduceScreen'
// import Cart from './components/homeScreen/Cart/Cart'
import AboutScreen from './screens/aboutScreen/AboutScreen'
import VendorDashboardScreen from './screens/vendorDashboardScreen/VendorDashboardScreen'
import CustomerDashboardScreen from './screens/customerDashBoardScreen/CustomerDashboardScreen'
import CheckoutScreen from './screens/checkoutScreen/CheckoutScreen'
import FishProductsScreen from './screens/fishProductsScreen/FishProductsScreen'
import CookedProductsScreen from './screens/cookedProductsScreen/CookedProductsScreen'
import PoultryProductsScreen from './screens/poultryProductsScreen/PoultryProductsScreen'
import ChefsScreen from './screens/chefsScreen/ChefsScreen'

import { useAuth } from './utils/AuthContext';
import AllProductScreen from './screens/showAllProducts/ShowAllProductsScreen'
import ProductDetailScreen from './screens/productDetailScreen/ProductDetailScreen';

// import Form from './Form'; // Import your Form component
import BookNowForm from './components/chefs/BookNowForm';

import ChefDetailScreen from './screens/chefsScreen/ChefDetailScreen'


const ProtectedRoute = ({ element: Element, ...rest }: { element: React.ElementType }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    localStorage.setItem('redirectAfterLogin', window.location.pathname);
    return <Navigate to="/login" />;
  }

  return <Element {...rest} />;
};



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route index element={<HomeScreen />} />
      <Route path='/login' element={<SignInScreen />} />
      <Route path='/activate/:uuid/:token' element={<ActivateAccountScreen />} />
      <Route path="/chef-dashboard" element={<ProtectedRoute element={ChefDashBoardScreen} />} />
      <Route path='/chefs' element={<ChefsScreen/>} />
      <Route path='/chefs/:id' element={<ChefDetailScreen/>} />
      {/* <Route path="/vendor-dashboard" element={<ProtectedRoute element={VendorDashboardScreen} />} /> */}
      <Route path='/vendor-dashboard' element={<VendorDashboardScreen />} />
      <Route path='/customer-dashboard' element={<CustomerDashboardScreen />} />
      <Route path='/farm-produce' element={<FarmProduceScreen />} />
      <Route path='/fish-products' element={<FishProductsScreen />} />
      <Route path='/poultry-products' element={<PoultryProductsScreen />} />
      <Route path='/cooked-food' element={<CookedProductsScreen />} />
      <Route path='/products' element={<AllProductScreen />} />
      <Route path='/products/:id' element={<ProductDetailScreen />} />
      <Route path='/products' element={<AllProductScreen />} />t
      {/* <Route exact path="/" component={Form} /> */}
      <Route path="/book-now" element={<BookNowForm />} />


      {/* <Route path='/Cart' element={<Cart onClose={function (): void {
        throw new Error('Function not implemented.')
      }} />} /> */}
      <Route path='/checkout' element={<CheckoutScreen />} />
      <Route path='/about' element={<AboutScreen />} />

    </Route>
  )
)

function App() {
  return (
    
      <RouterProvider router={router} />
    
  )
}

export default App
