<template>
    <!-- 头部导航 -->
    <TopNav />
    <!-- 轮播图 -->
    <el-carousel :interval="8000" arrow="always">
        <el-carousel-item v-for="item in info.banners" :key="item.encodeId">
            <img :src="item.imageUrl" alt="">
        </el-carousel-item>
    </el-carousel>
    <!-- 热门推荐 -->
    <CateItem>
        <span>热门推荐</span>
    </CateItem>
</template>

<script setup>
import TopNav from './components/TopNav'
import CateItem from './components/CateItem'
import { getData } from '@/api/serve'
import { onMounted, reactive } from 'vue'

let info=reactive({
    banners:[],
    hot:[]
})

onMounted(async () => {
    // 获取轮播图
    const {banners}= await getData('/banner', 'get',{type:0})
    info.banners=banners
//    const {tags} =await getData('/playlist/hot','get')
//     获取热门歌单
const res=await getData('/top/playlist','get',{order:'hot'})
console.log(res);
})

</script>

<style scoped lang="scss">
.el-carousel__item img {
        display: block;
        margin: auto;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}
</style>