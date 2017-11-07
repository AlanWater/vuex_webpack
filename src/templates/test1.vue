<template>
    <div class="parent">
        {{dateDesc}}
        <button class="btn1" @click="triggle">traggle</button>
        <button class="btn2" @click="change">change area</button>
        <button class="btn1" @click="startRun">startRun</button>
        <transition name="fade">
            <component :is="currentView">

            </component>
        </transition>
    </div>
</template>
<style scoped>
    @keyframes animate {
        0%{
            position:absolute;
            left:0;
            opacity:0;
        }
        100%{
            position:absolute;
            left:20px;
            opacity:1;
        }
    }
    @keyframes merge {
        0%{
            transform:scale(0);
        }
        50%{
            transform:scale(1.5);
        }
        100%{
            transform:scale(1);
        }
    }
    .parent{
        position:relative;
        width:200px;
        padding:10px 80px;
    }
    .fade{
        position:absolute;
        left:20px;
        color:#ddd;
    }
    .fade-enter-active{
        animation: merge 1s;
    }
    .fade-leave-active{
        animation: merge 1s reverse;
    }
    button.btn1{
        width:70px;
        height:20px;
    }
    button.btn2{
        width:130px;
        height:20px;
    }
</style>
<script>
    import Vue from 'vue';
    Vue.component(
        'text-area1',{
            data(){
                return {
                    text:{
                        a:1
                    }
                }
            },
            template:'<div>{{text.a}}</div>'
        }
    )
    Vue.component(
        'text-area2',{
            template:'<div>2</div>'
        }
    )
    export default{
        data(){
            return {
                text:{
                    a:1,
                    b:2
                },
                show:true,
                currentView:'text-area1',
                date:new Date(),
                dateDesc:new Date().toLocaleString()
            }
        },
        methods:{
            triggle(){
                this.show = !this.show;
            },
            change(){
                this.currentView = this.currentView==='text-area2'?'text-area1':'text-area2';
            },
            startRun(){
                this.date = new Date(this.date.getTime()+1000);
            }
        },
        created: function () {
            // `this` 指向 vm 实例
            console.log('a is: ' + this.a)
        },
        watch:{
            date:function(){
                this.dateDesc = this.date.toLocaleString();
                this.date = new Date(this.date.getTime()+1000);
            }
        }
    }
</script>