<!-- ::::列表渲染
https://sfc.vuejs.org/#eNqNVEtvnDAQ/isjVIldZQGl7QmRKJHaSj20hyq3kAOLZ4MTsJFtdlOt9r93bGMgj0ZBK609j2++eXiO0XXfp/sBozwqdK14by5LwbteKgM3ksmfBjvYKdlBnGZBYB3iUgCUAp+cKcNdNbQGjlZaS/IXKIzO4TijnDZWySpTrdbeEEChGZQINwCBB2t/g08mhzh2HvYzJCS023CH2cV+nOVwPhk7B25aJIhvEkyDwLhuUDvO/vNk/gP1+U2om+oRQQ7GARpV6eajeF/exPslDw6qrQ5iiRSOd5MXVdm4MhLWVy90Vj5oh6aRzNbaqyrGfvsyznWmqA3XqStj2g+6WS1IWopOPcc5O1tQHgmPJlODgsFp/SzGwgIuqIdLvqWgX5FNg0YXmoy+rQzamyl2UnWwT6TI9bDtuEl7hXuapIsymtMqIzK2oEVbbbEFciI9xU1sfqS9ZgwqNzNF5kyCPRf9MPHeJ51k2HrXKakoqDl7BhrERLbGRrYMbdDv6X0KPxCZ62RdTf5ZCLkdjJHCUiqy8Ww1RWZT9cdh4mdDJZxKMnP0ya2sZgNcMHxa059/EDOr/BH/kpmVppwt5K53QeMus/JKYSf3QatT3be8xpULsoHzdbC8LLKJ2EjeUSZxaF60ifzSSLqqTx+0FLRQ3IiVo4LIThNaRrRA7L2MGmN6nWeZ3tV2qzzoVKr7jE6pGoThHaaou2Sr5EGjIuAyGgfTYWQk3KNKFBJnheo9zBemr3DDgFIqyz33bDG+3nal6ZWkaHAbu+rG/tUiza4T+hLHd+9Pvh1lPg7B8egfHJzGTTCOEFzV1J5H6tYni74K0NSmyz/u+GLAHOKyR6d/KP/cbw==
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

  <!-- ::::更多可参考示例： https://sfc.vuejs.org/#eNqNVEtvnDAQ/isjVIldZQGl7QmRKJHaSj20hyq3kAOLZ4MTsJFtdlOt9r93bGMgj0ZBK609j2++eXiO0XXfp/sBozwqdK14by5LwbteKgM3ksmfBjvYKdlBnGZBYB3iUgCUAp+cKcNdNbQGjlZaS/IXKIzO4TijnDZWySpTrdbeEEChGZQINwCBB2t/g08mhzh2HvYzJCS023CH2cV+nOVwPhk7B25aJIhvEkyDwLhuUDvO/vNk/gP1+U2om+oRQQ7GARpV6eajeF/exPslDw6qrQ5iiRSOd5MXVdm4MhLWVy90Vj5oh6aRzNbaqyrGfvsyznWmqA3XqStj2g+6WS1IWopOPcc5O1tQHgmPJlODgsFp/SzGwgIuqIdLvqWgX5FNg0YXmoy+rQzamyl2UnWwT6TI9bDtuEl7hXuapIsymtMqIzK2oEVbbbEFciI9xU1sfqS9ZgwqNzNF5kyCPRf9MPHeJ51k2HrXKakoqDl7BhrERLbGRrYMbdDv6X0KPxCZ62RdTf5ZCLkdjJHCUiqy8Ww1RWZT9cdh4mdDJZxKMnP0ya2sZgNcMHxa059/EDOr/BH/kpmVppwt5K53QeMus/JKYSf3QatT3be8xpULsoHzdbC8LLKJ2EjeUSZxaF60ifzSSLqqTx+0FLRQ3IiVo4LIThNaRrRA7L2MGmN6nWeZ3tV2qzzoVKr7jE6pGoThHaaou2Sr5EGjIuAyGgfTYWQk3KNKFBJnheo9zBemr3DDgFIqyz33bDG+3nal6ZWkaHAbu+rG/tUiza4T+hLHd+9Pvh1lPg7B8egfHJzGTTCOEFzV1J5H6tYni74K0NSmyz/u+GLAHOKyR6d/KP/cbw== -->
  <my-component
    v-for="(item, index) in items"
    :item="item"
    :index="index"
    :key="item.id"
  ></my-component>


</template>
