<template>
  <div class="nav-wrap">
    <div class="common-navbar-container" :class="{'active':showNavBg}">
      <div class="common-navbar">
        <a href class="logo-wrap">
          <img src="../../assets/img/logo.png" alt />
          <span>DIPPER</span>
        </a>
        <nav id="nav-links" class="nav-links">
          <div>
            <a
              class="animated fadeInDown active"
              href="#home"
              @click="scrollIntoView"
            >{{$t("links.home")}}</a>
            <a
              class="animated fadeInDown"
              href="#zoology"
              @click="scrollIntoView"
            >{{$t("links.zoology")}}</a>
            <a
              class="animated fadeInDown"
              href="#advantages"
              @click="scrollIntoView"
            >{{$t("links.advantages")}}</a>
            <a
              class="animated fadeInDown"
              href="#model"
              @click="scrollIntoView"
            >{{$t("links.model")}}</a>
            <a class="animated fadeInDown" href="#team" @click="scrollIntoView">{{$t("links.team")}}</a>

            <a class="animated fadeInDown" href="http://explorer.dippernetwork.com" target="_blank">{{$t("links.explorer")}}</a>
            <a class="animated fadeInDown" href="https://github.com/Dipper-Labs/resources" target="_blank">{{$t("links.paper")}}</a>
            <a class="animated fadeInDown" href="https://twitter.com/nokodemionYan" target="_blank">{{$t("links.announcement")}}</a>
            <a class="animated fadeInDown" href="https://docs.dippernetwork.com" target="_blank">{{$t("links.documents")}}</a>

            <!-- <a class="animated fadeInDown" href @click="scrollIntoView">{{$t("links.paper")}}</a> -->
            <a class="animated fadeInDown switch-lang" @click="switchLang">{{$t("lang")}}</a>
          </div>
        </nav>
      </div>
      <!-- <div id="space" class="scrolled"></div> -->
    </div>
    <!-- <div class="navbar-placeholder"></div> -->
    <div class="navbar-h5-container showNavBg" :class="{'active':expandedMenu}">
      <div class="navbar-h5">
        <a href class="logo-wrap">
          <img src="../../assets/img/logo.png" alt />
          <span>{{$t("title")}}</span>
        </a>
        <button
          id="navbar-h5-menu-btn"
          class="hamburger navbar-h5-menu-btn hamburger--collapse"
          :class="{'is-active':expandedMenu}"
          type="button"
          @click="handleExpandedMenu"
        >
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      </div>
      <nav class="navbar-h5-menu">
        <div class="navbar-h5-menu-item">
          <a class="navbar-link" href="#home" @click="scrollIntoView">{{$t("links.home")}}</a>
          <a class="navbar-link" href="#zoology" @click="scrollIntoView">{{$t("links.zoology")}}</a>
          <a class="navbar-link" href="#model" @click="scrollIntoView">{{$t("links.model")}}</a>
          <a class="navbar-link" href="#team" @click="scrollIntoView">{{$t("links.team")}}</a>
          <!-- <a class="navbar-link" href @click="scrollIntoView">{{$t("links.paper")}}</a> -->
          <span class="navbar-link switch-lang" @click="switchLang">{{$t("lang")}}</span>
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
import { scrollTo, offsetTop, hasClass, addClass, removeClass } from "@/utils";
export default {
  props: {
    scrollTop: {
      type: Number,
      default: 0
    }
  },
  watch: {
    scrollTop: function(val) {
      if (val > 60) {
        this.showNavBg = true;
      } else {
        this.showNavBg = false;
      }
    }
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  data() {
    return {
      expandedMenu: false,
      showNavBg: false
    };
  },
  methods: {
    scrollIntoView(e) {
      this.changeLinkStatus(
        document.querySelectorAll(".nav-links a"),
        e.target
      );
      e.preventDefault();
      e.stopPropagation();
      const href = e.target.getAttribute("href");
      const el = href ? document.querySelector(href) : null;
      if (el) {
        // Get the document scrolling element
        const scroller =
          document.scrollingElement ||
          document.documentElement ||
          document.body;
        // scroll heading into view (minus offset to account for nav top height
        scrollTo(scroller, offsetTop(el) - 60, 300, () => {
          // Set a tab index so we can focus header for a11y support
          el.tabIndex = -1;
          // Focus the heading
          //el.focus();
        });
      }
      if (this.expandedMenu) {
        this.expandedMenu = false;
      }
    },
    changeLinkStatus(links, currentLink) {
      links.forEach(item => {
        removeClass(item, "active");
      });
      addClass(currentLink, "active");
    },
    handleExpandedMenu() {
      this.expandedMenu = !this.expandedMenu;
    },
    switchLang() {
      let locale = localStorage.getItem("locale");
      document.title = this.$t("title");
      if (!locale || locale == "zh-CN") {
        localStorage.setItem("locale", "en-US");
      } else {
        localStorage.setItem("locale", "zh-CN");
      }
      this.$i18n.locale = localStorage.getItem("locale");
    }
  }
};
</script>
<style lang="less" scoped>
.nav-wrap {
  position: relative;
  z-index: 999999;
}
.logo-wrap {
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 1.3rem;
  text-decoration: none;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  img {
    width: 4rem;
    margin-right: 0.6rem;
  }
}

.navbar-placeholder {
  height: 130px;
}
.common-navbar-container {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 999;
  transition: all 1s;
  &.active {
    background-color: #403c69;
  }
  //   background-color: rgba(0, 0, 0, 0.1);
  //   background-color: rgba(255, 255, 255, 0.3);
  .common-navbar {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    max-width: 94%;
    margin: 0 auto;
    height: 70px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-font-smoothing: antialiased;
  }
  .nav-links {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: flex-end;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    color: #fff;
    a {
      display: inline-block;
      padding: 16px;
      font-size: 15px;
      font-weight: 400;
      color: #fff;
      text-decoration: none;
      user-select: none;
      cursor: pointer;
    }
    a:hover {
      color: #27d4a2;
    }
    a.active {
      color: #27d4a2;
    }
  }
}
.switch-lang {
  cursor: pointer;
  font-size: 14px;
}
//h5-navbar
.navbar-h5-container {
  z-index: 999;
  display: none;
  position: fixed;
  top: 0;
  width: 100%;
  .navbar-h5 {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    z-index: 9999;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 0 16px;
    height: 60px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    // border-bottom: 1px solid #f2f4f5;
  }
  .navbar-h5-menu-btn {
    padding: 0;
  }
  .navbar-h5-menu {
    text-align: right;
    box-sizing: border-box;
    position: absolute;
    z-index: 99999;
    top: 60px;
    width: 100%;
    height: 40rem;
    padding: 16px;
    opacity: 0;
    pointer-events: none;
    -webkit-transform: translateY(0) scale(0.95);
    transform: translateY(0) scale(0.95);
    -webkit-transform-origin: 50% 0;
    transform-origin: 50% 0;
    visibility: hidden;
    transition: opacity 0.25s, transform 0.25s, visibility 0.25s,
      -webkit-transform 0.25s;
    background: rgba(0, 0, 0, 0.6);
    .navbar-mobile-menu-item {
      border-bottom: 1px solid #f2f4f5;
      margin-bottom: 1em;
    }
    .navbar-link {
      display: block;
      height: 2em;
      line-height: 2em;
      margin-bottom: 1em;
      font-size: 16px;
      font-weight: 300;
      color: #fff;
      text-decoration: none;
      cursor: pointer;
    }
  }
}

@media (max-width: 768px) {
  .common-navbar-container {
    display: none;
  }
  .logo-wrap {
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 1.1rem;
    text-decoration: none;
    img {
      width: 2rem;
      margin-right: 0.6rem;
    }
  }
  .navbar-h5-container {
    display: block;
    transition: all 0.3s;
    &.showNavBg {
      background-color: rgba(0, 0, 0, 0.1);
    }
    &.active {
      background: rgba(0, 0, 0, 0.6);
      .navbar-h5-menu {
        opacity: 1;
        pointer-events: auto;
        -webkit-transform: translateY(0) scale(1);
        transform: translateY(0) scale(1);
        visibility: visible;
      }
    }
  }
}

#space.scrolled {
  position: relative;
  height: 2px;
  width: 100%;
  overflow: auto;
  transition: background-size 0.2s;
  background: radial-gradient(
    50% 0,
    farthest-side,
    rgba(0, 0, 0, 0.05),
    transparent
  );
  background: radial-gradient(
    farthest-side at 50% 0,
    rgba(0, 0, 0, 0.05),
    transparent
  );
  background-repeat: no-repeat;
  background-size: 100% 2px;
}

