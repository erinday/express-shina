import { createBrowserRouter } from 'react-router-dom'
import Home from '../views/pages/home.tsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    }
])

export default router