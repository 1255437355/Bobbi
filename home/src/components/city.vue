<!--  -->

<style lang='scss' type='stylesheet/scss' scoped>
.mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background: white;
  .mask_item_bg {
    background-repeat: no-repeat;
    background-position: center left;
    background-size: 750px auto;
    position: absolute;
    top: 0;
    left: 200%;
    right: -200%;
    bottom: 0;
    transition: all 0.4s linear;
    z-index: 1;
    .img_item {
      position: absolute;
      left: 0;
      top: 50%;
      margin-top: -667px;
      z-index: 1;
    }
  }
  .close {
    padding: 40px;
    z-index: 999;
    position: relative;
  }
}
* {
  touch-action: pan-y;
}
</style>

<template>
  <div>
    <div class="mask" @touchmove.prevent @click="dump">
      <img src="../assets/close.png" alt="" class="close" @click.native="closeModel">
      <div class="dumpMask" @click="dump"></div>
      <div
        v-for="(item,index) in cityInfo.guide"
        :key="index"
        :style="(activeIndex===index?'left:0;right:0':index<activeIndex?'left:-100%;right:-100%':'left:100%;right:100%')"
        class="mask_item_bg"
        @touchstart.capture="touchStart"
        @touchend.capture="touchEnd"
      >
        <div
          class="img_warpper"
          :style="activeIndex===index?'left:0;right:0':index<activeIndex?'left:-100%;right:-100%':'left:100%;right:100%'"
          @click.native="dump"
        >
          <img
            :src="item.wordSrc"
            alt=""
            v-if="item.wordSrc"
            class="imgItem"
            :style="
            'position:absolute;z-index:2;'+(item.wordTop?('top:'+item.wordTop+'px;'):('bottom:'+item.wordBottom+'px;'))+(item.wordLeft?('left:'+item.wordLeft+'px'):('right:'+item.wordRight+'px'))
            "
          >
          <img :src="item.src" alt="" class="img_item">
        </div>
      </div>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
import store from '../store/store';
import { mapState } from 'vuex';
export default {
  store,
  watch: {
    word: {
      handler(newData) {
        this.cityInfo = newData.toCity[this.$route.query.city];
      },
      immediate: true
    }
  },
  computed: {
    ...mapState(['word'])
  },
  data() {
    return {
      activeIndex: 0,
      cityInfo: {}
    };
  },
  methods: {
    dump() {
      this.$router.go(-1);
    },
    closeModel() {
      console.log('close');
      this.$router.back(-1);
    },
    touchStart(e) {
      // 记录初始位置
      e.preventDefault(); // 阻止默认事件，滚动等
      this.startX = e.touches[0].clientX; // 记录滑动开始的位置
    },
    touchEnd(e) {
      e.preventDefault(); // 阻止默认事件
      // 记录结束位置
      this.endX = e.changedTouches[0].clientX;
      // 左滑
      if (this.startX - this.endX > 30) {
        if (this.activeIndex >= this.cityInfo.guide.length - 1) {
          return;
        }

        this.activeIndex++;
      }
      if (
        this.startX === this.endX &&
        this.activeIndex === this.cityInfo.guide.length - 1
      ) {
        this.$route.query.city === 'seoul'
          ? this.$router.push('/paid?city=seoul')
          : this.$router.push('/paid');
      }
      // 右滑
      if (this.startX - this.endX < -30) {
        if (this.activeIndex === 0) {
          return;
        }

        this.activeIndex--;
      }
      this.startX = 0;
      this.endX = 0;
    }
  }
};
</script>
