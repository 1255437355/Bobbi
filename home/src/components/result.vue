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
    top: 160px;
    width: 366px;
    p {
      margin: 0;
      font-size: 28px;
      line-height: 60px;
      font-weight: 500;
      text-align: center;
    }
  }
}

.tips {
  margin-top: 100px;
  text-align: center;
  p {
    font-size: 22px;
    line-height: 40px;
    font-weight: 500;
    margin: 0;
  }
  .submit {
    margin-top: 100px;
    padding: 0 30px;
    line-height: 42px;
    border: solid 2px black;
    display: inline-block;
    font-size: 20px;
    font-weight: 500;
  }
}
</style>

<template>
  <div>
    <section class="banner">
      <div>
        <p v-for="(item,index) in word.exchange2.banner" :key="index">{{item}}</p>
      </div>
    </section>
    <section class="tips">
      <p v-for="(item,index) in word.exchange2.tips" :key="index">{{item}}</p>
      <div class="submit">{{word.exchange2.confirm}}</div>
    </section>
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
    return {};
  }
};
</script>
