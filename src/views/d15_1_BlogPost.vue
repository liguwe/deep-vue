<!-- BlogPost.vue -->
<script setup>
// ::::需要使用defineProps 是一个仅 <script setup> 中可用的编译宏命令，并不需要显式地导入
// ::::声明的 props 会自动暴露给模板
defineProps(["title"]);

// ::::我们可以通过 defineEmits 宏来声明需要抛出的事件：
defineEmits(['enlarge-text'])

</script>

<template>
  <h4>{{ title }}</h4>
  <button @click="$emit('enlarge-text')">Enlarge text</button>

</template>