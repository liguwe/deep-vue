<script setup>
import { ref ,defineExpose} from 'vue'

const a = 1
const b = ref(2)
const c = 'c'

// ::::使用了 <script setup> 的组件是默认私有的：一个父组件无法访问到一个使用了 <script setup> 的子组件中的任何东西，
//  ::::除非子组件在其中通过 defineExpose 宏显式暴露：
defineExpose({
  a,
  b
})

</script>

<template>
  <div>child com</div>
</template>