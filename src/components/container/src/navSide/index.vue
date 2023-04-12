<!--
 * @Author: zhangfuning 401645191@qq.com
 * @Date: 2023-03-13 17:26:18
 * @LastEditors: zhangfuning 401645191@qq.com
 * @LastEditTime: 2023-04-12 16:19:23
 * @FilePath: /my-vue-app/src/components/container/src/navSide/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <m-menu :data="dataMenu"  router :defaultActive="$route.path"></m-menu>
</template>

<script setup lang="ts">
import {
  ref,
  reactive,
  toRefs,
  onBeforeMount,
  onMounted,
  watchEffect,
  computed,
} from "vue";
// import { useState } from 'pinia';
import { useRoute, useRouter } from "vue-router";
/**
 * 仓库
 */
// const store = useState();
let dataMenu = [
  {
    icon: "Lock",
    name: "首页",
    index: "/",
  },
  {
    icon: "Lock",
    name: "图标选择器",
    index: "/chooseIcon",
  },
  {
    icon: "Lock",
    name: "省市区选择",
    index: "/chooseArea",
  },
  {
    icon: "Lock",
    name: "趋势标记",
    index: "/notification",
  },
  {
    icon: "Lock",
    name: "时间选择",
    index: "/chooseTime",
  },
  {
    icon: "Lock",
    name: "通知菜单",
    index: "/notification",
  },
  {
    icon: "Lock",
    name: "导航菜单",
    index: "/menu",
  },
  {
    icon: "Lock",
    name: "城市选择",
    index: "/chooseCity",
  },
  {
    icon: "Lock",
    name: "进度条",
    index: "/progress",
  },
  {
    icon: "Lock",
    name: "日历",
    index: "/calendar",
  },
  {
    icon: "Lock",
    name: "form",
    index: "/form",
  },
  {
    icon: "Lock",
    name: "table",
    index: "/table",
  },
];
/**
 * 路由对象
 */
const route = useRoute();
/**
 * 路由实例
 */
// const router = useRouter();
//console.log('1-开始创建组件-setup')
/**
 * 数据部分
 */
const props = defineProps<{
  collapse: boolean;
}>();
// const data = reactive({});
onBeforeMount(() => {
  //console.log('2.组件挂载页面之前执行----onBeforeMount')
});
onMounted(() => {
  //console.log('3.-组件挂载到页面之后执行-------onMounted')
});
watchEffect(() => {});
// 使用toRefs解构
// let { } = { ...toRefs(data) }
defineExpose({
  // ...toRefs(data),
});
</script>
<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
