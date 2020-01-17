<template>
    <div class="banner">
        <el-carousel  height="550px">
            <el-carousel-item v-for="(item, i) in list" :key="i">
                <img :src="item.img" alt="" ref="image" />
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
    name: 'Banner',
    data() {
        return {
            list: [
                {
                    img: require('../../assets/images/banner1.jpg')
                },
                {
                    img: require('../../assets/images/banner2.jpg')
                }
            ]
        };
    }
};
</script>

<style lang="less" scope>
@h: 550px;
.banner {
    height: @h;
    img {
        height: @h;
        width:100%;
    }
}
</style>
