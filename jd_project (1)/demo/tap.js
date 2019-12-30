function tap(obj, callback) {
    // 设置一个变量 
    var isMove = false;
    var startTime = 0;

    obj.addEventListener('touchstart', function() {
        // 记录当前的时间
        isMove = false;
        startTime = Date.now()
    })
    obj.addEventListener('touchmove', function() {
        isMove = true;
    })
    obj.addEventListener('touchend', function(e) {
        // 记录当前的时间
        var cha = Date.now() - startTime;
        // console.log(cha);
        if (cha < 150 && !isMove) {
            // 响应速度快 中间没有滑动
            // 执行相应的事情 这才是一个真正的tap点按事件
            // console.log('触发tap事件拉');
            (typeof callback == 'function') && callback.call(obj, e);
        }

    })
}