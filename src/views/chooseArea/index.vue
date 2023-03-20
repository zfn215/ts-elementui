<!--
 * @Author: zhangfuning 401645191@qq.com
 * @Date: 2023-03-18 19:51:50
 * @LastEditors: zhangfuning 401645191@qq.com
 * @LastEditTime: 2023-03-20 17:33:55
 * @FilePath: /my-vue-app/src/views/chooseArea/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置:
-->
<template>
  <choose-area @change="changArea" ></choose-area>
</template>

<script setup lang='ts'>
// import chooseArea from '../../components/chooseArea/src/index.vue'
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
// import { useStore } from 'pinia';
import { useRoute, useRouter } from 'vue-router';
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
const changArea = (val: any)=>{
  console.log(val);
}
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
<style scoped lang='less'>
</style>