<!--
 * @Author: zhangfuning 401645191@qq.com
 * @Date: 2023-03-10 10:51:44
 * @LastEditors: zhangfuning 401645191@qq.com
 * @LastEditTime: 2023-03-17 15:40:41
 * @FilePath: /my-vue-app/src/components/container/src/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-container>
    <el-aside width="auto">
        <nav-side v-model:collapse="isCollapse" ></nav-side>
    </el-aside>
    <el-container>
      <el-header>
        <nav-header v-model:collapse="isCollapse"></nav-header>
      </el-header>
      <el-main>
        <!-- layout的路由 -->
        <router-view></router-view>
      </el-main >
    </el-container>
  </el-container>
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
// import { useStore } from 'pinia';
import navHeader from './navHeader/index.vue';
import navSide from './navSide/index.vue';
import { useRoute, useRouter } from "vue-router";
/**
 * 仓库
 */
// const store = useStore();
/**
 * 路由对象
 */
const route = useRoute();
/**
 * 路由实例
 */
const router = useRouter();
//console.log('1-开始创建组件-setup')
/**
 * 数据部分
 */
const isCollapse = ref(false);
const data = reactive({});
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

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
  ...toRefs(data),
});
</script>
<style lang="scss">
.el-header {
  padding: 0;
  border-bottom: 1px solid #eee;
}
</style>

         