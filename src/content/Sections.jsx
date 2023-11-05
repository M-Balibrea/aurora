import Profile from '../views/Profile';
import Publications from '../views/Publications';

export const SECTIONS = [
    {
        name: "aurora",
        label: "Aurora",
        url: "/profile",
        element: <Profile name={'aurora'} />,
    },
    {
        name: "publications",
        label: "Publications",
        url: "/publications",
        element: <Publications name={'publications'} />,
    },
    {
        name: "talks",
        label: "Talks",
        url: "/talks",
        element: <Publications name={'talks'} />,
    },
    {
        name: "r",
        label: "R",
        url: "/r",
        element: <Publications name={'r'} />,
    },
];