<template>
    <div id="app">
        <div>{{myfirstVue}}</div>
        <div v-on:click="showState1">{{showStateDesc}}</div>
        <router-link to="/test1">{{toFirstVue}}</router-link>
        <router-link to="/test2">{{toSecondVue}}</router-link>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    import {mapMutations} from 'vuex'
    export default{
        name:'app',
        data(){
            return {
                myfirstVue:'hellow vue1234!',
                toFirstVue:'toFirstVue donts',
                toSecondVue:'toSecondVue',
                showStateDesc:'clickToShowStateDesc',
                test:{
                    a:2
                }
            }
        },
        components:{

        },
        methods:mapMutations([
            'showState1'
        ]),
        created: function () {
            // `this` 指向 vm 实例
            console.log('app in: ' + this.a)
        }
    }
</script>