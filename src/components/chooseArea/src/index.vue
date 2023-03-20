<!--
 * @Author: zhangfuning 401645191@qq.com
 * @Date: 2023-03-18 19:50:43
 * @LastEditors: zhangfuning 401645191@qq.com
 * @LastEditTime: 2023-03-20 16:06:30
 * @FilePath: /my-vue-app/src/components/chooseArea/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: 
-->
<template>
  <el-select  clearable placeholder="选择省份" v-model="province" size="large">
    <el-option  v-for="(item ,index) in areas" :value="item.code" :key="item.code" :label="item.name" ></el-option>
  </el-select>
  <el-select clearable  :disabled="!province" style="margin: 0 10px;"    v-model="city"   placeholder="选择城市" size="large">
    <el-option  v-for="(item ,index) in selectCity"  :value="item.code" :key="item.code" :label="item.name" ></el-option>
  </el-select>
  <el-select clearable  :disabled="!province||!city" placeholder="选择区域" v-model="area"  
    size="large">
    <el-option  v-for="(item ,index) in selectArea"  :value="item.code" :key="item.code" :label="item.name" ></el-option>
  </el-select>
</template>

<script setup lang='ts'> 
import allAreas from '../lib/pcas-code.json'
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed,watch} from 'vue';
// import { useStore } from 'pinia';
import { useRoute, useRouter } from 'vue-router';
console.log(allAreas)
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
interface AeaItem  {
  code: string;
  name:string,
  children?:AeaItem[]
}
interface Data  {
  code: string;
  name:string,
}
// **省份的数据
const province = ref<string>('');
// ** 城市的数据
const city = ref<string>('');
// ** 区域的数据
const area = ref<string>('');
// ** 所有的地区
const areas = ref(allAreas)
const data = reactive({})
let selectCity = ref<AeaItem[]>()
let selectArea = ref<AeaItem[]>()
// 父组件事件 
let emits = defineEmits(['change'])
watch(()=>province.value,val=>{
  if(val){
    let citys = areas.value.find(item=>{ return item.code === province.value})?.children!
     selectCity.value = citys
    
  }
     city.value = '';
     area.value = '';
})
watch(()=>city.value,val=>{
  if(val){
    // @ts-expect-error
    const areas = selectCity.value.find((item) =>{ return item.code === city.value})?.children
    selectArea.value = areas
   
  }
  area.value = '';
})
watch(()=>area.value,val=>{
  if(val){
    let provinceData: Data= {
      code: province.value,
      name: province.value&&allAreas.find((item)=>{return item.code===province.value})!.name
    }
    let cityData: Data = {
      code: city.value,
        // @ts-expect-error
      name: city.value&&selectCity.value.find((item)=>{return item.code===city.value})!.name
    }
   let areaData: Data = {
      code: val,
    // @ts-expect-error
      name: val&&selectArea.value.find((item)=>{return item.code===val})!.name
   }
   emits('change',{
    province:provinceData,
    city:cityData,
    area:areaData,
   })
  }
})
onBeforeMount(() => {
  //console.log('2.组件挂载页面之前执行----onBeforeMount')
})
onMounted(() => {
  //console.log('3.-组件挂载到页面之后执行-------onMounted')
})
watchEffect(()=>{
})
// 使用toRefs解构
// let { } = { ...toRefs(data) } 
defineExpose({
  ...toRefs(data)
})

</script>
<style scoped lang='less'>
</style>