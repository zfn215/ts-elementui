<!--
 * @Author: zhangfuning 401645191@qq.com
 * @Date: 2023-03-16 19:39:35
 * @LastEditors: zhangfuning 401645191@qq.com
 * @LastEditTime: 2023-03-18 19:36:11
 * @FilePath: /my-vue-app/src/components/chooseicon/src/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <el-button type="primary" @click="handleClick"> 选择图标</el-button>
  </div>
  <el-dialog class="my-choose-icon-dialog-body-height" :title="title" v-model="dialogVisible">
   <div class="container">
    <div @click="clickItem(item)" class="item" v-for="(item,index) in Object.keys(ElementPlusIconsVue)" :key="index">
     <div class="text">
      <component  :is="`el-icon-${toLine(item)}`"></component>
     </div>
     <div class="icon" >{{ item }}</div>
    </div>
   </div> 
  </el-dialog>
</template>

<script setup lang="ts">
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import {
  ref,
  reactive,
  toRefs,
  onBeforeMount,
  onMounted,
  watch,
  watchEffect,
  computed,
} from "vue";
// import { useStore } from 'pinia';
import { useRoute, useRouter } from "vue-router";
import { toLine } from '../../../utils';
import { useCopy } from '../../../hooks/useCopy';
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
let props = defineProps<{
  title: string;
  visible: boolean;
}>();
const data = reactive({});
let emits = defineEmits(["update:visible"]);
let dialogVisible = ref<boolean>(false)
const handleClick = () => {
  emits("update:visible", !props.visible);
};
const clickItem = (item:string)=>{
  let text =`<el-icon-${toLine(item)}/>`
  useCopy(text)
  dialogVisible.value= false
}
// **监听visible的变化
watch(
  () => props.visible,
  (val) => {
    dialogVisible.value= val
  }
);
watch(
  () =>  dialogVisible.value,
  (val) => {
    emits("update:visible",  val);
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
<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  .item {
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    cursor: pointer;
    height: 70px;
  }
}
.text {
  font-size: 14px;
}
.icon {
 flex: 1;
}
svg {
  width: 2em;
  height: 2em;
}
</style>
