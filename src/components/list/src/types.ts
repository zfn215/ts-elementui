export interface  ListItem{
    avatar?:string,
    title?:string,
    desc?:string,
    time?: string,
    tag?:string,
    tagType?:''|'success'|'info'|'warning'|'danger'
}
export interface ListOptions {
    title: string,
    content?:ListItem[]
}
// ** 操作选项
export interface ActionOptions {
    text: string,
    icon?:string
}