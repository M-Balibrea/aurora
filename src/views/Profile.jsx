/** @format */

import React from 'react'

export default function Profile() {
  return (
    <>
      <div className='text-center mt-12'>
        <h3 className='text-4xl font-semibold leading-normal text-gray-800 mb-2'>
          Aurora González Vidal
        </h3>
        <div className='text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase'>
          <i className='fas fa-map-marker-alt mr-2 text-lg text-gray-500'></i>{' '}
          Murcia, Spain
        </div>
        <div className='mb-2 text-gray-700 mt-10'>
          <i className='fas fa-briefcase mr-2 text-lg text-gray-500'></i>
          Ph.D on data analytics for smart environments
        </div>
        <div className='mb-2 text-gray-700'>
          <i className='fas fa-university mr-2 text-lg text-gray-500'></i>
          University of Murcia, España
        </div>
      </div>
      <div className='mt-10 py-10 border-t border-gray-300 text-left'>
        <div className='flex flex-wrap justify-center'>
          <div className='w-full lg:w-9/12 px-4'>
            <p className='mb-4 text-lg leading-relaxed text-gray-800'>
              I graduated in Mathematics from the University of Murcia in 2014.
              In 2015, I obtained a scholarship to work in the Statistical
              Division of the Research Support Service, specializing in
              Statistics and Data Analysis. Later, I pursued a Master's degree
              in Big Data. In 2019, I earned my Ph.D. in Computer Science,
              focusing on "Data Analysis and Artificial Intelligence applied in
              real environments based on the Internet of Things."
            </p>
            <p className='mb-4 text-lg leading-relaxed text-gray-800'>
              I have collaborated on several national and European projects in
              areas such as smart buildings, smart agriculture, and
              cybersecurity, among others. I have undertaken numerous research
              stays at prestigious centers in England, Australia, the United
              States, and Greece. Currently, I am a postdoctoral researcher at
              the University of Murcia, working on the "ThinkInAzul" project of
              the Complementary Plan for Marine Sciences, where I aim to address
              new challenges in the marine environment and its coastline through
              monitoring, data processing, and the application of Artificial
              Intelligence techniques to such data.
            </p>
            <p className='mb-4 text-lg leading-relaxed text-gray-800'>
              It is worth noting that in 2021, I was awarded the Young
              Scientists Prize in the field of Engineering by the Lyceum, and
              that my work has also been recognized by the BBVA Foundation and
              the Spanish Association for Artificial Intelligence, among other
              institutions.
            </p>
            <p className='mb-4 text-lg leading-relaxed text-gray-800'>
              Download my CV{' '}
              <a href='cv.pdf' target='_blank'>
                <b>here</b>
              </a>
              .
            </p>
            <p className='mb-4 text-lg leading-relaxed text-gray-800'>
              Download my thesis{' '}
              <a
                href='https://auroragonzalez.github.io/files/20191203memoirthesis.pdf'
                target='_blank'>
                <b>here</b>
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
