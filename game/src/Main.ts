//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

// 入口
class Main extends egret.DisplayObjectContainer {
  score: object;
  timeReduce;
  successRes: boolean = false;
  language: string = 'zh';
  fontFamily: string =
    'Avenir Next, -apple-system, Noto Sans, Helvetica Neue, Helvetica, Nimbus Sans L, Arial, Liberation Sans, PingFang SC, Hiragino Sans GB, Noto Sans CJK SC, Source Han Sans SC, Source Han Sans CN, Microsoft YaHei, Wenquanyi Micro Hei, WenQuanYi Zen Hei, ST Heiti, SimHei, WenQuanYi Zen Hei Sharp, sans-serif';

  // 构造器
  public constructor() {
    super();
    this.score = {
      yellow: 0,
      white: 0,
      black: 0
    };

    this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
  }

  // 添加舞台
  private onAddToStage(event: egret.Event) {
    this.runGame().catch(e => {
      console.log(e);
    });
  }

  // 开始
  private async runGame() {
    await this.loadResource();
    this.createGameScene(this.score, this);
  }
  // 加载资源
  private async loadResource() {
    try {
      const loadingView = new LoadingUI();
      this.stage.addChild(loadingView);
      await RES.loadConfig('resource/default.res.json', 'resource/');
      await RES.loadGroup('preload', 0, loadingView);
      this.stage.removeChild(loadingView);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 创建游戏场景
   * Create a game scene
   */
  private createGameScene(score, that) {
    //let test = document.getElementById('test');
    //test.style.color = 'white';

    document.getElementById('mask').style.display = 'none';

    // 背景
    let sky = this.createBitmapByName('bg_jpg');
    let stageW = this.stage.stageWidth;
    let stageH = this.stage.stageHeight;
    sky.width = 4002;
    sky.height = stageH;
    sky.x = stageW - sky.width;
    sky.y = 0;
    this.addChild(sky);

    egret.Tween.get(sky, { loop: true }).to({ x: 0 }, 30000);

    // 第一屏
    // 底层遮罩
    var mask: egret.Shape = new egret.Shape();
    mask.graphics.beginFill(0x000000);
    mask.graphics.drawRect(0, 0, 1334, 750);
    mask.alpha = 0.4;
    this.addChild(mask);

    // 文字信息
    let title;

    function selectLanguage() {
      if (!showActive) {
        //this.addChild(select_active);
        this.addChild(cnText);
        this.addChild(enText);
        this.addChild(krText);
      } else {
        //this.removeChild(select_active);
        this.removeChild(cnText);
        this.removeChild(enText);
        this.removeChild(krText);
      }

      showActive = !showActive;
    }

    // 下拉列表
    // 边框
    /*let select_active = this.createBitmapByName('select_active_png');
    select_active.x = 1228;
    select_active.y = 80;*/

    let fontFamily = this.fontFamily;

    // 选择框文字
    let selectText: egret.TextField = new egret.TextField();
    selectText.text = '语言';
    selectText.fontFamily = fontFamily;
    selectText.x = 1126;
    selectText.y = 35;
    selectText.width = 160;
    selectText.height = 48;
    selectText.textColor = 0xffffff;
    selectText.size = 24;
    selectText.textAlign = egret.HorizontalAlign.CENTER;
    selectText.verticalAlign = egret.VerticalAlign.MIDDLE;
    selectText.border = true;
    selectText.borderColor = 0xffffff;
    this.addChild(selectText);

    selectText.touchEnabled = true;
    selectText.addEventListener(
      egret.TouchEvent.TOUCH_TAP,
      selectLanguage,
      this
    );
    if (window.localStorage.getItem('language')) {
      this.language = window.localStorage.getItem('language');

      switch (this.language) {
        case 'zh':
          selectText.text = '语言';
          break;
        case 'kr':
          selectText.text = '언어';
          break;
        default:
          selectText.text = 'Language';
          break;
      }
    } else {
      var lan = navigator.language.toLowerCase();
      if (lan.indexOf('zh') >= 0) {
        this.language = 'zh';
        selectText.text = '语言';
      } else if (lan.indexOf('kr') >= 0) {
        selectText.text = '언어';
        this.language = 'kr';
      } else {
        this.language = 'en';
        selectText.text = 'Language';
      }
    }

    resetTitle(this);

    // 文字
    let cnText: egret.TextField = new egret.TextField();
    cnText.text = '中文';
    cnText.fontFamily = fontFamily;
    cnText.x = 1126;
    cnText.y = 93;
    cnText.width = 160;
    cnText.height = 48;
    cnText.textColor = 0xffffff;
    cnText.size = 24;
    cnText.textAlign = egret.HorizontalAlign.CENTER;
    cnText.verticalAlign = egret.VerticalAlign.MIDDLE;
    cnText.border = true;
    cnText.borderColor = 0xffffff;
    cnText.touchEnabled = true;
    cnText.addEventListener(egret.TouchEvent.TOUCH_TAP, changeCnLanguage, this);

    let krText: egret.TextField = new egret.TextField();
    krText.text = '한국어';
    krText.fontFamily = fontFamily;
    krText.x = 1126;
    krText.y = 141;
    krText.width = 160;
    krText.height = 48;
    krText.textColor = 0xffffff;
    krText.size = 24;
    krText.textAlign = egret.HorizontalAlign.CENTER;
    krText.verticalAlign = egret.VerticalAlign.MIDDLE;
    krText.border = true;
    krText.borderColor = 0xffffff;
    krText.touchEnabled = true;
    krText.addEventListener(egret.TouchEvent.TOUCH_TAP, changeKrLanguage, this);

    let enText: egret.TextField = new egret.TextField();
    enText.text = 'English';
    enText.fontFamily = fontFamily;
    enText.x = 1126;
    enText.y = 189;
    enText.width = 160;
    enText.height = 48;
    enText.textColor = 0xffffff;
    enText.size = 24;
    enText.textAlign = egret.HorizontalAlign.CENTER;
    enText.verticalAlign = egret.VerticalAlign.MIDDLE;
    enText.border = true;
    enText.borderColor = 0xffffff;
    enText.touchEnabled = true;
    enText.addEventListener(egret.TouchEvent.TOUCH_TAP, changeEnLanguage, this);

    let showActive = false;

    function changeCnLanguage() {
      this.language = 'zh';
      selectText.text = '中文';
      resetTitle(this);
      changeLanguage(this);
    }

    function changeKrLanguage() {
      this.language = 'kr';
      selectText.text = '한국어';
      resetTitle(this);
      changeLanguage(this);
    }

    function changeEnLanguage() {
      this.language = 'en';
      selectText.text = 'English';
      resetTitle(this);
      changeLanguage(this);
    }

    function resetTitle(that) {
      if (typeof title === 'object') {
        that.removeChild(title);
      }

      title = that.createBitmapByName('title_png');
      switch (that.language) {
        case 'zh':
          title = that.createBitmapByName('title_png');
          break;
        case 'kr':
          title = that.createBitmapByName('title_kr_png');
          break;
        case 'en':
          title = that.createBitmapByName('title_en_png');
          break;
      }

      title.x = 1334 / 2 - title.width / 2;
      title.y = 750 / 2 - title.height / 2 + 40;
      title.touchEnabled = true;
      title.addEventListener(egret.TouchEvent.TOUCH_TAP, ruleBegin, this);
      that.addChild(title);
    }

    function changeLanguage(that) {
      window.localStorage.setItem('language', that.language);

      //that.removeChild(select_active);
      that.removeChild(cnText);
      that.removeChild(enText);
      that.removeChild(krText);
      showActive = !showActive;
    }

    let rule;

    // 第二屏开始
    function ruleBegin() {
      var soundClick: egret.Sound = RES.getRes('click_mp3');
      var channel: egret.SoundChannel = soundClick.play(0, 1);

      if (showActive) {
        that.removeChild(cnText);
        that.removeChild(enText);
        that.removeChild(krText);
      }

      // 删除第一屏元素
      that.removeChild(title);
      //that.removeChild(select);
      that.removeChild(selectText);

      // 规则
      switch (that.language) {
        case 'en':
          rule = that.createBitmapByName('rule_en_png');
          break;
        case 'kr':
          rule = that.createBitmapByName('rule_kr_png');
          break;
        default:
          rule = that.createBitmapByName('rule_png');
      }

      that.addChild(rule);
      rule.x = 0;
      rule.y = 0;
      rule.x = 1334 / 2 - rule.width / 2;
      rule.y = 750 / 2 - rule.height / 2;

      // 点击进入第三屏
      rule.touchEnabled = true;
      rule.addEventListener(egret.TouchEvent.TOUCH_TAP, gameBegin, that);
    }

    // 第三屏开始
    function gameBegin() {
      var soundClick: egret.Sound = RES.getRes('click_mp3');
      var channel: egret.SoundChannel = soundClick.play(0, 1);

      that.removeChild(mask);
      that.removeChild(rule);
      // 右上角圆点
      let yellowIcon = that.createBitmapByName('yellow_round_png');
      let blackIcon = that.createBitmapByName('black_round_png');
      let whiteIcon = that.createBitmapByName('white_round_png');
      that.addChild(yellowIcon);
      that.addChild(blackIcon);
      that.addChild(whiteIcon);
      yellowIcon.x = 1064;
      blackIcon.x = 1156;
      whiteIcon.x = 1250;
      blackIcon.y = whiteIcon.y = yellowIcon.y = 47;

      // 右上角计数器
      var whiteLabel: egret.TextField = new egret.TextField();
      var blackLabel: egret.TextField = new egret.TextField();
      var yellowLabel: egret.TextField = new egret.TextField();
      whiteLabel.text = score.yellow + '/5';
      whiteLabel.fontFamily = fontFamily;
      blackLabel.text = score.yellow + '/5';
      blackLabel.fontFamily = fontFamily;
      yellowLabel.text = score.yellow + '/5';
      yellowLabel.fontFamily = fontFamily;
      that.addChild(yellowLabel);
      that.addChild(whiteLabel);
      that.addChild(blackLabel);
      yellowLabel.x = 1094;
      blackLabel.x = 1186;
      whiteLabel.x = 1280;

      yellowLabel.y = whiteLabel.y = blackLabel.y = 44;
      yellowLabel.size = whiteLabel.size = blackLabel.size = 30;

      // 右上角红绿灯
      let redLight = that.createBitmapByName('red_light_png');
      that.addChild(redLight);
      redLight.x = 1334 - redLight.width + 14;
      redLight.y = 115;

      // 汽车元素
      class Car extends egret.Sprite {
        public constructor() {
          super();

          this.rand = Math.random();
          let color = ['yellow', 'white', 'black'];
          let chooseColor = color[Math.floor(Math.random() * 3)];
          this.color = chooseColor;
          this.redirect = !!Math.floor(Math.random() * 2);
          this.touched = false;
          this.begin = Math.floor(Math.random() * 15 * 1000);
          this.speed = Math.floor(Math.random() * 2000 + 2000);
        }

        speed: number;
        color: string;
        rand: number;
        redirect: boolean;
        touched: boolean;
        begin: number;

        // 汽车点击事件
        public onTouch(evt: egret.TouchEvent) {
          // 只允许点击一次
          if (!this.touched && !that.successRes) {
            var soundClick: egret.Sound = RES.getRes('click_mp3');
            var channel: egret.SoundChannel = soundClick.play(0, 1);
            that.showAdd(evt.stageX, evt.stageY, this.color);

            this.touched = true;
            score[this.color]++;
            yellowLabel.text = score.yellow + '/5';
            whiteLabel.text = score.white + '/5';
            blackLabel.text = score.black + '/5';

            let res = [score.yellow, score.black, score.white].sort((a, b) => {
              return b - a;
            })[0];

            if (res >= 5) that.success();
          }
        }

        // 汽车驾驶事件
        public emit(car) {
          // 点击事件
          car.touchEnabled = true;
          car.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);

          // 近大远小
          let sca = this.rand - 0.7 * (this.rand - 1);
          car.width *= sca;
          car.height *= sca;

          // 方向
          if (this.redirect) car.scaleX = -1;

          // 位置 570 ~ 370
          car.x = this.redirect ? 0 : 1334;
          car.y = this.rand * 200 + 370;

          // 开始时间
          setTimeout(() => {
            var tw = egret.Tween.get(car);
            // 速度
            tw.to({ x: this.redirect ? 2000 : -800 }, this.speed);
          }, this.begin);
        }
      }

      // 初始化屏幕上的汽车
      var cars = [];
      var tmpCars = [];
      var carsNumber = 40;

      // 添加
      for (let i = 0; i < carsNumber; i++) {
        let car: Car = new Car();
        cars.push(car);
      }

      // 对汽车进行排序，排序后可以排列层次
      cars.sort(function(x, y) {
        return x.rand - y.rand;
      });

      // 时间进场
      var timeValue = 15;
      var time: egret.TextField = new egret.TextField();
      time.text = timeValue.toString();
      time.fontFamily = fontFamily;
      time.x = 1075;
      time.y = 140;
      time.size = 60;
      time.textColor = 0x468229;
      time.width = 70;
      time.textAlign = egret.HorizontalAlign.CENTER;

      that.addChild(time);

      let yellow_light, green_light, red_light;

      // 红灯进场
      red_light = that.createBitmapByName('red_out_light_png');
      that.addChild(red_light);
      red_light.x = 1334 - red_light.width - 20;
      red_light.y = 115;

      // 黄灯进场
      setTimeout(() => {
        that.removeChild(red_light);
        yellow_light = that.createBitmapByName('yellow_out_light_png');
        that.addChild(yellow_light);
        yellow_light.x = 1334 - yellow_light.width - 20;
        yellow_light.y = 180;
      }, 1000);

      // 绿灯进场 游戏开始
      setTimeout(() => {
        that.removeChild(yellow_light);
        green_light = that.createBitmapByName('green_out_light_png');
        that.addChild(green_light);
        green_light.x = 1334 - green_light.width - 20;
        green_light.y = 240;

        // 汽车开始
        for (let i in cars) {
          // 对汽车颜色进行区分
          let tmpCar = that.createBitmapByName(cars[i].color + '_png');
          that.addChild(tmpCar);
          // 开始
          cars[i].emit(tmpCar, cars[i].begin, cars[i].rand);
          tmpCars.push(tmpCar);
        }

        this.timeReduce = setInterval(() => {
          timeValue--;
          time.text = timeValue.toString();

          if (timeValue <= 0) {
            clearInterval(this.timeReduce);
          }
        }, 1000);
      }, 2000);

      // 游戏结束
      setTimeout(() => {
        // 计算最高值
        let result = [score.yellow, score.black, score.white].sort((a, b) => {
          return b - a;
        })[0];

        // 若失败
        if (result < 5 && !this.successRes) {
          this.addChild(mask);

          switch (that.language) {
            case 'en':
              this.fail = that.createBitmapByName('game_over_en_png');
              break;
            case 'kr':
              this.fail = that.createBitmapByName('game_over_kr_png');
              break;
            default:
              this.fail = that.createBitmapByName('game_over_png');
          }

          this.addChild(this.fail);

          this.fail.x = 1334 / 2 - this.fail.width / 2;
          this.fail.y = 750 / 2 - this.fail.height / 2;

          this.fail.touchEnabled = true;
          this.fail.addEventListener(egret.TouchEvent.TOUCH_TAP, restart, this);

          for (let i = 0; i < carsNumber; i++) {
            cars[i].touched = true;
          }
        }
      }, timeValue * 1000 + 2000);

      function restart() {
        this.removeChild(mask);
        this.removeChild(this.fail);
        this.removeChild(green_light);

        clearInterval(this.timeReduce);

        score = {
          yellow: 0,
          white: 0,
          black: 0
        };

        yellowLabel.text = score.yellow + '/5';
        whiteLabel.text = score.white + '/5';
        blackLabel.text = score.black + '/5';

        timeValue = 15;
        time.text = timeValue.toString();

        // 删除
        for (let i = 0; i < carsNumber; i++) {
          this.removeChild(tmpCars[i]);
        }
        tmpCars = [];

        // 初始化屏幕上的汽车
        cars = [];

        // 添加
        for (let i = 0; i < carsNumber; i++) {
          let car: Car = new Car();
          cars.push(car);
        }

        // 对汽车进行排序，排序后可以排列层次
        cars.sort(function(x, y) {
          return x.rand - y.rand;
        });

        // 红灯进场
        this.addChild(red_light);

        // 黄灯进场
        setTimeout(() => {
          this.removeChild(red_light);
          this.addChild(yellow_light);
        }, 1000);

        // 绿灯进场 游戏开始
        setTimeout(() => {
          this.removeChild(yellow_light);
          this.addChild(green_light);

          // 汽车开始
          for (let i in cars) {
            // 对汽车颜色进行区分
            let tmpCar = this.createBitmapByName(cars[i].color + '_png');
            this.addChild(tmpCar);
            // 开始
            cars[i].emit(tmpCar, cars[i].begin, cars[i].rand);
            tmpCars.push(tmpCar);
          }

          this.timeReduce = setInterval(() => {
            timeValue--;
            time.text = timeValue.toString();

            if (timeValue <= 0) {
              clearInterval(this.timeReduce);
            }
          }, 1000);
        }, 2000);

        setTimeout(() => {
          let result = [score.yellow, score.black, score.white].sort((a, b) => {
            return b - a;
          })[0];

          if (result < 5 && !this.successRes) {
            for (let i = 0; i < carsNumber; i++) {
              cars[i].touched = true;
            }
            this.addChild(mask);
            this.addChild(this.fail);
          }
        }, timeValue * 1000 + 2000);
      }
    }
  }

  /**
   * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
   * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
   */
  private createBitmapByName(name: string) {
    let result = new egret.Bitmap();
    let texture: egret.Texture = RES.getRes(name);
    result.texture = texture;
    return result;
  }

  private success() {
    let userId =
      window.localStorage.getItem('userId') ||
      Math.floor(Math.random() * 1000 * 1000 * 1000);

    console.log(userId);

    window.localStorage.setItem('userId', '' + userId);
    var request = new egret.HttpRequest();
    request.responseType = egret.HttpResponseType.TEXT;
    request.open(
      'http://www.beautywelltraveled.com/interface/poster.php?language=' +
        this.language +
        '&userId=' +
        userId,
      egret.HttpMethod.GET
    );
    request.setRequestHeader(
      'Content-Type',
      'application/x-www-form-urlencoded'
    );
    request.send();
    request.addEventListener(egret.Event.COMPLETE, this.onGetComplete, this);

    var mask: egret.Shape = new egret.Shape();
    mask.graphics.beginFill(0x000000);
    mask.graphics.drawRect(0, 0, 1334, 750);
    mask.alpha = 0.4;
    this.addChild(mask);

    this.successRes = true;

    let success;
    switch (this.language) {
      case 'en':
        success = this.createBitmapByName('success_en_png');
        break;
      case 'kr':
        success = this.createBitmapByName('success_kr_png');
        break;
      default:
        success = this.createBitmapByName('success_png');
    }

    this.addChild(success);
    success.x = 1334 / 2 - success.width / 2;
    success.y = 750 / 2 - success.height / 2;

    success.touchEnabled = true;
    success.addEventListener(egret.TouchEvent.TOUCH_TAP, resultIN, this);

    let resultPic, shop;

    function resultIN() {
      this.removeChild(success);

      resultPic;

      switch (this.language) {
        case 'en':
          resultPic = this.createBitmapByName('result_en_png');
          break;
        case 'kr':
          resultPic = this.createBitmapByName('result_kr_png');
          break;
        default:
          resultPic = this.createBitmapByName('result_png');
      }

      this.addChild(resultPic);
      resultPic.x = 1334 / 2 - resultPic.width / 2;
      resultPic.y = 750 / 2 - resultPic.height / 2;

      resultPic.touchEnabled = true;

      resultPic.addEventListener(
        egret.TouchEvent.TOUCH_BEGIN,
        touchBegin,
        this
      );
      resultPic.addEventListener(egret.TouchEvent.TOUCH_END, touchEnd, this);

      let distanceBegin, distanceEnd;

      function touchBegin(e) {
        distanceBegin = e.localX;
      }

      function touchEnd(e) {
        distanceEnd = e.localX;

        if (distanceBegin - distanceEnd > 50) {
          shopIN();
        } else if (distanceBegin - distanceEnd < -50) {
        } else {
          if (
            e.stageX >= 180 &&
            e.stageX <= 1160 &&
            e.stageY >= 500 &&
            e.stageY <= 560
          )
            planIN(this);
        }
      }

      shop = this.createBitmapByName('shop_png');

      switch (this.language) {
        case 'en':
          shop = this.createBitmapByName('shop_en_png');
          break;
        case 'kr':
          shop = this.createBitmapByName('shop_kr_png');
          break;
        default:
          shop = this.createBitmapByName('shop_png');
      }

      this.addChild(shop);

      shop.x = 1334 + 1334 / 2 - shop.width / 2;
      shop.y = 750 / 2 - shop.height / 2;

      shop.touchEnabled = true;

      shop.addEventListener(egret.TouchEvent.TOUCH_BEGIN, touchBegin1, this);
      shop.addEventListener(egret.TouchEvent.TOUCH_END, touchEnd1, this, 222);

      let distanceBegin1, distanceEnd1;

      function touchBegin1(e) {
        distanceBegin1 = e.localX;
      }

      function touchEnd1(e, t) {
        distanceEnd1 = e.localX;

        if (distanceBegin1 - distanceEnd1 > 50) {
        } else if (distanceBegin1 - distanceEnd1 < -50) {
          resultIN1();
        }
      }
    }

    function shopIN() {
      var twShop = egret.Tween.get(shop);
      var twRes = egret.Tween.get(resultPic);

      twShop.to({ x: shop.x - 1334 }, 300);
      twRes.to({ x: resultPic.x - 1334 }, 300);
    }

    function resultIN1() {
      var twShop = egret.Tween.get(shop);
      var twRes = egret.Tween.get(resultPic);

      twShop.to({ x: shop.x + 1334 }, 300);
      twRes.to({ x: resultPic.x + 1334 }, 300);
    }

    function planIN(that) {
      document.getElementById('ticket').style.display = 'flex';

      document.getElementById('egret-player').style.filter = 'blur(20px)';

      let msg = document.getElementById('ticket_msg');
      console.log(msg);
      let text;

      switch (that.language) {
        case 'en':
          text =
            'Long-press to save the boarding pass to view redemption code and go to a participating store to redeem.';
          // size = 20;
          break;
        case 'kr':
          text =
            '보상 코드를 확인하고 길게 눌러 탑승권을 저장하세요. 참여 매장에 방문해 보상을 받으세요.';
          break;
        default:
          text = '长按保存登机牌，获取兑换码，前往芭比波朗指定门店领取礼遇。';
      }

      msg.innerHTML = text;
      msg.style.fontSize = '12px';
    }
  }

  private showAdd(x, y, color) {
    console.log(color);
    let addNumber;

    // 弹出文字
    // shop = this.createBitmapByName('shop_en_png');
    switch (color) {
      case 'black':
        addNumber = this.createBitmapByName('p1_g_png');
        break;
      case 'white':
        addNumber = this.createBitmapByName('p1_b_png');
        break;
      default:
        addNumber = this.createBitmapByName('p1_y_png');
        break;
    }
    addNumber.alpha = 0;
    addNumber.x = x;
    addNumber.y = y - 100;
    this.addChild(addNumber);

    let moveNUmber = egret.Tween.get(addNumber);
    moveNUmber
      .to({ y: y - 150, alpha: 1 }, 500)
      .to({}, 500)
      .to({ y: y - 200, alpha: 0 }, 500);

    setTimeout(() => {
      this.removeChild(addNumber);
    }, 2000);
  }

  private onGetComplete(event: egret.Event): void {
    var request = <egret.HttpRequest>event.currentTarget;
    let res = JSON.parse(request.response);
    console.log(res);

    let img = document.getElementById('ticket_img');
    img.setAttribute('src', res.img_path);
  }
}
