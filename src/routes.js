// Containers
import DefaultContainer from './containers/DefaultContainer'

// Views
import Home from './views/Home'
import Podcast from './views/Podcast'
import Stories from './views/Stories'
import Data from './views/Data'

export const routes = [
    {
        path: '',
        name: 'home',
        components: {
          default: DefaultContainer,
          // 'header-top': Header
        },
        children: [
          { path: '', component: Home },
          { path: '/socorristas', name: 'podcast', component: Podcast },
          { path: '/historias', name: 'stories', component: Stories },
          { path: '/datos', name: 'data', component: Data },
          { path: '/creditos', name: 'credits', component: Home },
        ]
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
