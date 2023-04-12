<!--
 * @Author: zhangfuning 401645191@qq.com
 * @Date: 2023-03-30 14:48:18
 * @LastEditors: zhangfuning 401645191@qq.com
 * @LastEditTime: 2023-04-12 17:05:26
 * @FilePath: /my-vue-app/src/components/menu/src/idnex.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <el-menu :default-active="defaultActive"   v-bind="$attrs" :router="router" >
      <template v-for="(item, index) in data" :key="index">
        <el-menu-item :index="item.index" v-if="!item.children || !item.children.length">
          <component
            v-if="item.icon"
            :is="`el-icon-${toLine(item.icon)}`"
          ></component>
          <span>{{ item.name }}</span>
        </el-menu-item>
        <el-sub-menu :index="item.index" v-if="item.children&&item.children.length" >
          <template #title>
            <component
            v-if="item.icon"
            :is="`el-icon-${toLine(item.icon)}`"
          ></component>
          <span>{{ item.name }}</span>
          </template>
          <el-menu-item  :index="item.index" v-for="(item1, index1) in item.children" :key="index1" >
          <component
          v-if="item1.icon"
            :is="`el-icon-${toLine(item1.icon)}`"
          ></component>
          <span>{{ item1.name }}</span>
        </el-menu-item>
        </el-sub-menu>
      </template>
    </el-menu>
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
  PropType,
} from "vue";
// import { useStore } from 'pinia';
import { MenuItem } from "./types";
// import { useRoute } from "vue-router";
import { toLine } from "../../../utils";
/**
 * 仓库
 */
// const store = useStore();
/**
 * 路由对象
 */
// const route = useRoute();
/**
 * 路由实例
 */
// const router = useRouter();
//console.log('1-开始创建组件-setup')
/**
 * 数据部分
 */
// const data = reactive({});
let props = defineProps({
  data: {
    type: Array as PropType<any[]>,
    required: true
  },
  defaultActive:{
    type:String,
    default:''
  },
  router:{
    type:Boolean,
    default:false
  }
});
// console.log(props.data)
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
  // ...toRefs(data),
});
</script>
<style scoped lang="scss">
svg {
  margin-right: 4px;
  width: 1em;
  height: 1em;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
