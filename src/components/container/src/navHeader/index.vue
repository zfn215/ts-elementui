<!--
 * @Author: zhangfuning 401645191@qq.com
 * @Date: 2023-03-13 17:26:09
 * @LastEditors: zhangfuning 401645191@qq.com
 * @LastEditTime: 2023-03-16 17:29:00
 * @FilePath: /my-vue-app/src/components/container/src/navHeader/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
      <div class="header">
        <span @click="toogle">
        <el-icon-expand  v-if="collapse" ></el-icon-expand>
        <el-icon-fold v-else ></el-icon-fold>
       </span>
      </div>
</template>

<script setup lang='ts'>
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
const props = defineProps<{
  collapse:boolean,
}
>()
const data = reactive({})
let emits = defineEmits(['update:collapse']);
const toogle = ()=>{
    // ** 修改父值
    emits('update:collapse',!props.collapse)
}
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
<style  lang='scss'>
.header {
  height: 60px;
  padding: 0 20px;
  display: flex;
  align-items: center;
}
</style>