import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    language: 'en',
    text: {
      'zh': {
        app: {
          selectOption: ['中文', '한국어', 'English']
        },
        exchange: {
          title: '感谢您参加Bobbi Brown城市奇遇线上游戏<br/>请输入兑换码领取免税礼遇',
          placeholader: '输入兑换码',
          confirm: '确认',
          code0: '兑换成功，感谢参与！',
          code1: '抱歉，该兑换码已被兑换！',
          code2: '抱歉，该兑换码无效！',
          code3: '抱歉，奖品已送完，感谢参与！',
          code4: '请输入兑换码'
        },
        exchange2: {
          title: '你 的 礼 遇',
          subTitle: '茉莉精油洁肤油15ML',
          desc: '纯天然植物配方 温和舒缓<br/>轻巧包装 易于携带<br/>一瓶搞定眼面唇卸妆清洁<br/>茉莉精油洁肤油 你的旅行佳侣',
          tips: '请向Bobbi Brown免税店美妆顾问展示此页面<br/>并确保由其点击确认按钮<br/>若您本人点击确认按钮<br/>您将无法获得此份免税好礼',
          confirm: '确认兑换'
        }
      },
      'en': {
        app: {
          selectOption: ['中文', '한국어', 'English']
        },
        exchange: {
          title: 'Thank you for participating in the<br/>Bobbi Brown City Adventure Game.<br/>Please enter your redemption code to<br/>receive your free gift.',
          placeholader: 'Enter your redemption code',
          confirm: 'Confirm',
          code0: 'Code redemption successful, thank you for participating.',
          code1: 'The code has already been redeemed.',
          code2: 'Invalid redemption code.',
          code3: 'All free gifts have already been redeemed, thank you for participating. Please check with your local duty free store.',
          code4: 'Please enter redemption code'
        },
        exchange2: {
          title: 'YOUR OFFER',
          subTitle: 'Soothing Cleansing Oil 15ml',
          desc: 'Natural and soothing formula, perfect for all skin types<br/>Gently removes makeup and restores skin’s balance<br/>Lightweight and easy to carry for on the go<br/>Ideal cleanser for travel',
          tips: 'Please present this page to a beauty advisor<br/>at your selected Bobbi Brown duty free store<br/>and ensure the beauty advisor<br/>clicks on the "Confirm" button.<br/>Your right to redeem your free gift will be revoked<br/>if you click the button yourself.',
          confirm: 'Confirm'
        },
      },
      'kr': {
        app: {
          selectOption: ['中文', '한국어', 'English']
        },
        exchange: {
          title: '바비 브라운 시티 어드벤처 게임에<br>참여해주셔서 감사합니다 보상 코드를<br>입력하고 사은품을 받으세요',
          placeholader: '보상 코드 입력하기',
          confirm: '확인',
          code0: '코드 보상이 이루어졌습니다. 참여해주셔서 감사합니다.',
          code1: '보상이 완료된 코드입니다.',
          code2: '무효한 보상 코드.',
          code3: '모든 사은품이 지급되었습니다. 참여해주셔서 감사합니다. 해당 지역 면세 매장에 확인하세요.',
          code4: '请输入兑换码'
        },
        exchange2: {
          title: '당신을 위한 혜택',
          subTitle: '수딩 클렌징 오일 15ml',
          desc: '모든 피부 타입에 적합한 내추럴한 수딩 제품<br/>메이크업을 부드럽게 제거하고 피부 밸런스를 회복함<br/>가볍고 간편한 휴대성<br/>여행 시 이상적인 클렌저',
          tips: '바비 브라운 면세 매장의 뷰티 어드바이저에게<br/>이 페이지를 보여주세요뷰티<br/>어드바이저가 "확인" 버튼을 눌러야 합니다.<br/>직접 버튼을 누르면<br/>사은품을 받을 수 있는 기회가 취소됩니다',
          confirm: '확인'
        }
      }
    },
    word: {}
  }
});

export default store;
