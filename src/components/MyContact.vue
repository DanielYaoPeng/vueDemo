<template>
    <div>
        <ul class ="contact-list non-style-list">
            <li>
                <b class ="twitter">TWITTER</b>: <a href="#">@DanielYao</a>
            </li>
            <li>
                <b class ="weibo">微博</b>: <a href="#">@DanielYao</a>
            </li>
            <li>
                <b class ="zhihu">知乎</b>: <a href="#" ></a>
            </li>
            <li>
                <b class ="github">GITHUB</b>:  <a href="https://github.com/">anjoy8</a>
            </li>
            <li>
                <b class ="email">EMAIL</b>:  <a href="www.mingdao.com">randypriv at YP</a>
            </li>
        </ul>
    </div>
</template>
<script>
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
        }
}
</script>