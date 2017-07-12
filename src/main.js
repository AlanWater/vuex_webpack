/**
 * Created by shenyong on 2017/7/2.
 */
//main.js这是项目的核心文件。全局的配置都在这个文件里面配置
import Vue from 'vue'
import App from './App.vue'
import router from './routes/routes.js'
import Vuex from 'vuex'

var state = {
        state1:'state',
        count:0
    }


var mutations = {
    showState1(state){
        console.log(`pre state is ${state.state1}${state.count}`);
        state.count++;
        console.log(`curr state is ${state.state1}${state.count}`);
    }
    
}

var actions = { 
    showState1({ commit }){
        commit('showState1');
    }
}

Vue.use(Vuex);
console.log({
    state,
    mutations,
    actions
});
var store = new Vuex.Store({
    state,
    mutations,
    actions
})


console.log(store);


//import './assets/sass/reset.sass'//报错暂时不用sass
Vue.config.debug = true;//开启错误提示

new Vue({
    router,
    store,
    el: '#appIndex',
    render: h => h(App)
})
