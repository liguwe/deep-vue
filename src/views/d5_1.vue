<!-- ::::响应式基础 - 有状态方法
https://staging-cn.vuejs.org/guide/essentials/reactivity-fundamentals.html
 -->
<script>
import { debounce } from "lodash";

export default {

  created() {
    // ::::要保持每个组件实例的防抖函数都彼此独立，我们可以改为在 created 生命周期钩子中创建这个预置防抖的函数
    // 每个实例都有了自己的预置防抖的处理函数
    this.debouncedClick = debounce(this.click1, 500);
  },

  methods: {
    // 使用 Lodash 的防抖函数
    // :::: 这个预设防抖函数是有状态的：它在运行时维护着一个内部状态。
    //  :::: 如果多个组件实例都共享这同一个预置防抖的函数，那么它们之间将会互相影响。
    click: debounce(function() {
      // ... 对点击的响应 ...
    }, 500),

    click1() {
      //  对点击的响应
    }
  }

};
</script>

<template>

  <div :click="debouncedClick">click</div>

</template>
