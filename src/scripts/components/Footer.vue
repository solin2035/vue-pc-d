<template>
  <div class="footer">
    <div class="footer-top">
      <ul class="content">
        <li>
          <i class="icon bg-bottom_logistics"></i>
          <a href="jacascript:;">正品保证</a>
        </li>
        <li>
          <i class="icon bg-bottom_ensure"></i>
          <a href="jacascript:;">10天退换货</a>
        </li>
        <li>
          <i class="icon bg-bottom_service"></i>
          <a href="jacascript:;">10天调补差价额</a>
        </li>
        <li>
          <i class="icon bg-bottom_Price_difference"></i>
          <a href="jacascript:;">09:00—21:00在线客服</a>
        </li>
      </ul>
    </div>
    <div class="footer-footer">
      <div class="wd">
        <div class="footer-nav">
          <div class="footer-bum">
            <div class="content clearfix">
              <dl v-for="(list,i) in lists" :key="i">
                <dt>{{list.title}}</dt>
                <dd v-for="(nav,i) in list.navs" :key="i">
                  <a href="javascript:;">
                    <i class="icon bg-bottom_Consultation" v-if="nav=='在线客服'"></i>
                    {{nav}}
                  </a>
                </dd>
              </dl>
            </div>
          </div>
        </div>
        <div class="footer-middle">
          <ul class="content">
            <li>
              <a href="javascript:;">
                <img
                  width="124"
                  height="47"
                  src="//s2.ygimg.cn/template/common/images/sm_124x47.png"
                  style="border: medium none;"
                  alt="安全联盟认证"
                >
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img
                  width="124"
                  height="47"
                  src="//s2.ygimg.cn/template/common/images/ebs-logo.jpg"
                  style="border: medium none;"
                  alt="安全联盟认证"
                >
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img
                  width="124"
                  height="47"
                  src="//s2.ygimg.cn/template/common/images/beian2.png"
                  style="border: medium none;"
                  alt="安全联盟认证"
                >
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img
                  width="124"
                  height="47"
                  src="//s2.ygimg.cn/template/common/images/beian2.png"
                  style="border: medium none;"
                  alt="安全联盟认证"
                >
              </a>
            </li>
          </ul>
          <ul class="right">
            <li>
              <div class="border">
                <img
                  src="//pcs2.ygimg.cn/template/common/images/app.jpg"
                  alt="扫描下载手机客户端"
                  class="img-app"
                >
              </div>
              <div class="title">扫描下载手机客户端</div>
            </li>
            <li>
              <div class="border">
                <img
                  src="//pcs1.ygimg.cn/template/common/images/weChat.jpg"
                  alt="关注公众号"
                  class="img-app"
                >
              </div>
              <div class="title">关注公众号</div>
            </li>
          </ul>
        </div>
        <div class="friendly-link">
          <ul class="content">
            <li>
              <a href="javascript:;" class="title-first">关于优购</a>|
            </li>
            <li>
              <a href="javascript:;" class="title">集团采购</a>|
            </li>
            <li>
              <a href="javascript:;" class="title">招贤纳士</a>|
            </li>
            <li>
              <a href="javascript:;" class="title">手机优购</a>|
            </li>
            <li>
              <a href="javascript:;" class="title">联系我们</a>|
            </li>
            <li>
              <a href="javascript:;" class="title">友情链接</a>
            </li>
          </ul>
        </div>
        <div class="copyright">
          <p>
            Copyright © 2011-2016 Yougou Technology Co., Ltd.
            <a
              href="javascript:;"
              target="_blank"
              rel="nofollow"
            >粤ICP备09070608号-4</a>
            增值电信业务经营许可证：
            <a
              href="javascript:;"
              target="_blank"
              rel="nofollow"
            >粤 B2-20090203</a>&nbsp;
            <span>深公网安备：4403101910665</span>
            <a target="_blank" href="javascript:;">
              <span>粤公网安备 44030502000017号</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      lists: [
        {
          title: "新手帮助",
          navs: ["交易条款协议", "注册新用户", "会员积分详情"]
        },
        { title: "购物指南", navs: ["订购流程", "验货与签收", "订单配送"] },
        {
          title: "支付/配送",
          navs: ["支付方式", "配送方式", "配送时间及运费"]
        },
        { title: "售后服务", navs: ["退换货政策", "退款说明", "发票制度"] },
        { title: "会员服务", navs: ["找回密码", "联系我们"] },
        {
          title: "优购客服",
          navs: [
            "在线客服",
            "Email: ygservice@belle.com.cn",
            "微信客服：优购时尚商城"
          ]
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.footer-top {
  overflow: hidden;
  width: 100%;
  background: #333;
  border-bottom: 1px solid #666;
  .content {
    width: 1190px;
    margin: 46px auto 42px;
    font-size: 18px;
    li {
      display: inline-block;
      margin-left: 50px;
      &:first-child {
        margin-left: 0;
      }
      .icon {
        display: inline-block;
        vertical-align: middle;
      }
      .bg-bottom_logistics {
        width: 27px;
        height: 27px;
        background: url("../../assets/images/css_sprites.png") -10px -11px;
      }
      .bg-bottom_ensure {
        width: 27px;
        height: 27px;
        background: url("../../assets/images/css_sprites.png") -57px -58px;
      }
      .bg-bottom_service {
        width: 27px;
        height: 27px;
        background: url("../../assets/images/css_sprites.png") -10px -58px;
      }
      .bg-bottom_Price_difference {
        width: 27px;
        height: 27px;
        background: url("../../assets/images/css_sprites.png") -57px -11px;
      }
      a {
        display: inline-block;
        vertical-align: middle;
        color: #fff;
      }
    }
  }
}
.footer-footer {
  overflow: hidden;
  width: 100%;
  background: #333;
  border-bottom: 1px solid #666;
  .wd {
    width: 1190px;
    margin: 0 auto;
    .footer-nav {
      width: 100%;
      .footer-bum {
        width: 1190px;
        margin: 0 auto;
        .content {
          margin-top: 25px;
          dl {
            margin-left: 90px;
            font-size: 12px;
            float: left;
            &:first-child {
              margin-left: 0;
            }
            dt {
              color: #fff;
            }
            dd {
              margin-top: 20px;
              a {
                color: #666;
                .bg-bottom_Consultation {
                  display: inline;
                  background: url("../../assets/images/css_sprites.png") -124px -140px;
                  vertical-align: middle;
                }
              }

            }
          }
        }
      }
    }
    .footer-middle {
      color: #fff;
      .content {
        display: inline-block;
        margin-top: 160px;
        li {
          margin-left: 12px;
          display: inline-block;
          &:first-child {
            margin-left: 0;
          }
        }
      }
      .right {
        margin-left: 200px;
        vertical-align: bottom;
        display: inline-block;
        li {
          display: inline-block;
          margin-left: 54px;
          &:first-child {
            margin-left: 0;
          }
          .border {
            width: 120px;
            height: 120px;
            line-height: 120px;
            text-align: center;
            background: #fff;
            margin-bottom: 12px;
            img {
              vertical-align: middle;
              display: inline-block;
            }
          }
          .title {
            text-align: center;
            font-size: 12px;
          }
        }
      }
    }
    .friendly-link {
      margin-top: 25px;
      li {
        display: inline-block;
        color: #555;
        font-size: 12px;
        a {
          margin: 0 10px;
          color: #fff;
          &:first-child {
            margin-right: 10px;
          }
        }
      }
    }
    .copyright {
      margin-top: 15px;
      margin-bottom: 35px;
      color: #fff;
      font-size: 12px;
      a{
        color:#fff;
      }
    }
  }
}
</style>
