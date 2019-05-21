<!-- 兑换结果页面 -->

<style lang='scss' type='stylesheet/scss' scoped>
.banner {
  background: url('../assets/exchange/banner2.png');
  background-size: 750px 490px;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 490px;
  position: relative;
  div {
    position: absolute;
    right: 0;
    top: 100px;
    width: 500px;
    p {
      margin: 0;
      font-size: 15px;
      line-height: 40px;
      font-weight: 500;
      text-align: center;
      &#title {
        font-size: 28px;
        line-height: 45px;
        span {
          position: relative;
          display: inline-block;
          &:after {
            position: absolute;
            content: '';
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: black;
          }
          &:before {
            position: absolute;
            content: '';
            bottom: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: black;
          }
        }
      }
      &#subTitle {
        font-size: 28px;
        font-weight: bold;
        margin: 30px 0;
      }
    }
  }
}

.tips {
  text-align: center;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    font-size: 28px;
    line-height: 2;
    font-weight: bold;
    margin: 0 50px 50px 50px;
  }
  .submit {
    display: inline-block;
    font-weight: bold;
    width: 300px;
    line-height: 52px;
    font-size: 20px;
    border: solid 2px black;
    margin: 30px auto 0 auto;
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
  <div style="flex: 1 1 auto; display: flex; flex-direction: column;">
    <section class="banner">
      <div>
        <p id="title">
          <span>{{word.exchange2.title}}</span>
        </p>
        <p id="subTitle">{{word.exchange2.subTitle}}</p>
        <p class="desc" v-html="word.exchange2.desc"></p>
      </div>
    </section>
    <section class="tips">
      <p v-html="word.exchange2.tips"></p>
      <div class="submit" @click="submit">{{word.exchange2.confirm}}</div>
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
import axios from 'axios'
import { mapState } from 'vuex';
export default {
  store,
  computed: {
    ...mapState(['word'])
  },
  data() {
    return {
      showAlert: false,
      errorWord: 'error'
    };
  },
  methods: {
    async submit() {
      this.code = this.$route.query.code;
      let res = await axios.get(
        'http://www.beautywelltraveled.com/interface/code.php?code=' + this.code
      );

      if (parseInt(res.data.status) === 200) {
        this.errorWord = this.word.exchange.code0;
        this.showAlert = true;
      } else {
        this.errorWord = this.word.exchange.code2;
        this.showAlert = true;
      }
    }
  }
};
</script>
