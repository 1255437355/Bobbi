/* jshint esversion: 6 */
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    language: 'zh',
    text: {
      'zh': {
        app: {
          selectOption: ['中文', '한국어', 'English']
        },
        index: {
          title: '旅行独家臻选',
          banner: [{
              src: require('../assets/index/banner-new-york.png'),
              text: '打造纽约城市妆容<br/>畅游自在纽约',
              button: '点击解锁',
              url: 'newyork'
            },
            {
              src: require('../assets/index/banner-seoul.png'),
              text: '打造首尔城市妆容<br/>遇见多元首尔',
              button: '点击解锁',
              url: 'seoul'
            }, {
              src: require('../assets/index/banner-london.png'),
              text: '打造伦敦城市妆容<br/>邂逅惊喜伦敦',
              button: '点击解锁',
              url: 'london'
            },
          ],
          start: {
            text: '即刻参与芭比波朗城市奇遇小游戏<br/>立即领取免税专属好礼',
            button: '开启礼享之旅'
          },
          products: [{
              src: require('../assets/index/product-newyork.jpg'),
              title: '城市彩妆系列：<br/>纽约风格彩盘',
              desc: '一盘彰显纽约式的活力热情与耀眼光芒，散发独特美式妆容风情',
              button: '立即购买',
              url: 'newyrok'
            },
            {
              src: require('../assets/index/product-seoul.jpg'),
              title: '城市彩妆系列：<br/>首尔风格彩盘',
              desc: '色彩丰富、年轻大胆，浓淡取舍间，可盐可甜，各具风情',
              button: '立即购买',
              url: 'seoul'
            },
            {
              src: require('../assets/index/product-london.jpg'),
              title: '城市彩妆系列：<br/>伦敦风格彩盘',
              desc: '多色眼影轻松打造玫瑰烟熏妆容，凸显英式优雅妆容特色',
              button: '立即购买',
              url: 'london'
            },
          ]
        },
        toCity: {
          london: {
            product: {
              src: require('../assets/index/product-london.jpg'),
              url: '',
              subTitle: '芭比波朗',
              title: '城市彩妆系列：<br/>伦敦风格彩盘',
              button: '立即购买'
            },
            howtoSrc: require('../assets/tocity/london/howto.png'),
            guide: [{
                src: require('../assets/tocity/london/guide/1.png')
              },
              {
                src: require('../assets/tocity/london/guide/2.png'),
                wordSrc: require('../assets/tocity/london/guide/2-zh.png'),
                wordTop: 560,
                wordLeft: 210
              },
              {
                src: require('../assets/tocity/london/guide/3.png'),
                wordSrc: require('../assets/tocity/london/guide/3-zh.png'),
                wordBottom: 100,
                wordLeft: 0,
              },
              {
                src: require('../assets/tocity/london/guide/4.png'),
                wordSrc: require('../assets/tocity/london/guide/4-zh.png'),
                wordBottom: 40,
                wordLeft: 40,
              },
              {
                src: require('../assets/tocity/london/guide/5.png'),
                wordSrc: require('../assets/tocity/london/guide/5-zh.png'),
                wordBottom: 20,
                wordLeft: 0,
              },
              {
                src: require('../assets/tocity/london/guide/6.png'),
                wordSrc: require('../assets/tocity/london/guide/6-zh.png'),
                wordTop: 822,
                wordLeft: 300,
              },
              {
                src: require('../assets/tocity/london/guide/7.png'),
                wordSrc: require('../assets/tocity/london/guide/7-zh.png'),
                wordTop: 875,
                wordLeft: 465,
              },
              {
                src: require('../assets/tocity/london/guide/8.png'),
              }
            ],
            step: [{
                src: require('../assets/tocity/london/1.png'),
                title: '第一步',
                text: '使用保湿隔离霜，为肌肤竖起天然保护屏障'
              },
              {
                src: require('../assets/tocity/london/2.png'),
                title: '第二步',
                text: '清透持妆粉底液和即时无痕遮瑕蜜的完美组合，打造自然无瑕肌肤'
              },
              {
                src: require('../assets/tocity/london/3.png'),
                title: '第三步',
                text: '使用伦敦风格彩盘中Chelsea Glow高光提亮面部，打造自然光感。在眼皮及下眼线轻扫眼影Twilight，做好眼妆打底，随后使用Mayfair Mauve涂抹眼窝、外眼角及下眼线区域，加深眼睛轮廓，并用Picadilly Plum加深上眼线，最后使用Beach Pink提亮内眼角，完成玫瑰烟熏妆效'
              },
              {
                src: require('../assets/tocity/london/4.png'),
                title: '第四步',
                text: '使用流云眼线膏勾勒眼线，并涂抹烟熏魅睫睫毛膏，释放双眸魅力'
              },
              {
                src: require('../assets/tocity/london/5.png'),
                title: '第五步',
                text: '涂抹伦敦风格彩盘中纯色奢金唇膏Neutral Rose，完成全部妆容'
              },
            ],
            buy: '立即购买',
            url: 'london'
          },
          seoul: {
            product: {
              src: require('../assets/index/product-seoul.jpg'),
              url: '',
              subTitle: '芭比波朗 ',
              title: '城市彩妆系列：<br/>首尔风格彩盘',
              button: '立即购买'
            },
            howtoSrc: require('../assets/tocity/seoul/howto.png'),
            guide: [{
                src: require('../assets/tocity/seoul/guide/1.png'),
              },
              {
                src: require('../assets/tocity/seoul/guide/2.png'),
                wordSrc: require('../assets/tocity/seoul/guide/2-zh.png'),
                wordTop: 775,
                wordLeft: 410
              },
              {
                src: require('../assets/tocity/seoul/guide/3.png'),
                wordSrc: require('../assets/tocity/seoul/guide/3-zh.png'),
                wordTop: 750,
                wordLeft: 320
              },
              {
                src: require('../assets/tocity/seoul/guide/4.png'),
                wordSrc: require('../assets/tocity/seoul/guide/4-zh.png'),
                wordTop: 715,
                wordLeft: 335
              },
              {
                src: require('../assets/tocity/seoul/guide/5.png'),
                wordSrc: require('../assets/tocity/seoul/guide/5-zh.png'),
                wordBottom: 40,
                wordLeft: -6
              },
              {
                src: require('../assets/tocity/seoul/guide/6.png'),
                wordSrc: require('../assets/tocity/seoul/guide/6-zh.png'),
                wordTop: 573,
                wordLeft: 57
              },
              {
                src: require('../assets/tocity/seoul/guide/7.png'),
                wordSrc: require('../assets/tocity/seoul/guide/7-zh.png'),
                wordBottom: 20,
                wordLeft: 30
              },
              {
                src: require('../assets/tocity/seoul/guide/8.png'),
              }
            ],
            step: [{
                src: require('../assets/tocity/seoul/1.png'),
                title: '第一步',
                text: '使用芭比波朗至盈呵护亮眼美肌乳及至盈呵护丰润修护眼霜，做好肌肤打底'
              },
              {
                src: require('../assets/tocity/seoul/2.png'),
                title: '第二步',
                text: '使用密集修护菁华粉底液，让肌肤重焕活力'
              },
              {
                src: require('../assets/tocity/seoul/3.png'),
                title: '第三步',
                text: '使用首尔风格彩盘中Coral Sugar腮红，轻扫苹果肌，带来元气少女活力。随后使用Apgujeong Posh高光提亮面部，为肌肤增添自然光泽。最后使用Toast轻刷眼皮，并叠加Itaewon Wow，打造灵动精致妆感'
              },
              {
                src: require('../assets/tocity/seoul/4.png'),
                title: '第四步',
                text: '使用Blackest Black流云液体眼线笔轻描上眼线，利用流云随心造型眉笔填充眉形，打造干净妆面'
              },
              {
                src: require('../assets/tocity/seoul/5.png'),
                title: '第五步',
                text: '涂抹首尔风格彩盘中纯色奢金唇膏Hibiscus，完成全部妆容'
              },
            ],
            buy: '立即购买',
            url: 'seoul'
          },
          newyork: {
            product: {
              src: require('../assets/index/product-newyork.jpg'),
              url: '',
              subTitle: '芭比波朗 ',
              title: '城市彩妆系列：<br/>纽约风格彩盘',
              button: '立即购买'
            },
            howtoSrc: require('../assets/tocity/newyork/howto.png'),
            guide: [{
                src: require('../assets/tocity/newyork/guide/1.png'),
              },
              {
                src: require('../assets/tocity/newyork/guide/2.png'),
                wordSrc: require('../assets/tocity/newyork/guide/2-zh.png'),
                wordTop: 40,
                wordLeft: 215
              },
              {
                src: require('../assets/tocity/newyork/guide/3.png'),
                wordSrc: require('../assets/tocity/newyork/guide/3-zh.png'),
                wordTop: 763,
                wordLeft: 242
              },
              {
                src: require('../assets/tocity/newyork/guide/4.png'),
                wordSrc: require('../assets/tocity/newyork/guide/4-zh.png'),
                wordBottom: 40,
                wordLeft: 38
              },
              {
                src: require('../assets/tocity/newyork/guide/5.png'),
                wordSrc: require('../assets/tocity/newyork/guide/5-zh.png'),
                wordTop: 170,
                wordLeft: 27
              },
              {
                src: require('../assets/tocity/newyork/guide/6.png'),
                wordSrc: require('../assets/tocity/newyork/guide/6-zh.png'),
                wordTop: 700,
                wordLeft: 57
              },
              {
                src: require('../assets/tocity/newyork/guide/7.png'),
                wordSrc: require('../assets/tocity/newyork/guide/7-zh.png'),
                wordTop: 790,
                wordLeft: 270
              },
              {
                src: require('../assets/tocity/newyork/guide/8.png'),
              }
            ],
            step: [{
                src: require('../assets/tocity/newyork/1.png'),
                title: '第一步',
                text: '使用芭比波朗妆前特润底霜，为肌肤带来滋润呵护'
              },
              {
                src: require('../assets/tocity/newyork/2.png'),
                title: '第二步',
                text: '涂抹芭比波朗清透持状粉底液，打造清透细腻底妆'
              },
              {
                src: require('../assets/tocity/newyork/3.png'),
                title: '第三步',
                text: '使用纽约风格彩盘中Brooklyn Nights高光提亮面部，为肌肤带来通透光泽。在眼皮处清扫眼影Flesh，制造晕染感。并用Frappe晕染眼窝，加深眼睛轮廓，随后在眼线处涂抹Mahogany，最后点涂Rich Bronze，为眼妆增添独特点缀'
              },
              {
                src: require('../assets/tocity/newyork/4.png'),
                title: '第四步',
                text: '使用烟熏魅睫睫毛膏，打造魅惑双眼'
              },
              {
                src: require('../assets/tocity/newyork/5.png'),
                title: '第五步',
                text: '涂抹纽约风格彩盘中纯色奢金唇膏Pink Buff，完成全部妆容'
              },
            ],
            buy: '立即购买',
            url: 'newyork'
          },
        },
        paid: {
          title: '下列区域免税店已支持线上预订<br/>点击按钮即刻拥有专属免税好物',
          tips: [
            '在下列区域中选择即将前往的地区',
            '点击即将前往的免税门店，即可跳转至官网预订页面',
            '线上预订成功后，前往相应免税门店领取'
          ],
          location: [{
              name: '亚太地区',
              children: [{
                  name: '乐天网上免税店',
                  url: 'http://m.chn.lottedfs.com/kr/display/brand?dispShopNo=10005990'
                },
                {
                  name: '新罗网上免税店',
                  url: 'http://m.shilladfs.com/estore/kr/zh/b/bobbibrown'
                },
                {
                  name: '韩际新世界免税店',
                  url: 'http://mcn.ssgdfm.com/bobbibrown'
                }
              ]
            },
            {
              name: '欧洲',
              children: [{
                  name: 'Aelia Duty Free',
                  url: 'https://www.aeliadutyfree.it/roma/en/brands/bobbi-brown'
                },
                {
                  name: 'The Loop Duty Free',
                  url: 'https://www.theloop.ie/m/27/bobbi-brown'
                }, {
                  name: 'World Duty Free',
                  url: 'https://lhrt5.worlddutyfree.com/lhrt5_en/brands/index/boutique/super_brand/9/'
                }
              ]
            },
            {
              name: '美洲地区',
              children: []
            },
            {
              name: '韩国',
              children: [{
                  name: '乐天网上免税店',
                  url: 'http://m.chn.lottedfs.com/kr/display/brand?dispShopNo=10005990'
                },
                {
                  name: '新罗网上免税店',
                  url: 'http://m.shilladfs.com/estore/kr/zh/b/bobbibrown'
                },
                {
                  name: '韩际新世界免税店',
                  url: 'http://mcn.ssgdfm.com/bobbibrown'
                }
              ]
            }
          ]
        },
        top: {
          cityListName: '玩美攻略',
          cityGuideListName: '城市漫游指南',
          listName: '城市漫游指南',
          list: [{
              name: '纽约',
              url: 'newyork'
            },
            {
              name: '首尔',
              url: 'seoul'
            },
            {
              name: '伦敦',
              url: 'london'
            }
          ]
        }
      },
      'en': {
        app: {
          selectOption: ['中文', '한국어', 'English']
        },
        index: {
          title: "Traveler's Exclusive Collection",
          banner: [{
              src: require('../assets/index/banner-new-york.png'),
              text: "<span style='font-size:28px'>Click to discover your<br/>New York makeup look<span>",
              button: 'EXPLORE MORE',
              url: 'newyork'
            },
            {
              src: require('../assets/index/banner-seoul.png'),
              text: "<span style='font-size:28px'>Click to discover<br/>your Seoul look</span>",
              button: 'EXPLORE MORE',
              url: 'seoul'
            },
            {
              src: require('../assets/index/banner-london.png'),
              text: "<span style='font-size:28px'>Click to discover<br/>your London look</span>",
              button: 'EXPLORE MORE',
              url: 'london'
            },
          ],
          start: {
            text: 'Play the City Adventures Game <br/> and receive a gift',
            button: 'PLAY NOW'
          },
          products: [{
              src: require('../assets/index/product-newyork.jpg'),
              title: 'DESTINATION: BEAUTY<br/>NEW YORK PALETTE',
              desc: 'With a golden glow look, the Destination: Beauty New York Edition reflects the staples of American Beauty: vibrancy, enthusiasm, and on-the-go natural glow.',
              button: 'SHOP NOW',
              url: 'newyork'
            },
            {
              src: require('../assets/index/product-seoul.jpg'),
              title: 'DESTINATION: BEAUTY<br/>SEOUL PALETTE',
              desc: 'Multi-faceted makeup palette with a shade lineup that exemplifies the youthful exuberance and bold colors of Seoul. Palette features rosy peach shades to dial up or down looks.',
              button: 'SHOP NOW',
              url: 'seoul'
            },
            {
              src: require('../assets/index/product-london.jpg'),
              title: 'DESTINATION: BEAUTY<br/>LONDON PALETTE',
              desc: 'Exemplifying the essence of understated English beauty, this color palette incorporates a shade range that speaks of rosy cheeks with hints of smokey violet.',
              button: 'SHOP NOW',
              url: 'london'
            },
          ]
        },
        toCity: {
          london: {
            product: {
              src: require('../assets/index/product-london.jpg'),
              url: '',
              subTitle: 'BOBBI BROWN',
              title: 'DESTINATION: BEAUTY<br/>LONDON PALETTE',
              button: 'SHOP NOW'
            },
            howtoSrc: require('../assets/tocity/london/howto.png'),
            guide: [{
                src: require('../assets/tocity/london/guide/1-en.png')
              },
              {
                src: require('../assets/tocity/london/guide/2.png'),
                wordSrc: require('../assets/tocity/london/guide/2-en.png'),
                wordTop: 560,
                wordLeft: 210
              },
              {
                src: require('../assets/tocity/london/guide/3.png'),
                wordSrc: require('../assets/tocity/london/guide/3-en.png'),
                wordBottom: 100,
                wordLeft: 0,
              },
              {
                src: require('../assets/tocity/london/guide/4.png'),
                wordSrc: require('../assets/tocity/london/guide/4-en.png'),
                wordBottom: 40,
                wordLeft: 40,
              },
              {
                src: require('../assets/tocity/london/guide/5.png'),
                wordSrc: require('../assets/tocity/london/guide/5-en.png'),
                wordBottom: 20,
                wordLeft: 0,
              },
              {
                src: require('../assets/tocity/london/guide/6.png'),
                wordSrc: require('../assets/tocity/london/guide/6-en.png'),
                wordTop: 822,
                wordLeft: 300,
              },
              {
                src: require('../assets/tocity/london/guide/7.png'),
                wordSrc: require('../assets/tocity/london/guide/7-en.png'),
                wordTop: 875,
                wordLeft: 405,
              },
              {
                src: require('../assets/tocity/london/guide/8-en.png'),
              }
            ],
            step: [{
                src: require('../assets/tocity/london/1.png'),
                title: 'STEP 1',
                text: 'Prep and protect skin with Primer Plus Protection SPF 50 PA+++'
              },
              {
                src: require('../assets/tocity/london/2.png'),
                title: 'STEP 2',
                text: 'Blend Skin Long-Wear Weightless Foundation SPF 15 PA++ into skin and Instant Full Cover Concealer beneath eyes.'
              },
              {
                src: require('../assets/tocity/london/3.png'),
                title: 'STEP 3',
                text: 'Using the Destination: Beauty London Palette, brush Illuminating Powder in Chelsea Glow onto the high points of the face. Sweep eye shadow in Twilight across lid and lower lashline, blend Mayfair Mauve into crease, outer corners and lower lashline. Smudge Picadilly Plum along upper lashline and highlight inner corners with Beach Pink.'
              },
              {
                src: require('../assets/tocity/london/4.png'),
                title: 'STEP 4',
                text: 'Trace Long-Wear Gel Eyeliner in  Black Ink across upper lashlines and apply a few coats of Smokey Eye Mascara.'
              },
              {
                src: require('../assets/tocity/london/5.png'),
                title: 'STEP 5',
                text: 'Finish off the look with Luxe Lip Color in Neutral Rose from Destination: Beauty palette.'
              },
            ],
            buy: 'SHOP THE LOOK',
            url: 'london'
          },
          seoul: {
            product: {
              src: require('../assets/index/product-seoul.jpg'),
              url: '',
              subTitle: 'BOBBI BROWN',
              title: 'DESTINATION: BEAUTY<br/>SEOUL PALETTE',
              button: 'SHOP NOW'
            },
            howtoSrc: require('../assets/tocity/seoul/howto.png'),
            guide: [{
                src: require('../assets/tocity/seoul/guide/1-en.png'),
              },
              {
                src: require('../assets/tocity/seoul/guide/2.png'),
                wordSrc: require('../assets/tocity/seoul/guide/2-en.png'),
                wordTop: 775,
                wordLeft: 370
              },
              {
                src: require('../assets/tocity/seoul/guide/3.png'),
                wordSrc: require('../assets/tocity/seoul/guide/3-en.png'),
                wordBottom: 60,
                wordLeft: 320
              },
              {
                src: require('../assets/tocity/seoul/guide/4.png'),
                wordSrc: require('../assets/tocity/seoul/guide/4-en.png'),
                wordTop: 715,
                wordLeft: 335
              },
              {
                src: require('../assets/tocity/seoul/guide/5.png'),
                wordSrc: require('../assets/tocity/seoul/guide/5-en.png'),
                wordBottom: 40,
                wordLeft: -6
              },
              {
                src: require('../assets/tocity/seoul/guide/6.png'),
                wordSrc: require('../assets/tocity/seoul/guide/6-en.png'),
                wordTop: 573,
                wordLeft: 57
              },
              {
                src: require('../assets/tocity/seoul/guide/7.png'),
                wordSrc: require('../assets/tocity/seoul/guide/7-en.png'),
                wordBottom: 20,
                wordLeft: 30
              },
              {
                src: require('../assets/tocity/seoul/guide/8-en.png'),
              }
            ],
            step: [{
                src: require('../assets/tocity/seoul/1.png'),
                title: 'STEP 1',
                text: 'Prep skin with Extra Illuminating Moisture Balm and Extra Eye Repair Cream'
              },
              {
                src: require('../assets/tocity/seoul/2.png'),
                title: 'STEP 2',
                text: 'Blend Intensive Skin Serum Foundation SPF 40 PA+++ onto skin.'
              },
              {
                src: require('../assets/tocity/seoul/3.png'),
                title: 'STEP 3',
                text: 'From the Destination: Beauty Seoul Palette, apply Blush in Coral Sugar on the apples of cheeks, brush Illuminating Powder in Apgujeong Posh along the high points of the face. Blend eye shadow in Toast across lid and layer Itaewon Wow on top.'
              },
              {
                src: require('../assets/tocity/seoul/4.png'),
                title: 'STEP 4',
                text: 'Trace upper lashline with Ink Liner in Blackest Black and fill in brows with Perfectly Defined Long-Wear Brow Pencil.'
              },
              {
                src: require('../assets/tocity/seoul/5.png'),
                title: 'STEP 5',
                text: 'Finish off the look with Luxe Lip Color in Hibiscus from Destination: Beauty palette.'
              },
            ],
            buy: 'SHOP THE LOOK',
            url: 'seoul'
          },
          newyork: {
            product: {
              src: require('../assets/index/product-newyork.jpg'),
              url: '',
              subTitle: 'BOBBI BROWN',
              title: 'DESTINATION: BEAUTY<br/>NEW YORK PALETTE',
              button: 'SHOP NOW'
            },
            howtoSrc: require('../assets/tocity/newyork/howto.png'),
            guide: [{
                src: require('../assets/tocity/newyork/guide/1-en.png'),
              },
              {
                src: require('../assets/tocity/newyork/guide/2.png'),
                wordSrc: require('../assets/tocity/newyork/guide/2-en.png'),
                wordTop: 40,
                wordLeft: 206
              },
              {
                src: require('../assets/tocity/newyork/guide/3.png'),
                wordSrc: require('../assets/tocity/newyork/guide/3-en.png'),
                wordBottom: 40,
                wordLeft: 242
              },
              {
                src: require('../assets/tocity/newyork/guide/4.png'),
                wordSrc: require('../assets/tocity/newyork/guide/4-en.png'),
                wordBottom: 40,
                wordLeft: 38
              },
              {
                src: require('../assets/tocity/newyork/guide/5.png'),
                wordSrc: require('../assets/tocity/newyork/guide/5-en.png'),
                wordTop: 170,
                wordLeft: 27
              },
              {
                src: require('../assets/tocity/newyork/guide/6.png'),
                wordSrc: require('../assets/tocity/newyork/guide/6-en.png'),
                wordTop: 700,
                wordLeft: 57
              },
              {
                src: require('../assets/tocity/newyork/guide/7.png'),
                wordSrc: require('../assets/tocity/newyork/guide/7-en.png'),
                wordTop: 790,
                wordLeft: 270
              },
              {
                src: require('../assets/tocity/newyork/guide/8-en.png'),
              }
            ],
            step: [{
                src: require('../assets/tocity/newyork/1.png'),
                title: 'STEP 1',
                text: 'Hydrate and prime skin with Vitamin Enriched Face Base.'
              },
              {
                src: require('../assets/tocity/newyork/2.png'),
                title: 'STEP 2',
                text: 'Blend Skin Long-Wear Weightless Foundation SPF 15 PA++ into skin.'
              },
              {
                src: require('../assets/tocity/newyork/3.png'),
                title: 'STEP 3',
                text: 'Using the Destination: Beauty New York Palette, sweep Illuminating Powder in Brooklyn Nights onto the high points of the face. Next, sweep eye shadow in Flesh across lids and blend Frappe into crease. Smudge Mahogany along lashline, layer Rich Bronze on top.'
              },
              {
                src: require('../assets/tocity/newyork/4.png'),
                title: 'STEP 4',
                text: 'Apply a few coats of Smokey Eye Mascara.'
              },
              {
                src: require('../assets/tocity/newyork/5.png'),
                title: 'STEP 5',
                text: 'Finish off the look with Luxe Lip Color in Pink Buff from Destination: Beauty palette.'
              },
            ],
            buy: 'SHOP THE LOOK',
            url: 'newyork'
          },
        },
        paid: {
          title: 'Pre-order is now available at the<br/>following duty free stores.<br/>Click to instantly purchase your<br/>exclusive duty-free products online.',
          tips: [
            'Select your destination from the following regions.',
            'Select the duty free store in your selected region and directly enter the official pre-order website.',
            'Upon completion of your order, go to your designated duty free store to pick up your products.'
          ],
          location: [{
              name: 'Asia Pacific',
              children: [{
                  name: 'Lotte Duty Free',
                  url: 'http://m.eng.lottedfs.com/kr/display/brand?dispShopNo=10005988'
                },
                {
                  name: 'The Shilla Duty Free',
                  url: 'http://m.shilladfs.com/estore/kr/en/b/bobbibrown'
                },
                {
                  name: 'Shinsegae Duty Free',
                  url: 'http://m.ssgdfm.com/bobbibrown'
                }
              ]
            },
            {
              name: 'Europe',
              children: [{
                  name: 'Aelia Duty Free',
                  url: 'https://www.aeliadutyfree.it/roma/en/brands/bobbi-brown'
                },
                {
                  name: 'The Loop Duty Free',
                  url: 'https://www.theloop.ie/m/27/bobbi-brown'
                },{
                  name: 'World Duty Free',
                  url: 'https://lhrt5.worlddutyfree.com/lhrt5_en/brands/index/boutique/super_brand/9/'
                }
              ]
            },
            {
              name: 'Americas',
              children: []
            },
            {
              name: 'South Korea',
              children: [{
                  name: 'Lotte Duty Free',
                  url: 'http://m.eng.lottedfs.com/kr/display/brand?dispShopNo=10005988'
                },
                {
                  name: 'The Shilla Duty Free',
                  url: 'http://m.shilladfs.com/estore/kr/en/b/bobbibrown'
                },
                {
                  name: 'Shinsegae Duty Free',
                  url: 'http://m.ssgdfm.com/bobbibrown'
                }
              ]
            }
          ]
        },
        top: {
          cityListName: 'How To',
          cityGuideListName: 'City Guide',
          listName: 'CITY GUIDE',
          list: [{
              name: 'New York',
              url: 'newyork'
            },
            {
              name: 'Seoul',
              url: 'seoul'
            },
            {
              name: 'London',
              url: 'london'
            }
          ]
        }
      },
      'kr': {
        app: {
          selectOption: ['中文', '한국어', 'English']
        },
        index: {
          title: '면세전용 컬렉션',
          banner: [{
              src: require('../assets/index/banner-new-york.png'),
              text: "<span style='font-size:28px'>클릭해서 뉴욕 시티<br/>메이크업 룩을 만나보세요.</span>",
              button: '자세히 보기',
              url: 'newyork'
            },
            {
              src: require('../assets/index/banner-seoul.png'),
              text: "<span style='font-size:28px'>클릭해서 서울 메이크업<br/>룩을 만나보세요.</span>",
              button: '자세히 보기',
              url: 'seoul'
            }, {
              src: require('../assets/index/banner-london.png'),
              text: "<span style='font-size:28px'>클릭해서 런던 메이크업<br/>룩을 만나보세요.</span>",
              button: '자세히 보기',
              url: 'london'
            },
          ],
          start: {
            text: '바비 브라운 시티 어드벤처를 플레<br/>이하고 특별한 선물을 받으세요.',
            button: '플레이 하기'
          },
          products: [{
              src: require('../assets/index/product-new-york.jpg'),
              title: '데스티네이션:<br/>뷰티 뉴욕 팔레트',
              desc: '골든 글로우 룩을 연출해주는 데스티네이션: 뷰티 뉴욕 에디션은 활기가 넘치는 뉴욕과 그 속에 뉴요커의 열정을 자연스러운 글로우로 표현해 줍니다.',
              button: '구매하기',
              url: 'newyork'
            },
            {
              src: require('../assets/index/product-seoul.jpg'),
              title: '데스티네이션:<br/>뷰티 서울 팔레트',
              desc: '생기 넘치는 젊음과 서울의 강렬한 컬러를 보여주는 다양한 색상들로 구성된 메이크업 팔레트입니다.  피치 계열의 색상들로 룩을 보다 세련되게 연출할 수 있습니다.',
              button: '구매하기',
              url: 'seoul'
            },
            {
              src: require('../assets/index/product-london.jpg'),
              title: '데스티네이션:<br/>뷰티 런던 팔레트',
              desc: '절제된 영국 뷰티에서 영감을 받은 팔레트로 우아하면서도 스모키한 바이올렛이 가미된 장미빛 치크를 연출할 수 있습니다.',
              button: '구매하기',
              url: 'london'
            },
          ]
        },
        toCity: {
          london: {
            product: {
              src: require('../assets/index/product-london.jpg'),
              url: '',
              subTitle: '바비 브라운',
              title: '데스티네이션:<br/>뷰티 런던 팔레트',
              button: '구매하기'
            },
            howtoSrc: require('../assets/tocity/london/howto.png'),
            guide: [{
                src: require('../assets/tocity/london/guide/1-kr.png')
              },
              {
                src: require('../assets/tocity/london/guide/2.png'),
                wordSrc: require('../assets/tocity/london/guide/2-kr.png'),
                wordTop: 560,
                wordLeft: 210
              },
              {
                src: require('../assets/tocity/london/guide/3.png'),
                wordSrc: require('../assets/tocity/london/guide/3-kr.png'),
                wordBottom: 100,
                wordLeft: 0,
              },
              {
                src: require('../assets/tocity/london/guide/4.png'),
                wordSrc: require('../assets/tocity/london/guide/4-kr.png'),
                wordBottom: 40,
                wordLeft: 40,
              },
              {
                src: require('../assets/tocity/london/guide/5.png'),
                wordSrc: require('../assets/tocity/london/guide/5-kr.png'),
                wordBottom: 20,
                wordLeft: 0,
              },
              {
                src: require('../assets/tocity/london/guide/6.png'),
                wordSrc: require('../assets/tocity/london/guide/6-kr.png'),
                wordTop: 822,
                wordLeft: 300,
              },
              {
                src: require('../assets/tocity/london/guide/7.png'),
                wordSrc: require('../assets/tocity/london/guide/7-kr.png'),
                wordTop: 875,
                wordLeft: 405,
              },
              {
                src: require('../assets/tocity/london/guide/8-kr.png'),
              }
            ],
            step: [{
                src: require('../assets/tocity/london/1.png'),
                title: '1단계',
                text: '프라이머 플러스 프로텍션 SPF 50 PA+++로 피부를 준비시키고 보호하세요.'
              },
              {
                src: require('../assets/tocity/london/2.png'),
                title: '2단계',
                text: '스킨 롱웨어 웨이트리스 파운데이션 SPF 15 PA++를 피부에 블렌딩하고, 인스턴트 풀 커버 컨실러를 눈 아래에 바르세요.'
              },
              {
                src: require('../assets/tocity/london/3.png'),
                title: '3단계',
                text: '데스티네이션: 뷰티 런던 팔레트를 사용해 입체적인 강조가 필요한 부위에 첼시 글로우 색상의 일루미네이팅 파우더를 쓸어주세요. 그런 다음 트와일라잇 색상의 아이 섀도우를 눈꺼풀과 속눈썹 아래 라인을 따라 발라주고, 쌍꺼풀, 눈 바깥쪽 코너, 속눈썹 아래라인에 메이페어 모브 색상을 블렌딩해주세요. 속눈썹 위라인을 따라 피카딜리 플럼을 번지듯이 발라주고, 비치 핑크로 눈 안쪽 코너에 하이라이트 효과를 주세요.'
              },
              {
                src: require('../assets/tocity/london/4.png'),
                title: '4단계',
                text: '속눈썹 윗라인을 따라 블랙 잉크 색상의 롱웨어 젤 아이라이너를 사용하고, 스모키 아이 마스카라를 속눈썹에 여러 번 덧발라주세요.'
              },
              {
                src: require('../assets/tocity/london/5.png'),
                title: '5단계',
                text: '데스티네이션: 뷰티 팔레트에 있는 뉴트럴 로즈 색상의 럭스 립 칼라로 룩을 마무리하세요.'
              },
            ],
            buy: '룩 구매하기',
            url: 'london'
          },
          seoul: {
            product: {
              src: require('../assets/index/product-seoul.jpg'),
              url: '',
              subTitle: '바비 브라운',
              title: '데스티네이션:<br/>뷰티 서울 팔레트',
              button: '구매하기'
            },
            howtoSrc: require('../assets/tocity/seoul/howto.png'),
            guide: [{
                src: require('../assets/tocity/seoul/guide/1-kr.png'),
              },
              {
                src: require('../assets/tocity/seoul/guide/2.png'),
                wordSrc: require('../assets/tocity/seoul/guide/2-kr.png'),
                wordTop: 775,
                wordLeft: 370
              },
              {
                src: require('../assets/tocity/seoul/guide/3.png'),
                wordSrc: require('../assets/tocity/seoul/guide/3-kr.png'),
                wordTop: 750,
                wordLeft: 320
              },
              {
                src: require('../assets/tocity/seoul/guide/4.png'),
                wordSrc: require('../assets/tocity/seoul/guide/4-kr.png'),
                wordTop: 715,
                wordLeft: 335
              },
              {
                src: require('../assets/tocity/seoul/guide/5.png'),
                wordSrc: require('../assets/tocity/seoul/guide/5-kr.png'),
                wordBottom: 10,
                wordLeft: -6
              },
              {
                src: require('../assets/tocity/seoul/guide/6.png'),
                wordSrc: require('../assets/tocity/seoul/guide/6-kr.png'),
                wordTop: 573,
                wordLeft: 57
              },
              {
                src: require('../assets/tocity/seoul/guide/7.png'),
                wordSrc: require('../assets/tocity/seoul/guide/7-kr.png'),
                wordBottom: 20,
                wordLeft: 30
              },
              {
                src: require('../assets/tocity/seoul/guide/8-kr.png'),
              }
            ],
            step: [{
                src: require('../assets/tocity/seoul/1.png'),
                title: '1단계',
                text: '엑스트라 일루미네이팅 모이스춰 밤과 엑스트라 아이 리페어 크림으로 피부를 준비시키세요.'
              },
              {
                src: require('../assets/tocity/seoul/2.png'),
                title: '2단계',
                text: '인텐시브 스킨 세럼 파운데이션 SPF 40 PA+++를 피부에 블렌딩하세요.'
              },
              {
                src: require('../assets/tocity/seoul/3.png'),
                title: '3단계',
                text: '데스티네이션: 뷰티 서울 팔레트에 있는 코랄 슈가 색상의 블러쉬를 광대뼈에 사용하고, 입체적인 강조가 필요한 부위에 압구정 포쉬 색상의 일루미네이팅 파우더를 브러쉬로 쓸어주세요. 눈꺼풀에 토스트 색상의 아이 섀도우를 바르고 이태원 와우를 덧바르세요.'
              },
              {
                src: require('../assets/tocity/seoul/4.png'),
                title: '4단계',
                text: '속눈썹 윗라인을 따라 블랙키스트 블랙 색상의 잉크 라이너를 사용하고, 퍼펙틀리 디파인드 롱웨어 브로우 펜슬로 눈썹을 채워주세요.'
              },
              {
                src: require('../assets/tocity/seoul/5.png'),
                title: '5단계',
                text: '데스티네이션: 뷰티 팔레트에 있는 히비스커스 색상의 럭스 립 칼라로 마무리하세요.'
              },
            ],
            buy: '룩 구매하기',
            url: 'seoul'
          },
          newyork: {
            product: {
              src: require('../assets/index/product-newyork.jpg'),
              url: '',
              subTitle: '바비 브라운',
              title: '데스티네이션:<br/>뷰티 뉴욕 팔레트',
              button: '구매하기'
            },
            howtoSrc: require('../assets/tocity/newyork/howto.png'),
            guide: [{
                src: require('../assets/tocity/newyork/guide/1-kr.png'),
              },
              {
                src: require('../assets/tocity/newyork/guide/2.png'),
                wordSrc: require('../assets/tocity/newyork/guide/2-kr.png'),
                wordTop: 40,
                wordLeft: 206
              },
              {
                src: require('../assets/tocity/newyork/guide/3.png'),
                wordSrc: require('../assets/tocity/newyork/guide/3-kr.png'),
                wordBottom: 40,
                wordLeft: 242
              },
              {
                src: require('../assets/tocity/newyork/guide/4.png'),
                wordSrc: require('../assets/tocity/newyork/guide/4-kr.png'),
                wordBottom: 40,
                wordLeft: 38
              },
              {
                src: require('../assets/tocity/newyork/guide/5.png'),
                wordSrc: require('../assets/tocity/newyork/guide/5-kr.png'),
                wordTop: 170,
                wordLeft: 27
              },
              {
                src: require('../assets/tocity/newyork/guide/6.png'),
                wordSrc: require('../assets/tocity/newyork/guide/6-kr.png'),
                wordTop: 700,
                wordLeft: 57
              },
              {
                src: require('../assets/tocity/newyork/guide/7.png'),
                wordSrc: require('../assets/tocity/newyork/guide/7-kr.png'),
                wordTop: 790,
                wordLeft: 270
              },
              {
                src: require('../assets/tocity/newyork/guide/8-kr.png'),
              }
            ],
            step: [{
                src: require('../assets/tocity/newyork/1.png'),
                title: '1단계',
                text: '비타민 인리치드 페이스 베이스로 피부를 보습하고 준비시켜주세요.'
              },
              {
                src: require('../assets/tocity/newyork/2.png'),
                title: '2단계',
                text: '스킨 롱웨어 웨이트리스 파운데이션 SPF 15 PA++를 피부에 블렌딩하세요.'
              },
              {
                src: require('../assets/tocity/newyork/3.png'),
                title: '3단계',
                text: '데스티네이션: 뷰티 뉴욕 팔레트를 사용해 입체적인 강조가 필요한 부위에 브루클린 나이츠 색상의 일루미네이팅 파우더를 쓸어주세요. 그런 다음 플레쉬 색상의 아이 섀도우를 눈꺼풀에 쓸어주고 쌍꺼풀에 프라페 색상을 블렌딩해주세요.  속눈썹 라인을 따라 마호가니를 번지듯이 발라준 뒤 리치 브론즈를  덧발라주세요..'
              },
              {
                src: require('../assets/tocity/newyork/4.png'),
                title: '4단계',
                text: '스모키 아이 마스카라를 속눈썹에 여러 번 덧발라주세요.'
              },
              {
                src: require('../assets/tocity/newyork/5.png'),
                title: '5단계',
                text: '데스티네이션: 뷰티 팔레트에 있는 핑크 버프 색상의 럭스 립 칼라로 룩을 마무리하세요.'
              },
            ],
            buy: '룩 구매하기',
            url: 'newyork'
          },
        },
        paid: {
          title: '다음 면세 매장들에서 사전 주문이 가능합니다.<br/>클릭해서 면세전 용상품들을<br/>온라인으로 바로 구매하세요.',
          tips: [
            '다음 지역들 중 목적지를 선택하세요.',
            '해당 지역의 면세 매장을 선택하고 공식 사전주문 웹사이트에 바로 접속하세요.',
            '주문이 완료되면 지정된 면세 매장에 방문해 제품을 찾으세요.'
          ],
          location: [{
              name: '아시아 태평양',
              children: [{
                  name: '롯데면세점',
                  url: 'http://m.kor.lottedfs.com/kr/display/brand?dispShopNo=1130621'
                },
                {
                  name: '신라 면세점',
                  url: 'http://m.shilladfs.com/estore/kr/ko/b/bobbibrown'
                },
                {
                  name: '신세계 면세점',
                  url: 'http://m.ssgdfm.com/bobbibrown'
                }
              ]
            },
            {
              name: '유럽',
              children: [{
                  name: 'Aelia Duty Free',
                  url: 'https://www.aeliadutyfree.it/roma/en/brands/bobbi-brown'
                },
                {
                  name: 'The Loop Duty Free',
                  url: 'https://www.theloop.ie/m/27/bobbi-brown'
                },{
                  name: 'World Duty Free',
                  url: 'https://lhrt5.worlddutyfree.com/lhrt5_en/brands/index/boutique/super_brand/9/'
                }
              ]
            },
            {
              name: '미국',
              children: []
            },
            {
              name: '한국',
              children: [{
                  name: '롯데면세점',
                  url: 'http://m.kor.lottedfs.com/kr/display/brand?dispShopNo=1130621'
                },
                {
                  name: '신라 면세점',
                  url: 'http://m.shilladfs.com/estore/kr/ko/b/bobbibrown'
                },
                {
                  name: '신세계 면세점',
                  url: 'http://m.ssgdfm.com/bobbibrown'
                }
              ]
            }
          ]
        },
        top: {
          cityListName: '뷰티 가이드',
          cityGuideListName: '시티 가이드',
          listName: '시티 가이드',
          list: [{
              name: '뉴욕',
              url: 'newyork'
            },
            {
              name: '서울',
              url: 'seoul'
            },
            {
              name: '런던',
              url: 'london'
            }
          ]
        }
      }
    },
    word: {}
  }
});

export default store;
