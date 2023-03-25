/*
 * @Author: zhangfuning 401645191@qq.com
 * @Date: 2023-03-20 17:26:02
 * @LastEditors: zhangfuning 401645191@qq.com
 * @LastEditTime: 2023-03-25 15:15:56
 * @FilePath: /my-vue-app/src/components/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {App} from 'vue'
import chooseArea from './chooseArea'
import chooseicon from './chooseicon'
import trend from './trend'
import notification from './notification'
import mList from './list'
const components = [chooseArea,chooseicon,trend,notification,mList]
export default {
    install(app:App){
        components.map(item=>{
            app.use(item)
        })
    }
}