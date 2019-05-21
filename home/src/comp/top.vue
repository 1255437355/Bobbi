<!-- 头部下拉 -->

<style lang='scss' type='stylesheet/scss' scoped>
.top {
  display: flex;
  line-height: 5.25rem;
  background: black;
  color: white;
  text-align: center;
  font-size: 22px;
  position: relative;
  // border-bottom: solid 1px #313131;
  top: -1px;
  .left {
    flex: 1;
    position: relative;
    &:after {
      content: "";
      width: 3px;
      transform: scaleX(0.5);
      height: 32px;
      background: #313131;
      position: absolute;
      bottom: 15px;
      right: -1px;
    }
  }
  .right {
    flex: 1;
  }

  #rightSelect {
    position: absolute;
    right: 0;
    top: 5.25rem;
    width: 50%;
    background: rgba(0, 0, 0, 0.9);
    z-index: 9;
    line-height: 60px;
  }
  #leftSelect {
    position: absolute;
    left: 0;
    top: 5.25rem;
    width: 50%;
    background: rgba(0, 0, 0, 0.9);
    z-index: 9;
    line-height: 60px;
  }
}
</style>

<template>
  <div class="top">
    <div class="left" @click="showHowToList=!showHowToList;showList=false">{{word.top.cityListName}}</div>
    <div
      class="right"
      @click="showList=!showList;showHowToList=false"
    >{{word.top.cityGuideListName}}</div>
    <ul id="rightSelect" v-if="showList">
      <li v-for="(item,index) in word.top.list" :key="index" @click="dumpTo(item.url)">{{item.name}}</li>
    </ul>
    <ul id="leftSelect" v-if="showHowToList">
      <li
        v-for="(item,index) in word.top.list"
        :key="index"
        @click="dumpToHowTo(item.url)"
      >{{item.name}}</li>
    </ul>
  </div>
</template>

<script type='text/ecmascript-6'>
import store from "../store/store";
import { mapState } from "vuex";
export default {
  store,
  computed: {
    ...mapState(["word"])
  },
  data() {
    return {
      showList: false,
      showHowToList: false
    };
  },
  methods: {
    dumpTo(url) {
      this.$router.push("/city?city=" + url);
    },
    dumpToHowTo(url) {
      this.showList = this.showHowToList = false;
      this.$router.push("/toCity?city=" + url);
    }
  }
};
</script>
