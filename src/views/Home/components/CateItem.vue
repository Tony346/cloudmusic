<template>
    <div class="contain">
        <div class="contain-slot">
            <div class="slot">
                <slot>这是插槽</slot>
            </div>
        </div>


    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.contain {
    width: 1080px;
    height: 300px;
    // background-color: aqua;
    // margin-left: 100px;
    margin: auto;
}

.contain-slot {
    width: 1080px;
    height: 28px;
    margin-top: 20px;
    font-size: 20px;
    line-height: 20px;
    border-bottom: 2px solid red;
}
</style>