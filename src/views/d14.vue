<!-- :::: 模板 ref

https://staging-cn.vuejs.org/guide/essentials/template-refs.html#refs-inside-v-for
::::知识点
1、注意访问时，需要在生命周期mounted里，this.$refs.input.focus()
2、v-for遍历时，在数组里，this.$refs.items，但不能保证顺序
3、函数ref：<input :ref="(el) => { /* 将 el 分配给 property 或 ref */ }">

4、子组件上的ref访问，查看上面的链接


-->
