<!--
 * @Author: zhangfuning 401645191@qq.com
 * @Date: 2023-03-20 19:59:15
 * @LastEditors: zhangfuning 401645191@qq.com
 * @LastEditTime: 2023-03-24 14:57:59
 * @FilePath: /my-vue-app/src/views/trend/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
 <div>
   <!-- <div class="flex">
    <m-trend text="销售额" ></m-trend>
    <m-trend text="营业额" type="down" ></m-trend>
   </div> -->
   <br/>
   <!-- <div class="flex">
    <m-trend text="销售额" upIconColor="red"></m-trend>
    <m-trend text="营业额" downIconColor="'#123456'"  reverseColor  type="down" ></m-trend>
   </div> -->
   <!-- <div class="flex">
    <m-trend text="销售额" upIconColor="red"></m-trend>
    <m-trend text="营业额" downIconColor="'#123456'"  reverseColor  type="down" ></m-trend>
   </div> -->
   <m-trend upIcon="plus">营业额</m-trend>
   <m-trend type="down" upIcon="plus">营业额</m-trend>
 </div>
</template>

<script setup lang='ts'>
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
// import { useStore } from 'pinia';
import { useRoute, useRouter } from 'vue-router';
// import trend from '../../components/trend';
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
<style scoped lang='scss'>
.flex {
  display: flex;
  div {
    margin-right: 10px;
  }
}
</style>