<template>
  <div id="home" class="index-page">
    <NavBar :scrollTop="scrollTop"></NavBar>
    <!--banner-->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide swiper-slide-1">
          <div class="banner-wrap">
            <div class="content">
              <div class="slogen animated fadeInDown">
                <div class="slogen-1">
                  <p class="p-1">DIPPER NETWORK</p>
                  <p class="p-2">{{$t('banner.sologen1.p2')}}</p>
                </div>
              </div>
            </div>
          </div>
          <img v-if="!isH5" class="slide-cont" src="../../assets/img/banner/b_bg_1.png" alt />
          <img v-if="isH5" class="slide-cont" src="../../assets/img/banner/b_bg_1_h5.png" alt />
        </div>
        <div class="swiper-slide swiper-slide-2">
          <div class="banner-wrap">
            <div class="content">
              <div class="slogen animated fadeInDown">
                <div class="slogen-2">
                  <p class="p-1">DIPPER DAPPs</p>
                  <p class="p-2">{{$t('banner.sologen2.p2')}}</p>
                </div>
              </div>
            </div>
          </div>
          <img v-if="!isH5" class="slide-cont" src="../../assets/img/banner/b_bg_2.png" alt />
          <img v-if="isH5" class="slide-cont" src="../../assets/img/banner/b_bg_2_h5.png" alt />
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <!--关于dipper network-->
    <div id="about" class="about-wrap container">
      <div class="content commom-cont">
        <div class="des-wrap">
          <div class="des-1 section-t animate-fadeInUp animated">{{$t('about.title1')}}</div>
          <div class="des-2 section-t-2 animate-fadeInUp animated">
            <p>{{$t('about.title2')}}</p>
          </div>
          <div class="des-3 section-t-3 animate-fadeInUp animated">
            <p>{{$t('about.p1')}}</p>
          </div>
        </div>
        <div class="img-wrap">
          <img class="animate-fadeInUp animated" src="../../assets/img/about.png" alt />
        </div>
      </div>
    </div>
    <!--应用生态-->
    <div id="zoology" class="zoology-wrap container">
      <div class="content commom-cont">
        <h2 class="content-title">{{$t('zoology.title1')}}</h2>
        <div class="item-wrap">
          <div class="item">
            <div class="img-wrap">
              <img src="../../assets/img/zoology/1.png" alt />
            </div>
            <p>{{$t('zoology.item1')}}</p>
          </div>
          <div class="item">
            <div class="img-wrap">
              <img src="../../assets/img/zoology/2.png" alt />
            </div>
            <p>{{$t('zoology.item2')}}</p>
          </div>
          <div class="item">
            <div class="img-wrap">
              <img src="../../assets/img/zoology/3.png" alt />
            </div>
            <p>{{$t('zoology.item3')}}</p>
          </div>
          <div class="item">
            <div class="img-wrap">
              <img src="../../assets/img/zoology/4.png" alt />
            </div>
            <p>{{$t('zoology.item4')}}</p>
          </div>
          <div class="item">
            <div class="img-wrap">
              <img src="../../assets/img/zoology/5.png" alt />
            </div>
            <p>{{$t('zoology.item5')}}</p>
          </div>
        </div>
        <div class="des">
          <p>{{$t('zoology.p1')}}</p>
          <p>{{$t('zoology.p2')}}</p>
        </div>
      </div>
    </div>
    <!--项目优势-->
    <div id="advantages" class="advantages-wrap container">
      <div class="content commom-cont">
        <h2 class="content-title">{{$t('advantages.title1')}}</h2>
        <div class="item-wrap">
          <div class="des-wrap animate-fadeInUp animated">
            <h3>{{$t('advantages.item1.title')}}</h3>
            <p>{{$t('advantages.item1.p')}}</p>
          </div>
          <div class="img-wrap section-t animate-fadeInUp animated">
            <img class="animate-fadeInUp animated" src="../../assets/img/advantages/1.png" alt />
          </div>
        </div>
        <div class="item-wrap item-wrap-center">
          <div class="img-wrap section-t animate-fadeInUp animated">
            <img class="animate-fadeInUp animated" src="../../assets/img/advantages/2.png" alt />
          </div>
          <div class="des-wrap animate-fadeInUp animated">
            <h3>{{$t('advantages.item2.title')}}</h3>
            <p>{{$t('advantages.item2.p')}}</p>
          </div>
        </div>
        <div class="item-wrap">
          <div class="des-wrap animate-fadeInUp animated">
            <h3>{{$t('advantages.item3.title')}}</h3>
            <p>{{$t('advantages.item3.p')}}</p>
          </div>
          <div class="img-wrap section-t animate-fadeInUp animated">
            <img class="animate-fadeInUp animated" src="../../assets/img/advantages/3.png" alt />
          </div>
        </div>
      </div>
    </div>
    <!--发展模式-->
    <div id="model" class="model-wrap container">
      <div class="content commom-cont">
        <h2 class="content-title">{{$t('model.title1')}}</h2>
        <div class="item-wrap">
          <div class="item">
            <img class="animate-fadeInUp animated" src="../../assets/img/model/1.png" alt />
            <div class="des">
              <h3>{{$t('model.item1.title')}}</h3>
              <p>{{$t('model.item1.p')}}</p>
            </div>
          </div>
          <div class="item">
            <img class="animate-fadeInUp animated" src="../../assets/img/model/2.png" alt />
            <div class="des">
              <h3>{{$t('model.item2.title')}}</h3>
              <p>{{$t('model.item2.p')}}</p>
            </div>
          </div>
          <div class="item">
            <img class="animate-fadeInUp animated" src="../../assets/img/model/3.png" alt />
            <div class="des">
              <h3>{{$t('model.item3.title')}}</h3>
              <p>{{$t('model.item3.p')}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--road map-->
    <div id="roadmap" class="roadmap-wrap container">
      <div class="content commom-cont">
        <div class="des-1 section-t animate-fadeInUp animated">
          <h2 class="content-title">{{$t('roadMap.title')}}</h2>
        </div>
        <div class="time-line-wrap">
          <time-line :roadMap="roadMap"></time-line>
        </div>
        <div class="roadmap-bg"></div>
      </div>
    </div>
    <!--团队介绍-->
    <div id="team" class="team-wrap container">
      <div class="content commom-cont">
        <div class="section-t animate-fadeInUp animated">
          <h2 class="content-title">{{$t('team.title')}}</h2>
        </div>
        <div class="des-2">
          <div class="intr-cont item item-1 animate-fadeInUp animated">
            <img src="../../assets/img/h_11.jpeg" alt />
            <div class="intr">
              <p class="intr-title">{{ $t("team.intr1.p1")}}</p>
              <p>{{ $t("team.intr1.p2")}}</p>
            </div>
          </div>
          <div class="intr-cont item animate-fadeInUp animated">
            <img src="../../assets/img/h_22.jpeg" alt />
            <div class="intr">
              <p class="intr-title">{{ $t("team.intr2.p1")}}</p>
              <p>{{ $t("team.intr2.p2")}}</p>
            </div>
          </div>
          <div class="intr-cont item animate-fadeInUp animated">
            <img src="../../assets/img/h_33.jpeg" alt />
            <div class="intr">
              <p class="intr-title">{{ $t("team.intr3.p1")}}</p>
              <p>{{ $t("team.intr3.p2")}}</p>
            </div>
          </div>
          <div class="intr-cont item animate-fadeInUp animated">
            <img src="../../assets/img/h_44.jpeg" alt />
            <div class="intr">
              <p class="intr-title">{{ $t("team.intr4.p1")}}</p>
              <p>{{ $t("team.intr4.p2")}}</p>
            </div>
          </div>
        </div>
      </div>
      <img src="../../assets/img/team_1.png" alt class="bg-1" />
      <img src="../../assets/img/team_2.png" alt class="bg-2" />
    </div>
    <!--footer-->
    <footer-bar></footer-bar>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import NavBar from "@/pages/components/navBar";
import FooterBar from "@/pages/components/FooterBar";
import TimeLine from "@/pages/components/TimeLine.vue";
import { isH5 } from "@/utils";

export default {
  name: "index",
  components: {
    NavBar,
    TimeLine,
    FooterBar
  },
  data() {
    return {
      scrollTop: 0,
      downloadUrl: "",
      wxmask: false,
      isH5: isH5(),
      roadMap: this.setRoadMap(5)
    };
  },
  mounted() {
    let that = this;
    document.title = this.$t("title");

    setTimeout(() => {
      that.initSwiper();
    }, 1000);

    //初始化滚动
    that.$nextTick(() => {
      const nodeArray = [...document.querySelectorAll(".animate-fadeInUp")];
      ScrollReveal().reveal(nodeArray, {
        beforeReveal: that.addAnimationUp
      });
    });
    that.$nextTick(() => {
      const nodeArray = [...document.querySelectorAll(".animate-fadeInUp")];
      ScrollReveal().reveal(nodeArray, {
        beforeReveal: that.addAnimationDown
      });
    });

    //监听滚动
    window.scrollTo(0, 0);
    window.addEventListener("scroll", this.handleScroll);
  },
  created() {
    //this.msg()
  },
  methods: {
    setRoadMap(n, currentIndex) {
      let tempArr = [];
      for (let i = 1; i <= n; i++) {
        tempArr.push({
          name: `map${i}`,
          active: i == currentIndex
        });
      }
      return tempArr;
    },
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.scrollTop = scrollTop;
    },
    scrollspy() {
      console.log(1);
    },
    addAnimationUp(el) {
      el.classList.remove("fadeInUp");
      el.classList.add("fadeInUp");
    },
    addAnimationDown(el) {
      el.classList.remove("fadeInUp");
      el.classList.add("fadeInUp");
    },
    initSwiper() {
      let mySwiper = new Swiper(".swiper-container", {
        // direction: 'vertical',
        loop: true,
        autoplay: true,
        speed: 3000,
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination"
        },
        effect: "fade",
        fadeEffect: {
          crossFade: true
        },
        // 如果需要滚动条
        scrollbar: {
          el: ".swiper-scrollbar"
        }
      });
    },
    jumpTo(routerName) {
      // 路由跳转
      this.$router.push(routerName);
    },
    msg() {
      this.$layer.msg("为了更好的体验，敬请期待～");
    },
    removeStorage() {
      location.removeItem("phone");
    }
  }
};
</script>
<style lang="less" scoped>
@import "./index.less";
</style>
<style>
.swiper-pagination-bullet {
  background: #27d4a2 !important;
}
</style>
