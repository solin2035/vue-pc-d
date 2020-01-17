<template>
    <div>
        <Top />
        <router-view />
    </div>
</template>

<script>
import Top from '../components/Top.vue';

export default {
    name: 'Index',
    components: {
        Top,
    }
};
</script>

<style lang="less" scoped>
.logo {
    @h: 80px;
    height: @h;
    line-height: @h;
    h1 {
        font-size: 30px;
        font-weight: 900;
        color: #09f;
        text-indent: 2em;
    }
}
</style>
