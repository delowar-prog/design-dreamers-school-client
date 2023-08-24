import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { router } from './Routes/Routes'
import AuthProviders from './provider/AuthProviders'
import ModalContext from './provider/ModalContext'
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProviders>
        <ModalContext>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
        </ModalContext>
      </AuthProviders>
    </HelmetProvider>
  </React.StrictMode>,
)
