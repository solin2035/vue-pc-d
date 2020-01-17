<template>
  <div class="home">
    <Header />
    <Banner />
    <div class="homeTop">
      <h3>新品推荐</h3>
      <div class="tab">
        <a
          href="javascript:;"
          v-for="(item, i) in items"
          :key="i"
          class="top-nav"
          @click="qiehuan1(i)"
        >{{ item.text }}</a>
      </div>
    </div>
    <div class="homeList">
      <ul class="list clearfix">
        <router-link tag="li" :to="{name:list.name}" v-for="(list,i) in lists" :key="i" class="li">
          <div class="goods-img">
            <router-link :to="{name:list.name}">
              <img :src="list.src" alt>
            </router-link>
          </div>
          <img :src="list.shangb" alt>
          <p>
            <router-link :to="{name:list.name}">{{list.text}}</router-link>
          </p>
          <div class="price-wrap">
            ￥
            <span>{{list.price}}</span>
            <i></i>
          </div>
        </router-link>
      </ul>
    </div>
    <div class="homeTop">
      <h3>今日主推大牌</h3>
      <div class="tab">
        <a
          href="javascript:;"
          v-for="(item, i) in items"
          :key="i"
          class="top-nav"
          @click="qiehuan2(i)"
        >{{ item.text }}</a>
      </div>
    </div>
    <div class="dpList">
      <ul class="list">
        <router-link tag="li" :to="{name:img.name}" v-for="(img,i) in images" :key="i" class="img">
          <router-link :to="{name:img.name}">
            <img :src="img.img" alt>
            <div class="img_bg">
              <img :src="img.img_bg" alt>
            </div>
          </router-link>
        </router-link>
      </ul>
    </div>
    <div class="xtbList">
      <div class="xtbs">
        <a href="javascript:;" v-for="(xtb,i) in xtbs" :key="i">
          <img :src="xtb.xtb" alt>
        </a>
      </div>
    </div>
    <div class="ppcl clearfix">
      <div class="pptop">
        <div class="ttop">
          <h3>品牌潮流资讯</h3>
          <h4>BRAND FASHION</h4>
        </div>
        <ul class="ul1 clearfix">
          <li>
            <video
              class="video"
              poster="//i1.ygimg.cn/pics/shop/seoul/PCnei_rong_zi_xun/shou_ye_mo_kuai_ru_kou_tu/pin_pai_duan_pian_(1).jpg"
              style="background-color:#000;"
              controlslist="nodownload"
              @click="playPause(0)"
              width="315"
              height="458"
              draggable="true"
              :controls="false"
            >
              <source src="//i1.ygimg.cn/pc_video/advertising_video_teenmix_2018.mp4">
            </video>
          </li>
          <li>
            <a href="javascript:;">
              <img
                src="//i1.ygimg.cn/pics/shop/seoul/PCnei_rong_zi_xun/shou_ye_mo_kuai_ru_kou_tu/chao_liu_zi_xun_aaa.jpg"
                alt
              >
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="//i1.ygimg.cn/pics/shop/seoul/guan_wang_su_cai/1.jpg" alt>
            </a>
          </li>
        </ul>
        <ul class="ul2 clearfix">
          <li>
            <a href="javascript:;">
              <img src="//i1.ygimg.cn/pics/shop/seoul/guan_wang_su_cai/xia_pai_zui_zuo_.jpg" alt>
            </a>
            <div>不一样的通勤鞋</div>
          </li>
          <li>
            <a href="javascript:;">
              <img
                src="//i1.ygimg.cn/pics/shop/seoul/PCnei_rong_zi_xun/shou_ye_mo_kuai_ru_kou_tu/2.jpg"
                alt
              >
            </a>
            <div>显瘦心机袜靴Pick</div>
          </li>
          <li>
            <a href="javascript:;">
              <img
                src="//i1.ygimg.cn/pics/shop/seoul/PCnei_rong_zi_xun/shou_ye_mo_kuai_ru_kou_tu/3.jpg"
                alt
              >
            </a>
            <div>赚足回头率的Sneaker</div>
          </li>
          <li>
            <a href="javascript:;">
              <img
                src="//i1.ygimg.cn/pics/shop/seoul/PCnei_rong_zi_xun/shou_ye_mo_kuai_ru_kou_tu/4.jpg"
                alt
              >
            </a>
            <div>你的酷男孩已上线</div>
          </li>
        </ul>
        <div class="sp">
          <div>
            <video
              class="video"
              poster="//i1.ygimg.cn/pics/shop/seoul/guan_wang_su_cai/wei_biao_ti_-1.jpg"
              style="background-color:#000;"
              controlslist="nodownload"
              @click="playPause(1)"
              width="990"
              height="444"
              draggable="true"
              :controls="false"
            >
              <source src="//i1.ygimg.cn/testvedio/staccatomv0001.mp4">
            </video>
          </div>
        </div>
        <div class="goodsclass">
          <div>
            <img
              src="https://i1.ygimg.cn/pics/shop/seoul/shuang_10xing_dong/you_gou_pcfen_lei_ru_kou_.jpg"
              alt
            >
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Banner from "../components/Banner.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  components: {
    Banner,
    Header,
    Footer
  },
  data() {
    return {
      items: [{ text: "男女鞋", name: "h" }, { text: "运动", name: "yd" }],
      lists: [],
      lists1: [
        {
          text: "跑步鞋",
          price: 789,
          src: require("../../assets/images/pbx1.jpg"),
          shangb: require("../../assets/images/pbx1_sb.png"),
          name: "nvx"
        },
        {
          text: "长裤",
          price: 399,
          src: require("../../assets/images/ck1.jpg"),
          shangb: require("../../assets/images/ck1_sb.png"),
          name: "yd"
        },
        {
          text: "帆布鞋/硫化鞋",
          price: 459,
          src: require("../../assets/images/fbx1.jpg"),
          shangb: require("../../assets/images/fbx1_sb.png"),
          name: "nvx"
        },
        {
          text: "徒步鞋",
          price: 898,
          src: require("../../assets/images/tbx1.jpg"),
          shangb: require("../../assets/images/tbx1_sb.png"),
          name: "nvx"
        }
      ],
      lists2: [
        {
          text: "休闲 满帮鞋",
          price: 1099,
          src: require("../../assets/images/xp1.jpg"),
          shangb: require("../../assets/images/xp1_sb.png"),
          name: "nvx"
        },
        {
          text: "休闲 满帮鞋",
          price: 899,
          src: require("../../assets/images/xp2.jpg"),
          shangb: require("../../assets/images/xp2_sb.png"),
          name: "nvx"
        },
        {
          text: "简约 中空凉鞋",
          price: 799,
          src: require("../../assets/images/xp3.jpg"),
          shangb: require("../../assets/images/xp3_sb.png"),
          name: "nvx"
        },
        {
          text: "休闲 浅口鞋",
          price: 1190,
          src: require("../../assets/images/xp4.jpg"),
          shangb: require("../../assets/images/xp4_sb.png"),
          name: "nvx"
        }
      ],
      images: [],
      images1: [
        {
          img: require("../../assets/images/dp1.jpg"),
          img_bg: require("../../assets/images/dp1_bg.png"),
          name: "h"
        },
        {
          img: require("../../assets/images/dp2.jpg"),
          img_bg: require("../../assets/images/dp2_bg.png"),
          name: "h"
        },
        {
          img: require("../../assets/images/dp3.jpg"),
          img_bg: require("../../assets/images/dp3_bg.png"),
          name: "h"
        }
      ],
      images2: [
        {
          img: require("../../assets/images/dp4.jpg"),
          img_bg: require("../../assets/images/dp4_bg.png"),
          name: "h"
        },
        {
          img: require("../../assets/images/dp5.jpg"),
          img_bg: require("../../assets/images/dp5_bg.png"),
          name: "h"
        },
        {
          img: require("../../assets/images/dp6.jpg"),
          img_bg: require("../../assets/images/dp6_bg.png"),
          name: "h"
        }
      ],
      xtbs: [
        { xtb: require("../../assets/images/xtb1.png") },
        { xtb: require("../../assets/images/xtb2.png") },
        { xtb: require("../../assets/images/xtb3.png") },
        { xtb: require("../../assets/images/xtb4.png") },
        { xtb: require("../../assets/images/xtb5.png") },
        { xtb: require("../../assets/images/xtb6.png") },
        { xtb: require("../../assets/images/xtb7.png") },
        { xtb: require("../../assets/images/xtb8.png") },
        { xtb: require("../../assets/images/xtb9.png") },
        { xtb: require("../../assets/images/xtb10.png") }
      ]
    };
  },
  methods: {
    qiehuan1(index) {
      if (index) {
        this.lists = this.lists1;
      } else {
        this.lists = this.lists2;
      }
    },
    qiehuan2(index) {
      if (index) {
        this.images = this.images1;
      } else {
        this.images = this.images2;
      }
    },
    playPause(index) {
      var vedio = document.getElementsByTagName("video")[index];
      vedio.controls = true;
      vedio.poster = "";
    }
  },
  created() {
    this.images = this.images2;
    this.lists = this.lists2;
  }
};
</script>

