<template>
  <div>
    <LoginHeader/>
    <div class="register_bg">
      <div class="register_box">
        <form onsubmit="return false">
          <div class="box">
            <ul class="clearfix">
              <li>
                <router-link :to="{name:'login'}">登陆</router-link>
              </li>
              <li>
                <a href="javascript:;">注册</a>
              </li>
            </ul>
            <div class="form">
              <dl class="clearfix">
                <dd>
                  <div id="userinput">
                    <label for="username" class="lab">手机号</label>
                    <input type="text" id="username" name="username" placeholder="请输入您的手机号码">
                  </div>
                </dd>
                <dt>
                  <div id="username-error" class="error"></div>
                </dt>
              </dl>
              <dl class="clearfix">
                <dd>
                  <div id="vcodeinput">
                    <label for="vcode" class="lab">验证码</label>
                    <input type="text" id="vcode" name="vcode" placeholder=" 请输入验证码">
                  </div>
                  <div class="fr">
                    <img
                      src="https://passport.yougou.com/servlet/imageCaptcha?rand=0.3425894372364955"
                      alt
                    >
                  </div>
                </dd>
                <dt>
                  <div id="vcode-error" class="error"></div>
                </dt>
              </dl>
              <dl class="clearfix">
                <dd>
                  <div id="emailinput">
                    <label for="username" class="lab">邮&emsp;箱</label>
                    <input type="text" id="email" name="email" placeholder="请输入您的常用邮箱">
                  </div>
                </dd>
                <dt>
                  <div id="email-error" class="error"></div>
                </dt>
              </dl>
              <dl class="clearfix">
                <dd>
                  <div id="passwordinput">
                    <label for="password" class="lab">密&emsp;码</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="字母、数字、符号均可，6-25个字符以内"
                    >
                  </div>
                </dd>
                <dt>
                  <div id="password-error" class="error"></div>
                </dt>
              </dl>
              <dl class="clearfix">
                <dd>
                  <div id="pwdinput">
                    <label for="pwd" class="lab">确认密码</label>
                    <input type="password" id="pwd" name="pwd" placeholder="再次输入密码">
                  </div>
                </dd>
                <dt>
                  <div id="pwd-error" class="error"></div>
                </dt>
              </dl>
              <p style="text-align: center" class="queren">
                <span>
                  <input
                    type="checkbox"
                    id="rules"
                    name="rules"
                    style="margin-top:0"
                    checked="checked"
                  >
                </span>
                <label style="padding-left:3px" for="rules">
                  我已阅读并同意
                  <a
                    href="https://www.yougou.com/help/registrationagreement.html"
                    class="Red undline"
                    target="_blank"
                  >《优购会员注册协议》</a>
                </label>
                <span id="ruleTips"></span>
              </p>
              <p class="blank5"></p>
              <p style="text-align: center">
                <a href="javascript:void();" class="nreg_submit">
                  <input type="submit" title="立即注册" value="确认并注册" id="submit">
                </a>
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
.register_bg {
  width: 100%;
  height: 553px;
  background: url("../../assets/images/register_bg.jpg") no-repeat;
  position: relative;
  .register_box {
    left: 50%;
    margin: 0 auto;
    margin-left: 115px;
    position: absolute;
    top: 0;
    width: 378px;
    z-index: 1;
    height: auto;
    .box {
      height: 530px;
      margin-top: 12px;
      background: #fff;
      box-sizing: border-box;
      width: 378px;
      float: right;
      ul {
        border-bottom: 1px solid #f3f3f3;
        margin: 24px 15px 0 15px;
        font-size: 12px;
        li:nth-child(1) {
          margin-left: 53px;
          margin-right: 5px;
          background: #f3f3f3;
          float: left;
          height: 40px;
          line-height: 40px;
          text-align: center;
          width: 123px;
          a {
            color: #333;
          }
        }
        li:nth-child(2) {
          float: left;
          height: 40px;
          line-height: 40px;
          text-align: center;
          width: 123px;
          background: #333;
          a {
            color: #fff;
          }
        }
      }
      .form {
        padding-top: 30px;
        margin: 0 15px;
        padding-left: 10px;
        font-size: 12px;

        input {
          border: 1px solid #e3e2e2;
          box-sizing: border-box;
          height: 38px;
          margin: 0;
        }
        dt {
          height: 28px;
          width: 100%;
          float: left;
          line-height: 18px;
          .error {
            color: #333;
            margin-top: 4px;
            background: url("../../assets/images/icon_sig_reg.png") no-repeat;
            background-position: -180px -95px;
            padding-left: 25px;
          }
        }
        dl {
          padding: 0 0 0 8px;
          box-sizing: border-box;
          width: auto;
          position: relative;

          dd {
            width: 100%;
            float: left;
            font-size: 14px;
            color: #000;
            .lab {
              height: 38px;
              line-height: 38px;
              margin-left: 10px;
              text-align: left;
              width: 60px;
              float: left;
              color: #000;
              font-size: 12px;
            }
            #userinput {
              border: 1px solid #e3e2e2;
              width: 313px;
              float: left;
              position: relative;

              #username {
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
            #vcodeinput {
              width: 200px;
              border: 1px solid #e3e2e2;
              box-sizing: border-box;
              height: 38px;
              margin: 0;
              float: left;
              position: relative;
              #vcode {
                width: 128px;
                background: 0;
                border: 0;
                float: right;
                height: 36px;
                line-height: 36px;
                padding: 0;
                font-size: 12px;
                vertical-align: middle;
              }
              .fr {
                margin-right: 17px;
                float: right;
              }
            }
            #emailinput {
              border: 1px solid #e3e2e2;
              width: 313px;
              float: left;
              position: relative;
              #email {
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
            #passwordinput {
              border: 1px solid #e3e2e2;
              width: 313px;
              float: left;
              position: relative;
              #password {
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
            #pwdinput {
              border: 1px solid #e3e2e2;
              width: 313px;
              float: left;
              position: relative;
              #pwd {
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
        }
        .queren {
          color: #666;

          a {
            color: #666;
          }
          #rules {
            margin: 3px 3px 3px 4px;
            box-sizing: border-box;
            vertical-align: middle;
            font-size: 12px;
            height: 14px;
          }
        }
        .blank5 {
          width: 100%;
          overflow: hidden;
          clear: both;
          font-size: 0;
        }
        .nreg_submit {
          background: #000;
          border: 0;
          color: #fff;
          font-size: 16px;
          height: 40px;
          line-height: 40px;
          width: 312px;
          text-decoration: none;
          outline: 0;
          input {
            align-items: flex-start;
            text-align: center;
            padding: 1px 6px;
            vertical-align: middle;
            cursor: pointer;
            background: #000;
            border: 0;
            color: #fff;
            font-size: 16px;
            height: 40px;
            line-height: 40px;
            width: 312px;
          }
        }
      }
    }
  }
}
</style>
