<template>
  <div class="list-tabs__item">
    <el-tabs>
      <el-tab-pane
        v-for="(item, index) in list"
        :key="index"
        :label="item.title"
      >
        <el-scrollbar max-height="300px">
          <div
            class="container"
            v-for="(item1, index1) in item.content"
            :key="index1"
            @click="clickItem(item1,index1)"
          >
            <div class="avatar" v-if="item1.avatar">
              <el-avatar size="small" :src="item1.avatar" />
            </div>
            <div class="content">
              <div v-if="item1.title" class="title">
                <div>{{ item1.title }}</div>
                <el-tag v-if="item1.tag"   :type="item1.tagType" >{{item1.tag}}</el-tag>
              </div>
              <div v-if="item1.desc" class="desc">{{ item1.desc }}</div>
              <div v-if="item1.time" class="time">{{ item1.time }}</div>
            </div>
          </div>
          <div class="actions">
            <div class="a-item" @click="clickActions(action,i)" :class="{'border':i!==actions.length}" v-for="(action, i) in actions" :key="i">
              <div class="a-icon" v-if="action.icon">
                <component :is="`el-icon-${toLine(action.icon)}`"></component>
              </div>
              <div class="a-text">{{ action.text }}</div>
            </div>
          </div>
        </el-scrollbar>
      </el-tab-pane>
    </el-tabs>
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
  PropType,
} from "vue";
// import { useStore } from 'pinia';
import { useRoute, useRouter } from "vue-router";
import { toLine } from "../../../utils";
import { ActionOptions, ListItem, ListOptions } from "./types";
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
let props = defineProps({
  list: {
    type: Array as PropType<ListOptions[]>,
    required: true,
  },
  // 操作的内容
  actions: {
    type: Array as PropType<ActionOptions[]>,
    default: () => [],
  },
});
const router = useRouter();
//console.log('1-开始创建组件-setup')
/**
 * 数据部分
 */
const data = reactive({});
let emits = defineEmits(['clickItem','clickActions'])
let clickItem = (item:ListItem,index: number)=>{
  emits('clickItem',{item,index})
}
let clickActions = (item:ActionOptions,index: number)=>{
  emits('clickActions',{item,index})
}
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
  padding: 12px 20px;
  cursor: pointer;
  &:hover{
    background-color: #e6f6e6;
  }
  .avatar {
    flex: 1;
  }
  .content {
    flex: 3;
    .time {
        font-size: 12px;
        color: #999;
        margin-top: 4px;
    }
    .title{
      display: flex;
      align-items: center;
      justify-content: space-between ;
    }
  }
}
.actions {
  height: 50px;
  display: flex;
  align-items: center;
  border-top: 1px solid #eee;
  .a-item {
    height: 50px;
    flex:1;
    display:flex;
    align-items: center;
    justify-content: center;
  }
  .a-icon{
    margin-right: 4px;
    position: relative;
    top: 2px;
  }
}
.border {
  border-right: 1px solid #eee;
}
</style>
