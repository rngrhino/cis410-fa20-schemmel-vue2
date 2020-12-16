import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import routes from './routes.js'

Vue.use(Vuex);

export default new Vuex.Store(
    {
        state:{
            token: null,
            user: null,
            demos: []
        },
        mutations:{
            storeTokenInApp(state, myToken){
               state.token = myToken 
            },
            storeUserInApp(state, myUser){
                state.user = myUser 
            },
            storeCoaches(state, myCoaches){
                state.demos = myCoaches
            },
            clearAuthData(state){
                state.token = null
                state.user = null
            }
        },
        actions:{
            getCoaches({commit}){
                axios.get('/coaches')
                .then((myResponse)=>{
                    console.log("response from get coaches action", myResponse)
                    commit('storeCoaches', myResponse.data)
                })
                .catch(()=>{console.log("error in getCoaches action")})
            },
            logout({commit, state}){
                axios.post('/player/logout',null, {
                    header:{
                        Authorization: `Bearer ${state.token}`
                    }
                });

                commit('clearAuthData');

                routes.replace("/");
            }
        }
    }
)