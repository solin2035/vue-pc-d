<template>
  <div>
    <div class="clearfix top">
      <div class="lf">
        <span>关注</span>
        <span>下载App</span>
      </div>
      <div class="lr">
        <span>
          <router-link :to="{name:'login'}">登陆</router-link>&nbsp;&nbsp;<a href="javascript:;">/</a>&nbsp;&nbsp;
          <router-link :to="{name:'register'}">注册</router-link>
        </span>
        <span>
          <i class="icon bg-top_collect"></i>
          收藏
        </span>
        <span>
          <i class="icon gwd"></i>
          购物袋
        </span>
        <span>公告</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Top"
};
</script>

<style lang="less" scoped>
@h: 40px;
.top {
  height: @h;
  line-height: @h;
  background-color: #333;
  color: #fff;
  font-size: 12px;
  .lf {
    float: left;
    margin-left: 145px;
  }
  .lr {
    float: right;
    margin-right: 92px;
    a {
      color: #fff;
    }
    .icon {
      display: inline-block;
    }
    .bg-top_collect {
      width: 12px;
      height: 11px;
      background: url("../../assets/images/css_sprites.png") -78px -174px;
      padding-right: 5px;
      vertical-align: middle;
    }
    .gwd {
      width: 12px;
      height: 12px;
      background: url("../../assets/images/css_sprites.png") -10px -197px;
      padding: 4px 8px 0 0;
      vertical-align: middle;
    }
    span:nth-child(1) {
      padding-right: 11px;
    }
    span:nth-child(2) {
      padding: 0 11px;
    }
    span:nth-child(3) {
      margin-left: 11px;
    }
    span:nth-child(4) {
      padding: 0 22px;
    }
  }
  span {
    padding: 11px;
    cursor: pointer;
    &:hover {
      color: #aaa;
    }
    a:hover {
      color: #aaa;
    }
  }
}
</style>
