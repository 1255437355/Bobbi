<!-- 兑换页面 -->

<style lang='scss' type='stylesheet/scss' scoped>
.title {
  margin: 100px 50px 50px 50px;
  h1 {
    text-align: center;
    font-size: 30px;
    line-height: 60px;
    margin: 0;
  }
}
.tips {
  border: solid 2px black;
  margin: 30px 70px 30px 70px;
  padding: 25px 40px 25px 60px;
  box-sizing: border-box;
  li {
    font-size: 20px;
    line-height: 35px;
    font-weight: 500;
    list-style: decimal;
  }
}

.location {
  margin: 0 70px;
  position: relative;
  dl {
    background-color: #f8f8f8;
    font-size: 28px;
    line-height: 45px;
    text-align: center;
    margin-bottom: 30px;
  }
  dt {
    width: 610px;
    line-height: 135px;
    font-weight: bold;
    text-align: center;
    border: solid 2px black;
    font-size: 30px;
    box-sizing: border-box;
    z-index: 4;
    transition: all 0.2s;
  }
  dl.active dt {
    background: black;
    color: white;
    top: 0;
  }
  dl.active dd {
    display: block;
  }
  dd {
    display: none;
    &:first-of-type {
      padding-top: 30px;
    }
    &:last-of-type {
      padding-bottom: 30px;
    }
    a {
      color: black;
    }
  }
}
</style>

<template>
  <div v-if="word.paid">
    <section class="title">
      <h1 v-html="word.paid.title"></h1>
    </section>
    <ul class="tips">
      <li v-for="(item,index) in word.paid.tips" :key="index">{{item}}</li>
    </ul>
    <section class="location">
      <dl
        v-for="(item,index) in word.paid.location.slice(limitFrom, limitTo)"
        :key="index"
        :class="activeIndex===index?'active':''"
        :style="activeIndex===index?'top:0':'top:'+(index*165)+'px'"
        v-show="activeIndex===index||activeIndex===-1"
      >
        <dt @click="chooseLocation(index,item)">{{item.name}}</dt>
        <dd v-for="(item,index) in item.children" :key="index">
          <a :href="item.url">{{item.name}}</a>
        </dd>
      </dl>
    </section>
  </div>
</template>

<script type='text/ecmascript-6'>
import store from "../store/store.js";
import { mapState } from "vuex";
export default {
  store,
  computed: {
    ...mapState(["word"])
  },
  created() {
    this.fetchData();
  },
  watch: {
    $route: "fetchData",
    word: {
      handler(newData) {
        console.log(newData);
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
      activeIndex: -1,
      activeChildren: [],
      limitFrom: 0,
      limitTo: 4
    };
  },
  methods: {
    chooseLocation(index, item) {
      if (this.activeIndex === index) {
        this.activeIndex = -1;
      } else {
        this.activeIndex = index;
      }
    },
    fetchData() {
      switch (this.$route.query.city) {
        case "seoul":
          this.limitFrom = 3;
          this.limitTo = 4;
          break;
        default:
          this.limitFrom = 0;
          this.limitTo = 3;
          break;
      }
    }
  }
};
</script>
