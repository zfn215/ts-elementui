<!--
 * @Author: zhangfuning 401645191@qq.com
 * @Date: 2023-04-13 15:12:47
 * @LastEditors: zhangfuning 401645191@qq.com
 * @LastEditTime: 2023-04-17 14:32:27
 * @FilePath: /my-vue-app/src/components/chooseTime/src/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <!-- 子组件接收父组件的属性 -->
  <div style="display: flex" v-bind="$attrs">
    <el-time-select
      v-model="startTime"
      :max-time="endTime"
      class="mr-4"
      :placeholder="startPlaceholder"
      :start="startTimeStart"
      :step="startStep"
      v-bind="$attrs.startOptions"
      :end="startTimeEnd"
    />
    <el-time-select
      v-model="endTime"
      :disabled="endTimeDisabled"
      :min-time="startTime"
      :placeholder="endPdaceholder"
      :start="endTimeStart"
      :step="endStep"
      v-bind="$attrs.endOptions"
      :end="endTimeEnd"
    />
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
  watch,
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
const data = reactive({});
// 开始时间
let startTime = ref<string>("");
// 结束时间
let endTime = ref<string>("");
let endTimeDisabled = ref<boolean>(true);
let props = defineProps({
  startPlaceholder: {
    type: String,
    default: "请选择开始时间",
  },
  endPdaceholder: {
    type: String,
    default: "请选择结束时间",
  },
  // ** 开始时间的开始选择
  startTimeStart: {
    type: String,
    default: "08:00",
  },
  // 开始时间的步进
  startStep: {
    type: String,
    default: "00:30",
  },
  // 开始时间的结束选择
  startTimeEnd: {
    type: String,
    default: "24:00",
  },
  // ** 结束时间的开始选择
  endTimeStart: {
    type: String,
    default: "08:00",
  },
  // 结束时间的步进
  endStep: {
    type: String,
    default: "00:30",
  },
  // 结束时间的结束选择
  endTimeEnd: {
    type: String,
    default: "24:00",
  },
});
let emits = defineEmits(["startChange", "endChange"]);
// 监听开始时间
watch(
  () => startTime.value,
  (val) => {
    if (!val) {
      endTime.value = "";
      endTimeDisabled.value = true;
    } else {
      endTimeDisabled.value = false;
      // 父组件分发事件
      emits("startChange", val);
    }
  }
);
watch(
  () => endTime.value,
  (val) => {
    if (!val) {
      endTime.value = "";
    } else {
      // 父组件分发事件
      emits("endChange", {
        startTime:startTime.value,
        endTime: val
      });
    }
  }
);
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
