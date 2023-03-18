<!--
 * @Author: zhangfuning 401645191@qq.com
 * @Date: 2023-03-13 17:26:18
 * @LastEditors: zhangfuning 401645191@qq.com
 * @LastEditTime: 2023-03-16 17:34:25
 * @FilePath: /my-vue-app/src/components/container/src/navSide/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        :collapse="collapse"
      >
        <el-menu-item index="1">
          <el-icon-menu></el-icon-menu>
          <template #title>首页</template>
        </el-menu-item>
        <el-menu-item index="2">
          <el-icon-menu></el-icon-menu>
          <template #title>图标选择器</template>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon-menu></el-icon-menu>
          <template #title>趋势标记</template>
        </el-menu-item>
      </el-menu>
</template>

<script setup lang='ts'>
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
// import { useState } from 'pinia';
import { useRoute, useRouter } from 'vue-router';
/**
* 仓库
*/
// const store = useState();
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
const props = defineProps<{
  collapse:boolean,
}
>()
const data = reactive({})
onBeforeMount(() => {
  //console.log('2.组件挂载页面之前执行----onBeforeMount')
})
onMounted(() => {
  //console.log('3.-组件挂载到页面之后执行-------onMounted')
})
watchEffect(()=>{
})
// 使用toRefs解构
// let { } = { ...toRefs(data) } 
defineExpose({
  ...toRefs(data)
})

</script>
<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}

</style>