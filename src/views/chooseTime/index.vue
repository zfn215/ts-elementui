<!--
 * @Author: zhangfuning 401645191@qq.com
 * @Date: 2023-04-13 15:15:53
 * @LastEditors: zhangfuning 401645191@qq.com
 * @LastEditTime: 2023-04-18 11:36:18
 * @FilePath: /my-vue-app/src/views/chooseTime/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <m-chooseTime
      :startOptions="startOptions"
      @startChange="startChange"
      @endChange="endChange"
    ></m-chooseTime>
    <m-chooseDate
      @endChangeDate="endChangeDate"
      @startChangeDate="startChangeDate"
      :disabledTody="true"
    ></m-chooseDate>
  </div>
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
interface endTime {
  startTime: string;
  endTime: string;
}
interface endDateValue {
  startDate: Date;
  endDate: Date;
}
const data = reactive({});
let startChange = (val: string) => {
  console.log(val, "starttime");
};
let endChange = (val: endTime) => {
  console.log(val, "endtime");
};
let startChangeDate = (time: string) => {
  console.log("开始日期",time);
};
let endChangeDate = (time:endDateValue) => {
  console.log('结束日期',time)
};
let startOptions = {
  size: "small",
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
<style scoped lang="less"></style>
