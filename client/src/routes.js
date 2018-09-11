import React from 'react';
import Loadable from 'react-loadable'

function Loading() {
  return <div className="header">Loading...</div>;
}

const Portfolio = Loadable({
  loader: () => import('./CinemaInABox/Portfolio/Portfolio'),
  loading: Loading,
});

const ExcelUpload = Loadable({
  loader: () => import('./ExcelUpload/excelupload'),
  loading: Loading,
});

const Register = Loadable({
  loader: () => import('../src/components/auth/Register'),
  loading: Loading,
});

const users = Loadable({
  loader: () => import('./components/auth/users'),
  loading: Loading,
});

const Dashboard = Loadable({
  loader: () => import('./Dashboard/Dashboard'),
  loading: Loading,
});

const BuzzIndex = Loadable({
  loader: () => import('./CinemaInABox/BuzzIndex/BuzzIndex'),
  loading: Loading,
});

const Cam = Loadable({
  loader: () => import('./CinemaInABox/CAM/Cam'),
  loading: Loading,
});

const Cat = Loadable({
  loader: () => import('./CinemaInABox/CAM/Cat'),
  loading: Loading,
});

const AdImpact = Loadable({
  loader: () => import('./CinemaInABox/AdImpact/AdImpact'),
  loading: Loading,
});

const Bingo = Loadable({
  loader: () => import('./CinemaInABox/Bingo/Bingo'),
  loading: Loading,
});

const UpcommingMovieRelease = Loadable({
  loader: () => import('./CinemaInABox/UpcommingMovieRelease/UpcommingMovieRelease'),
  loading: Loading,
});


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/dashboard/buzz-index', name: 'Buzz Index', component: BuzzIndex },
  { path: '/dashboard/cam', name: 'Cam', component: Cam },
  { path: '/dashboard/cat', name: 'Cat', component: Cat },
  { path: '/dashboard/ad-impact', name: 'Ad Impact', component: AdImpact },
  { path: '/dashboard/bingo', name: 'Bingo', component: Bingo },
  { path: '/dashboard/upcoming-movie-release', name: 'Upcoming Movie Release', component: UpcommingMovieRelease },
  { path: '/excel-upload', name: 'Excel Upload', component: ExcelUpload },
  { path: '/register', name: 'Register', component: Register },
  { path: '/users', name: 'Users', component: users },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/portfolio', name: 'Portfolio', component: Portfolio }
];


export default routes;
