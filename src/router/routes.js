export default [
  {
    path: '/',
    component: () => import('@/views/layout'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/home')
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login')
      },
    ]
  },
  {
    path: '*',
    name: 'error-404',
    redirect: { name: 'home' }
  }
];
