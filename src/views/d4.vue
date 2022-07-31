<!-- ::::模板语法
告诉 Vue 需要在编译时进行转换，来减少使用组合式 API 时的样板代码
https://staging-cn.vuejs.org/guide/essentials/template-syntax.html
 -->
<script>
export default {
  data() {
    return {
      msg: "msg value",
      rawHtml: `<span style="color: red">This should be red.</span>`,
      dynamicId: "dynamicId1111",
      isButtonDisabled: true,
      objectOfAttrs: {
        id: "container",
        class: "wrapper"
      },
      number: 20,
      ok: true,
      message: "message",
      id: "2323",
      date: "2021-11-11",
      seen:true,
      url:'http://localhost',
      attributeName:'className',
      someAttr:'AbcDefGhg'
    };
  },

  methods: {
    toTitleDate: (date) => {
      return new Date(date).toLocaleString();
    },

    formatDate: (date) => {
      return new Date(date).getFullYear();
    },

    doSomething:  () => {
      console.log('doSomething');
    },

    onSubmit:()=>{
      console.log('onSubmit');
    }
  }
};
</script>

<template>

  <!-- ::::文本插值，大括号 -->
  <span>Message: {{ msg }}</span>


  <!-- ::::原始 HTML  v-html -->
  <p>Using text interpolation: {{ rawHtml }}</p>
  <p>Using v-html directive: <span v-html="rawHtml"></span></p>



  <!-- ::::Attribute 绑定 -->
  <div v-bind:id="dynamicId"></div>
  <!-- ::::简写attr -->
  <div :id="dynamicId"></div>
  <!-- ::::布尔型 Attribute  disabled -->
  <button :disabled="isButtonDisabled">Button</button>
  <!-- ::::动态绑定多个attr -->
  <div v-bind="objectOfAttrs"></div>


  <!-- ::::使用 JavaScript 表达式 -->
  <!-- ::::Vue 实际上在所有的数据绑定中都支持完整的 JavaScript 表达式 -->
  {{ number + 1 }}
  {{ ok ? "YES" : "NO" }}
  {{ message.split("").reverse().join("") }}
  <div :id="`list-${id}`"></div>


  <!-- ::::可以在绑定的表达式中使用一个组件暴露的方法： -->
  <!-- ::::绑定在表达式中的方法在组件每次更新时都会被重新调用，因此不应该产生任何副作用，比如改变数据或触发异步操作。 -->
  <span :title="toTitleDate(date)">{{ formatDate(date) }}</span>
  <!--  ::::受限的全局访问#-->
  <!--  ::::模板中的表达式将被沙盒化，仅仅提供有限的全局对象列表访问权限，可见https://github.com/vuejs/core/blob/main/packages/shared/src/globalsWhitelist.ts#L3-->


  <!-- ::::指令 v-if -->
  <p v-if="seen">Now you see me</p>


  <!-- ::::指令 v-bind: -->
  <a v-bind:href="url"> ... </a>
  <!-- 简写 -->
  <a :href="url"> ... </a>

  <!-- ::::v-on -->
  <a v-on:click="doSomething"> bind click event </a>
  <!-- 简写 -->
  <a @click="doSomething"> bind click event </a>


  <!-- ::::动态参数 -->
  <a v-bind:[attributeName]="url"> ... </a>

  <!-- 简写 -->
  <a :[attributeName]="url"> ... </a>

  <!-- ::::浏览器会强制将其转换为小写 -->
  <a :[someAttr]="url"> ... </a>


  <!-- ::::修饰符 -->
  <!-- ::::.prevent 修饰符会告知 v-on 指令对触发的事件调用 event.preventDefault()： -->
  <form @submit.prevent="onSubmit">...</form>


</template>
