/*
 * @Author: zhangfuning 401645191@qq.com
 * @Date: 2023-04-20 17:06:04
 * @LastEditors: zhangfuning 401645191@qq.com
 * @LastEditTime: 2023-04-21 16:05:07
 * @FilePath: /my-vue-app/src/components/chooseCity/src/types.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export interface City {
    id: number;
    spell: string;
    name: string;
}
export interface Province {
    name: string;
    id: string;
    data: string[];
}