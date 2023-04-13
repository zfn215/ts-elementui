/*
 * @Author: zhangfuning 401645191@qq.com
 * @Date: 2023-04-13 15:12:59
 * @LastEditors: zhangfuning 401645191@qq.com
 * @LastEditTime: 2023-04-13 15:13:27
 * @FilePath: /my-vue-app/src/components/chooseTime/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import chooseTime from './src/index.vue'
import {App} from 'vue'
// 让这个组件可以通过use的形式使用
export default {
    install(app:App){
        app.component('m-chooseTime',chooseTime)
    }
}