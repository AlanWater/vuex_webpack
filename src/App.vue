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
                showStateDesc:'clickToShowStateDesc'
            }
        },
        components:{

        },
        methods:mapMutations([
            'showState1'
        ])
    }
</script>