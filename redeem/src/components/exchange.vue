<!-- 兑换 -->

<style lang='scss' type='stylesheet/scss' scoped>
.banner {
  background: url('../assets/exchange/banner.png');
  background-size: 750px 630px;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 630px;
  flex: 0 0 630px;
}
.info {
  text-align: center;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .tips {
    p {
      font-size: 28px;
      line-height: 2;
      margin: 0 50px 50px 50px;
      font-weight: bold;
    }
    input {
      line-height: 52px;
      width: 300px;
      text-align: center;
      font-size: 20px;
      border: solid 2px black;
      font-weight: 500;
      outline: none;
      box-sizing: border-box;
    }
    div {
      width: 300px;
      line-height: 52px;
      font-size: 20px;
      border: solid 2px black;
      margin: 0 auto;
      margin-top: 30px;
    }
  }
}

.mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  // text-align:

  .closeMask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: black;
    z-index: 0;
    opacity: 0;
  }

  .content {
    position: relative;
    z-index: 1;
    background: black;
    color: white;
    display: inline-block;
    width: 415px;
    height: 245px;
    margin: 0 auto;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;

    font-size: 20px;
    font-weight: 500;
    line-height: 50px;
    padding: 20px 30px 0 30px;
    box-sizing: border-box;

    .close {
      position: absolute;
      right: 0;
      top: 0;
      padding: 20px;
    }
  }
}
</style>

<template>
  <div style="flex:1 1 auto; display: flex; flex-direction: column;">
    <section class="banner"></section>
    <section class="info">
      <div class="tips">
        <p v-html="word.exchange.title"></p>
        <input type="tel" :placeholder="word.exchange.placeholader" v-model="key" @blur="blur">
        <div @click="submit">{{word.exchange.confirm}}</div>
      </div>
    </section>
    <div class="mask" v-if="showAlert">
      <div class="closeMask" @click="showAlert=false"></div>
      <div class="content">
        <div class="close" @click="showAlert=false">
          <img src="../assets/close-white.png">
        </div>
        <span>{{errorWord}}</span>
      </div>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
import axios from 'axios';
import store from '../store/store.js';
import { mapState } from 'vuex';
export default {
  store,
  computed: {
    ...mapState(['word'])
  },
  data() {
    return {
      errorWord: 'error',
      showAlert: false,
      key: '',
      result: ['111', '222', '333'],
      exchanged: ['444', '555', '666'],
      originScrollTop: 0
    };
  },
  created() {},
  methods: {
    async submit() {
      this.key = this.key.replace(/\s+/g, '');
      if (!this.key) {
        this.errorWord = this.word.exchange.code4;
        this.showAlert = true;
        return;
      }
      let res = await axios.get(
        'http://www.beautywelltraveled.com/interface/code.php?code=' +
          this.key +
          '&method=verify'
      );

      switch (res.data.status) {
        case 20001:
          this.errorWord = this.word.exchange.code2;
          this.showAlert = true;
          break;
        case 200:
          this.$router.push('/intro?code=' + this.key);
          break;
      }
    },
    blur() {
      window.scrollTo(100, 500);
    }
  }
};
</script>
