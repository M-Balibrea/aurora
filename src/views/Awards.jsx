/** @format */

import AWARDS from '../assets/data/awards.json'

const Awards = () => {
  return (
    <div className=''>
      {AWARDS.map((award, i) => {
        return (
          <div
            className='card card-side bg-base-100 shadow-xl m-4 lg:m-16'
            key={`award${i}`}>
            <div className='w-1/5 hidden lg:flex items-center justify-center'>
              <figure
                onClick={() =>
                  award.link !== '' && window.open(award.link, '_blank')
                }
                className={award.link !== '' ? 'cursor-pointer' : ''}>
                <img src={award.image} alt='' />
              </figure>
            </div>
            <div className='w-4/5 card-body bg-gray-50'>
              {award.link === '' ? (
                <span className='card-title'>{award.title}</span>
              ) : (
                <a href={award.link} target='_blank' className='card-title '>
                  {award.title}
                </a>
              )}

              <p>{award.description}</p>
              <p>{award.year}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Awards
