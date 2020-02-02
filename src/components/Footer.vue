<template>
  <div id="footer-vue">
    <p>
      {{time}}
      <a href="#">YP's Blog</a> - Hosted by
      <a href="#" style="font-weight: bold">Coding Pages</a>
    </p>
    <p>
      <a href="#">沪ICP备00000000号{{fooPro}}</a>
    </p>
  </div>
</template>
<script>
function getNowYear() {
    var now = new Date();
    return now.getFullYear(); //得到年份
}

export default {
    data() { //这里定义的时模板里"{{}}"需要获取的数据
        return {
            message: "hello world",
            time: getNowYear()
        }
    }
}
</script>