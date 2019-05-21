<!-- 首页 -->
<style lang='scss' type='stylesheet/scss' scoped>
.banner_item {
  position: relative;

  .img {
    display: inline-block;
    width: 100%;
    vertical-align: top;
    position: absolute;
    top: 0;
    left: 0;
  }

  .btn {
    position: absolute;
    top: 5.75rem;
    right: 3rem;
    text-align: center;
    p {
      font-size: 2rem;
      line-height: 1.5;
      color: black;
      margin: 0;
      span {
        font-size: 1.2em;
      }
    }
    .button {
      margin-top: 20px;
      border: solid 0.125rem black;
      display: inline-block;
      font-size: 1.25rem;
      padding: 0.625rem 1.875rem;
      /*font-weight: bold;
      line-height: 3rem;
      letter-spacing: 0.2rem;
      padding: 0 12px 0 20px;*/
    }
  }
}

.game_warpper {
  width: 100%;
  height: 25.4375rem;
  background: url("../assets/index/game_bg.png");
  color: white;
  text-align: center;
  padding-top: 95px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;

  p {
    font-size: 32px;
    line-height: 1.5em;
    margin: 0;
  }
  .start {
    font-size: 20px;
    border: solid 2px white;
    line-height: 42px;
    display: inline-block;
    padding: 0 20px;
    margin-top: 50px;
  }
  #car {
    position: absolute;
    bottom: 0;
    left: -312px;
    transition: all 4s linear;
    img {
      width: 312px;
    }
  }
}

.products_warpper {
  padding: 0 50px;
  .item_warpper {
    padding: 60px 0;
    border-bottom: solid 1px #555;
    display: flex;
    &:last-of-type {
      border-bottom: none;
    }
    .left {
      flex: 0 0 285px;
      img {
        display: inline-block;
        width: 285px;
      }
    }
    .right {
      padding-top: 0px;
      padding-left: 50px;
      flex: 1;
      .subtitle,
      .title {
        font-size: 25px;
        line-height: 40px;
      }
      .desc {
        font-size: 1.25rem;
        line-height: 1.5;
        margin: 0.625rem 0 1.25rem 0;
        /*padding: 10px 0;*/
      }
      .button {
        /*font-size: 20px;
        line-height: 42px;
        padding: 0 10px;
        border: solid 2px black;
        display: inline-block;
        max-width: 130px;
        text-align: center;*/
        border: solid 0.125rem black;
        display: inline-block;
        font-size: 1.25rem;
        padding: 0.625rem 1.875rem;
        /*margin-top: 10px;*/
      }
    }
  }
}

.index_title {
  font-size: 2.625rem;
  line-height: 2;
  text-align: center;
  margin: 2.625rem auto 0 auto;
  position: relative;
  display: table;
}

.index_title:before,
.index_title:after {
  content: " ";
  width: 100%;
  height: 0.125rem;
  background-color: black;
  position: absolute;
  left: 0;
}

.index_title:before {
  top: 0;
}

.index_title:after {
  bottom: 0;
}

#bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 600px;
  background: black;
  z-index: -1;
}

.swiper-pagination {
  .swiper-pagination-bullet {
    margin: 0 8px;
    width: 15px;
    height: 15px;
  }
}

.test {
  margin: 0 8px;
  width: 15px;
  height: 15px;
}

// .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet

// .swiper-pagination-bullet-active
</style>

<style lang='scss' type='stylesheet/scss'>
.my-bullet-active {
  background: red !important;
  width: 15px;
  height: 15px;
  opacity: 1;
}
.bullet-class {
  width: 15px;
  height: 15px;
  margin: 0 8px;
  display: inline-block;
  border-radius: 100%;
  background: #000;
  opacity: 0.4;
}
</style>

<template>
  <div>
    <div id="bg"></div>
    <top></top>
    <swiper :options="swiperOption" ref="swiperIndexBanner" style="height: 413px">
      <swiper-slide
        v-for="(item,index) in word.index.banner"
        :key="index"
        class="imgClick"
        :data-url="item.url"
      >
        <div class="banner_item">
          <img :src="item.src" alt class="img">
          <div class="btn">
            <p v-html="item.text"></p>
            <div class="button">{{item.button}}</div>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination" ref="pagination"></div>
    </swiper>
    <section class="game_warpper">
      <p v-html="word.index.start.text"></p>
      <div class="start" @click="directToGame">{{word.index.start.button}}</div>
      <div id="car">
        <img src="../assets/car.png" alt>
      </div>
    </section>
    <section class="index_title">{{word.index.title}}</section>
    <section class="products_warpper">
      <div v-for="(item,index) in word.index.products" :key="index" class="item_warpper">
        <div class="left">
          <img :src="item.src" alt>
        </div>
        <div class="right">
          <div class="title" v-html="item.title"></div>
          <div class="desc">{{item.desc}}</div>
          <div class="button" @click="dumpPaid(item.url)">{{item.button}}</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import store from "../store/store.js";
import { mapState } from "vuex";
import top from "../comp/top";

export default {
  components: { top },
  store,
  data() {
    return {
      swiperOption: {
        height: 413,
        loop: true,
        autoplay: {
          delay: 10000,
          stopOnLastSlide: false,
          disableOnInteraction: true
        },
        pagination: {
          el: ".swiper-pagination",
          bulletActiveClass: "my-bullet-active",
          bulletClass: "bullet-class"
        },
        on: {
          // 使用es6的箭头函数，使this指向vue对象
          change: () => {
            // 通过$refs获取对应的swiper对象
            let swiper = this.$refs.mySwiper.swiper;
            let i = swiper.activeIndex;
            // let flag = this.imgList[i];
            console.log(i);

            // location.href = flag.url;
          }
        }
      }
    };
  },
  computed: {
    ...mapState(["word"]),
    swiper() {
      return this.$refs.swiperIndexBanner.swiper;
    }
  },
  mounted() {
    let a = document.getElementsByClassName("imgClick");
    const that = this;
    for (let i = 0; i < a.length; i++) {
      a[i].addEventListener("click", function() {
        that.$router.push("/toCity?city=" + a[i].getAttribute("data-url"));
      });
    }

    let bullets = this.$refs.pagination.getElementsByTagName("span");

    let car = document.getElementById("car");

    this.$nextTick(_ => {
      setTimeout(() => {
        car.style.transition = "all 0s";
        car.style.left = "-312px";
      }, 4000);
      car.style.left = "800px";
      setInterval(() => {
        setTimeout(() => {
          car.style.transition = "all 4s linear";
          car.style.left = "800px";
        }, 100);

        setTimeout(() => {
          car.style.transition = "all 0s";
          car.style.left = "-312px";
        }, 4000);
      }, 5000);
    });
  },
  updated() {
    if (this.swiper) {
      this.$nextTick(() => {
        this.swiper.loopDestroy();
        this.swiper.loopCreate();
      });
    }
  },
  methods: {
    dumpCity(url) {
      this.$router.push("/toCity?city=" + url);
    },
    dumpPaid(url) {
      this.$router.push("/paid?city=" + url);
    },
    directToGame() {
      window.location.href = "/game/";
    }
  }
};
</script>
