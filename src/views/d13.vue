<!-- :::: 侦听器
https://staging-cn.vuejs.org/guide/essentials/watchers.html

::::知识点

1、watchers用于监听状态的变化，运行“副作用”：例如更改 DOM，或者根据异步操作的结果，去修改另一处的状态
2、watch 选项也支持把键设置成用点号分隔的路径：some.nested.key'(newValue,oldQuestion) {}
3、深层侦听器，加deep属性
4、我们可以用一个对象来声明侦听器，这个对象有 handler 方法和 immediate: true 选项
5、如果想在侦听器回调中能访问被 Vue 更新之后的DOM，你需要指明 flush: 'post' 选项
6、也可以使用组件实例的 this.$watch() 方法来命令式地创建一个侦听器：
7、const unwatch = this.$watch('foo', callback) , 调用unwatch()停止watch

 -->

<script>
export default {
  data() {
    return {
      question: "",
      answer: "Questions usually contain a question mark. ;-)"
    };
  },
  watch: {
    // 每当 question 改变时，这个函数就会执行
    question(newQuestion, oldQuestion) {
      if (newQuestion.indexOf("?") > -1) {
        this.getAnswer();
      }
    }
  },
  methods: {
    async getAnswer() {
      this.answer = "Thinking...";
      try {
        const res = await fetch("https://yesno.wtf/api");
        this.answer = (await res.json()).answer;
      } catch (error) {
        this.answer = "Error! Could not reach the API. " + error;
      }
    }
  }
};
</script>

<template>
  <p>
    Ask a yes/no question:
    <input v-model="question" />
  </p>
  <p>question：{{ question }}</p>
  <p>answer：{{ answer }}</p>
</template>
