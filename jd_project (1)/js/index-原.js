// 效果分析



// 3 商品导航区域左右滑动效果

// 5 商品滑动效果

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
    fe1312.lunbo();
})

// js对象管理方式来组织代码

var fe1312 = {
    // tools ： 这里面可以添加多个工具小方法
    tools: {
        zero: function(m) {
            return m < 10 ? '0' + m : m;
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
                console.log('aaaa');

                if (iTop <= 0) {
                    clearInterval(timer);
                    iTop = 0;
                }


                document.documentElement.scrollTop = iTop;
            }, 10);
        });
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
        oUl.style.transform = 'translateX(' + (-iW * n) + 'px)';

        let timer = setInterval(function() {
            n++;
            oUl.style.transform = 'translateX(' + (-iW * n) + 'px)';
            oUl.style.transition = 'all 0.3s';
        }, 2000);

        // transitionend 过渡完成之后 触发该事件
        oUl.addEventListener('transitionend', function() {
            console.log('过渡完成拉');
            if (n >= navs.length + 1) {
                n = 1;
                oUl.style.transform = 'translateX(' + (-iW * n) + 'px)';
                oUl.style.transition = 'none';
            }
            // 手势操作的时候 在左边临界点要加判断
            if (n <= 0) {
                n = navs.length;
                oUl.style.transform = 'translateX(' + (-iW * n) + 'px)';
                oUl.style.transition = 'none';
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

        oUl.addEventListener('touchmove', function(e) {

            moveX = e.touches[0].clientX;
            // console.log(moveX);
            // 距离  滑动最新坐标 - 开始的坐标 差值 
            disX = moveX - startX;
            console.log(disX);

            oUl.style.transform = 'translateX(' + (-iW * n + disX) + 'px)';
            oUl.style.transition = 'none';

            isMove = true;

        });


        oUl.addEventListener('touchend', function() {
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

                oUl.style.transform = 'translateX(' + (-iW * n) + 'px)';
                oUl.style.transition = 'all 0.3s';

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
            timer = setInterval(function() {
                n++;
                oUl.style.transform = 'translateX(' + (-iW * n) + 'px)';
                oUl.style.transition = 'all 0.3s';
            }, 2000);

        });

    }



}