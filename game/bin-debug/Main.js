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
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// 入口
var Main = (function (_super) {
    __extends(Main, _super);
    // 构造器
    function Main() {
        var _this = _super.call(this) || this;
        _this.successRes = false;
        _this.language = 'zh';
        _this.fontFamily = 'Avenir Next, -apple-system, Noto Sans, Helvetica Neue, Helvetica, Nimbus Sans L, Arial, Liberation Sans, PingFang SC, Hiragino Sans GB, Noto Sans CJK SC, Source Han Sans SC, Source Han Sans CN, Microsoft YaHei, Wenquanyi Micro Hei, WenQuanYi Zen Hei, ST Heiti, SimHei, WenQuanYi Zen Hei Sharp, sans-serif';
        _this.score = {
            yellow: 0,
            white: 0,
            black: 0
        };
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    // 添加舞台
    Main.prototype.onAddToStage = function (event) {
        this.runGame().catch(function (e) {
            console.log(e);
        });
    };
    // 开始
    Main.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadResource()];
                    case 1:
                        _a.sent();
                        this.createGameScene(this.score, this);
                        return [2 /*return*/];
                }
            });
        });
    };
    // 加载资源
    Main.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadingView, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        loadingView = new LoadingUI();
                        this.stage.addChild(loadingView);
                        return [4 /*yield*/, RES.loadConfig('resource/default.res.json', 'resource/')];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup('preload', 0, loadingView)];
                    case 2:
                        _a.sent();
                        this.stage.removeChild(loadingView);
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 创建游戏场景
     * Create a game scene
     */
    Main.prototype.createGameScene = function (score, that) {
        //let test = document.getElementById('test');
        //test.style.color = 'white';
        document.getElementById('mask').style.display = 'none';
        // 背景
        var sky = this.createBitmapByName('bg_jpg');
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        sky.width = 4002;
        sky.height = stageH;
        sky.x = stageW - sky.width;
        sky.y = 0;
        this.addChild(sky);
        egret.Tween.get(sky, { loop: true }).to({ x: 0 }, 30000);
        // 第一屏
        // 底层遮罩
        var mask = new egret.Shape();
        mask.graphics.beginFill(0x000000);
        mask.graphics.drawRect(0, 0, 1334, 750);
        mask.alpha = 0.4;
        this.addChild(mask);
        // 文字信息
        var title;
        function selectLanguage() {
            if (!showActive) {
                //this.addChild(select_active);
                this.addChild(cnText);
                this.addChild(enText);
                this.addChild(krText);
            }
            else {
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
        var fontFamily = this.fontFamily;
        // 选择框文字
        var selectText = new egret.TextField();
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
        selectText.addEventListener(egret.TouchEvent.TOUCH_TAP, selectLanguage, this);
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
        }
        else {
            var lan = navigator.language.toLowerCase();
            if (lan.indexOf('zh') >= 0) {
                this.language = 'zh';
                selectText.text = '语言';
            }
            else if (lan.indexOf('kr') >= 0) {
                selectText.text = '언어';
                this.language = 'kr';
            }
            else {
                this.language = 'en';
                selectText.text = 'Language';
            }
        }
        resetTitle(this);
        // 文字
        var cnText = new egret.TextField();
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
        var krText = new egret.TextField();
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
        var enText = new egret.TextField();
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
        var showActive = false;
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
        var rule;
        // 第二屏开始
        function ruleBegin() {
            var soundClick = RES.getRes('click_mp3');
            var channel = soundClick.play(0, 1);
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
            var _this = this;
            var soundClick = RES.getRes('click_mp3');
            var channel = soundClick.play(0, 1);
            that.removeChild(mask);
            that.removeChild(rule);
            // 右上角圆点
            var yellowIcon = that.createBitmapByName('yellow_round_png');
            var blackIcon = that.createBitmapByName('black_round_png');
            var whiteIcon = that.createBitmapByName('white_round_png');
            that.addChild(yellowIcon);
            that.addChild(blackIcon);
            that.addChild(whiteIcon);
            yellowIcon.x = 1064;
            blackIcon.x = 1156;
            whiteIcon.x = 1250;
            blackIcon.y = whiteIcon.y = yellowIcon.y = 47;
            // 右上角计数器
            var whiteLabel = new egret.TextField();
            var blackLabel = new egret.TextField();
            var yellowLabel = new egret.TextField();
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
            var redLight = that.createBitmapByName('red_light_png');
            that.addChild(redLight);
            redLight.x = 1334 - redLight.width + 14;
            redLight.y = 115;
            // 汽车元素
            var Car = (function (_super) {
                __extends(Car, _super);
                function Car() {
                    var _this = _super.call(this) || this;
                    _this.rand = Math.random();
                    var color = ['yellow', 'white', 'black'];
                    var chooseColor = color[Math.floor(Math.random() * 3)];
                    _this.color = chooseColor;
                    _this.redirect = !!Math.floor(Math.random() * 2);
                    _this.touched = false;
                    _this.begin = Math.floor(Math.random() * 15 * 1000);
                    _this.speed = Math.floor(Math.random() * 2000 + 2000);
                    return _this;
                }
                // 汽车点击事件
                Car.prototype.onTouch = function (evt) {
                    // 只允许点击一次
                    if (!this.touched && !that.successRes) {
                        var soundClick = RES.getRes('click_mp3');
                        var channel = soundClick.play(0, 1);
                        that.showAdd(evt.stageX, evt.stageY, this.color);
                        this.touched = true;
                        score[this.color]++;
                        yellowLabel.text = score.yellow + '/5';
                        whiteLabel.text = score.white + '/5';
                        blackLabel.text = score.black + '/5';
                        var res = [score.yellow, score.black, score.white].sort(function (a, b) {
                            return b - a;
                        })[0];
                        if (res >= 5)
                            that.success();
                    }
                };
                // 汽车驾驶事件
                Car.prototype.emit = function (car) {
                    var _this = this;
                    // 点击事件
                    car.touchEnabled = true;
                    car.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
                    // 近大远小
                    var sca = this.rand - 0.7 * (this.rand - 1);
                    car.width *= sca;
                    car.height *= sca;
                    // 方向
                    if (this.redirect)
                        car.scaleX = -1;
                    // 位置 570 ~ 370
                    car.x = this.redirect ? 0 : 1334;
                    car.y = this.rand * 200 + 370;
                    // 开始时间
                    setTimeout(function () {
                        var tw = egret.Tween.get(car);
                        // 速度
                        tw.to({ x: _this.redirect ? 2000 : -800 }, _this.speed);
                    }, this.begin);
                };
                return Car;
            }(egret.Sprite));
            // 初始化屏幕上的汽车
            var cars = [];
            var tmpCars = [];
            var carsNumber = 40;
            // 添加
            for (var i = 0; i < carsNumber; i++) {
                var car = new Car();
                cars.push(car);
            }
            // 对汽车进行排序，排序后可以排列层次
            cars.sort(function (x, y) {
                return x.rand - y.rand;
            });
            // 时间进场
            var timeValue = 15;
            var time = new egret.TextField();
            time.text = timeValue.toString();
            time.fontFamily = fontFamily;
            time.x = 1075;
            time.y = 140;
            time.size = 60;
            time.textColor = 0x468229;
            time.width = 70;
            time.textAlign = egret.HorizontalAlign.CENTER;
            that.addChild(time);
            var yellow_light, green_light, red_light;
            // 红灯进场
            red_light = that.createBitmapByName('red_out_light_png');
            that.addChild(red_light);
            red_light.x = 1334 - red_light.width - 20;
            red_light.y = 115;
            // 黄灯进场
            setTimeout(function () {
                that.removeChild(red_light);
                yellow_light = that.createBitmapByName('yellow_out_light_png');
                that.addChild(yellow_light);
                yellow_light.x = 1334 - yellow_light.width - 20;
                yellow_light.y = 180;
            }, 1000);
            // 绿灯进场 游戏开始
            setTimeout(function () {
                that.removeChild(yellow_light);
                green_light = that.createBitmapByName('green_out_light_png');
                that.addChild(green_light);
                green_light.x = 1334 - green_light.width - 20;
                green_light.y = 240;
                // 汽车开始
                for (var i in cars) {
                    // 对汽车颜色进行区分
                    var tmpCar = that.createBitmapByName(cars[i].color + '_png');
                    that.addChild(tmpCar);
                    // 开始
                    cars[i].emit(tmpCar, cars[i].begin, cars[i].rand);
                    tmpCars.push(tmpCar);
                }
                _this.timeReduce = setInterval(function () {
                    timeValue--;
                    time.text = timeValue.toString();
                    if (timeValue <= 0) {
                        clearInterval(_this.timeReduce);
                    }
                }, 1000);
            }, 2000);
            // 游戏结束
            setTimeout(function () {
                // 计算最高值
                var result = [score.yellow, score.black, score.white].sort(function (a, b) {
                    return b - a;
                })[0];
                // 若失败
                if (result < 5 && !_this.successRes) {
                    _this.addChild(mask);
                    switch (that.language) {
                        case 'en':
                            _this.fail = that.createBitmapByName('game_over_en_png');
                            break;
                        case 'kr':
                            _this.fail = that.createBitmapByName('game_over_kr_png');
                            break;
                        default:
                            _this.fail = that.createBitmapByName('game_over_png');
                    }
                    _this.addChild(_this.fail);
                    _this.fail.x = 1334 / 2 - _this.fail.width / 2;
                    _this.fail.y = 750 / 2 - _this.fail.height / 2;
                    _this.fail.touchEnabled = true;
                    _this.fail.addEventListener(egret.TouchEvent.TOUCH_TAP, restart, _this);
                    for (var i = 0; i < carsNumber; i++) {
                        cars[i].touched = true;
                    }
                }
            }, timeValue * 1000 + 2000);
            function restart() {
                var _this = this;
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
                for (var i = 0; i < carsNumber; i++) {
                    this.removeChild(tmpCars[i]);
                }
                tmpCars = [];
                // 初始化屏幕上的汽车
                cars = [];
                // 添加
                for (var i = 0; i < carsNumber; i++) {
                    var car = new Car();
                    cars.push(car);
                }
                // 对汽车进行排序，排序后可以排列层次
                cars.sort(function (x, y) {
                    return x.rand - y.rand;
                });
                // 红灯进场
                this.addChild(red_light);
                // 黄灯进场
                setTimeout(function () {
                    _this.removeChild(red_light);
                    _this.addChild(yellow_light);
                }, 1000);
                // 绿灯进场 游戏开始
                setTimeout(function () {
                    _this.removeChild(yellow_light);
                    _this.addChild(green_light);
                    // 汽车开始
                    for (var i in cars) {
                        // 对汽车颜色进行区分
                        var tmpCar = _this.createBitmapByName(cars[i].color + '_png');
                        _this.addChild(tmpCar);
                        // 开始
                        cars[i].emit(tmpCar, cars[i].begin, cars[i].rand);
                        tmpCars.push(tmpCar);
                    }
                    _this.timeReduce = setInterval(function () {
                        timeValue--;
                        time.text = timeValue.toString();
                        if (timeValue <= 0) {
                            clearInterval(_this.timeReduce);
                        }
                    }, 1000);
                }, 2000);
                setTimeout(function () {
                    var result = [score.yellow, score.black, score.white].sort(function (a, b) {
                        return b - a;
                    })[0];
                    if (result < 5 && !_this.successRes) {
                        for (var i = 0; i < carsNumber; i++) {
                            cars[i].touched = true;
                        }
                        _this.addChild(mask);
                        _this.addChild(_this.fail);
                    }
                }, timeValue * 1000 + 2000);
            }
        }
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    Main.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    Main.prototype.success = function () {
        var userId = window.localStorage.getItem('userId') ||
            Math.floor(Math.random() * 1000 * 1000 * 1000);
        console.log(userId);
        window.localStorage.setItem('userId', '' + userId);
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        request.open('http://www.beautywelltraveled.com/interface/poster.php?language=' +
            this.language +
            '&userId=' +
            userId, egret.HttpMethod.GET);
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        request.send();
        request.addEventListener(egret.Event.COMPLETE, this.onGetComplete, this);
        var mask = new egret.Shape();
        mask.graphics.beginFill(0x000000);
        mask.graphics.drawRect(0, 0, 1334, 750);
        mask.alpha = 0.4;
        this.addChild(mask);
        this.successRes = true;
        var success;
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
        var resultPic, shop;
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
            resultPic.addEventListener(egret.TouchEvent.TOUCH_BEGIN, touchBegin, this);
            resultPic.addEventListener(egret.TouchEvent.TOUCH_END, touchEnd, this);
            var distanceBegin, distanceEnd;
            function touchBegin(e) {
                distanceBegin = e.localX;
            }
            function touchEnd(e) {
                distanceEnd = e.localX;
                if (distanceBegin - distanceEnd > 50) {
                    shopIN();
                }
                else if (distanceBegin - distanceEnd < -50) {
                }
                else {
                    if (e.stageX >= 180 &&
                        e.stageX <= 1160 &&
                        e.stageY >= 500 &&
                        e.stageY <= 560)
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
            var distanceBegin1, distanceEnd1;
            function touchBegin1(e) {
                distanceBegin1 = e.localX;
            }
            function touchEnd1(e, t) {
                distanceEnd1 = e.localX;
                if (distanceBegin1 - distanceEnd1 > 50) {
                }
                else if (distanceBegin1 - distanceEnd1 < -50) {
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
            var msg = document.getElementById('ticket_msg');
            console.log(msg);
            var text;
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
    };
    Main.prototype.showAdd = function (x, y, color) {
        var _this = this;
        console.log(color);
        var addNumber;
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
        var moveNUmber = egret.Tween.get(addNumber);
        moveNUmber
            .to({ y: y - 150, alpha: 1 }, 500)
            .to({}, 500)
            .to({ y: y - 200, alpha: 0 }, 500);
        setTimeout(function () {
            _this.removeChild(addNumber);
        }, 2000);
    };
    Main.prototype.onGetComplete = function (event) {
        var request = event.currentTarget;
        var res = JSON.parse(request.response);
        console.log(res);
        var img = document.getElementById('ticket_img');
        img.setAttribute('src', res.img_path);
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
