import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
    strict:true,
    plugins:[
      createPersistedState()
    ],
  //Modifying a state only through an action or a mutation.
    state:{
      token:null,
      user:null,
      isUserLoggedIn:false,
      error:null,
      isBookmarked:false
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
      },
      setBookMarked(state,payload){
        if(payload.length>0){
          state.isBookmarked= true;
        }else{
          state.isBookmarked = false;
        }

      },
      unsetBookmark(state){
        state.isBookmarked=false;
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
      },
      onSetBookMark({commit}){
        commit('setBookMarked');
      },
      unsetBookmark({commit}){
        commit('unsetBookmark');
      }

    },
    getters:{
      user(state){
        return state.user;
      },
      bookmark(state){
        return state.isBookmarked;
      }
    }
});
