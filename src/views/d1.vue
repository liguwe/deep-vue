<!-- ::::最简单的Demo
https://staging-cn.vuejs.org/guide/introduction.html
https://v3.cn.vuejs.org/guide/introduction.html#%E5%A3%B0%E6%98%8E%E5%BC%8F%E6%B8%B2%E6%9F%93
 -->
<script>
export default {
  data() {
    return {
      count: 0,
      // ::::不会实时变化，出初始化的时刻即可
      message: "You loaded this page on " + new Date().toLocaleString()
    };
  }
};
</script>

<template>
  <button @click="count++">点击加1</button>
  <span>Count is: {{ count }}</span>

  <div id="bind-attribute">
  <span v-bind:title="message">
    鼠标悬停几秒钟查看此处动态绑定的提示信息！
  </span>
  </div>

</template>

<!-- 832？scope代表什么？ -->
<style scoped>
button {
  font-weight: bold;
}
</style>
