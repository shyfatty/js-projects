var ClickAble = {
    _template:'<div class="flex"></div>',
    _templateWrap:'<div class="box" ></div>',
    render:function(data){ //渲染
        var _this = this;
        var result = $(_this._template);
        result.text(data);
        return result;
    },
    logic:function(num){  //逻辑
        var _this = this;
        for(var j = 0;j<num;j++){
            var _wrap = $(_this._templateWrap);
            for(var i = 1;i<=num;i++){
                _wrap.append(_this.render(i+j*num));
            }
            $("#clickable-grid").append(_wrap);
        }
    },
    init:function(num){ //初始化
        this.logic(num);  //ִ执行逻辑
        $("#clickable-grid").on('click','.flex',function(){  //为每一个盒子绑定点击事件
            console.log($(this).text());
        })
    }
};

