/** @format */

import React from 'react'

import PUBLICATIONS from '../assets/data/publications.json'

export default function Publications() {
  return (
    <div className='text-center lg:mt-12 p-4'>
      <p className='text-left'>
        Welcome to the Publications section of my portfolio, where the
        culmination of my endeavors in the realm of artificial intelligence
        unfolds. As a dedicated scientist in the field, I am thrilled to share
        with you a collection of my contributions spanning research papers,
        conference presentations, and authored books.
      </p>
      <br></br>
      <br></br>
      {Object.keys(PUBLICATIONS)
        .reverse()
        .map(year => {
          if (PUBLICATIONS[year].length === 0) return null
          return (
            <div
              key={year}
              className='collapse collapse-plus bg-base-200 mb-8 text-left'>
              <input type='checkbox' />
              <div className='collapse-title text-xl font-medium'>
                Publications on {year}
              </div>
              <div className='collapse-content'>
                {PUBLICATIONS[year].map((publication, i) => {
                  return (
                    <div
                      className='card card-side bg-base-100 shadow-xl m-2 lg:m-4'
                      key={`publication${i}${year}`}>
                      <div className='card-body'>
                        <a href={publication.doi} target='_blank'>
                          <h2 className='card-title'>{publication.title}</h2>
                        </a>
                        <p>{publication.authors}</p>
                        {publication.citations > 0 && (
                          <div className='card-actions justify-end'>
                            <a
                              href={publication.citations_link}
                              target='_blank'>
                              {publication.citations} citations
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
    </div>
  )
}
