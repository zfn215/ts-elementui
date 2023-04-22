/*
 * @Author: zhangfuning 401645191@qq.com
 * @Date: 2023-03-09 16:29:22
 * @LastEditors: zhangfuning 401645191@qq.com
 * @LastEditTime: 2023-04-20 15:07:17
 * @FilePath: /my-vue-app/src/main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/idnex';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { toLine } from './utils';
import baseComponent from './components'
const app = createApp(App)
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(`el-icon-${toLine(key)}`, (ElementPlusIconsVue as any) [key])
}
app.use(router).use(ElementPlus).use(baseComponent).mount('#app');