/*!
 * Hamburgers
 * @description Tasty CSS-animated hamburgers
 * @author Jonathan Suh @jonsuh
 * @site https://jonsuh.com/hamburgers
 * @link https://github.com/jonsuh/hamburgers
 */
.hamburger {
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, -webkit-filter;
  transition-property: opacity, filter;
  transition-property: opacity, filter, -webkit-filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;
  outline: none;
}

.hamburger:hover {
  opacity: 0.7;
}

.hamburger-box {
  width: 26px;
  height: 26px;
  display: inline-block;
  position: relative;
}

.hamburger-inner {
  display: block;
  top: 50%;
  margin-top: -2px;
}

.hamburger-inner,
.hamburger-inner:after,
.hamburger-inner:before {
  width: 26px;
  height: 1px;
  background-color: #fff;
  border-radius: 4px;
  position: absolute;
  transition-property: -webkit-transform;
  transition-property: transform;
  transition-property: transform, -webkit-transform;
  transition-duration: 0.15s;
  transition-timing-function: ease;
}

.hamburger-inner:after,
.hamburger-inner:before {
  content: "";
  display: block;
}

.hamburger-inner:before {
  top: -10px;
}

.hamburger-inner:after {
  bottom: -10px;
}

.hamburger--collapse .hamburger-inner {
  top: auto;
  bottom: 0;
  transition-duration: 0.13s;
  transition-delay: 0.13s;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.hamburger--collapse .hamburger-inner:after {
  top: -20px;
  transition: top 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1) 0.2s,
    opacity 0.1s linear;
}

