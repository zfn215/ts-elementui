/*
 * @Author: zhangfuning 401645191@qq.com
 * @Date: 2023-03-09 16:29:22
 * @LastEditors: zhangfuning 401645191@qq.com
 * @LastEditTime: 2023-04-04 15:53:58
 * @FilePath: /my-vue-app/vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),vueJsx()],
})
