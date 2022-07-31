<!-- ::::组件基础

https://staging-cn.vuejs.org/guide/essentials/component-basics.html

::::知识点

1、如下示例

2、动态组件？？当使用 <component :is="..."> 来在多个组件间作切换时，组件会在被切换掉后卸载

3、


-->


<script>
import ButtonCounter from "./d15_ButtonCounter.vue";
import BlogPost from "./d15_BlogPost.vue";
import AlertBox from "./d15_AlertBox.vue";


export default {
  data() {
    return {
      posts: [
        { id: 1, title: "My journey with Vue" },
        { id: 2, title: "Blogging with Vue" },
        { id: 3, title: "Why Vue is so fun" }
      ],
      postFontSize: 1
    };
  },
  // ::::需要申明需要用的组件
  // ::::若要将导入的组件暴露给模板，我们需要在 components 选项上注册它。
  components: {
    ButtonCounter,
    BlogPost,
    AlertBox
  }
};
</script>

<template>
  <h1>Here is a child component!</h1>
  <ButtonCounter />
  <ButtonCounter />
  <ButtonCounter />

  <br />
  <!-- :::::::传递参数title -->
  <div :style="{ fontSize: postFontSize + 'em' }">
    <BlogPost
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      @enlarge-text="postFontSize += 0.1"
    ></BlogPost>
  </div>


  <!-- :::::::通过插槽来分配内容: slot -->
  <AlertBox>
    Something bad happened.
  </AlertBox>


</template>
