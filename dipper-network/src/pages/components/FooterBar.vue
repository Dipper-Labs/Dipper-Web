<template>
  <div class="footer-container">
    <div class="content">
      <h3>{{$t('footer.contact')}}</h3>
      <div class="links-wrap">
        <!-- <a href>
          <img src="../../assets/img/footer/facebook.png" alt />
        </a>
        <a href>
          <img src="../../assets/img/footer/twitter.png" alt />
        </a>-->
        <a href="https://t.me/DipperNetworkOfficial" target="_blank">
          <img src="../../assets/img/footer/telegram.png" alt />
        </a>
        <a href="mailto:bussiness@dippernetwork.com">
          <img src="../../assets/img/footer/email.png" alt />
        </a>
        <a href="https://www.linkedin.com/company/dipper-network" target="_blank">
          <img src="../../assets/img/footer/linkedin.png" alt />
        </a>
      </div>
      <div class="des">
        <p>Copyright © 2018-2020 The Dipper Network</p>
      </div>
    </div>
    <svg
      class="wave-container"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
    >
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0
      58-18 88-18s
      58 18 88 18
      58-18 88-18
      58 18 88 18
      v44h-352z"
        />
      </defs>
      <g class="parallax">
        <use xlink:href="#gentle-wave" x="50" y="0" fill="rgba(231,236,253,.5)" />
        <use xlink:href="#gentle-wave" x="50" y="3" fill="rgba(231,236,253,.5)" />
        <use xlink:href="#gentle-wave" x="50" y="6" fill="rgba(231,236,253,.5)" />
      </g>
    </svg>
  </div>
</template>
<style lang="less" scoped>
.body-bg {
  background: -webkit-linear-gradient(left, #e7ecfd, #fff, #e7ecfd);
  /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(left, #e7ecfd, #fff, #e7ecfd);
  /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(left, #e7ecfd, #fff, #e7ecfd);
  /* Firefox 3.6 - 15 */
  background: linear-gradient(to right, #e7ecfd, #fff, #e7ecfd);

  /* 标准的语法（必须放在最后） */
}
.footer-container {
  position: relative;
  .body-bg;
  border-top: 1px solid #ddd;
  h3 {
    text-align: center;
    margin-bottom: 60px;
  }
  .content {
    padding: 50px 0;
    margin: auto;
    line-height: 28px;
    text-align: center;
    color: #6e7fbb;
    position: relative;
    z-index: 100;
    img {
      width: 45px;
      margin: 0 10px;
      &:hover {
        opacity: 0.8;
      }
    }
    .des {
      margin-top: 40px;
      color: #666666;
    }
  }
}

.wave-container {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50%;
  z-index: 10;
}
.parallax > use {
  animation: wave-move 20s linear infinite;
}

.parallax > use:nth-child(1) {
  animation-delay: -2s;
}

.parallax > use:nth-child(2) {
  animation-delay: -2s;
  animation-duration: 10s;
}

.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 10s;
}
@keyframes wave-move {
  0% {
    transform: translate(-90px, 0);
  }

  100% {
    transform: translate(85px, 0);
  }
}
</style>
