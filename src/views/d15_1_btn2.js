import { ref } from "vue";

export default {



  //832 写到 script 标签里或者写到这里？？
  setup() {
    const count = ref(0);
    return { count };
  },
  // ::::跟 ng 很类似吧
  template: `
    <button @click="count++">
    You clicked me {{ count }} times.
    </button>`
  // ::::使用模板字符串
  // 或者 `template: '#my-template-element'`
};