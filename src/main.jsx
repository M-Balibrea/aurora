/** @format */

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom'
import './index.css'

import '@fortawesome/fontawesome-free/css/all.min.css'

import { SECTIONS } from './content/Sections'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {SECTIONS.map((section, i) => (
          <Route key={i} path={section.url} element={section.element} />
        ))}
        <Route index element={<Navigate to='/profile' />} />
      </Routes>
    </BrowserRouter>
    ,
  </React.StrictMode>
)
