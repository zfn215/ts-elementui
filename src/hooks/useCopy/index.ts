/*
 * @Author: zhangfuning 401645191@qq.com
 * @Date: 2023-03-18 19:08:56
 * @LastEditors: zhangfuning 401645191@qq.com
 * @LastEditTime: 2023-03-18 19:38:14
 * @FilePath: /my-vue-app/src/hooks/useCopy/index.ts
 * @Description: 
 */
import { ElMessage } from 'element-plus'
export const useCopy = (text:string)=>{
let input =  document.createElement('input')
input.value = text
document.body.appendChild(input)
input.select();
document.execCommand('Copy')
document.body.removeChild(input)
ElMessage.success('复制成功')
}