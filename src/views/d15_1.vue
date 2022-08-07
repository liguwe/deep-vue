<script setup>
import { ref } from "vue";
import ButtonCounter1 from "./d15_1_btn1.vue";

// ::::832? 为什么这个不行，使用模板字符串不行
import ButtonCounter2 from "./d15_1_btn2.js";

import BlogPost from "./d15_1_BlogPost.vue";




const posts = ref([
  { id: 1, title: "My journey with Vue" },
  { id: 2, title: "Blogging with Vue" },
  { id: 3, title: "Why Vue is so fun" }
]);
const postFontSize = ref(1);


</script>

<template>
  <h1>Here is a child component!</h1>
  ButtonCounter1:
  <ButtonCounter1 />
  ButtonCounte2:
  <button-counter2></button-counter2>
  <div :style="{ fontSize: postFontSize + 'em' }">

    <BlogPost title="My journey with Vue" @enlarge-text="postFontSize += 0.1" />
    <BlogPost title="Blogging with Vue" @enlarge-text="postFontSize += 0.1" />
    <BlogPost title="Why Vue is so fun" @enlarge-text="postFontSize += 0.1" />

    <br>
    ***************
    <br>

    <BlogPost
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      @enlarge-text="postFontSize += 0.1"
    ></BlogPost>

  </div>

</template>