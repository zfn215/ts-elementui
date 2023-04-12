/*
 * @Author: zhangfuning 401645191@qq.com
 * @Date: 2023-03-30 15:21:24
 * @LastEditors: zhangfuning 401645191@qq.com
 * @LastEditTime: 2023-04-06 14:04:51
 * @FilePath: /my-vue-app/src/components/menu/src/types.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export interface MenuItem {
    icon?:string,
    name:string,
    i:any,
    index:string,
    children?:MenuItem[]
}