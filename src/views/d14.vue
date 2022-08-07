<script setup>

/*************************************************
 *  https://staging-cn.vuejs.org/guide/essentials/template-refs.html#refs-inside-v-for
 * ::::知识点
 *
 *  1、注意访问时，需要在生命周期mounted里，this.$refs.input.focus()
 *
 *  2、v-for遍历时，在数组里，this.$refs.items，但不能保证顺序
 *
 *  3、函数ref
 *
 *  4、子组件上的ref访问，查看上面的链接
 *
 ************************************************/
import { ref, onMounted, watchEffect } from "vue";

import Child from './d14_child.vue'
const child = ref(null)

// 声明一个 ref 来存放该元素的引用
// 必须和模板里的 ref 同名
// ::::如果不使用 <script setup>，需确保从 setup() 返回 ref
const input = ref(null);

const list = ref([
  'list1',
  'list2',
  'list3',
  'list4',
])

const itemRefs = ref([])


onMounted(() => {
  input.value.focus();
  console.log(itemRefs.value)
  // // child.value 是 <Child /> 组件的实例
  console.log(child.value);
});

watchEffect(() => {
  // ::::这是因为在初次渲染前这个元素还不存在呢,需要容错
  if (input.value) {
    input.value.focus();
  } else {
    // 此时还未挂载，或此元素已经被卸载（例如通过 v-if 控制）
  }
});

</script>

<template>
  <input ref="input" />

  <ul>
    <li v-for="item in list" :key="item"  ref="itemRefs">
      {{ item }}
    </li>
  </ul>

  <Child ref="child" />
</template>