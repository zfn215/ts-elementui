<!--
 * @Author: zhangfuning 401645191@qq.com
 * @Date: 2023-04-22 14:08:38
 * @LastEditors: zhangfuning 401645191@qq.com
 * @LastEditTime: 2023-05-10 10:11:56
 * @FilePath: /my-vue-app/src/views/form/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <m-form
      @onchange="onchangeUpload"
      @onPreview="onPreview"
      @onremove="onremove"
      :options="options"
    >
      <template #uploadArea>
        <el-button type="primary">Click to upload</el-button>
      </template>
      <template #uploadTip>
        <div style="color: red; font-size: 12px">
          jpg/png files with a size less than 500KB.
        </div>
      </template>
    </m-form>
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
import { FormOptions } from "../../components/form/src/type";
import { ElMessage } from 'element-plus'
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
/**˚
 * 数据部分
 */
let options: FormOptions[] = [
  {
    type: "input",
    value: "",
    label: "用户名",
    prop: "userName",
    rules: [
      {
        required: true,
        message: "用户名不能为空",
        trigger: "blur",
      },
      {
        min: 2,
        max: 6,
        message: "用户名在2-6位之间",
        trigger: "blur",
      },
    ],
    attrs: {
      clearable: true,
    },
  },
  {
    type: "input",
    value: "",
    prop: "passWord",
    label: "密码",
    rules: [
      {
        required: true,
        message: "密码不能为空 ",
        trigger: "blur",
      },
      {
        min: 6,
        max: 15,
        message: "用户名在6-15位之间",
        trigger: "blur",
      },
    ],
    attrs: {
      clearable: true,
      showPassword: true,
    },
  },
  {
    type: "select",
    value: "",
    prop: "role",
    placeholder: " 请选择职位",
    label: "职位",
    attrs: {
      style: {
        width: "100%",
      },
    },
    rules: [
      {
        required: true,
        message: "职位不能为空",
        trigger: "blur",
      },
    ],
    children: [
      {
        type: "option",
        label: "经理",
        value: "1",
      },
      {
        type: "option",
        label: "主管",
        value: "2",
      },
      {
        type: "option",
        label: "员工",
        value: "3",
      },
    ],
  },
  {
    type: "checkbox-group",
    value: [],
    label: "爱好",
    prop: "ball",
    rules: [
      {
        required: true,
        message: "爱好不能为空",
        trigger: "blur",
      },
    ],
    children: [
      {
        type: "checkbox",
        label: "足球",
        value: "1",
      },
      {
        type: "checkbox",
        label: "篮球",
        value: "2",
      },
      {
        type: "checkbox",
        label: "乒乓球",
        value: "3",
      },
    ],
  },
  {
    type: "upload",
    value: [],
    label: "上传",
    uploadAttrs: {
      action: "",
    },
    prop: "pic",
    rules: [
      {
        required: true,
        message: "图片不能为空",
        trigger: "blur",
      },
    ],
  },
];
const data = reactive({});
let onchangeUpload = (val: any) => {
  console.log("[ val ] >", val);
  ElMessage({
    showClose: true,
    message: 'Congrats, this is a success message.',
    type: 'success',
  })
};
let onPreview = (val: any) => {
  console.log("[ val ] >", val);
};
let onremove = (val:any)=>{
  console.log('[ val ] >', val)
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
<style scoped lang="less"></style>