<style lang="less" scoped>
.home {
  text-align: center;
  .homeTop {
    text-align: center;
    margin: 66px 0 30px 0;
    h3 {
      font-size: 42px;
      font-weight: 600;
    }
    .tab {
      margin: 25px auto 40px;
      .top-nav {
        padding: 0 10px;
        font-size: 16px;
      }
      a {
        color: #333;
      }
    }
  }
  .homeList {
    width: 920px;
    margin: auto;
    .li {
      float: left;
      width: 210px;
      height: 386px;
      padding: 10px;
      text-align: center;
      &:hover {
        background-color: #f6f6f6;
      }
      &:hover > .price-wrap > i {
        display: block;
      }
      &:hover > p > a {
        color: #333;
      }

      img {
        width: 54px;
        height: 24px;
        margin: auto;
        margin-top: 15px;
      }
      .goods-img {
        background-color: #fff;
        a {
          margin: 30px 0;
          display: inline-block;
          width: 210px;
          height: 210px;
          img {
            width: 210px;
            height: 210px;
          }
        }
      }
      p {
        margin-top: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 12px;
        a {
          color: #616161;
        }
      }
      .price-wrap {
        margin: 15px 0 10px;
        font-size: 16px;
        font-weight: bold;
        position: relative;
        i {
          width: 15px;
          height: 15px;
          background: url("../../assets/images/css_sprites.png") -38px -243px;
          position: absolute;
          right: 8px;
          top: 5px;
          cursor: pointer;
          display: none;
        }
      }
    }
  }
  .dpList {
    width: 990px;
    margin: auto;
    .img {
      display: inline-block;
      position: relative;
      &:nth-child(2) {
        margin: 0 18px;
      }
      a:hover > .img_bg {
        display: block;
      }
      .img_bg {
        width: 100%;
        height: 100%;
        position: absolute;
        text-align: center;
        top: 0;
        left: 0;
        background: #000;
        opacity: 0.8;
        display: none;
        img {
          margin: 170px auto;
          width: 100px;
          height: 50px;
          vertical-align: middle;
        }
      }
    }
  }
  .xtbList {
    width: 990px;
    margin: 0 auto;
    padding: 66px 0;
    .xtbs {
      a {
        width: 68px;
        height: 31px;
        display: inline-block;
        margin: 0 12px;
        img {
          width: 68px;
          height: 31px;
        }
      }
    }
  }
  .ppcl {
    width: 1190px;
    margin: 50px auto 0;
    .pptop {
      .ttop {
        width: 100%;
        margin: 66px 0 30px 0;
        h3 {
          font-size: 42px;
          font-weight: 600;
          color: #333;
          text-align: center;
        }
        h4 {
          color: #333;
          text-align: center;
          font-size: 24px;
        }
      }
      .ul1 {
        width: 1020px;
        margin: 40px auto;
        overflow: hidden;
        li {
          float: left;
          margin: 0 12px;
        }
      }
      .ul2 {
        margin-bottom: 50px;
        li {
          display: inline-block;
          margin-right: 22px;
          position: relative;
          &:nth-child(4) {
            margin-right: 0;
          }
          &:hover > div {
            display: block;
          }
          img {
            width: 231px;
            height: 250px;
          }
          div {
            width: 100%;
            height: 100%;
            margin: 0;
            font-size: 14px;
            color: #fff;
            text-align: center;
            line-height: 250px;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 99;
            background-color: rgba(0, 0, 0, 0.6);
            display: none;
          }
        }
      }
      .goodsclass {
        img {
          vertical-align: middle;
          margin: auto;
        }
      }
    }
  }
}
</style>
