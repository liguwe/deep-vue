
<script setup>
/*************************************************
 * ::::::::侦听器
 * https://staging-cn.vuejs.org/guide/essentials/watchers.html
 *
 * ::::知识点
 *    1、watch 的第一个参数可以是不同形式的“数据源”：它可以是一个 ref (包括计算属性)、一个响应式对象、一个 getter 函数、或多个数据源组成的数组
 *
 *    2、注意：你不能直接侦听响应式对象的属性值，可以使用 getter 函数来包装
 *
 *    3、直接给 watch() 传入一个响应式对象，会隐式地创建一个深层侦听器，
 *        ::::默认是 watch
 *        ::::而使用 getter 只有在返回不同的对象时，才会触发回调
 *        ::::可以子显式地加上 deep 选项参数，强制转成深层侦听器
 *
 *    4、watch() 是懒执行的，可使用watchEffect() 来初始化，两者的区别在于
 *        1、watch 只追踪明确侦听的数据源。它不会追踪任何在回调中访问到的东西。另外，仅在数据源确实改变时才会触发回调。watch 会避免在发生副作用时追踪依赖，
 *          因此，我们能更加精确地控制回调函数的触发时机。
 *        2、watchEffect，则会在副作用发生期间追踪依赖。它会在同步执行过程中， ::::自动追踪所有能访问到的响应式属性。
 *          这更方便，而且代码往往更简洁，::::但有时其响应性依赖关系会不那么明确。
 *
*      5、默认情况下，用户创建的侦听器回调，都会在 Vue 组件更新之前被调用。这意味着你在侦听器回调中访问的 DOM 将是被 Vue 更新之前的状态。
 *        可以指定参数 ::::flush:'post' 来保证 vue dom 更新完成才执行，也可以使用 ::::watchPostEffect 来指定
 *
 *     6、同步调用 watch, 会在宿主组件卸载时自动停止，如果异步调用，则需要手动执行返回的手柄，::::类似于settimeout
 *        ::::尽量还是使不用使用异步创建 watch
 *
 ************************************************/

import { ref, watch, reactive } from "vue";

const x = ref(0);
const y = ref(0);

// 单个 ref
watch(x, (newX) => {
  console.log(`x is ${newX}`);
});

// getter 函数
watch(
  () => x.value + y.value,
  (sum) => {
    console.log(`sum of x + y is: ${sum}`);
  }
);

// 多个来源组成的数组
watch([x, () => y.value], ([newX, newY]) => {
  console.log(`x is ${newX} and y is ${newY}`);
});

// ::::过1s后，变更 x/y，之后就会执行 watch 里的内容
setTimeout(() => {
  x.value = 3;
  y.value = 3;
}, 1000);


////////************/
const obj = reactive({ count: 0 });

// ::::错误，因为 watch() 得到的参数是一个 number
watch(obj.count, (count) => {
  console.log(`count is: ${count}`);
});
// ::::可以提供一个 getter 函数
watch(
  () => obj.count,
  (count) => {
    console.log(`count is: ${count}`)
  }
)

setTimeout(() => {
  obj.count = 3;
}, 1000);


</script>

<template>
  <div>watch</div>
</template>
