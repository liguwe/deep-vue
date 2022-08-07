<script setup>
// ::::单文件组件
import { ref } from 'vue'

const count = ref(0)

</script>

<template>
  <button @click="count++">You clicked me {{ count }} times.</button>
</template>
