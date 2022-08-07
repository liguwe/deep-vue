<script>
/*************************************************
 * :::: 响应式基础:
 *    响应式对象其实是 JavaScript Proxy，其行为表现与一般对象相似。不同之处在于 Vue 能够跟踪对响应式对象属性的访问与更改操作
 *
 * https://staging-cn.vuejs.org/guide/essentials/reactivity-fundamentals.html#declaring-reactive-state
 ************************************************/

import { reactive } from "vue";

export default {
  // :::: `setup` 是一个专门用于组合式 API 的特殊钩子函数
  setup() {
    const state = reactive({ count: 0 });
    // 暴露 state 到模板
    return {
      state,
      increment,
    };

    function increment() {
      state.count++
    }
  }
};
</script>

<template>
  响应式基础

  <div>{{ state.count }}</div>

  <button @click="increment">
    点击添加：{{ state.count }}
  </button>
</template>

<style scoped>

</style>

