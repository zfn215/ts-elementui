import { defineComponent, PropType ,useAttrs} from "vue";
import { toLine } from "../../../utils";
import { MenuItem } from "./types";

/*
 * @Author: zhangfuning 401645191@qq.com
 * @Date: 2023-04-04 15:57:04
 * @LastEditors: zhangfuning 401645191@qq.com
 * @LastEditTime: 2023-04-06 15:30:01
 * @FilePath: /my-vue-app/src/components/menu/src/menu.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置:
 */
export default defineComponent({
    props:{
        data: {
            type: Array as PropType<MenuItem[]>,
            required: true
          },
          defaultActive:{
            type:String,
            default:''
          },
          router:{
            type:Boolean,
            default:false
          }
    },
    setup(props, ctx) {
        let arrs = useAttrs();
        // ** 封装一个渲染无限层级的方法
        let renderMenu = (data:MenuItem[])=>{
            return data.map((item:MenuItem)=>{
                // 每个菜单的图标
                item.i = `el-icon-${toLine(item.icon!)}`
                let slots = {
                    title:()=>{ 
                        return <>
                        <item.i />
                        <span>{item.name}</span>
                        </>
                    }
                }
                if(item.children&&item.children.length){
                    return (
                        <el-sub-menu index={item.index} v-slots={slots} >
                            {renderMenu(item.children)}
                        </el-sub-menu>
                    )
                }
                // ** 正常渲染的普通标签
                return (
                    <el-menu-item index={item.index}>
                        <item.i/>
                        <span>{item.name}</span>
                    </el-menu-item>
                )
            })
        }
        return ()=>{
            // ** 最终返回的组件
            return (
                <el-menu
                 default-active={props.defaultActive}
                 router={props.router}
                 {...arrs}
                >
                    {renderMenu(props.data)}
                </el-menu>
            )
        }
    },
})