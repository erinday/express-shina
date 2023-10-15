import ReactDOM from 'react-dom/client'
import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from "./router"
import './styles/tools/_styles.sass'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)