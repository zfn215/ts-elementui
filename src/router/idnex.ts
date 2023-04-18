/*
 * @Author: zhangfuning 401645191@qq.com
 * @Date: 2023-03-09 16:35:40
 * @LastEditors: zhangfuning 401645191@qq.com
 * @LastEditTime: 2023-04-13 15:17:10
 * @FilePath: /my-vue-app/src/router/idnex.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {createRouter,createWebHistory,RouteRecordRaw} from 'vue-router';
import Home from '../views/Home.vue'
import Container from '../components/container/src/index.vue'
const routes:RouteRecordRaw[]= [
    {
        path:'/',
        component:Container,
        children:[
            {
                path:'/',
                component:Home
            
            },
            {
                path:'/chooseIcon',
                component:()=>import('../views/chooseicon/index.vue')
            
            },
            {
                path:'/chooseArea',
                component:()=>import('../views/chooseArea/index.vue')
            
            },
            {
                path:'/notification',
                component:()=>import('../views/notifiCation/index.vue')
            
            },
            {
                path:'/menu',
                component:()=>import('../views/menu/index.vue')
            
            },
            {
                path:'/progress',
                component:()=>import('../views/progress/index.vue')
            },
            {
                path:'/chooseTime',
                component:()=>import('../views/chooseTime/index.vue')
            },
        ]
    
    }
]
export const router = createRouter({
    history: createWebHistory(),
    routes
  })
  export default router