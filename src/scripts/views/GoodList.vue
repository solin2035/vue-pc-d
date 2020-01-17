<template>
  <div>
    <Header/>
    <div class="box">
      <div class="list-title">
        <ul class="menu-list">
          <li>
            <router-link :to="{name:'h'}">首页</router-link>
            <span>&nbsp;></span>
          </li>
          <li>
            <router-link
              :to="{name:'goodlist',params:{goodClass:params.goodClass}}"
            >{{params.className}}</router-link>
          </li>
        </ul>
      </div>
      <div class="list-content clearfix">
        <div class="list-nav">
          <p>
            共>
            <span>123</span>个结果
          </p>
          <ul class="navlist">
            <li>
              <p>
                <i></i>品牌
              </p>
            </li>
            <li>
              <p>
                <i></i>品类
              </p>
            </li>
            <li>
              <p>
                <i></i>价格
              </p>
            </li>
            <li>
              <p>
                <i></i>尺码
              </p>
            </li>
            <li>
              <p>
                <i></i>颜色
              </p>
            </li>
            <li>
              <p>
                <i></i>季节
              </p>
            </li>
            <li>
              <p>
                <i></i>风格
              </p>
            </li>
          </ul>
        </div>
        <div class="content">
          <div class="content-wrap">
            <div class="content-nav clearfix">
              <ul class="topul">
                <li>
                  <router-link
                    :to="{name:'goodlist',params:{goodClass:params.goodClass,leixin:'xp'}}"
                  >新品</router-link>
                </li>
                <li>
                  <router-link
                    active-class="active"
                    :to="{name:'goodlist',params:{goodClass:params.goodClass,leixin:'xp'}}"
                  >热销</router-link>
                </li>
                <li>
                  <router-link
                    :to="{name:'goodlist',params:{goodClass:params.goodClass,leixin:'xp'}}"
                  >推荐</router-link>
                </li>
                <li>
                  <router-link
                    :to="{name:'goodlist',params:{goodClass:params.goodClass,leixin:'xp'}}"
                  >价格</router-link>
                </li>
                <li>
                  <router-link
                    :to="{name:'goodlist',params:{goodClass:params.goodClass,leixin:'xp'}}"
                  >折扣</router-link>
                </li>
              </ul>
              <div class="pagenum">
                <span>1</span> -
                <span>21</span>页/
                <span>
                  <a href="javascript:;">下一页></a>
                </span>
              </div>
            </div>
            <div class="goodList">
              <ul class="list clearfix">
                <router-link
                  tag="li"
                  :to="{name:list.name}"
                  v-for="(list,i) in lists"
                  :key="i"
                  class="li"
                >
                  <div class="goods-img">
                    <router-link :to="{name:list.name}">
                      <img :src="list.src" alt>
                    </router-link>
                    <sup class="miaosha">
                      <em>
                        秒杀
                        <strong>¥358</strong>
                      </em>
                    </sup>
                  </div>
                  <p>
                    <router-link :to="{name:list.name}">{{list.text}}</router-link>
                  </p>
                  <div class="price-wrap">
                    <strong>
                      ￥
                      <span>{{list.price}}</span>
                    </strong>
                    <del>
                      ￥
                      <span>{{list.price}}</span>
                    </del>
                    <i></i>
                  </div>
                </router-link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "GoodList",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      params: "",
      lists: [
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
        },
        {
          text: "徒步鞋",
          price: 898,
          src: require("../../assets/images/tbx1.jpg"),
          shangb: require("../../assets/images/tbx1_sb.png"),
          name: "nvx"
        },
        {
          text: "徒步鞋",
          price: 898,
          src: require("../../assets/images/tbx1.jpg"),
          shangb: require("../../assets/images/tbx1_sb.png"),
          name: "nvx"
        },
        {
          text: "徒步鞋",
          price: 898,
          src: require("../../assets/images/tbx1.jpg"),
          shangb: require("../../assets/images/tbx1_sb.png"),
          name: "nvx"
        },
        {
          text: "徒步鞋",
          price: 898,
          src: require("../../assets/images/tbx1.jpg"),
          shangb: require("../../assets/images/tbx1_sb.png"),
          name: "nvx"
        },
        {
          text: "徒步鞋",
          price: 898,
          src: require("../../assets/images/tbx1.jpg"),
          shangb: require("../../assets/images/tbx1_sb.png"),
          name: "nvx"
        },
        {
          text: "徒步鞋",
          price: 898,
          src: require("../../assets/images/tbx1.jpg"),
          shangb: require("../../assets/images/tbx1_sb.png"),
          name: "nvx"
        },
        {
          text: "徒步鞋",
          price: 898,
          src: require("../../assets/images/tbx1.jpg"),
          shangb: require("../../assets/images/tbx1_sb.png"),
          name: "nvx"
        },
        {
          text: "徒步鞋",
          price: 898,
          src: require("../../assets/images/tbx1.jpg"),
          shangb: require("../../assets/images/tbx1_sb.png"),
          name: "nvx"
        }
      ]
    };
  },
  methods: {
    getParams() {
      this.params = this.$route.params;
    }
  },
  created() {
    this.getParams();
  },
  watch: {
    $route: "getParams"
  }
};
</script>
<style lang="less" scoped>
.box {
  margin-top: 0px;
  width: 1190px;
  -webkit-font-smoothing: antialiased;
  background-color: rgb(255, 255, 255);
  margin: 0px auto;
  font-size: 13px;
  .list-title {
    padding: 30px 0 20px;
    font-size: 12px;
    color: #333;
    .menu-list {
      display: inline-block;
      li {
        display: inline;
        a {
          text-decoration: none;
          font-weight: bold;
          color: #333;
        }
      }
    }
  }
  .list-content {
    margin-bottom: 20px;
    width: 1190px;
    margin: 0 auto;
    overflow: hidden;
    .list-nav {
      width: 180px;
      font-size: 20px;
      color: #000;
      float: left;
      p {
        color: #666;
        font-size: 12px;
        margin-top: 45px;
      }
      .navlist {
        font-size: 12px;
        color: #333;
        margin-top: 25px;
        li {
          padding-top: 10px;
          cursor: pointer;
          p {
            margin-top: 0;
            font-size: 12px;
            color: #333;
            font-weight: bold;
            i {
              width: 6px;
              height: 10px;
              background: url("../../assets/images/css_sprites.png") -212px -124px;
              margin-right: 9px;
              float: left;
              margin-top: 3px;
            }
          }
        }
      }
    }
    .content {
      float: right;
      width: 1010px;
      .content-wrap {
        margin-top: 20px;
        .content-nav {
          border-bottom: 1px solid #eee;
          overflow: hidden;
          height: 50px;
          line-height: 50px;
          .topul {
            float: left;
            font-size: 0;
            li {
              display: inline-block;
              font-size: 14px;
              padding: 0 30px;
              a {
                color: #333;
                &:hover {
                  font-weight: bold;
                  border-bottom: 2px solid #333;
                }
              }
            }
          }
          .pagenum {
            float: right;
            font-size: 12px;
            color: #999;
            margin-right: 30px;
            a {
              color: #999;
            }
          }
        }
        .goodList {
          margin: 30px auto 0 auto;
          width: 920px;
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
            &:hover > .goods-img > .miaosha > em {
              display: block;
            }

            img {
              width: 54px;
              height: 24px;
              margin: auto;
              margin-top: 15px;
            }
            .goods-img {
              background-color: #fff;
              position: relative;
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

              .miaosha {
                width: 100%;
                cursor: pointer;
                color: #fff;
                font-size: 12px;
                position: absolute;
                left: 0;
                bottom: 0;
                em {
                  text-align: left;
                  background: url("../../assets/images/sf-mark.png") right -72px
                    no-repeat;
                  white-space: nowrap;
                  height: 24px;
                  display: block;
                  overflow: hidden;
                  text-indent: 6px;
                  line-height: 24px;
                  font-style: normal;
                  color: #fff;
                  width: 210px;
                  display: none;
                }
              }
            }
            p {
              margin-top: 10px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              font-size: 12px;
              min-height: 45px;
              a {
                color: #616161;
              }
            }
            .price-wrap {
              margin: 15px 0 10px;
              font-size: 16px;
              font-weight: bold;
              position: relative;
              del {
                font-size: 13px;
                font-weight: 100;
                color: #aaa;
              }
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
      }
    }
  }
}
</style>
