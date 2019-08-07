export default [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home'),
  },
  {
    path: '*',
    name: 'error-404',
    redirect: { name: 'home' }
  }
];
