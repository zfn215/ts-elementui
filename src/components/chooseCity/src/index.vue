<!--
 * @Author: zhangfuning 401645191@qq.com
 * @Date: 2023-04-18 14:36:05
 * @LastEditors: zhangfuning 401645191@qq.com
 * @LastEditTime: 2023-04-22 13:46:40
 * @FilePath: /my-vue-app/src/components/chooseCity/src/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-popover
    v-model:visible="visible"
    placement="bottom-start"
    :width="430"
    trigger="click"
  >
    <template #reference>
      <div class="result">
        <div>{{ result }}</div>
        <div :class="{ rolate: visible }">
          <el-icon-arrowdown></el-icon-arrowdown>
        </div>
      </div>
    </template>
    <div class="container">
      <el-row>
        <el-col :span="8">
          <el-radio-group v-model="radioValue" size="small">
            <el-radio-button label="按城市" />
            <el-radio-button label="按省份" />
          </el-radio-group>
        </el-col>
        <el-col :offset="1" :span="15">
          <el-select
            v-model="selectValue"
            filterable
            @change="changeCity"
            class="m-2"
            placeholder="请搜索城市"
            :filter-method="filterMethod"
            size="small"
          >
            <el-option
              v-for="item in options"
              :label="item.name"
              :value="item.id"
              :key="item.id"
              >{{ item.name }}</el-option
            >
          </el-select></el-col
        >
      </el-row>
      <template v-if="radioValue === '按城市'">
        <div class="city">
          <div
            @click="clickChat(key)"
            class="city-item"
            v-for="(value, key) in cities"
          >
            {{ key }}
          </div>
        </div>
        <el-scrollbar max-height="300px">
          <template v-for="(value, key) in cities" :key="key">
            <!--  需要滚动的区域 -->
            <el-row style="margin-bottom: 10px" :id="key">
              <el-col :span="2">{{ key }}:</el-col>
              <el-col class="city-name" :span="22">
                <div class="city-name-item" v-for="(item, index) in value">
                  <div @click="clickItem(item)">
                    {{ item.name }}
                  </div>
                </div>
              </el-col>
            </el-row>
          </template>
        </el-scrollbar>
      </template>
      <template v-else>
        <div class="province">
          <div
            class="province-item"
            @click="clickChat(key)"
            v-for="(value, key) in provinces"
          >
            {{ key }}
          </div>
        </div>
        <el-scrollbar max-height="300px">
          <template
            v-for="(item, index) in Object.values(provinces)"
            :key="index"
          >
            <!--  需要滚动的区域 -->
            <template v-for="(item1, index1) in item" :key="index1">
              <el-row style="margin-bottom: 10px" :id="item1.id">
                <el-col :span="3">{{ item1.name }}:</el-col>
                <el-col class="province-name" :span="21">
                  <div
                    class="province-name-item"
                    v-for="(item2, index2) in item1.data"
                  >
                    <div @click="clickProvince(item2)">
                      {{ item2 }}
                    </div>
                  </div>
                </el-col>
              </el-row>
            </template>
          </template>
        </el-scrollbar>
      </template>
    </div>
  </el-popover>
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
import city from "../lib/city";
import { City, Province } from "./types";
import province from "../lib/province.json";
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
// 分发事件
let emits = defineEmits(["chang", "changeProvince"]);
// 最终选择结果
let result = ref<string>("请选择");
// 弹窗状态
let visible = ref<boolean>(false);
// 按城市选择
let radioValue = ref<string>("按城市");
// 下拉框的选择
let selectValue = ref<string>("");
// 下拉框数据
let options = ref<City[]>([]);
// 城市数据
let cities = ref(city.cities);
// 不变的原始数据
let allCity = ref<City[]>([]);
// 省份数据
let provinces = ref(province);
// 搜索词语
let searchValue = ref<string>("");
let clickItem = (item: City) => {
  result.value = item.name;
  visible.value = false;
  emits("chang", item);
};
// 选择省
let clickProvince = (item: string) => {
  visible.value = false;
  emits("changeProvince", item);
};
//  选择具体的城市
let clickChat = (item: string) => {
  console.log("[ item ] >", item);
  let elementDom: HTMLElement | null = document.getElementById(item);
  elementDom?.scrollIntoView();
};
// 选择搜索
let filterMethod = (val: string) => {
  searchValue.value = val;
  let values = Object.values(allCity.value).flat(2);
  if (!val) {
    options.value = values;
  } else {
    if (radioValue.value === "按城市") {
      options.value = values.filter((item) => {
        return item.name.includes(val) || item.spell.includes(val);
      });
    } else {
      options.value = values.filter((item) => {
        return item.name.includes(val);
      });
    }
  }
};
let changeCity = (val: number) => {
  // 根据原始数据过滤
  let city = allCity.value.find((item) => {
    return item.id === val;
  })!;
  result.value = city?.name;
  if (radioValue.value === "按城市") {
    // 自定义分发事件
    emits("chang", city);
  } else {
    emits("changeProvince", city?.name);
  }
  console.log("[ val ] >", val);
};
// 监听搜索词语
watch(
  () => searchValue.value,
  (val) => {
    filterMethod(val);
  }
);
onBeforeMount(() => {
  //console.log('2.组件挂载页面之前执行----onBeforeMount')
});
onMounted(() => {
  //console.log('3.-组件挂载到页面之后执行-------onMounted')
  console.log("[ citys ] >", cities.value);
  let values = Object.values(cities.value).flat(2);
  console.log("[ values ] >", values);
  options.value = values;
  allCity.value = values;
});
watchEffect(() => {});
// 使用toRefs解构
// let { } = { ...toRefs(data) }
defineExpose({
  ...toRefs(data),
});
</script>
<style scoped lang="scss">
.result {
  display: flex;
  align-items: center;
  width: fit-content;
  cursor: pointer;
}
.rolate {
  transform: rotate(180deg);
}
svg {
  width: 1em;
  height: 1em;
  position: relative;
  top: 2px;
  margin-left: 4px;
  transition: all 2.25 linear;
}
.container {
  padding: 6px;
}
.city,
.province {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 10px;
  margin-bottom: 10px;
  &-item {
    padding: 3px 6px;
    margin-right: 8px;
    border: 1px solid #eee;
    margin-bottom: 8px;
    cursor: pointer;
  }
}
.city-name,
.province-name {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  .city-name-item,
  .province-name-item {
    margin-right: 6px;
    margin-bottom: 6px;
    cursor: pointer;
  }
}
</style>
