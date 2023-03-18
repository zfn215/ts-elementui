import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/idnex';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { toLine } from './utils';
const app = createApp(App)
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  console.log(`el-icon-${toLine(key)}`);
  app.component(`el-icon-${toLine(key)}`, (ElementPlusIconsVue as any) [key])
}
app.use(router).use(ElementPlus).mount('#app');
