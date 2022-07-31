<!-- ::::响应式基础
https://staging-cn.vuejs.org/guide/essentials/reactivity-fundamentals.html
 -->
<script>
export default {
  data() {
    return {
      count: 1,
      obj: {
        nested: { count: 0 },
        arr: ["foo", "bar"]
      }
    };
  },

  // :::: Vue 自动为 methods 中的方法绑定了永远指向组件实例的 this
  // :::: 所以，不要在methods绑定箭头函数 ！！！
  methods: {
    mutateDeeply() {
      // 以下都会按照期望工作
      this.obj.nested.count++
      this.obj.arr.push('baz')
    }
  },


  mounted() {
    // `this` 指向当前组件实例
    console.log(this.count); // => 1


    setTimeout(() => {
      // ::::数据属性也可以被更改
      this.count = 2;
      // 深层响应性
      this.mutateDeeply();
    }, 1000);

  }
};
</script>

<template>

  <div>count:{{ count }}</div>

  <pre>{{JSON.stringify(obj)}}</pre>

</template>
