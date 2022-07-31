<!-- ::::列表渲染
https://staging-cn.vuejs.org/guide/essentials/list.html
 -->
<script>
export default {
  data() {
    return {
      // ::::遍历数组
      items: [{ message: "Foo" }, { message: "Bar" }],
      // ::::遍历对象
      myObject: {
        title: "How to do lists in Vue",
        author: "Jane Doe",
        publishedAt: "2016-04-10"
      },
      todos: [
        {
          isComplete: true,
          name: "todo1"
        },
        {
          isComplete: false,
          name: "todo2"
        }
      ]
    };
  }
};
</script>
<template>

  <!-- ::::v-for in 数组 -->
  <div v-for="(item, index) in items" :key="index">
    {{ index }} - {{ item.message }}
  </div>
  <br />


  <!-- ::::v-for of 数组 -->
  <div v-for="item of items" :key="item.message">
    {{ item.message }}
  </div>
  <br />

  <!-- ::::遍历对象 in -->
  <div v-for="(value, key, index) in myObject" :key="key">
    {{ index }}. {{ key }}: {{ value }}
  </div>
  <br />


  <!-- ::::在 v-for 里使用值范围 -->
  <div v-for="n in 10" :key="n">{{ n }}</div>
  <br />


  <!-- ::::同时使用 v-if 和 v-for 是不推荐的，因为这样二者的优先级不明显 -->
  <!-- ::::在外新包装一层 <template> 再在其上使用 v-for 可以解决这个问题 -->
  <template v-for="todo in todos">
    <li v-if="!todo.isComplete" :key="todo.name">
      {{ todo.name }}
    </li>
  </template>
  <br />


  <my-component v-for="item in items" :key="item.id"></my-component>
  <!-- ::::上面的代码不会自动将任何数据传递给组件，因为组件有自己独立的作用域。
       ::::如下：为了将迭代后的数据传递到组件中，我们还是应该使用 prop -->
  <my-component
    v-for="(item, index) in items"
    :item="item"
    :index="index"
    :key="item.id"
  ></my-component>


</template>
