<!-- ::::表单输入绑定 v-model
https://staging-cn.vuejs.org/guide/essentials/forms.html

::::知识点

1、修饰符：
  `<input v-model.trim="msg" />
   <input v-model.number="age" />
   <input v-model.lazy="msg" />`

2、



 -->
<script>
export default {
  data() {
    return {
      toggle:true
    };
  },
}
</script>
<!-- 832? ::::还是没太明白这里是干嘛的？？？ -->
<template>
  <input
    type="checkbox"
    v-model="toggle"
    :true-value="yes"
    :false-value="no"
  />
</template>
