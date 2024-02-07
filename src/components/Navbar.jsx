/** @format */

import React from 'react'
import { SECTIONS_LIST, SECTIONS } from '../content/Sections'
import { useNavbar } from './Context'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const { activeSection, setActiveSection } = useNavbar()
  return (
    <>
      {activeSection ? (
        <div className='navbar'>
          <div className='navbar-start'>
            <div className='dropdown'>
              <div
                tabIndex={0}
                role='button'
                className='btn btn-ghost lg:hidden'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='white'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='3'
                    d='M4 6h16M4 12h8m-8 6h16'
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'>
                {SECTIONS_LIST.map((section, index) => (
                  <li key={`drop${index}`}>
                    <Link
                      key={`drop${index}`}
                      className='text-black'
                      to={section.url}
                      onClick={() => setActiveSection(section)}>
                      <span>{section.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              className='btn btn-ghost text-xl text-white drop-shadow-lg hidden lg:flex'
              to={SECTIONS.aurora.url}
              onClick={() => setActiveSection(SECTIONS.aurora)}>
              {SECTIONS.aurora.title}
            </Link>
          </div>
          <div className='navbar-end hidden lg:flex'>
            <ul className='menu menu-horizontal px-1'>
              {SECTIONS_LIST.map((section, index) => {
                if (section.name != 'aurora') {
                  return (
                    <Link
                      key={`menu${index}`}
                      className='text-white'
                      to={section.url}
                      onClick={() => setActiveSection(section)}>
                      <li className='btn btn-ghost btn-lg'>{section.label}</li>
                    </Link>
                  )
                }
              })}
            </ul>
          </div>
          <div className='w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center navbar-end lg:hidden'>
            <a
              className='btn btn-ghost '
              href='https://scholar.google.es/citations?user=9_cDUs8AAAAJ&hl=en&oi=ao'
              target='_blank'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                style={{ fill: 'rgba(255, 255, 255, 1)' }}>
                <path d='M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z'></path>
              </svg>
            </a>
            <a
              className='btn btn-ghost '
              href='https://github.com/auroragonzalez'
              target='_blank'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                style={{ fill: 'rgba(255, 255, 255, 1)' }}>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z'></path>
              </svg>
            </a>
            <a
              className='btn btn-ghost '
              href='mailto:aurora.gonzalez2@um.es'
              target='_blank'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                style={{ fill: 'rgba(255, 255, 255, 1)' }}>
                <path d='M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z'></path>
              </svg>
            </a>
          </div>
        </div>
      ) : (
        'Loading...'
      )}
    </>
  )
}
