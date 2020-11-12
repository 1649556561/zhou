import Vue from 'vue'
import Router from 'vue-router'
import DengLu from './views/DengLu.vue'
import Wdrs from './views/Wdrs.vue'
import wode from './views/wode.vue'
import index_home from './views/index_home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'index_home',
            component: DengLu
        },
        {
            path: '/index_home',
            redirect: 'index_home/wdrs'
        },
        {
            path: '/index_home',
            component: () =>
                import ('./views/index_home.vue'),
            children: [{
                path: '/index_home/wdrs',
                component: () =>
                    import ('./views/Wdrs.vue')
            }, {
                path: '/index_home/wode',
                component: () =>
                    import ('./views/wode.vue')
            }]
        },
    ]
})