import Vue from 'vue'
import Router from 'vue-router'
import DengLu from './views/DengLu.vue'
import Wdrs from './views/Wdrs.vue'
import wode from './views/wode.vue'
import Yggl from './views/Yggl.vue'
import yuanzen from './views/yuanzen.vue'
import yuangai from './views/yuanzen.vue'
import index_home from './views/index_home.vue'
import zhaopin1 from './views/zhaopin1.vue'
import zhaopin2 from './views/zhaopin2.vue'
import Zphpz from './views/Zphpz.vue'
import Kqgl from './views/Kqgl.vue'
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
            redirect: 'index_home/wode'
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
                }, {
                    path: '/index_home/yggl',
                    component: () =>
                        import ('./views/Yggl.vue')
                },
                {
                    path: '/index_home/yuanzen',
                    component: () =>
                        import ('./views/yuanzen.vue')
                },
                {
                    path: '/index_home/yuangai',
                    component: () =>
                        import ('./views/yuangai.vue')
                },
                {
                    path: '/index_home/zhaopin1',
                    component: () =>
                        import ('./views/zhaopin1.vue')
                },
                {
                    path: '/index_home/zhaopin2',
                    component: () =>
                        import ('./views/zhaopin2.vue')
                },
                {
                    path: '/index_home/zphpz',
                    component: () =>
                        import ('./views/Zphpz.vue')
                },
                {
                    path: '/index_home/kqgl',
                    component: () =>
                        import ('./views/Kqgl.vue')
                },
                {
                    path: '/index_home/flhgh',
                    component: () =>
                        import ('./views/Flhgh.vue')
                },
                {
                    path: '/index_home/jxgl',
                    component: () =>
                        import ('./views/Jxgl.vue')
                },
                {
                    path: '/index_home/rzgl',
                    component: () =>
                        import ('./views/Rzgl.vue')
                },
                {
                    path: '/index_home/zzgl',
                    component: () =>
                        import ('./views/Zzgl.vue')
                },
                {
                    path: '/index_home/gwdd',
                    component: () =>
                        import ('./views/Gwdd.vue')
                },
                {
                    path: '/index_home/lzgl',
                    component: () =>
                        import ('./views/lzgl.vue')
                },
                {
                    path: '/index_home/ccsq',
                    component: () =>
                        import ('./views/Ccsq.vue')
                },
                {
                    path: '/index_home/wcsq',
                    component: () =>
                        import ('./views/Wcsq.vue')
                },
                {
                    path: '/index_home/jbsq',
                    component: () =>
                        import ('./views/Jbsq.vue')
                },
                {
                    path: '/index_home/qxjsq',
                    component: () =>
                        import ('./views/Qxjsq.vue')
                },
                {
                    path: '/index_home/txsq',
                    component: () =>
                        import ('./views/Txsq.vue')
                },
                {
                    path: '/index_home/wqdw',
                    component: () =>
                        import ('./views/Wqdw.vue')
                },
                {
                    path: '/index_home/ygpx',
                    component: () =>
                        import ('./views/Ygpx.vue')
                },
                {
                    path: '/index_home/srgh',
                    component: () =>
                        import ('./views/Srgh.vue')
                },
                {
                    path: '/index_home/zxfl',
                    component: () =>
                        import ('./views/Zxfl.vue')
                },
                {
                    path: '/index_home/jdjx',
                    component: () =>
                        import ('./views/Jdjx.vue')
                },
                {
                    path: '/index_home/ndjx',
                    component: () =>
                        import ('./views/Ndjx.vue')
                }
            ]
        },

    ]
})