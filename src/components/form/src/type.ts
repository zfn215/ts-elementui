/*
 * @Author: zhangfuning 401645191@qq.com
 * @Date: 2023-04-22 15:30:54
 * @LastEditors: zhangfuning 401645191@qq.com
 * @LastEditTime: 2023-05-09 13:47:53
 * @FilePath: /my-vue-app/src/components/form/src/type.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { RuleItem } from "./rules";
import {CSSProperties} from 'vue'
export interface FormOptions {
    // 表单项显示的元素
    type: 'cascader' | 'checkbox' | 'checkbox-group' | 'date-picker' | 'input' | 'input-number' | 'radio' | 'RadioGroup'|'select' | 'option' | 'slider' | 'switch' | 'time-select' | 'time-picker' | 'transfer'|'upload',
    // 表单项的值
    value: any,
    // 表单label
    label?:string,
    // 表单的标识
    prop?:string,
    // 表单的验证标识 RuleItem // async-validator里面的验证
    rules?:RuleItem[],
    // 表单属性的占位符
    placeholder?: string,
    // 表单特有的属性
    attrs?:{
        style?:CSSProperties,
        clearable?:boolean,
        showPassword?:boolean,
        disabled?:boolean,
    },
    // 表单项的子元素
    children?:FormOptions[],
    // 上传组建的属性和方法
    uploadAttrs?:{
        action:string,
        headers?:Object,
        method?:'post'|'put'|'patch',
        multiple?:boolean,
        data?:any,
        name?:string,
        withCredentials?:boolean,
        showFileList?:boolean,
        drag?:boolean,
        accept?:string,
        fileList?:any[],
        listType?:'text' | 'picture' | 'picture-card',
        autoUpload?:boolean,
        disabled?:boolean,
        limit?:number,
    } 
}