<template>
<!-- 所有内容要被根结点包含起来 -->
    <div>
        <h2>{{msg}}</h2>
        <div id="container"></div>
    </div>
</template>


<style lang="scss" scoped>

/*scoped 局部作用域*/
h2{
    color:red
}
</style>
<script>
import { Line } from '@antv/g2plot';

export default {
    data(){
        return {
            msg:'这是首页组件',
        }
    },
   activated(){
       
   },
   mounted(){
       testAntv();
   }
}

function testAntv(){
 const data = [
        { year: '1991', value: 3 },
        { year: '1992', value: 4 },
        { year: '1993', value: 3.5 },
        { year: '1994', value: 5 },
        { year: '1995', value: 4.9 },
        { year: '1996', value: 6 },
        { year: '1997', value: 7 },
        { year: '1998', value: 9 },
        { year: '1999', value: 13 },
        ];

        const line = new Line('container', {
        data,
        xField: 'year',
        yField: 'value',
        });
        line.render();
}



</script>