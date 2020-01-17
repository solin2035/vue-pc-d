<template>
    <div id="nav" class="clearfix">
      <ul class="nav-lf">
        <router-link tag="li" :to="{name:'h'}" class="item">
          <a href="javascript:;">首页</a>
        </router-link>
        <router-link
          tag="li"
          activeClass="active"
          v-for="nav in list"
          :key="nav.name"
          :to="{ name: 'goodlist',params:{goodClass:nav.name,className:nav.text}}"
          class="item"
        >
          <a href="javascript:;">{{ nav.text }}</a>
        </router-link>
      </ul>
      <div class="nav-lr">
        <input class="search" type="text">
        <i class="el-icon-search tubiao"></i>
      </div>



    </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      list: [
        { text: "女鞋", name: "nvx" },
        { text: "男鞋", name: "nanx" },
        { text: "运动", name: "yd" },
        { text: "户外", name: "hw" },
        { text: "儿童", name: "et" },
        { text: "箱包", name: "xb" }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
#nav {
  width: 1190px;
  margin: auto;
  .nav-lf {
    float: left;
    .item {
      float: left;
      width: 80px;
      color: #333;
      font-size: 20px;
      font-weight: bold;
      padding: 15px;
      a {
        color: #333;
        padding: 0;
        &:hover {
          border-bottom: 2px solid #333;
        }
      }
    }
  }
  .nav-lr {
    float: right;
    width: 180px;
    height: 22px;
    margin-top: 15px;
    border-bottom: 1px solid #333;
    position: relative;
    .search {
      border: 0;
      width: 160px;
    }
    .tubiao {
      position: absolute;
      right: 2px;
    }
  }

}
</style>
