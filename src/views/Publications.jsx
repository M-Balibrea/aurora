/** @format */

import React from 'react'

import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

import fondo from '../assets/img/fondo.jpeg'
import { PUBLICATIONS } from '../content/Publications.jsx'

import '@fortawesome/fontawesome-free/css/all.min.css'

export default function Publications({ name = null }) {
  return (
    <>
      <Navbar transparent name={name} />
      <main>
        <section className='relative block' style={{ height: '600px' }}>
          <div
            className='absolute -top-12 w-full h-full bg-center bg-cover'
            style={{
              backgroundImage: `url('${fondo}')`,
            }}>
            <span
              id='blackOverlay'
              className='w-full h-full absolute opacity-50 bg-black'></span>
          </div>
          <div
            className='top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden'
            style={{ height: '70px' }}>
            <svg
              className='absolute bottom-0 overflow-hidden'
              xmlns='http://www.w3.org/2000/svg'
              preserveAspectRatio='none'
              version='1.1'
              viewBox='0 0 2560 100'
              x='0'
              y='0'>
              <polygon
                className='text-gray-300 fill-current'
                points='2560 0 2560 100 0 100'></polygon>
            </svg>
          </div>
        </section>
        <section className='relative py-16 bg-gray-300'>
          <div className='container mx-auto px-4'>
            <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64'>
              <div className='px-6'>
                <div className='text-center mt-12'>
                  <h3 className='text-4xl font-semibold leading-normal text-gray-800 mb-2'>
                    Publications
                  </h3>
                  {PUBLICATIONS.map((publication, i) => (
                    <div
                      key={`publication-${i}`}
                      className='flex items-center justify-center m-16 text-left'>
                      <div className='rounded-xl border p-5 shadow-md w-9/12 bg-white'>
                        <div className='flex w-full items-center justify-between border-b pb-3'>
                          <div className='flex items-center space-x-3'>
                            <div className='text-lg font-bold text-slate-700'>
                              {publication.authors}
                            </div>
                          </div>
                          <div className='flex items-center space-x-8'>
                            <div className='text-xs text-neutral-500'>
                              {publication.year}
                            </div>
                          </div>
                        </div>

                        <div className='mt-4 mb-6'>
                          <div className='mb-3 text-xl font-bold'>
                            <a href={publication.doi} target='_blank'>
                              {publication.title}
                            </a>
                          </div>
                          <div className='text-sm text-neutral-600 mt-8'>
                            {publication.abstract}
                          </div>
                        </div>

                        <div>
                          <div className='flex items-center justify-end text-slate-500'>
                            <div className='m-4'>
                              <div className='flex cursor-pointer items-center transition hover:text-slate-600'>
                                <a
                                  href={publication.journal_link}
                                  target='_blank'>
                                  <i className='fa-sharp fa-solid  fa-scroll'></i>
                                  &nbsp;
                                  <span>{publication.journal}</span>
                                </a>
                              </div>
                            </div>
                            <div className='m-4'>
                              <div className='flex cursor-pointer items-center transition hover:text-slate-600'>
                                <a
                                  href={publication.citations_link}
                                  target='_blank'>
                                  <i className='fa-sharp fa-solid fa-link'></i>
                                  &nbsp;
                                  <span>{publication.citations}</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
