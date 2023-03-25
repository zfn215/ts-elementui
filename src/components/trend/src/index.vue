<template>
  <div class="trend">
    <div class="text" :style="{ color: textColor }">
      <!-- 有插槽会先显示插槽 -->
      <slot v-if="slots.default"></slot>
      <div v-else>{{ text }}</div>
    </div>
    <div class="icon">
      <!-- <el-icon-arrowup
        :style="{ color: !reverseColor ? upIconColor : '#52c41a' }"
        v-if="type === 'up'"
      >
      </el-icon-arrowup>
      <el-icon-arrowdown
        :style="{ color: !reverseColor ? downIconColor : 'red' }"
        v-else
      ></el-icon-arrowdown> -->
      <component
      :style="{ color: !reverseColor ? upIconColor : '#52c41a' }"
        v-if="type === 'up'"
        :is="`el-icon-${toLine(upIcon)}`"
      ></component>
      <component
      :style="{ color: !reverseColor ? downIconColor : 'red' }"
        v-else
        :is="`el-icon-${toLine(downIcon)}`"
      ></component>
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
  computed,
  useSlots,
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
let slots = useSlots();
let textColor = computed(() => {
  return props.type === "up" ? props.upTextColor : props.downTextColor;
});
let props = defineProps({
  // 表示当前是上升还是下降
  type: {
    type: String,
    default: "up",
  },
  // 父组件传过来的值 插槽表示
  text: {
    type: String,
    default: "文字",
  },
  // 上升趋势的图标
  upIcon: {
    type: String,
    default: "ArrowUp",
  },
  downIcon: {
    type: String,
    default: "ArrowDown",
  },
  // 上升趋势图标颜色
  upIconColor: {
    type: String,
    default: "red",
  },
  // 下降趋势图标颜色
  downIconColor: {
    type: String,
    default: "green",
  },
  // 上升趋势文字颜色
  upTextColor: {
    type: String,
    default: "red",
  },
  // 下降趋势文字颜色
  downTextColor: {
    type: String,
    default: "yellow",
  },
  // ** 颜色反转 只在默认的颜色下生效 如果使用了自定义颜色 属性就不生效了
  reverseColor: {
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
<style scoped lang="scss">
.trend {
  display: flex;
  align-items: center;
  .text {
    font-size: 12px;
    margin-right: 4px;
  }
  .icon {
    svg {
      width: 1em;
      height: 1em;
    }
  }
}
</style>
