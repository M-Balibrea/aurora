/** @format */

import R_PROJECTS from '../assets/data/r.json'

const R = () => {
  return (
    <div className='text-center mt-12'>
      {R_PROJECTS.map((rprojects, i) => {
        return (
          <div key={`rproject${i}`}>
            <h3 className='text-2xl font-semibold leading-normal text-gray-800 mb-2'>
              {rprojects.title}
            </h3>
            <div className='flex flex-wrap justify-center'>
              {rprojects.projects.map((project, i) => {
                return (
                  <div
                    className='card card-compact w-96 bg-base-100 shadow-xl m-8 '
                    key={`project${i}`}>
                    <div className=' bg-slate-200 p-4'>
                      <img src={project.image}></img>
                    </div>
                    <div className='card-body'>
                      <p className='text-left text-2xl '>{project.title}</p>
                      <div className='card-actions justify-end'>
                        <a className='btn' href={project.link} target='_blank'>
                          View
                        </a>
                      </div>
                    </div>
                  </div>
                )
              })}{' '}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default R
