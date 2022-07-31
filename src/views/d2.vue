<!-- ::::选项式 API

832: 我们可以用包含多个选项的对象来描述组件的逻辑，
832: 例如 data、methods 和 mounted。选项所定义的属性都会暴露在函数内部的 this 上，它会指向当前的组件实例
 -->

<script>
export default {
  // data() 返回的属性将会成为响应式的状态
  // 并且暴露在 `this` 上
  data() {
    return {
      count: 0
    };
  },

  // methods 是一些用来更改状态与触发更新的函数
  // 它们可以在模板中作为事件监听器绑定
  methods: {
    increment() {
      this.count++;
    }
  },

  // 生命周期钩子会在组件生命周期的各个不同阶段被调用
  // 例如这个函数就会在组件挂载完成后被调用
  // 832: 生命周期函数
  mounted() {
    console.log(`The initial count is ${this.count}.`);
  }

};
</script>

<template>
  <button @click="increment">Count2 is: {{ count }}</button>
</template>
