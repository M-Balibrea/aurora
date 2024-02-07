/** @format */

import Profile from '../views/Profile'
import Publications from '../views/Publications'
import Talks from '../views/Talks'
import R from '../views/R'
import Awards from '../views/Awards'

export const SECTIONS = {
  aurora: {
    name: 'aurora',
    label: 'Aurora',
    title: 'Aurora González Vidal',
    url: '/profile',
    element: <Profile />,
  },
  publications: {
    name: 'publications',
    label: 'Publications',
    title: 'Publications',
    url: '/publications',
    element: <Publications />,
  },
  awards: {
    name: 'awards',
    label: 'Awards',
    title: 'Awards',
    url: '/awards',
    element: <Awards />,
  },
  talks: {
    name: 'media',
    label: 'Media',
    title: 'Media',
    url: '/media',
    element: <Talks />,
  },
  r: {
    name: 'r',
    label: 'R',
    title: 'R projects',
    url: '/r',
    element: <R />,
  },
}

export const SECTIONS_LIST = Object.values(SECTIONS)
