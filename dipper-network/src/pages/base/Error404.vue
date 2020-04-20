<template>
  <div class="page-group">
    <div class="page">
      <div class="content-block error-box">
        <!-- <div class="error-icon text-center"><img src="../../assets/img/error404.png"></div>
        <p class="tip text-center">找不到该页面</p>-->
        <div class="lose-main">
          <div class="lose-box">
            <img src="../../assets/img/404/404.png" />
            <p>抱歉，没有找到您请求的页面</p>
            <p class="lose-en">Sorry, didn't find the page you requet.</p>
            <a href="/">返回首页</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      remark: ""
    };
  },
  mounted() {},
  methods: {},
  computed: {}
};
</script>
<style lang="less" scoped>
.page-group {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #004f67;
  font-family: "Arial", "Microsoft Yahei";
}
.text-center {
  text-align: center;
}
.lose-main {
  background: url("../../assets/img/404/bg.png") 0 0 no-repeat;
  background-size: 100%;
  min-height: 540px;
}
.lose-box {
  width: 440px;
  height: 450px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -225px 0 0 -220px;
  text-align: center;
  img {
    margin-bottom: 50px;
    width: 80%;
  }
  p {
    margin: 0;
    color: #fff;
    line-height: 30px;
    text-align: center;
    font-size: 18px;
  }
  a {
    width: 218px;
    height: 50px;
    display: block;
    margin: 50px auto 0 auto;
    border: solid 1px #fff;
    border-radius: 3px;
    text-align: center;
    line-height: 50px;
    color: #fff;
    text-decoration: none;
    transition: all ease-out 0.4s;
    &:hover {
      background: #fff;
      color: #004f67;
      border-color: transparent;
    }
  }
}
</style>
