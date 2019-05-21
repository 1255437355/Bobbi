<!-- 城市落地页 -->
<style lang='scss' type='stylesheet/scss' scoped>
.banner_warpper {
  position: relative;
  .info {
    position: absolute;
    right: 75px;
    top: 175px;
    text-align: center;
    h1 {
      font-size: 30px;
      margin: 0;
    }
    p {
      margin: 0;
      font-size: 22px;
      line-height: 40px;
      margin-top: 28px;
      position: relative;
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 2px;
        background: black;
      }
      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 2px;
        background: black;
      }
    }
  }
}
.product_warpper {
  display: flex;
  padding: 65px 50px;
  .img_warpper {
    flex: 0 0 285px;
    img {
      width: 285px;
      display: block;
    }
  }
  .info {
    padding-left: 60px;
    flex: 1;
    h1,
    h2,
    p {
      margin: 0;
      font-size: 24px;
      line-height: 40px;
      font-weight: normal;
    }
    div {
      margin-top: 20px;
      border: solid 0.125rem black;
      display: inline-block;
      font-size: 1.25rem;
      padding: 0.625rem 1.875rem;
    }
  }
}
.howto_warpper {
  .howtoImg {
    width: 750px;
  }
  ul {
    padding: 0 30px;
    font-size: 0;
    li {
      border-bottom: solid 1px black;
      padding: 50px 0;
      &:last-child {
        border-bottom: none;
      }
      .item_warpper {
        padding: 0 80px;
        img {
          width: 100%;
          margin-bottom: 35px;
        }
        p {
          margin: 0;
          font-size: 1.5rem;
          line-height: 1.5;
        }
        div {
          font-size: 20px;
          line-height: 64px;
          width: 340px;
          text-align: center;
          border: solid 2px black;
          font-weight: 500;
          margin-top: 100px;
        }
      }
    }
  }
}
</style>

<template>
  <div>
    <top></top>
    <!-- <section class="banner_warpper" @click="showModel">
      <img :src="cityInfo.banner.src" alt="">
      <div class="info">
        <h1>{{cityInfo.banner.title}}</h1>
        <p>{{cityInfo.banner.text}}</p>
      </div>
    </section>-->
    <section class="product_warpper">
      <div class="img_warpper">
        <img :src="cityInfo.product.src" alt="">
      </div>
      <div class="info">
        <!-- <h1>{{cityInfo.product.subTitle}}</h1> -->
        <h2 v-html="cityInfo.product.title"></h2>
        <div @click="dumpPaid(cityInfo.url,2)">{{cityInfo.product.button}}</div>
      </div>
    </section>
    <section class="howto_warpper">
      <img :src="cityInfo.howtoSrc" alt="" class="howtoImg">
      <ul>
        <li v-for="(item,index) in cityInfo.step" :key="index">
          <div class="item_warpper">
            <img :src="item.src" alt="">
            <p>{{item.title}}</p>
            <p>{{item.text}}</p>
            <div @click="dumpPaid(cityInfo.url,index)">{{cityInfo.buy}}</div>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script type='text/ecmascript-6'>
import store from '../store/store.js';
import { mapState } from 'vuex';
import top from '../comp/top';
export default {
  components: { top },
  store,
  watch: {
    word: {
      handler(newData) {
        this.cityInfo = newData.toCity[this.$route.query.city];
      },
      immediate: true
    },
    // 利用watch方法检测路由变化：
    $route: function(to, from) {
      // 若路由变化则刷新数据视图
      if (to.query.city != from.query.city) {
        this.cityInfo = this.word.toCity[to.query.city];
      }
    }
  },
  data() {
    return {
      cityInfo: {},
      maskVisible: false,
      activeIndex: 0
    };
  },
  computed: {
    ...mapState(['word'])
  },
  methods: {
    dumpPaid(url, index) {
      if (index === 2) {
        this.$router.push('/paid?city=' + url);
      } else {
        this.$router.push('/paid');
      }
    }
  }
};
</script>
