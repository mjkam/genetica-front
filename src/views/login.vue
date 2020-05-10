<template>
  <div class="container">
    <div class="banner"></div>
    <Logo class="logo"></Logo>
    <div class="login-section">
      <div class="content">
        <div class="title">Sign in to get started</div>
          <div class="form-content">
            <div class="email">Email</div>
            <input class="input" placeholder="Enter your email address"/>
            <div class="password">
              <div class="password-text">Password</div>
              <div class="forgot-text">Forgot password?</div>
            </div>
            <input type="password" class="input" placeholder="● ● ● ● ● ●"/>
            <div class="signin-btn">
              <div class="signin-btn-text">Sign in</div>
            </div>
            <hr class="hr-left"/><span class="or">or</span><hr class="hr-right"/>
            <div class="google-signin-btn">
              <div class="google-signin-btn-text">
                <img align="left" width="18px" height="18px" src="data:image/png;base64,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"/>Sign in with Google
              </div>
            </div>
          </div>
          <div>
            <span class="no-account-text">Don't have an account?</span><span class="signup-text">Sign up</span>
          </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Logo from '../components/Logo';
import Footer from '../components/Footer';

export default {
  name: 'login',
  components: {
    Logo,
    Footer,
  },
}


</script>

<style lang="scss" scoped>

.container {
  width: 100%;
  height: 100vh;
  background: #34353B;
}

.banner {
  width: 57.8%;
  height: 100%;
  background-size: cover;
  background: url('../assets/login_image.png') no-repeat center;
}

.logo {
  position: absolute;
  width: 286px;
  height: 62px;
  left: 0;
  top: 0;
  margin-top: 45vh;
  margin-left: 198px;
}

.login-section {
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  right: 130px;
  width: 510px;
  height: 663px;
  border-radius: 4px;
  background: #ffffff;  
}

.content {
  width: 100%;
  height: 100%;
  padding: 42px 65px 36px;
  box-sizing: border-box;
  height: 100%;
}

.title {
  font-size: 30px;
  font-weight: 500;
  color: #333333;
}

.email {
  font-size: 14px;
  color: #3c3d42;
}

.input {
  width: 100%;
  height: 46px;
  margin-top: 8px;
  border-radius: 4px;
  border: solid 1px #bec2ce;
  color: var(--fill-greyscale-500);
  font-size: 16px;
  padding-left: 24px;
}

.form-content {
  padding: 48px 0px 114px 0px;
}

.password {
  margin-top: 42px;
}

.password-text {
  font-size: 14px;
  color: #3c3d42;
  float: left;
}

.forgot-text {
  color: #588aee;
  float: right;
  font-size: 16px;
}

.signin-btn {
  margin-top: 40px;
  margin-bottom: 16px;
  text-align: center;
  vertical-align: middle;
  width: 100%;
  height: 48px;
  border-radius: 4px;
  background-color: var(--fill-primary-color-500);
  font-size: 16px;
  font-weight: 500;
  color: #f0f4ff;
}

.signin-btn-text {
  width: 100%;
  height: 100%;
  padding: 15px 28px;
  box-sizing: border-box;
}

.google-signin-btn {
  width: 100%;
  height: 48px;
  border-radius: 4px;
  margin-top: 16px;
  border: solid 1px var(--fill-greyscale-200);
}

.google-signin-btn-text {
  width: 100%;
  height: 100%;
  padding: 15px 28px;
  color: var(--fill-greyscale-700);
  text-align: center;
  box-sizing: border-box;
}

hr {
  width: 170px;
  display: inline-block;
  vertical-align: middle;
}

.or {
  color: #bfc2ce;
  font-size: 16px;
  margin: 0px 6px 0px 5px;
}

.no-account-text {
  font-size: 16px;
  color: var(--fill-greyscale-700);
}

.signup-text {
  margin-left: 8px;
  font-size: 16px;
  color: var(--fill-primary-color-500);
}

</style>