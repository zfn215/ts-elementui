<!--
 * @Author: zhangfuning 401645191@qq.com
 * @Date: 2023-03-17 13:52:33
 * @LastEditors: zhangfuning 401645191@qq.com
 * @LastEditTime: 2023-03-17 17:00:17
 * @FilePath: /my-vue-app/src/views/chooseicon/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div >
    <mchooseIcon  title="title"  v-model:visible="visible"></mchooseIcon>
  </div>
</template>

<script setup lang='ts'>
import mchooseIcon from '../../components/chooseicon/src/index.vue'
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
const data = reactive({})
const visible = ref<boolean>(false)
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