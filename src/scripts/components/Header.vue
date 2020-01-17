<template>
    <div>
        <h1 class="logo">
            <a href="/"><img src="../../assets/images/logo.png" alt="" /></a>
        </h1>
        <Nav />
        <div class="line"></div>
    </div>
</template>

<script>
import Nav from './Nav.vue';

export default {
    name: 'Header',
    components: { Nav }
};
</script>

<style lang="less" scoped>
@w: 98px;
@h: 58px;
.logo {
    width: @w;
    margin: auto;
    padding: 55px 0;
    img {
        width: @w;
        height: @h;
    }
}
.line {
    border-bottom: 1px solid #eee;
  }
</style>
