<template>
<!-- 所有内容要被根结点包含起来 -->
    <div>
        <h2>{{msg}}</h2>
    </div>
</template>
<style lang="scss" scoped>

/*scoped 局部作用域*/
h2{
    color:red
}
</style>
<script>
export default {
    data(){
        return {
            msg:'这是首页组件'
        }
    }
}
</script>