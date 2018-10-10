// Containers
import MainContainer from './containers/Main'

// Views
import Home from './views/Home'

export const routes = [
    {
        path: '',
        name: 'home',
        components: {
          default: MainContainer,
          // 'header-top': Header
        }
    }
    // {
    //     path: '/user', components: {
    //     default: User,
    //     'header-bottom': Header
    // }, children: [
    //     {path: '', component: UserStart},
    //     {
    //         path: ':id', component: UserDetail, beforeEnter: (to, from, next) => {
    //         console.log('inside route setup');
    //         next();
    //     }
    //     },
    //     {path: ':id/edit', component: UserEdit, name: 'userEdit'}
    // ]
    // },
    // {path: '/redirect-me', redirect: {name: 'home'}},
    // {path: '*', redirect: '/'}
];
