<template>
  <el-form
    v-if="model"
    :validate-on-rule-change="false"
    :model="model"
    :rules="rules"
    v-bind="$attrs"
  >
    <template v-for="(item, index) in options">
      <el-form-item
        v-if="!item.children || !item.children!.length"
        :prop="item.prop"
        :label="item.label"
      >
        <component
          v-if="item.type !== 'upload'"
          v-model="model[item.prop!]"
          :placeholder="item.placeholder"
          v-bind="item.attrs"
          :is="`el-${item.type}`"
        ></component>
        <el-upload
          :v-bind="item.uploadAttrs"
          :on-preview="onPreview"
          :on-remove="onremove"
          :on-success="success"
          :on-error="onPreview"
          :on-progress="onprogress"
          :on-change="onchange"
          :on-exceed="onexceed"
          :before-upload="beforeupload"
          :before-remove="beforeremove"
          :http-request="httprequest"
          v-else
        >
          <slot name="uploadArea"></slot>
          <slot name="uploadTip"></slot>
        </el-upload>
      </el-form-item>
      <el-form-item
        v-if="item.children && item.children.length"
        :prop="item.prop"
        :label="item.label"
      >
        <component
          v-model="model[item.prop!]"
          :placeholder="item.placeholder"
          v-bind="item.attrs"
          :is="`el-${item.type}`"
        >
          <component
            v-for="(child, i) in item.children"
            :key="i"
            :placeholder="item.placeholder"
            :label="child.label"
            :value="child.value"
            :is="`el-${child.type}`"
          ></component>
        </component>
      </el-form-item>
    </template>
  </el-form>
</template>

<script setup lang="ts">
import { RuleItem } from "async-validator";
import {
  ref,
  reactive,
  toRefs,
  onBeforeMount,
  onMounted,
  watchEffect,
  computed,
  PropType,
  watch,
} from "vue";
// import { useStore } from 'pinia';
import { useRoute, useRouter } from "vue-router";
import { FormOptions } from "./type";
import cloneDeep from "lodash/cloneDeep";
import {
  UploadFile,
  UploadFiles,
  UploadProgressEvent,
  UploadRawFile,
  UploadRequestOptions,
  UploadUserFile,
} from "element-plus";
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
let model = ref<any>(null);
let rules = ref<any>(null);
let props = defineProps({
  // 表单的配置项
  options: {
    type: Array as PropType<FormOptions[]>,
    required: true,
  },
});
const data = reactive({});
let emits = defineEmits([
  "onPreview",
  "onremove",
  "success",
  "onprogress",
  "onchange",
  "onexceed",
  "beforeupload",
  "beforeremove",
  "httprequest",
]);
// 上传组件的所有方法
let onPreview = (uploadFile: UploadFile) => {
  emits('onPreview',uploadFile)
};
let onremove = (uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  emits('onremove',{uploadFile,uploadFiles})
};
let success = (
  response: any,
  uploadFile: UploadFile,
  uploadFiles: UploadFiles
) => {
  emits('success',{response,uploadFile,uploadFiles})
};
let onprogress = (
  evt: UploadProgressEvent,
  uploadFile: UploadFile,
  uploadFiles: UploadFiles
) => {
  emits('onprogress',{evt,uploadFile,uploadFiles})
};
let onchange = (uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  emits('onchange',{uploadFile,uploadFiles})
  
};
let onexceed = (files: File[], uploadFiles: UploadUserFile[]) => {
  emits('onexceed',{files,uploadFiles})
};
let beforeupload = (rawFile: UploadRawFile) => {
  emits('beforeupload',rawFile)
  
};
let beforeremove = (uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  emits('beforeremove',{uploadFile,uploadFiles})
};
let httprequest = (options: UploadRequestOptions) => {
  emits('httprequest',options)
};
onBeforeMount(() => {
  //console.log('2.组件挂载页面之前执行----onBeforeMount')
});
const initForm = () => {
  if (props.options && props.options.length) {
    let m: any = {};
    let r: any = {};
    // v-model赋值 rules的赋值
    props.options.map((item: FormOptions) => {
      m[item.prop!] = item.value;
      r[item.prop!] = item.rules;
    });
    model.value = cloneDeep(m);
    rules.value = cloneDeep(r);
    //console.log('3.-组件挂载到页面之后执行-------onMounted')
  }
};
onMounted(() => {
  initForm();
});
watch(
  () => props.options,
  () => {
    initForm();
  },
  { deep: true }
);
watchEffect(() => {});
// 使用toRefs解构
// let { } = { ...toRefs(data) }
defineExpose({
  ...toRefs(data),
});
</script>
<style scoped lang="less"></style>
