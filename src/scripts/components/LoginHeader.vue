<template>
  <div>
    <div class="uc_hd">
      <div class="cen clearfix rel">
        <h2 class="cen_logo">
          <router-link :to="{name:'h'}">
            <img src="../../assets/images/signin-register-logo.png" alt>
          </router-link>
        </h2>
        <p class="cen_font fl">用户注册登陆</p>
      </div>
    </div>

  </div>
</template>
<script>
export default {};
</script>

<style lang="less" scoped>
.uc_hd {
  border-bottom: 1px solid #dcdbde;
  margin-bottom: 0;
  padding: 13px 0;
  .rel {
    position: relative;
  }
  .cen {
    width: 990px;
    margin: 0 auto;
    clear: both;
  }
  h2 {
    float: left;
  }
  .cen_logo {
    padding: 5px 30px 5px 0;
    border-right: 1px solid #e6e6e6;
    margin-right: 30px;
    a {
      color: #333;
    }
  }
  .cen_font {
    color: #333;
    font-size: 18px;
    float: left;
    height: 42px;
    line-height: 42px;
  }
}

</style>
