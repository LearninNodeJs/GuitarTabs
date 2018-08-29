import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    strict:true,//Modifying a state only through an action or a mutation.
    state:{
      token:null,
      user:null,
      isUserLoggedIn:false
    },

    mutations:{
      setToken(state,token){
        state.token = token;
        if(token){
          state.isUserLoggedIn = true;
        }else{
          state.isUserLoggedIn = false;
        }
      },
      setUser(state,user){
        state.user=user;
      },
      onLogout(state){
        state.user= null;
        state.token =null;
      }
    },

    actions:{
      setToken({commit},token){
        commit('setToken',token);
      },
      setUser({commit},user){
        commit('setUser',user);
      },
      onLogout({commit}){
        commit('onLogout');
      }
    },
    getters:{
      user(state){
        return state.user;
      }
    }
});
