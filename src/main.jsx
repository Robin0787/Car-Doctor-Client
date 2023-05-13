import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './AuthProvider/AuthProvider'
import routes from './Routes/Routes'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <AuthProvider>
    <RouterProvider router={routes}/>
    </AuthProvider>
    <Toaster />
  </>,
)
