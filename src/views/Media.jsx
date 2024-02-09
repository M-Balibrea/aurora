/** @format */

import React, { useState } from 'react'

import TALKS from '../assets/data/talks.json'
import INTERVIEWS from '../assets/data/interviews.json'

export default function Publications() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className='text-left mt-12'>
      <div role='tablist' className='tabs tabs-lifted'>
        <a
          role='tab'
          className={activeTab === 0 ? 'tab tab-active' : 'tab'}
          onClick={() => setActiveTab(0)}>
          <h3 className='text-lg font-semibold leading-normal text-gray-800 mb-2'>
            Interviews
          </h3>
        </a>
        <a
          role='tab'
          className={activeTab === 1 ? 'tab tab-active' : 'tab'}
          onClick={() => setActiveTab(1)}>
          <h3 className='text-lg font-semibold leading-normal text-gray-800 mb-2'>
            Talks
          </h3>
        </a>
      </div>
      {activeTab === 1
        ? TALKS.map((talk, i) => {
            return (
              <div
                className='card card-side bg-base-100 shadow-xl m-8 lg:m-16'
                key={`award${i}`}>
                <div
                  className=' w-1/5 hidden lg:flex items-center justify-center cursor-pointer'
                  onClick={() => window.open(talk.video, '_blank')}>
                  <figure>
                    <img src={talk.image} alt='' />
                  </figure>
                </div>
                <div className='w-4/5 card-body bg-gray-50'>
                  {talk.video === '' ? (
                    <span className='card-title'>{talk.title}</span>
                  ) : (
                    <a
                      href={talk.video}
                      target='_blank'
                      className='card-title '>
                      {talk.title}
                    </a>
                  )}

                  <p>{talk.description}</p>
                  <div
                    className='card-actions justify-end  lg:hidden'
                    onClick={() => window.open(talk.video, '_blank')}>
                    <button className='btn btn-primary'>Video</button>
                  </div>
                </div>
              </div>
            )
          })
        : INTERVIEWS.map((interview, i) => {
            return (
              <div
                className='card card-side bg-base-100 shadow-xl m-8 lg:m-16'
                key={`award${i}`}>
                <div
                  className='w-1/5 hidden lg:flex items-center justify-center cursor-pointer '
                  onClick={() => window.open(interview.video, '_blank')}>
                  <figure>
                    <img className='h-[200px]' src={interview.image} alt='' />
                  </figure>
                </div>
                <div className='w-4/5 card-body bg-gray-50'>
                  {interview.video === '' ? (
                    <span className='card-title'>{interview.title}</span>
                  ) : (
                    <a
                      href={interview.video}
                      target='_blank'
                      className='card-title '>
                      {interview.title}
                    </a>
                  )}
                  <p>{interview.description}</p>
                  <div
                    className='card-actions justify-end lg:hidden'
                    onClick={() => window.open(interview.video, '_blank')}>
                    <button className='btn btn-primary'>Video</button>
                  </div>
                </div>
              </div>
            )
          })}
    </div>
  )
}
