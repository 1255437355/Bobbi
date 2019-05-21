<style lang='scss' scoped>
header {
  background: black;
  height: 68px;
  position: relative;

  .home {
    width: 40px;
    height: 32px;
    display: inline-block;
    position: absolute;
    top: 0;
    padding: 18px 40px;
    left: 0;
  }
  .logo {
    width: 242px;
    height: 28px;
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -121px;
    margin-top: -14px;
  }
  .language {
    display: inline-block;
    color: white;
    position: absolute;
    font-size: 20px;
    font-weight: bold;
    line-height: 68px;
    padding: 0 40px;
    right: 0;
    select {
      outline: none;
      font-size: 20px;
    }
    img {
      display: inline-block;
      vertical-align: top;
      margin-top: 30px;
    }
    .el-icon-arrow-down {
      position: absolute;
      top: 0;
      line-height: 68px;
      right: 36px;
    }
  }
}

#select_text {
  position: absolute;
  left: -100px;
  text-align: right;
  width: 200px;
  font-weight: normal;
}
</style>

<template>
  <div id="app">
    <header>
      <img src="./assets/home.png" alt="" class="home" @click="goHome">
      <img src="./assets/logo.png" alt="" class="logo">
      <div class="language">
        <label id="select_text">{{lanText}}</label>
        <select style="color:white;opacity:0" v-model="lan" @change="setLanguage">
          <option value="zh">{{word.app.selectOption[0]}}</option>
          <option value="kr">{{word.app.selectOption[1]}}</option>
          <option value="en">{{word.app.selectOption[2]}}</option>
        </select>
        <img src="./assets/select.png" alt="">
      </div>
    </header>
    <router-view/>
  </div>
</template>

<script>
import store from './store/store.js';
import { mapState } from 'vuex';
export default {
  store,
  name: 'App',
  data() {
    return {
      lan: '',
      lanText: '语言'
    };
  },
  created() {
    // console.log(this.$store.state.language);
  },
  mounted() {
    let localLanguage = window.localStorage.getItem('language');

    if (localLanguage) {
      switch (localLanguage) {
        case 'en':
          this.lanText = 'Language';
          break;
        case 'kr':
          this.lanText = '언어';
          break;
        default:
          this.lanText = '语言';
          break;
      }
      this.$store.state.language = localLanguage;
    } else
      this.$nextTick(_ => {
        var lan = (
          navigator.language || navigator.browserLanguage
        ).toLowerCase();
        if (lan.indexOf('zh') >= 0) {
          this.lanText = '语言';
          this.$store.state.language = 'zh';
        } else if (lan.indexOf('kr') >= 0) {
          this.lanText = '언어';
          this.$store.state.language = 'kr';
        } else {
          this.lanText = 'Language';
          this.$store.state.language = 'en';
        }
      });
  },
  watch: {
    language: {
      handler(newData) {
        this.lan = newData;
        let title = document.getElementById('meta_title');
        switch (this.lan) {
          case 'zh':
            title.innerHTML = '芭比波朗城市玩美之旅';
            break;
          default:
            title.innerHTML = 'Bobbi Brown Beauty Well-Traveled';
            break;
        }

        this.$store.state.word = this.text[newData];
      },
      immediate: true
    }
  },
  computed: {
    ...mapState(['language', 'text', 'word'])
  },
  methods: {
    goHome() {
      this.$router.push('/');
    },
    setLanguage(e) {
      switch (e.currentTarget.value) {
        case 'en':
          this.lanText = 'Language';
          break;
        case 'kr':
          this.lanText = '언어';
          break;
        default:
          this.lanText = '语言';
          break;
      }
      this.$store.state.language = e.currentTarget.value;
      window.localStorage.setItem('language', e.currentTarget.value);
      this.$forceUpdate();
    }
  }
};
</script>
