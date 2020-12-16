import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import Account from './components/Account.vue';
import Coaches from './components/Coaches.vue';
import CoachDetail from './components/CoachDetail.vue';
import NotFound from './components/NotFound.vue';
import SignUp from './components/SignUp.vue';
import CreateDemo from './components/CreateDemo.vue';
import store from './store.js'

Vue.use(VueRouter);

const routes = [
    {path: '/', component: Home},
    {path: '/account', component: Account, beforeEnter(to, from, next){
        if(store.state.token){next()}
        else{next('/signin')}
    }},
    {path: '/signin', component: Login},
    {path: '/coaches', component: Coaches},
    {path: '/coaches/:pk', component: CoachDetail,
        children: [
            {path: 'demo', component: CreateDemo}
        ] },
    {path: '/signup', component: SignUp},
    {path: '/:invalidroute(.*)', component: NotFound}
]

export default new VueRouter({mode: 'history', routes})


