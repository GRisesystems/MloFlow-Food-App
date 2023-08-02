import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import HomeScreen from "./screens/homeScreen/HomeScreen"
import Root from './Root'

const router = createBrowserRouter(
  // App router configuration. 
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route index element={<HomeScreen />} />
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
