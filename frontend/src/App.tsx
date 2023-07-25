import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import HomeScreen from "./screens/homeScreen/HomeScreen"

const router = createBrowserRouter(
  // App router configuration. 
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<HomeScreen />} />
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
