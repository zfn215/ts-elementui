<template>
  <div >
    <el-progress :percentage="p" v-bind="$attrs" ></el-progress>
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
let props = defineProps({
  // 进度条进度
  percentage:{
    type: Number,
    default: 0,
  },
  isAnimation:{
    type:Boolean,
    default: false
  },
  time:{
    type:Number,
    default:3000,
  }
})
const data = reactive({})
let p = ref(0);
onBeforeMount(() => {
  //console.log('2.组件挂载页面之前执行----onBeforeMount')
})
onMounted(() => {
  //console.log('3.-组件挂载到页面之后执行-------onMounted')
  if(props.isAnimation){
    let t = Math.ceil(props.time / props.percentage)
  let timer = setInterval(()=>{
      p.value += 1 
      // ** 如果大于等于传入的值  重新赋值。
      if(p.value>=props.percentage){
        p.value = props.percentage
        clearInterval(timer)
      }
    },t)
  }else{
    p.value = props.percentage
  }
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