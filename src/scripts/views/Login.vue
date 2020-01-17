<template>
  <div>
    <LoginHeader/>
    <div class="login_bg">
      <div class="login-box">
        <form onsubmit="return false">
          <div class="box">
            <ul class="clearfix">
              <li>
                <a href="javascript:;">账户密码登陆</a>
              </li>
              <li>
                <a href="javascript:;">手机号快捷登陆</a>
              </li>
            </ul>
            <div class="form">
              <dl class="yihang">
                <dd>
                  <div class="input">
                    <i></i>
                    <input type="text" id="username" name="username" placeholder="手机号/会员名称/邮箱">
                  </div>
                </dd>
                <dt>
                  <div id="username-err" class="error"></div>
                </dt>
              </dl>
              <dl class="yihang">
                <dd>
                  <div class="input">
                    <i></i>
                    <input type="text" id="password" name="password" placeholder="请输入密码">
                  </div>
                </dd>
                <dt>
                  <div id="password-err" class="error"></div>
                </dt>
              </dl>
              <p style="display: block;text-align: right;margin-right: 17px;font-size:12px;">
                <a
                  href="javscript:;"
                  style="line-height: 26px; text-decoration:underline;color:#888;"
                >忘记密码？</a>
              </p>
              <p style="text-align: center">
                <input type="submit" class="nlog_submit" id="submit" value="点击登录" title="登录">
              </p>
              <p
                class="f_black"
                style="color: #999;margin-top: 10px;text-align: center;font-size:12px;"
              >使用合作网站账号登录优购：</p>

              <p class="cop_link">
                <a
                  class="we_chat f_blue"
                  href="/member/toThirdPartLogin.jhtml?type=quick-weixin&amp;redirectURL=https://passport.yougou.com/signin.jhtml?redirectURL=https://www.yougou.com/"
                >&nbsp;</a> |
                <a
                  href="/api/alipay/sendToFastLogin.sc?redirectURL=https://passport.yougou.com/signin.jhtml?redirectURL=https://www.yougou.com/"
                  class="nreg_zpay f_blue"
                >&nbsp;</a> |
                <a
                  href="/api/qq/toLogin.sc?redirectURL=https://passport.yougou.com/signin.jhtml?redirectURL=https://www.yougou.com/"
                  class="nreg_qq f_blue"
                >&nbsp;</a> |
                <a
                  href="/api/sina/toLogin.sc?redirectURL=https://passport.yougou.com/signin.jhtml?redirectURL=https://www.yougou.com/"
                  class="nreg_sina f_blue"
                >&nbsp;</a> |
                <a
                  href="/api/renren/toRenren.sc?redirectURL=https://passport.yougou.com/signin.jhtml?redirectURL=https://www.yougou.com/"
                  class="nreg_people f_blue"
                >&nbsp;</a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
    <LoginFooter/>
  </div>
</template>


<script>
import LoginHeader from "../components/LoginHeader.vue";
import LoginFooter from "../components/LoginFooter.vue";
export default {
  name: "Login",
  components: {
    LoginHeader,
    LoginFooter
  }
};
</script>
<style lang="less" scoped>
.login_bg {
  width: 100%;
  height: 553px;
  background: url("../../assets/images/register_bg.jpg") no-repeat;
  position: relative;
  .login-box {
    left: 50%;
    margin: 0 auto;
    margin-left: 115px;
    position: absolute;
    top: 0;
    width: 378px;
    z-index: 1;
    height: auto;

    .box {
      height: 450px;
      margin-top: 50px;
      background: #fff;
      box-sizing: border-box;
      width: 378px;
      float: right;
      ul {
        border-bottom: 1px solid #f3f3f3;
        margin: 24px 15px 0 15px;
        li {
          line-height: 40px;
          text-align: center;
          font-size: 12px;
        }
        li:nth-child(1) {
          margin-left: 0;
          margin-right: 0;
          background: #333;
          width: 174px;
          float: left;
          height: 40px;
          line-height: 40px;
          text-align: center;
          a {
            color: #fff;
            display: inline-block;
            width: 174px;
            cursor: pointer;
          }
        }
        li:nth-child(2) {
          width: 174px;
          background: #f3f3f3;
          float: left;
          height: 40px;
          line-height: 40px;
          text-align: center;
          a {
            color: #333;
            display: inline-block;
            width: 174px;
            cursor: pointer;
          }
        }
      }
      .form {
        padding-top: 30px;
        margin: 0 15px;
        padding-left: 10px;

        .yihang {
          padding: 0 0 0 8px;
          box-sizing: border-box;
          width: auto;

          dd {
            width: 100%;
            float: left;
            font-size: 14px;
            color: #000;
            .input {
              border: 1px solid #e3e2e2;
              box-sizing: border-box;
              height: 38px;
              margin: 0;
              width: 313px;
              float: left;
              position: relative;
              font-size: 14px;
              color: #000;
              i {
                display: block;
                float: left;
                height: 36px;
                overflow: hidden;
                width: 48px;
                background: url("../../assets/images/icon_sig_reg.png")
                  no-repeat;
                background-position: -168px -27px;
              }
              input {
                background: 0;
                border: 0;
                float: right;
                height: 36px;
                line-height: 36px;
                padding: 0;
                width: 235px;
                font-size: 12px;
                vertical-align: middle;
              }
            }
          }
          dt {
            height: 28px;
            width: 100%;
            float: left;
            line-height: 18px;
            font-size: 12px;
            .error {
              color: #333;
              margin-top: 4px;
              background: url("../../assets/images/icon_sig_reg.png") no-repeat;
              background-position: -180px -95px;
              padding-left: 25px;
            }
          }
        }
        .yihang:nth-child(2) {
          dd {
            i {
              background: url("../../assets/images/icon_sig_reg.png") no-repeat;
              background-position: -168px -61px;
            }
          }
        }
      }
      #submit {
        background: #000;
        border: 0;
        color: #fff;
        font-size: 16px;
        height: 40px;
        line-height: 40px;
        width: 312px;
        cursor: pointer;
        vertical-align: middle;
      }
      .cop_link {
        margin-top: 5px;
        text-align: center;
        color: #e1e1e1;
        a {
          line-height: 54px;
          padding: 9px 16px;
          margin: 0 5px;
          background: url("../../assets/images/icon_sig_reg.png") no-repeat;
        }
        .we_chat {
          background-position: -37px -18px;
        }
        .nreg_zpay {
          background-position: -73px -18px;
        }
        .nreg_qq {
          background-position: -110px -19px;
        }
        .nreg_sina {
          background-position: -37px -54px;
        }
        .nreg_people {
          background-position: -73px -54px;
        }
      }
    }
  }
}
</style>
