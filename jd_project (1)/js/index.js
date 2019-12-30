// 效果分析



// 6 文字向上滚动效果

// 自定义封装tap事件

// 其他的响应式尺寸 vw vh 

// 点透问题

// zepto 如何使用 如何定制

// zepto 语法 做轮播图

// iscroll 插件  下拉刷新  上拉滚动加载效果 

// window.onload = function(){}  'load' 全部资源加载完毕
// $(function(){})  // 'DOMContentLoad' dom结构加载完毕



// addEventListener()
window.addEventListener('load', function() {
    // 代码执行放到这里
    fe1312.search_bg_scroll();
    fe1312.downTime();
    fe1312.goTop();
    // fe1312.lunbo();
    fe1312.zepto_lunbo();
    fe1312.goods_slide_func();
    fe1312.text_scroll();
})

// js对象管理方式来组织代码

var fe1312 = {
    // tools ： 这里面可以添加多个工具小方法
    tools: {
        zero: function(m) {
            return m < 10 ? '0' + m : m;
        },
        // 封装一个位移的函数
        // trans(oUl,'translateX(' + (-iW * n) + 'px)')
        trans: function(obj, dis) {
            obj.style.transform = dis;
            obj.style.webkitTransform = dis;

        },
        // 添加过渡效果
        addTrans: function(obj) {
            obj.style.transition = 'all 0.3s';
            obj.style.webkitTransition = 'all 0.3s';
        },
        // 移除过渡
        removeTrans: function(obj) {
            obj.style.transition = 'none';
            obj.style.webkitTransition = 'none';
        },
        transFunc: function(obj, callback) {
            if (typeof obj == 'object') {

                // 实现transitionend事件的兼容写法 webkitTransitionend
                obj.addEventListener('transitionend', function(e) {
                    // console.log(this);
                    (typeof callback == 'function') && callback.call(this, e)
                })
                obj.addEventListener('webkitTransitionend', function() {
                    (typeof callback == 'function') && callback.call(this, e)
                })
            }
        }
    },
    // 1 顶部搜索区域的背景色添加
    search_bg_scroll: function() {
        // 背景颜色透明 只要一滚动 就添加背景色
        //        随着不断向上滚动 背景色逐渐显示出来
        //当滚动距离大于等于轮播图的高度了 则让它背景色全部显示出来
        let oHeader = document.querySelector('header');
        let oLunbo = document.querySelector('.lunbo');
        // 获取到轮播图区域的高度
        let iH = oLunbo.offsetHeight;
        // 添加一个window的scroll事件 来监测滚动距离
        window.addEventListener('scroll', function() {
            // 背景色透明度逐渐变化
            // 层级z-index进行调整
            // 滚动距离
            let iTop = document.documentElement.scrollTop;
            console.log(iTop);

            console.log(iTop / iH); // 

            oHeader.style.backgroundColor = 'rgba(228,49,48,' + (iTop / iH) + ')';

            if (iTop > 0) {
                oHeader.style.zIndex = 4;
            } else {
                oHeader.style.zIndex = 2;
            }
        });




    },
    // 2 倒计时
    downTime: function() {
        var divs = document.querySelectorAll('div.time>div');
        console.log(divs);
        // 假定给一个倒计时时间 3个小时 
        let time = 60 * 60 * 3; // 转为秒数

        let that = this;

        // 定时器
        let timer = setInterval(function() {
            time--;


            // 向下取整  ceil  floor   06
            let h = Math.floor(time / 3600);
            let m = Math.floor(time % 3600 / 60);
            let s = time % 60;

            divs[0].innerHTML = that.tools.zero(h);
            divs[1].innerHTML = that.tools.zero(m);
            divs[2].innerHTML = that.tools.zero(s);
            if (time <= 0) {
                // 重新开始倒计时
                clearInterval(timer);
                return that.downTime();
            }
        }, 1000);



    },
    goTop: function() {
        let goTop = document.querySelector('.goTop');
        // 可视区域的高度
        let iH = document.documentElement.clientHeight;
        console.log(iH);

        goTop.style.display = 'none';
        let iTop;


        // window scroll事件
        window.addEventListener('scroll', function() {
            iTop = document.documentElement.scrollTop;
            if (iTop >= iH) {
                goTop.style.display = 'block';
            } else {
                goTop.style.display = 'none';
            }

        })

        // 单击goTop 返回顶部
        goTop.addEventListener('touchstart', function() {
            // 开启一个定时器  让 滚动距离 一点点变小
            let timer = setInterval(function() {
                iTop -= 50;


                if (iTop <= 0) {
                    clearInterval(timer);
                    iTop = 0;
                }


                document.documentElement.scrollTop = iTop;
            }, 10);
        });
    },
    zepto_lunbo: function() {
        // 初始化准备工作
        // 1 获取元素
        var $oUl = $('.banner')
        var $navs = $('.lunbo_nav>li');
        // 2 克隆
        var firstLi = $oUl.children('li').eq(0).clone(true);
        var lastLi = $oUl.children('li').last().clone(true);

        $oUl.append(firstLi);
        $oUl.prepend(lastLi);

        // 获取一下当前的可视区域的屏幕宽度
        var iW = $oUl.children('li').eq(0).width();
        // console.log("===========", iW);


        // 全局变量 用来当计数器 
        var n = 1;

        $oUl.css({
            transform: 'translateX(' + -iW * n + 'px)'
        })

        // 封装的滑动的函数
        var animateFunc = function() {
            $oUl.animate({
                transform: 'translateX(' + -iW * n + 'px)'
            }, 300, 'linear', function() {
                // 回调函数
                // console.log('运动完啦' + n);
                if (n >= $navs.length + 1) {
                    n = 1;
                    $oUl.css({
                        transform: 'translateX(' + -iW * n + 'px)'
                    })
                }

                // 左边边界
                if (n <= 0) {
                    n = $navs.length;
                    $oUl.css({
                        transform: 'translateX(' + -iW * n + 'px)'
                    })
                }
                // 让导航小方块跟着走
                $('.lunbo_nav>li.active').removeClass('active');
                $('.lunbo_nav>li').eq(n - 1).addClass('active');

            })

        }

        // 1 轮播图自动走起来  定时器
        var timer = setInterval(function() {
            n++;
            animateFunc();
        }, 2000);

        // 2 手势操作 zepto  

        // 手指 向左滑动 意味着我要去看右边的下一张图
        // 向右滑动 则要看前一张图
        $oUl.on('touchstart', function() {
            clearInterval(timer);
        })

        $oUl.on('swipeLeft', function() {
            console.log('触发拉swipeleft');
            n++;
            animateFunc()

        })

        $oUl.on('swipeRight', function() {
            console.log('触发拉swipeRight');
            n--;
            animateFunc()
        });

        $oUl.on('touchend', function() {
            timer = setInterval(function() {
                n++;
                animateFunc();
            }, 2000);
        })


    },
    lunbo: function() {
        // 1 轮播图自动走起来  定时器

        // 2 手指在轮播图上滑动的时候 让图片跟着滑动

        // 3 手指滑动完毕之后  应该让图片滑过去一张 或者不滑动 （临界值 
        // 如果当前手指 滑动的距离大于等于1/3屏幕宽 则让当前轮播图滑过去一张 否则保持当前图片不滑动）

        // 4 当手指滑动完毕的时候 如果向左滑动 用户是要看下一张图 如果向右滑动用户是要看前一张图

        // 初始化准备工作

        // 1 获取需要的元素
        var oUl = document.querySelector('ul.banner');
        // 2 导航小方块们
        var navs = document.querySelectorAll('ol.lunbo_nav>li');

        // 为了实现无缝轮播 应该复制与第一个li一样的li 把它放到最后的位置
        let firstLi = oUl.children[0].cloneNode(true);
        // 应该复制与最后一个li一样的li 把它放到第一个位置
        let lastLi = oUl.children[oUl.children.length - 1].cloneNode(true);

        // 两个克隆好的进行添加
        oUl.appendChild(firstLi);
        oUl.insertBefore(lastLi, oUl.children[0]);

        // 获取一下一个屏幕的宽
        var iW = oUl.children[0].clientWidth;

        console.log(iW);

        // 设置全局变量  计时器 用来统计位移的是几个屏幕宽
        var n = 1;


        // 初始化的时候 应该让用户看到的是第一张图片 所以让oUl整体位移一下

        // transform  transition css3 新特性 为了兼容旧版内核浏览器 需要浏览器前缀
        // -webkit-transform  谷歌 UC（国内自主研制的内核）手机自带浏览器  safari  大部分浏览器的内容 都是 webkit
        // -moz- -o- -ms-
        this.tools.trans(oUl, 'translateX(' + (-iW * n) + 'px)');


        let timer = setInterval(() => {
            n++;
            this.tools.trans(oUl, 'translateX(' + (-iW * n) + 'px)');
            this.tools.addTrans(oUl);
        }, 2000);

        // transitionend 过渡完成之后 触发该事件
        // webkitTransitionend
        var that = this;
        // 调用一个transitionend的事件兼容函数  内部实现绑定
        this.tools.transFunc(oUl, function(e) {

            // console.log('过渡完成拉');
            if (n >= navs.length + 1) {
                n = 1;
                that.tools.trans(oUl, 'translateX(' + (-iW * n) + 'px)');
                that.tools.removeTrans(oUl);
            }
            // 手势操作的时候 在左边临界点要加判断
            if (n <= 0) {
                n = navs.length;
                that.tools.trans(oUl, 'translateX(' + (-iW * n) + 'px)');
                that.tools.removeTrans(oUl);
            }

            // 让导航小方块 跟着走
            document.querySelector('.lunbo_nav>li.active').classList.remove('active');
            navs[n - 1].classList.add('active');
        })






        // 手指的操作  
        // touch事件
        // 定义几个变量
        // 1 手指按下的坐标点
        var startX = 0;
        // 2 手指滑动的时候的坐标点
        var moveX = 0;
        // 3 差值距离
        var disX = 0;
        // 4 判断是否手指滑动拉 (优化)
        var isMove = false;

        oUl.addEventListener('touchstart', function(e) {
            // 人为操作拉 则应该定时器停止
            clearInterval(timer);
            // 手指按下的坐标点
            startX = e.touches[0].clientX

        });

        oUl.addEventListener('touchmove', (e) => {

            moveX = e.touches[0].clientX;
            // console.log(moveX);
            // 距离  滑动最新坐标 - 开始的坐标 差值 
            disX = moveX - startX;
            console.log(disX);

            this.tools.trans(oUl, 'translateX(' + (-iW * n + disX) + 'px)')
            this.tools.removeTrans(oUl);

            isMove = true;

        });


        oUl.addEventListener('touchend', () => {
            // 手指离开屏幕 会触发这个函数
            if (isMove) {
                // 说明手指滑动过啦
                // 判断disX 差值  临界值 屏幕的1/3 大于 1/3 则让轮播图滑动过去一张 否则还是当前本身
                if (Math.abs(disX) >= iW / 3) {
                    // 则让轮播图滑动过去一张 
                    // 正值 向右滑动 前一张  负值 向左滑动要看下一张后一张
                    if (disX < 0) {
                        n++;
                    } else {
                        n--;
                    }
                }

                this.tools.trans(oUl, 'translateX(' + (-iW * n) + 'px)')
                this.tools.addTrans(oUl);

            }

            // 变量重置
            startX = 0;
            // 2 手指滑动的时候的坐标点
            moveX = 0;
            // 3 差值距离
            disX = 0;
            // 4 判断是否手指滑动拉 (优化)
            isMove = false;

            // 开启定时器
            timer = setInterval(() => {
                n++;
                this.tools.trans(oUl, 'translateX(' + (-iW * n) + 'px)')
                this.tools.addTrans(oUl);

            }, 2000);

        });

    },
    // 商品导航区域左右滑动效果
    goods_slide_func: function() {
        // 思路：控制wrapper的位移 来实现左右滑动
        var oWrap = document.querySelector('.wrapper');

        // 处于第一个盒子的时候 手指应该向左滑动 （目的是要看右边的区域）
        // 处于第二个盒子的时候 手指应该向右滑动 （目的是要看左边的区域）
        // 如果你滑动的距离 大于1/4屏幕宽 则应该滑动过去  否则不滑动

        // 设置一下变量
        var startX = 0;
        var moveX = 0;
        var disX = 0;
        var isMove = false;

        var iW = oWrap.offsetWidth / 2;

        // 设置一个变量用来记录当前处于第几个盒子区域
        var num = 1;

        oWrap.addEventListener('touchstart', function(e) {
            // 获取的是按下的坐标点
            startX = e.touches[0].clientX;
        });
        oWrap.addEventListener('touchmove', function(e) {
            // 获取的是按下的坐标点
            moveX = e.touches[0].clientX;
            isMove = true;
            // 滑动距离
            disX = moveX - startX;
        });
        var that = this;
        oWrap.addEventListener('touchend', function(e) {
            // 先判断是否滑动过
            if (isMove) {
                // 先判断disX正负值
                if (num === 1 && disX < 0 && Math.abs(disX) >= iW / 4) {
                    // 可以滑动   要往第二屏幕滑动 
                    console.log(-oWrap.offsetWidth / 2);

                    that.tools.trans(oWrap, 'translateX(' + (-iW) + 'px)');
                    that.tools.addTrans(oWrap);
                    num = 2;
                } else if (num == 2 && disX > 0 && disX >= iW / 4) {
                    // 可以滑动 要往第一屏幕滑动
                    that.tools.trans(oWrap, 'translateX(' + 0 + 'px)');
                    that.tools.addTrans(oWrap);
                    num = 1;
                }
            }
        });


    },
    // 文字向上滚动效果 无缝
    text_scroll: function() {
        // 获取ul
        var oUl = document.querySelector('.jdkb>ul');
        var iH = oUl.children[0].offsetHeight;

        // 克隆节点
        var fisrtLi = oUl.children[0].cloneNode(true);
        oUl.appendChild(fisrtLi);

        console.log(iH);
        // 全局变量
        var n = 0;


        // 开启一个定时器
        var timer = setInterval(() => {
            n++;
            this.tools.trans(oUl, 'translateY(' + -iH * n + 'px)');
            this.tools.addTrans(oUl);
        }, 1000);

        var that = this;
        // transitionend webkitTransitionend
        this.tools.transFunc(oUl, function() {
            // console.log('过渡完成拉');
            // console.log(n);
            if (n >= oUl.children.length - 1) {
                n = 0;
                that.tools.trans(oUl, 'translateY(' + -iH * n + 'px)');
                that.tools.removeTrans(oUl);
            }

        })


    }



}