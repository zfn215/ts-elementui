/*
 * @Author: zhangfuning 401645191@qq.com
 * @Date: 2023-03-09 17:26:48
 * @LastEditors: zhangfuning 401645191@qq.com
 * @LastEditTime: 2023-03-09 17:30:39
 * @FilePath: /my-vue-app/src/utils/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @description: 把icon驼峰转换成横岗🔗
 * @param {string} value
 * @return {*}
 */
export const toLine = (value:string)=>{
    return value.replace(/(A-Z)g/,'-$1').toLocaleLowerCase();
}