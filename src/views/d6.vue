<!-- ::::计算属性
https://staging-cn.vuejs.org/guide/essentials/computed.html
 -->
<script>

export default {
  data() {
    return {
      author: {
        name: "John Doe",
        books: [
          "Vue 2 - Advanced Guide",
          "Vue 3 - Basic Guide",
          "Vue 4 - The Mystery"
        ]
      },
      firstName: 'John',
      lastName: 'Doe'
    };
  },

  methods: {
    // :::: 若我们将同样的函数定义为一个方法而不是计算属性，两种方式在结果上确实是完全相同的
    // :::: 然而，不同之处在于
    //  1、计算属性值会基于其响应式依赖被缓存。一个计算属性仅会在其响应式依赖更新时才重新计算
    //  2、方法调用总是会在重渲染发生时再次执行函数。
    calculateBooksMessage() {
      return this.author.books.length > 0 ? "Yes" : "No";
    }
  },

  // ::::计算属性
  // <!-- ::::原则1：计算函数不应有副作用 -->
  // <!-- ::::原则2：避免直接修改计算属性值，。可以把它看作是一个“临时快照” -->
  computed: {
    // 一个计算属性的 getter
    // ::::响应式依赖，它依赖于books属性
    publishedBooksMessage() {
      // `this` 指向当前组件实例
      return this.author.books.length > 0 ? "Yes" : "No";
    },

    // ::::意味着下面的计算属性永远不会更新，因为 Date.now() 并不是一个响应式依赖
    //  它不依赖于任何响应式属性
    now() {
      return Date.now();
    },


    // ::::计算属性默认仅能通过计算函数得出结果。当你尝试修改一个计算属性时，你会收到一个运行时警告。
    // ::::只在某些特殊场景中你可能才需要用到“可写”的属性，你可以通过同时提供 getter 和 setter 来创建
    fullName: {
      // getter
      get() {
        return this.firstName + ' ' + this.lastName
      },
      // setter
      set(newValue) {
        // 注意：我们这里使用的是解构赋值语法
        [this.firstName, this.lastName] = newValue.split(' ')
      }
    }

  },

  mounted() {
    setTimeout(() => {
      this.author.books = [];
      this.fullName = 'li guangwei'
    }, 1000);
  }

};
</script>

<template>

  <p>Has published books:</p>
  <span>{{ author.books.length > 0 ? "Yes" : "No" }}</span>


  <p>Has published books:</p>
  <span>{{ publishedBooksMessage }}</span>


  <p>calculateBooksMessage：{{ calculateBooksMessage() }}</p>

  <pre>{{ now }}</pre>

  <pre>
   fullName: {{fullName}}
  </pre>



</template>
