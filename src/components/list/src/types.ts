/*
 * @Author: zhangfuning 401645191@qq.com
 * @Date: 2023-03-25 15:53:28
 * @LastEditors: zhangfuning 401645191@qq.com
 * @LastEditTime: 2023-03-30 10:59:10
 * @FilePath: /my-vue-app/src/components/list/src/types.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export interface  ListItem{
    avatar?:string,
    title?:string,
    desc?:string,
    time?: string,
    tag?:string,
    tagType?:''|'success'|'info'|'warning'|'danger'
}
export interface ListOptions {
    title?: string,
    content?:ListItem[]
}
// ** 操作选项
export interface ActionOptions {
    text: string,
    icon?:string
}