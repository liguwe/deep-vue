<!-- ::::最简单的Demo
1、https://staging-cn.vuejs.org/guide/introduction.html
 -->
<script>
export default {
  data() {
    return {
      count: 0
    };
  }
};
</script>

<template>
  <button @click="count++">Count is: {{ count }}</button>
</template>

<!-- 832？scope代表什么？ -->
<style scoped>
button {
  font-weight: bold;
}
</style>
