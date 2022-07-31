<template>
  <div class="alert-box">
    <strong>Error!</strong>
    <br/>
    <!-- :::: 填充传入进来的内容，slot -->
    <!-- :::: <slot> 作为一个占位符，之后的内容就会放在这里 -->
    <slot />
  </div>
</template>

<!-- ::::???scope -->
<style scoped>
.alert-box {
  color: #666;
  border: 1px solid red;
  border-radius: 4px;
  padding: 20px;
  background-color: #f8f8f8;
}

strong {
  color: red;
}
</style>
