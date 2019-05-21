<!-- 兑换 -->

<style lang='scss' type='stylesheet/scss' scoped>
.banner {
  background: url('../assets/exchange/banner.png');
  background-size: 750px 630px;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 630px;
}
.info {
  text-align: center;
  .tips {
    margin-top: 70px;
    p {
      font-size: 28px;
      line-height: 50px;
      margin: 0;
      font-weight: 500;
    }
    input {
      line-height: 42px;
      width: 230px;
      text-align: center;
      font-size: 20px;
      border: solid 2px black;
      margin-top: 60px;
      font-weight: 500;
      outline: none;
    }
    div {
      width: 230px;
      line-height: 42px;
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
  <div>
    <section class="banner"></section>
    <section class="info">
      <div class="tips">
        <p v-for="(item,index) in word.exchange.title" :key="index">{{item}}</p>
        <input type="text" placeholder="输入兑换码" v-model="key">
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
import store from '../store/store.js';
import { mapState } from 'vuex';
export default {
  store,
  computed: {
    ...mapState(['word'])
  },
  data() {
    return {
      errorWord: '错误错误错误错误错误错误错误错误错误错误',
      showAlert: false,
      key: '',
      result: ['111', '222', '333'],
      exchanged: ['444', '555', '666']
    };
  },
  methods: {
    submit() {
      this.key = this.key.replace(/\s+/g, '');
      if (this.key === '') {
        this.errorWord = this.word.exchange.noneError;
        this.showAlert = true;
        return;
      }
      if (this.exchanged.indexOf(this.key) > -1) {
        this.errorWord = this.word.exchange.changedError;
        this.showAlert = true;
        return;
      }
      if (this.result.indexOf(this.key) === -1) {
        this.errorWord = this.word.exchange.notFindError;
        this.showAlert = true;
        return;
      }

      this.$router.push('/result?key=' + this.key);
    }
  }
};
</script>
