<template>
    <div class="top-nav">
        <div class="top-nav-left">
            <div>发现音乐</div>
            <div>我的音乐</div>
            <div>关注</div>
            <div>商城</div>
            <div>音乐人</div>
            <div>下载客户端</div>
        </div>
        <div class="top-nav-right">
            <div>
                <input />
            </div>
            <div>创作者中心</div>
            <div>
                <img src="" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.top-nav {
    display: flex;
    width: 100vw;
    height: 80px;
    background-color: rgb(36, 36, 36);
    color: white;

    .top-nav-left {
        display: flex;
        margin-left: 180px;

        &>div {
            width: 100px;
            height: 80px;
            line-height: 80px;
            text-align: center;

            &:hover {
                cursor: pointer;
                background-color: black;
            }
        }
    }

    .top-nav-right {
        display: flex;
        margin-left: 35px;

        & div:nth-child(1) {
            width: 180px;

            input {
                margin-top: 30px;
            }
        }

        & div:nth-child(2) {
            width: 100px;
            height: 80px;
            line-height: 80px;
            text-align: center;

            &:hover {
                cursor: pointer;
                background-color: black;
            }
        }
    }
}
</style>