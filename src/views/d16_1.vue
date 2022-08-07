<script setup>
/*************************************************
 *
 *  https://staging-cn.vuejs.org/guide/essentials/reactivity-fundamentals.html#dom-update-timing
 * ::::响应式基础
 *    1、如上，可使用使用setup大大简化代码！！！
 *      <script setup> 中的顶层的导入和变量声明可在同一组件的模板中直接使用
 *      你可以理解为模版中的表达式和 <scrip setup> 中的代码处在同一个作用域中
 *
 *    2、等待一个状态改变后的 DOM 更新完成之后的时机完成：nextTick()
 *
 *    3、深层响应性，默认reactive引用都是深层次响应的 ， 你你也可以直接创建一个浅层响应式对象 ===》  shallowReactive
 *
 *    4、响应式代理 vs. 原始对象 : 使用 Vue 的响应式系统的最佳实践是 仅使用你声明对象的代理版本。
 *
 *    5、
 ************************************************/

import { reactive } from 'vue'
const state = reactive({ count: 0 })
const raw = {}
const proxy = reactive(raw)

console.log(proxy);

// 代理对象和原始对象不是全等的
console.log(proxy === raw) // false

// 在同一个对象上调用 reactive() 会返回相同的代理
console.log(reactive(raw) === proxy) // true

// 在一个代理上调用 reactive() 会返回它自己
console.log(reactive(proxy) === proxy) // true


// ::::这个规则对嵌套对象也适用。依靠深层响应性，响应式对象内的嵌套对象依然是代理
proxy.nested = raw

console.log(proxy.nested === raw) // false






function increment() {
  state.count++
}
</script>

<template>
  <button @click="increment">
    {{ state.count }}
  </button>
</template>

<style scoped>

</style>

