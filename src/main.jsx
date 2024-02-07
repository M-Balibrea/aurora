/** @format */

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom'
import './index.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { NavbarProvider } from './components/Context'
import Header from './components/Header'

import '@fortawesome/fontawesome-free/css/all.min.css'

import { SECTIONS_LIST } from './content/Sections'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/aurora.gonzalez2'>
      <NavbarProvider>
        <main className='min-h-[94vh]'>
          <div className='block z-50 w-full'>
            <Navbar />
          </div>
          <div style={{ height: '8vh' }}></div>
          <div
            className='sm:w-90 lg:w-3/4 container mx-auto px-4 flex justify-center'
            style={{ opacity: '0.95', minHeight: '60vh' }}>
            <div className='min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg p-6'>
              <Header />
              <Routes>
                {SECTIONS_LIST.map((section, i) => (
                  <Route
                    key={`route${i}`}
                    path={section.url}
                    element={section.element}
                  />
                ))}
                <Route index element={<Navigate to='/profile' />} />
              </Routes>
            </div>
          </div>
        </main>
        <Footer />
      </NavbarProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
