<!--
 * @Author: zhangfuning 401645191@qq.com
 * @Date: 2023-03-24 17:32:05
 * @LastEditors: zhangfuning 401645191@qq.com
 * @LastEditTime: 2023-03-25 15:09:37
 * @FilePath: /my-vue-app/src/components/notification/src/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-popover
    placement="bottom"
    :width="300"
    trigger="click"
  >
  <template #default><slot></slot></template>
    <template #reference>
      <el-badge style="cursor: pointer;" :value="value" :max="max" :is-dot="isDot">
        <component :is="`el-icon-${toLine(icon)}`"></component>
      </el-badge>
    </template>
  </el-popover>
</template>

<script setup lang="ts">
import { DefaultProps } from "element-plus";
import { fa } from "element-plus/es/locale";
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
import { toLine } from "../../../utils";
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
// ** props
let props = defineProps({
  // ** 图标的组件化
  icon: {
    type: String,
    default: "Bell",
  },
  // ** 通知的数量
  value: {
    type: [String, Number],
    default: "",
  },
  // ** 通知数量的最大值
  max: {
    type: Number,
  },
  // ** 是否展示小圆点
  isDot: {
    type: Boolean,
    default: false,
  },
});
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
