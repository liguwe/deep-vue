<!-- BlogPost.vue -->
<script>
export default {
  // :::: props 中声明，需要传递属性title
  props: ['title'],
  // ::::通过 emits 选项来选择性地声明需要抛出的事件
  emits: ['enlarge-text']
}
</script>

<template>
  <h6>{{ title }}</h6>
  <button @click="$emit('enlarge-text')">Enlarge text</button>
</template>