.hamburger--collapse .hamburger-inner:before {
  transition: top 0.12s cubic-bezier(0.33333, 0.66667, 0.66667, 1) 0.2s,
    -webkit-transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  transition: top 0.12s cubic-bezier(0.33333, 0.66667, 0.66667, 1) 0.2s,
    transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  transition: top 0.12s cubic-bezier(0.33333, 0.66667, 0.66667, 1) 0.2s,
    transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19),
    -webkit-transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.hamburger--collapse.is-active .hamburger-inner {
  -webkit-transform: translate3d(0, -10px, 0) rotate(-45deg);
  transform: translate3d(0, -10px, 0) rotate(-45deg);
  transition-delay: 0.22s;
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}

.hamburger--collapse.is-active .hamburger-inner:after {
  top: 0;
  opacity: 0;
  transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
    opacity 0.1s linear 0.22s;
}

.hamburger--collapse.is-active .hamburger-inner:before {
  top: 0;
  -webkit-transform: rotate(-90deg);
  transform: rotate(-90deg);
  transition: top 0.1s cubic-bezier(0.33333, 0, 0.66667, 0.33333) 0.16s,
    -webkit-transform 0.13s cubic-bezier(0.215, 0.61, 0.355, 1) 0.25s;
  transition: top 0.1s cubic-bezier(0.33333, 0, 0.66667, 0.33333) 0.16s,
    transform 0.13s cubic-bezier(0.215, 0.61, 0.355, 1) 0.25s;
  transition: top 0.1s cubic-bezier(0.33333, 0, 0.66667, 0.33333) 0.16s,
    transform 0.13s cubic-bezier(0.215, 0.61, 0.355, 1) 0.25s,
    -webkit-transform 0.13s cubic-bezier(0.215, 0.61, 0.355, 1) 0.25s;
}
</style>
