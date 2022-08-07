<script setup="">
/*************************************************
 *
 * https://staging-cn.vuejs.org/guide/components/props.html#prop-passing-details
 * ::::props
 *
 *    1、一个组件需要显式声明它所接受的 props，这样 Vue 才能知道外部传入的哪些是 props，
 *        哪些是透传 attribute
 *
 *    2、<script setup> 的单文件组件中，props 可以使用 defineProps() 宏来声明
 *
 *    3、没有使用 <script setup> 的组件中，prop 可以使用 props 选项来声明
 *
 *    4、可以使用 props ts 类型声明
 *
 *
 ************************************************/
</script>


<script setup lang="ts">
  //6、 ::::TypeScript 使用 <script setup>，也可以使用类型标注来声明 props,如下：
  defineProps<{
    title?: string
    likes?: number
  }>()
</script>


<script setup="">


</script>

<!-- ::::7、动态 Prop -->
<template>

  <!-- 根据一个变量的值动态传入 -->
  <BlogPost :title="post.title" />

  <!-- 根据一个更复杂表达式的值动态传入 -->
  <BlogPost :title="post.title + ' by ' + post.author.name" />
</template>

<!-- ::::

1、

-->

<script setup="">
/*************************************************
 * ::::8、遵循单行数据流，不要去更改 props,但下面有两种情形需要更改的处理方式？
 ************************************************/

// :::: prop 被用于传入初始值；而子组件想在之后将其作为一个局部数据属性。
//      在这种情况下，最好是新定义一个局部数据属性，从 props 上获取初始值即可

const props = defineProps(['initialCounter'])

// 计数器只是将 props.initialCounter 作为初始值
// 像下面这样做就使 prop 和后续更新无关了
const counter = ref(props.initialCounter)

// :::: prop 值做进一步的转换。在这种情况中，最好是基于该 prop 值定义一个计算属性：

const props = defineProps(['size'])

// 该 prop 变更时计算属性也会自动更新
const normalizedSize = computed(() => props.size.trim().toLowerCase())

</script>


<!-- ::::不要去更改 更改对象 / 数组类型的 props，会导致问题！！！！ -->

<!-- ::::defineProps() 宏提供一个带有 props 校验选项的对象，一般会通过构造函数类型来检测

 ::::是运行时检测！！！！，也可以是自定义的比如 Person 类

 -->
