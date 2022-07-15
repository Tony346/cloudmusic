import instance from './index.js'

// export const test=(url,method,data)=>{
//     return instance[method](url,data)
// }
// 获取轮播图数据
export const getData=(url,method,data)=>{
     return instance[method](url,data)
}