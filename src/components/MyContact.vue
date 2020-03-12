<template>
    <div @click="send()">
        <!-- contact-list non-style-list -->
        <ul class ="cont">
            <li>
                <b class ="twitter">TWITTER</b>: <a href="#">@{{myName}}</a>
            </li>
            <li>
                <b class ="weibo">微博</b>: <a href="#">@{{webName}}</a>
            </li>
            <li>
                <b class ="zhihu">知乎</b>: <a href="#">@{{webName}}</a>
            </li>
            <li>
                <b class ="github">GITHUB</b>:  <a href="https://github.com/">{{myName}}</a>
            </li>
            <li>
                <b class ="email">EMAIL</b>:  <a href="www.mingdao.com">randypriv at YP</a>
            </li>
        </ul>
    </div>
</template>
<script>
import event from '../model/event.js';
export default {
     data() {
            return {
                message: 'hello world two'
            }
        },
        directives: { //自定义局部指令，使用的时候，直接可以 <mycomponent v-focus><mycomponent>
            focus: {
                inserted(el) {

                    el.focus();

                }
            }
        },
        props:['myName','webName'], //接收夫组件传值，或传方法 都行。（还可验证传值的类型，不常用）
        methods:{
            send(){
                //向footer.vue 组件通信
                event.$emit('contact-on',this.myName);
            }
        }
}
</script>


 <style scoped>
 .cont{
     list-style-type: none;
margin: 30px 29% auto;
 }

</style>