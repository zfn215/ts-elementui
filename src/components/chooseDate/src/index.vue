<!--
 * @Author: zhangfuning 401645191@qq.com
 * @Date: 2023-04-17 14:48:00
 * @LastEditors: zhangfuning 401645191@qq.com
 * @LastEditTime: 2023-04-18 11:38:51
 * @FilePath: /my-vue-app/src/components/chooseData/src/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div style="display: flex" v-bind="$attrs">
    <div style="margin-right: 40px">
      <el-date-picker
        v-model="startDate"
        type="date"
        :placeholder="startPlaceholder"
        :disabledDate="startDisabledDate"
        v-bind="$attrs.startOptions"
      />
    </div>
    <div>
      <el-date-picker
        v-model="endDate"
        type="date"
        :disabled="endDisabled"
        :placeholder="endPlaceholder"
        :disabledDate="endDisabledDate"
        v-bind="$attrs.endOptions"
      />
    </div>
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
  watch,
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
let props = defineProps({
  // 开始日期的占位符
  startPlaceholder: {
    type: String,
    default: "请选择开始日期",
  },
  // 结束日期的占位符
  endPlaceholder: {
    type: String,
    default: "请选择结束日期",
  },
  // 是否禁用选择今天之前的日期
  disabledTody: {
    type: Boolean,
    default: false,
  },
});
const data = reactive({});
let startDate = ref<Date | null>(null);
let endDate = ref<Date | null>(null);
// 控制结束日期的禁用状态
let endDisabled = ref<boolean>(true);
let emits = defineEmits(["startChangeDate", "endChangeDate"]);
// 禁用日期的函数
let startDisabledDate = (time: Date) => {
  if (props.disabledTody) {
    return time.getTime() < Date.now() - 1000 * 60 * 60 * 24;
  }
};
let endDisabledDate = (time: Date) => {
  if (startDate.value) {
    return time.getTime() < startDate.value.getTime() + 1000 * 60 * 60 * 24;
  }
};
watch(
  () => startDate.value,
  (val) => {
    if (!val) {
      endDisabled.value = true;
    } else {
      endDisabled.value = false;
      emits("startChangeDate", val);
    }
  }
);
watch(
  () => endDate.value,
  (val) => {
    if (val) {
      emits("endChangeDate", {
        startDate: startDate.value,
        endDate: val,
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
