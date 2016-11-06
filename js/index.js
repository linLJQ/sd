/**
 * Created by Administrator on 2016/9/1.
 */

$(function(){
    /*导航*/
    $('.sd_nav_left>ul>li').click(function(){
        $(this).addClass('nav_current').siblings().removeClass('nav_current');
    });
    //*************首页***************
    //切换搜索
    $('.sd_search>ul>li').click(function(){
        $(this).children().addClass('ss_current').parent().siblings().children().removeClass('ss_current');
    });
    //机构养老和居家护理流程
    $('.sd_process>ul>li').mouseover(function(){
        $(this).find('img:last-child').show().prev().hide().parents('li').siblings().find('img:first-child').show().next().hide();
        $(this).parent().next().children().eq($(this).index()).show().siblings().hide();
    });
    
    //轮播图
    $(function(){
        var oul = $('.sd_banner ul');
        var ali = $('.sd_banner ul li');
        var numLi = $('.sd_banner ol li');
        var aliWidth = $('.sd_banner ul li').eq(0).width();
        var _now = 0;	//这个是控制数字样式的计数器
        var _now2 = 0;	//这个是控制图片运动距离的计数器
        var timeId;
        var aimg = $('.sd_banner ul img');
        var op = $('.sd_banner p');
        numLi.click(function(){
            var index = $(this).index();
            _now = index;
            _now2=index;
            var imgAlt = aimg.eq(_now).attr('alt');
            op.html(imgAlt);
            $(this).addClass('current').siblings().removeClass();
            oul.animate({'left':-aliWidth*index},500);
        });
        function slider(){
            if(_now==numLi.size()-1){
                ali.eq(0).css({
                    'position':'relative',
                    'left': oul.width()
                });
                _now=0;
            }else{
                _now++;
            }
            _now2++;
            numLi.eq(_now).addClass('current').siblings().removeClass();
            var imgAlt = aimg.eq(_now).attr('alt');
            op.html(imgAlt);
            oul.animate({'left':-aliWidth*_now2},500,function(){
                if(_now==0){
                    ali.eq(0).css('position','static');
                    oul.css('left',0);
                    _now2=0;
                }
            });
        }
        timeId = setInterval(slider,3000);
        $('.sd_banner').hover(function(){
            clearInterval(timeId);
        },function(){
            timeId = setInterval(slider,3000);
        });
    });
    //机构推荐
    //鼠标放上有显示地址
    $('.sd_tj_ul>li').hover(function(){
        $(this).find('.sd_jgtj_content_p').show().fadeIn(2500);
    },function(){
        $(this).find('.sd_jgtj_content_p').hide();
    });
    //点击收藏
    $('.sd_jgtj_content_sc').click(function(){
        var img1=$(this).find('img:nth-of-type(1)');
        var img2=$(this).find('img:nth-of-type(2)');
        if(img2.css('display')=='none'){
            img1.hide().next().show();
            img1.siblings('span').text('已收藏');
        }else{
            img1.show().next().hide();
            img1.siblings('span').text('立即收藏');
        }
    });

    //点击切换机构推荐内容
    $('.sd_jgtj_title>ul>li').click(function(){
        $(this).addClass('tj_current').siblings().removeClass('tj_current');
        $(this).parents('.sd_jgtj_title').next().children().eq($(this).index()).show().siblings().hide();
    });
    //点击切换护工推荐内容
    $('.sd_hgtj_title>ul>li').click(function(){
        $(this).addClass('tj_current').siblings().removeClass('tj_current');
        $(this).parents('.sd_hgtj_title').next().children().eq($(this).index()).show().siblings().hide();
    });

    /*返回顶部*/
    $(".btn_top").hide();
    $(document).on('click', '.btn_top', function() {
        $('html, body').animate({scrollTop: 0},300);
        return false;
    });
    $(window).bind('scroll resize',function(){
        if($(window).scrollTop()<=300){
            $(".btn_top").hide();
        }else{
            $(".btn_top").show();
        }
    });
    //********************登陆页***********************
    $('.login_main_subcon>ul>li').click(function(){
        $(this).addClass('log_current').siblings().removeClass('log_current');
        $(this).parent().next().children().eq($(this).index()).show().siblings().hide();
    });
    $('.login_gr>ul>li').click(function(){
        $(this).children('img:nth-of-type(2)').show().prev().hide();
        $(this).siblings().children('img:nth-of-type(2)').hide().prev().show();
        $(this).parent().next().children().eq($(this).index()).show().siblings().hide();
    });
    $('.login_qy>ul>li').click(function(){
        $(this).children('img:nth-of-type(2)').show().prev().hide();
        $(this).siblings().children('img:nth-of-type(2)').hide().prev().show();
        $(this).parent().next().children().eq($(this).index()).show().siblings().hide();
    });
    //********************企业注册***********************
    $('.register_businesses_con>ul>li').click(function(){
        $(this).addClass('reg_current').siblings().removeClass('reg_current').parent().next().children().eq($(this).index()).show().siblings().hide();
    });
    //********************支付界面***********************
    $('.sd_payment>ul>li').click(function(){
        $(this).addClass('pay_current').siblings().removeClass('pay_current');
    });
    $('.sd_tuidan').click(function(){
        $('.sd_tuidanSM').show();
        var maskHeight=$(document).height();
        var maskWidth=$(document).width();
        $(document.body).css("overflow","hidden");
        $(document).css("overflow","hidden");
        $('<div class="mask"></div>').appendTo($('body'));
        $('div.mask').css({
            'opacity':0.7,
            'background':'#000',
            'position':'absolute',
            'left':0,
            'top':0,
            'height':maskHeight,
            'width':maskWidth,
            'z-index':200
        });
        $('.mask').click(function(){
            $('.mask').remove();
            $('.sd_tuidanSM').hide();
            $(document.body).css("overflow","auto");
            $(document).css("overflow","auto");
        });
        $('.tuidan_close').click(function(){
            $(this).parents('.sd_tuidanSM').hide();
            $('.mask').remove();
            $(document.body).css("overflow","auto");
            $(document).css("overflow","auto");
        });
    });
    //********************订单评论***********************
    $('.sd_orderReview_ul>li').click(function(){
        if($(this).children('img:first-child').is(':visible')){
            $(this).children('img:last-child').show().prev().hide();
        }else{
            $(this).children('img:last-child').hide().prev().show();
        }
        var sNum=0;
        $(this).parent().find('img:last-child').each(function(){
            if($(this).is(':visible')){
                sNum +=1;
            }else{
                sNum=sNum;
            }
        });
        $('.starNum').text(sNum);
    });
    //********************养老机构下单确认页***********************
    //数量增加减少和合计
    $('.order_reduce').click(function(){
        if(!$('.order_num>input').val()==""){
            if($(this).next().val()>1){
                $(this).next().val($(this).next().val()-1);
                orderTotal();
            }else{
                $(this).next().val()==1;
                orderTotal();
            }
        }
    });
    $('.order_add').click(function(){
        if(!$('.order_num>input').val()==""){
            $(this).prev().val(parseInt($(this).prev().val())+1);
            orderTotal();
        }
    });
    $('.order_num>input').bind('input propertychange', function(){
        if(!$('.order_num>input').val()==""){
            orderTotal();
        }
        if($('.order_num>input').val()==""){
            $('.ototal').text(0+'元');
            $('.order_num>input').val()==1;
        }
    });
    function orderTotal(){
        var oPrice=parseFloat($('.oprice').text());
        var oNum=parseInt($('.order_num>input').val());
        $('.ototal').text((oPrice*oNum).toFixed(2)+'元');
        $('.a_price').text((oPrice*oNum).toFixed(2));
    }
    orderTotal();

    /*点击增加修改*/
    $('.sd_addUl').click(function(){
        $('.sd_addCon').show();
        //添加遮照层
        var maskHeight=$(document).height();
        var maskWidth=$(document).width();
        $(document.body).css("overflow","hidden");
        $(document).css("overflow","hidden");
        $('<div class="mask"></div>').appendTo($('body'));
        $('div.mask').css({
            'opacity':0.7,
            'background':'#000',
            'position':'absolute',
            'left':0,
            'top':0,
            'height':maskHeight,
            'width':maskWidth,
            'z-index':200
        });
        $('.mask').click(function(){
            $('.mask').remove();
            $('.sd_addCon').hide();
            $(document.body).css("overflow","auto");
            $(document).css("overflow","auto");
        });
        $('.addCon_close').click(function(){
            $(this).parents('.sd_addCon').hide();
            $('.mask').remove();
            $(document.body).css("overflow","auto");
            $(document).css("overflow","auto");
        });
    });
    /*点击修改*/
    $('.sd_reviseUl').click(function(){
        $('.sd_reviseCon').show();
        //添加遮照层
        var maskHeight=$(document).height();
        var maskWidth=$(document).width();

        $(document.body).css("overflow","hidden");
        $(document).css("overflow","hidden");

        $('<div class="mask"></div>').appendTo($('body'));
        $('div.mask').css({
            'opacity':0.7,
            'background':'#000',
            'position':'absolute',
            'left':0,
            'top':0,
            'height':maskHeight,
            'width':maskWidth,
            'z-index':200
        });
        $('.mask').click(function(){
            $('.mask').remove();
            $('.sd_reviseCon').hide();
            $(document.body).css("overflow","auto");
            $(document).css("overflow","auto");
        });
        $('.revise_close').click(function(){
            $(this).parents('.sd_reviseCon').hide();
            $('.mask').remove();
            $(document.body).css("overflow","auto");
            $(document).css("overflow","auto");
        });
    });
    /*点击增加*/
    $('.sd_addUl2').click(function(){
        $('.sd_addCon1').show();
        //添加遮照层
        var maskHeight=$(document).height();
        var maskWidth=$(document).width();

        $(document.body).css("overflow","hidden");
        $(document).css("overflow","hidden");

        $('<div class="mask"></div>').appendTo($('body'));
        $('div.mask').css({
            'opacity':0.7,
            'background':'#000',
            'position':'absolute',
            'left':0,
            'top':0,
            'height':maskHeight,
            'width':maskWidth,
            'z-index':200
        });
        $('.mask').click(function(){
            $('.mask').remove();
            $('.sd_addCon1').hide();
            $(document.body).css("overflow","auto");
            $(document).css("overflow","auto");
        });
        $('.addCon_close1').click(function(){
            $(this).parents('.sd_addCon1').hide();
            $('.mask').remove();
            $(document.body).css("overflow","auto");
            $(document).css("overflow","auto");
        });
    });
    /*点击修改*/
    $('.sd_reviseUl2').click(function(){
        $('.sd_reviseCon1').show();
        //添加遮照层
        var maskHeight=$(document).height();
        var maskWidth=$(document).width();

        $(document.body).css("overflow","hidden");
        $(document).css("overflow","hidden");

        $('<div class="mask"></div>').appendTo($('body'));
        $('div.mask').css({
            'opacity':0.7,
            'background':'#000',
            'position':'absolute',
            'left':0,
            'top':0,
            'height':maskHeight,
            'width':maskWidth,
            'z-index':200
        });
        $('.mask').click(function(){
            $('.mask').remove();
            $('.sd_reviseCon1').hide();
            $(document.body).css("overflow","auto");
            $(document).css("overflow","auto");
        });
        $('.revise_close1').click(function(){
            $(this).parents('.sd_reviseCon1').hide();
            $('.mask').remove();
            $(document.body).css("overflow","auto");
            $(document).css("overflow","auto");
        });
    });
    /*******************养老机构预约单确认********************/
    $(".oCheck").click(function() {
        var sublis = $(this).closest(".sd_appointment").find(".oCheck");
        var sublisC = $(this).closest(".sd_appointment").find(".oCheck:checked");
        var lis = $(this).closest(".sd_appointment").find(".allCheck");
        if (sublis.length == sublisC.length) {
            lis.prop('checked', true);
        } else {
            lis.prop('checked', false);
        }
    });
    //全选
    $(".allCheck").change(function() {
        if ($(this).prop("checked") == true) {
            $(this).parents('.sd_appointment').find(".oCheck").prop('checked', true);
        } else { //如果店铺按钮不被选中
            $(this).parents('.sd_appointment').find(".oCheck").prop('checked', false);
        }
    });
    /***********************养老院机构*********************/
    //导航
    $('.sd_nav>ul>li').click(function(){
        $(this).addClass('nav_current').siblings().removeClass('nav_current');
    });
    //筛选条件
    $('.beadhouse_sel>ul>li').click(function(){
        $(this).addClass('sd_bg3').siblings().removeClass('sd_bg3');
    });
    //翻页
    var bul=$('.sd_beadhouse_con_bottom').children('ul:first-child');
    bul.children().click(function(){
        $(this).children().addClass('sd_bg3').parent().siblings().children().removeClass('sd_bg3');
    });
    /*************************养老院机构详情***********************/
    /*图片放大*/
    $('.all_pic>img').mouseover(function(){
        $(this).parent().prev().children().attr('src',$(this).attr('src'));
    });
    /*点击选中选项*/
    $('.sd_beadhouse_detail_rtop_ul>ul>li').not(".sd_add,.sd_input,.sd_reduce,.sd_time").click(function(){
        if(!$(this).hasClass('pro_sel')){
            $(this).addClass('pro_sel').siblings().removeClass('pro_sel');
            $(this).children('input').prop('checked',true).parent().siblings().children('input').prop('checked',false);
            $(this).children('i').addClass('sd_triangle').parent().siblings().children('i').removeClass('sd_triangle');
            //$(this).children().prop('checked',true);
        }else{
            $(this).removeClass('pro_sel');
            $(this).children('i').removeClass('sd_triangle');
            $(this).children().prop('checked',false);
        }
    });

    /*点击增加或减少*/
    // 数量减
    $(".sd_reduce").click(function() {
        var t = $(this).next().children();
        t.val(parseInt(t.val()) - 1);
        if (t.val() <= 1) {
            t.val(1);
            $(this).css('color','#999');
        }else{
            $(this).css('color','#333');
        }
    });
    // 数量加
    $(".sd_add").click(function() {
        var t = $(this).prev().children();
        t.val(parseInt(t.val()) + 1);
        if (t.val() <= 1) {
            t.val(1);
            $(this).siblings('.sd_reduce').css('color','#999');
        }else{
            $(this).siblings('.sd_reduce').css('color','#333');
        }
    });
    $('.sd_ewm').hover(function(){
        $(this).next().children('img').attr('src',$(this).children('img').attr('src'));
        $(this).next().show();
    },function(){
        $(this).next().hide();
    });

    /*特色*/
    $('.sd_boxes>span').hover(function(){
        $(this).addClass('sd_bg3').parent().siblings().children('span').removeClass('sd_bg3');
        $(this).css('border','1px solid #ff6600');
        $(this).next().show().parent().siblings().children('p').hide();
    },function(){
        $(this).next().hide();
        $(this).removeClass('sd_bg3');
        $(this).css('border','1px solid #469c48');
    });

    /*交通地图路线*/
    $('.sd_beadhouse_detail_bottom_con6>ul>li').click(function(){
        $(this).addClass('sd_bg3').siblings().removeClass('sd_bg3');
        $(this).parent().next().children().eq($(this).index()).show().siblings().hide()
    });
    /*评价*/
    $('.sd_beadhouse_detail_bottom_con7>form>ul>li').click(function(){
        $(this).parents('form').next().children().eq($(this).index()).show().siblings().hide();
        $(this).children('input').prop('checked',true);
    });
    /*导航*/
    $(".sd_beadhouse_detail_bottom_nav>ul>li>a").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, 1500);

       $(this).parent().addClass('tj_current').siblings().removeClass('tj_current');
        return false;
    });
    /*查看地图*/
    $('.sd_maps').click(function(){
        $('.sd_bmap').show();
        var maskHeight=$(document).height();
        var maskWidth=$(document).width();

        $(document.body).css("overflow","hidden");
        $(document).css("overflow","hidden");

        //添加遮照层
        $('<div class="mask"></div>').appendTo($('body'));
        $('div.mask').css({
            'opacity':0.7,
            'background':'#000',
            'position':'absolute',
            'left':0,
            'top':0,
            'height':maskHeight,
            'width':maskWidth,
            'z-index':200
        });
        $('.mask').click(function(){
            $('.mask').remove();
            $('.sd_bmap').hide();
            $(document.body).css("overflow","auto");
            $(document).css("overflow","auto");
        });
    });
    $('.sd_collection').click(function(){
        $('.sd_login').show();
        //添加遮照层
        var maskHeight=$(document).height();
        var maskWidth=$(document).width();

        $(document.body).css("overflow","hidden");
        $(document).css("overflow","hidden");

        $('<div class="mask"></div>').appendTo($('body'));
        $('div.mask').css({
            'opacity':0.7,
            'background':'#000',
            'position':'absolute',
            'left':0,
            'top':0,
            'height':maskHeight,
            'width':maskWidth,
            'z-index':200
        });
        $('.mask').click(function(){
            $('.mask').remove();
            $('.sd_login').hide();
            $(document.body).css("overflow","auto");
            $(document).css("overflow","auto");
        });
        $('.login_close').click(function(){
            $(this).parents('.sd_login').hide();
            $('.mask').remove();
        });
    });

    /*************************居家护理************************/
    //地址选择
    $('.address_ul>li').click(function(){
        $(this).addClass('n_current').siblings().removeClass('n_current');
        $(this).children('input').prop('checked',true);
    });

    //合计
    $('.n_price').text(parseFloat($('.n_total').text()).toFixed(2));

    /*********************************角色管理**********************************/
    $('.sd_userManagement_nav>ul>li').click(function(){
        $(this).children().addClass('sd_bg3').parent().siblings().children().removeClass('sd_bg3');
    });
    $('.Auser>a').click(function(){
        $(this).hide().siblings().show();
        $(this).parent().prev().children().eq($(this).index()).hide().siblings().show();
    });
    $('.addOne').click(function(){
        $('.add_role').show();
    });
    $('.sd_userManagement_fcon>ul>li').click(function(){
        $(this).addClass('sd_fon1').siblings().removeClass('sd_fon1');
        $(this).parents('.sd_userManagement_fcon').next().children().eq($(this).index()).show().siblings().hide();
        $(this).css('border-bottom',0).siblings().css('border-bottom','1px solid #e0e0e0');
        $(this).prev().css('border-bottom',0)
    });
    //选择框
    $(".onerole").click(function() {
        var sublis = $(this).closest(".sd_roleManagement_ul").find(".onerole");
        var sublisC = $(this).closest(".sd_roleManagement_ul").find(".onerole:checked");
        var lis = $(this).closest(".sd_roleManagement_ul").find(".allrole");
        if (sublis.length == sublisC.length) {
            lis.prop('checked', true);
        } else {
            lis.prop('checked', false);
        }
    });
    //全选
    $(".allrole").change(function() {
        if ($(this).prop("checked") == true) {
            $(this).parents('.sd_roleManagement_ul').find(".onerole").prop('checked', true);
        } else { //如果店铺按钮不被选中
            $(this).parents('.sd_roleManagement_ul').find(".onerole").prop('checked', false);
        }
    });
    /*********************************操作员管理**********************************/
    $('.aoperator>a:nth-child(2)').click(function(){
        $(this).hide().next().show().parent().prev().children('span:last-child').show().prev().hide();
    });
    $('.aoperator>a:nth-child(3)').click(function(){
        $(this).hide().prev().show().parent().prev().children('span:first-child').show().next().hide();
    });
    $(".onerole").click(function() {
        var sublis = $(this).closest(".sd_operatorManagement_ul").find(".onerole");
        var sublisC = $(this).closest(".sd_operatorManagement_ul").find(".onerole:checked");
        var lis = $(this).closest(".sd_operatorManagement_ul").find(".allrole");
        if (sublis.length == sublisC.length) {
            lis.prop('checked', true);
        } else {
            lis.prop('checked', false);
        }
    });
    //全选
    $(".allrole").change(function() {
        if ($(this).prop("checked") == true) {
            $(this).parents('.sd_operatorManagement_ul').find(".onerole").prop('checked', true);
        } else { //如果店铺按钮不被选中
            $(this).parents('.sd_operatorManagement_ul').find(".onerole").prop('checked', false);
        }
    });
    $('.addOne').click(function(){
        $('.add_role1').show();
    });
    /***************************************护工管理**********************************/
    //选择框
    $(".onerole").click(function() {
        var sublis = $(this).closest(".sd_nursingManagement_ul").find(".onerole");
        var sublisC = $(this).closest(".sd_nursingManagement_ul").find(".onerole:checked");
        var lis = $(this).closest(".sd_nursingManagement_ul").find(".allrole");
        if (sublis.length == sublisC.length) {
            lis.prop('checked', true);
        } else {
            lis.prop('checked', false);
        }
    });
    //全选
    $(".allrole").change(function() {
        if ($(this).prop("checked") == true) {
            $(this).parents('.sd_nursingManagement_ul').find(".onerole").prop('checked', true);
        } else { //如果店铺按钮不被选中
            $(this).parents('.sd_nursingManagement_ul').find(".onerole").prop('checked', false);
        }
    });
    /***************************************行为日志**********************************/
    $('.Abehavior>a').click(function(){
        $(this).hide().siblings().show();
    });
    //选择框
    $(".onerole").click(function() {
        var sublis = $(this).closest(".sd_behaviorLog_ul").find(".onerole");
        var sublisC = $(this).closest(".sd_behaviorLog_ul").find(".onerole:checked");
        var lis = $(this).closest(".sd_behaviorLog_ul").find(".allrole");
        if (sublis.length == sublisC.length) {
            lis.prop('checked', true);
        } else {
            lis.prop('checked', false);
        }
    });
    //全选
    $(".allrole").change(function() {
        if ($(this).prop("checked") == true) {
            $(this).parents('.sd_behaviorLog_ul').find(".onerole").prop('checked', true);
        } else { //如果店铺按钮不被选中
            $(this).parents('.sd_behaviorLog_ul').find(".onerole").prop('checked', false);
        }
    });
    /************************************服务指南*****************************************/
    $('.sd_serviceGuide>ul>li').click(function(){
        $(this).addClass('sd_fon').siblings().removeClass('sd_fon');
        $(this).parent().next().children().eq($(this).index()).show().siblings().hide();
    });
    /************************************关于我们*****************************************/
    $('.sd_aboutUs>ul>li').click(function(){
        $(this).addClass('sd_fon').siblings().removeClass('sd_fon');
        $(this).parent().next().children().eq($(this).index()).show().siblings().hide();
    });
    /************************************关于我们*****************************************/
    $('.sd_Information>ul>li').click(function(){
        $(this).addClass('sd_fon').siblings().removeClass('sd_fon');
        $(this).parent().next().children().eq($(this).index()).show().siblings().hide();
    });
    /************************************企业认证*****************************************/
    $('.sd_enterpriseCertification_con3>ul>li').click(function(){
        $(this).parent().next().children().eq($(this).index()).show().siblings().hide();
    });
    /************************************订单管理（护工公司）*****************************************/
    /*详情*/
    $('.sd_orderManagement_qb>ul:first-child~ul>li:last-child>a:nth-of-type(1)').click(function(){
        $('.sd_orderManagement_detail').show();
        var maskHeight=$(document).height();
        var maskWidth=$(document).width();
        $(document.body).css("overflow","hidden");
        $(document).css("overflow","hidden");
        //添加遮照层
        $('<div class="mask"></div>').appendTo($('body'));
        $('div.mask').css({
            'opacity':0.7,
            'background':'#000',
            'position':'absolute',
            'left':0,
            'top':0,
            'height':maskHeight,
            'width':maskWidth,
            'z-index':200
        });
        $('.mask').click(function(){
            $('.mask').remove();
            $('.sd_orderManagement_detail').hide();
            $(document.body).css("overflow","auto");
            $(document).css("overflow","auto");
        });
        $('.sd_close').click(function(){
            $('.mask').remove();
            $('.sd_orderManagement_detail').hide();
            $(document.body).css("overflow","auto");
            $(document).css("overflow","auto");
        });
    });

    $('.sd_orderManagement_qb>ul:first-child~ul>li:last-child>select').change(function(){
       confirm("确定选这位护工？");
    });

    /*拒绝*/
    $('.sd_jujue').click(function(){
        $('.sd_orderManagement_refuse').show();
        var maskHeight=$(document).height();
        var maskWidth=$(document).width();
        $(document.body).css("overflow","hidden");
        $(document).css("overflow","hidden");
        //添加遮照层
        $('<div class="mask"></div>').appendTo($('body'));
        $('div.mask').css({
            'opacity':0.7,
            'background':'#000',
            'position':'absolute',
            'left':0,
            'top':0,
            'height':maskHeight,
            'width':maskWidth,
            'z-index':200
        });
        $('.mask').click(function(){
            $('.mask').remove();
            $('.sd_orderManagement_refuse').hide();
            $(document.body).css("overflow","auto");
            $(document).css("overflow","auto");
        });
        $('.sd_close').click(function(){
            $('.mask').remove();
            $('.sd_orderManagement_refuse').hide();
            $(document.body).css("overflow","auto");
            $(document).css("overflow","auto");
        });

    });
   /* $('.sd_orderManagement_dfp_con>.sd_orderManagement_qb>ul:first-child~ul>li:last-child>a:nth-of-type(2)').click(function(){
        $('.sd_orderManagement_refuse').show();
    });*/
    /*导航*/
    $('.sd_orderManagement>ul>li').click(function(){
        $(this).addClass('sd_bg5').siblings().removeClass('sd_bg5').parent().next().children().eq($(this).index()).show().siblings().hide();
    });
    $('.sd_orderManagement_subpage>ul>li').click(function(){
        $(this).children().addClass('sd_bg3').parent().siblings().children().removeClass('sd_bg3');
    });
    /*退款*/
    $('.sd_tuikuan').click(function(){
        $('.sd_orderManagement_refund').show();
        //提交后“退款”文字变成“等待审核”
        if($(this).text()=="退款"){
            $(this).text("等待审核");
        }
        var maskHeight=$(document).height();
        var maskWidth=$(document).width();
        $(document.body).css("overflow","hidden");
        $(document).css("overflow","hidden");
        //添加遮照层
        $('<div class="mask"></div>').appendTo($('body'));
        $('div.mask').css({
            'opacity':0.7,
            'background':'#000',
            'position':'absolute',
            'left':0,
            'top':0,
            'height':maskHeight,
            'width':maskWidth,
            'z-index':200
        });
        $('.mask').click(function(){
            $('.mask').remove();
            $('.sd_orderManagement_refund').hide();
            $(document.body).css("overflow","auto");
            $(document).css("overflow","auto");
        });
        $('.sd_close').click(function(){
            $('.mask').remove();
            $('.sd_orderManagement_refund').hide();
            $(document.body).css("overflow","auto");
            $(document).css("overflow","auto");
        });
    });
    $('.sd_change').click(function(){
        $(this).parents('label').prev().show();
    });
    /************************************订单管理（养老机构）*****************************************/
    /*详情*/
    $('.sd_orderManagement_yl_qb>ul:first-child~ul>li:last-child>a:nth-of-type(1)').click(function(){
        $('.sd_orderManagement_yl_detail').show();
        var maskHeight=$(document).height();
        var maskWidth=$(document).width();
        $(document.body).css("overflow","hidden");
        $(document).css("overflow","hidden");
        //添加遮照层
        $('<div class="mask"></div>').appendTo($('body'));
        $('div.mask').css({
            'opacity':0.7,
            'background':'#000',
            'position':'absolute',
            'left':0,
            'top':0,
            'height':maskHeight,
            'width':maskWidth,
            'z-index':200
        });
        $('.mask').click(function(){
            $('.mask').remove();
            $('.sd_orderManagement_yl_detail').hide();
            $(document.body).css("overflow","auto");
            $(document).css("overflow","auto");
        });
        $('.sd_close').click(function(){
            $('.mask').remove();
            $('.sd_orderManagement_yl_detail').hide();
            $(document.body).css("overflow","auto");
            $(document).css("overflow","auto");
        });
    });
    $('.sd_goBack').click(function(){
        $('.mask').remove();
        $('.sd_orderManagement_yl_detail').hide();
        $(document.body).css("overflow","auto");
        $(document).css("overflow","auto");
    });
    /*备注*/
    $('.sd_remarks').click(function(){
        $('.sd_orderManagement_yl_refuse').show();
        $('.sd_orderManagement_hg_refuse').show();
        var maskHeight=$(document).height();
        var maskWidth=$(document).width();
        $(document.body).css("overflow","hidden");
        $(document).css("overflow","hidden");
        //添加遮照层
        $('<div class="mask"></div>').appendTo($('body'));
        $('div.mask').css({
            'opacity':0.7,
            'background':'#000',
            'position':'absolute',
            'left':0,
            'top':0,
            'height':maskHeight,
            'width':maskWidth,
            'z-index':200
        });
        $('.mask').click(function(){
            $('.mask').remove();
            $('.sd_orderManagement_yl_refuse').hide();
            $('.sd_orderManagement_hg_refuse').hide();
            $(document.body).css("overflow","auto");
            $(document).css("overflow","auto");
        });
        $('.sd_close').click(function(){
            $('.mask').remove();
            $('.sd_orderManagement_yl_refuse').hide();
            $('.sd_orderManagement_hg_refuse').hide();
            $(document.body).css("overflow","auto");
            $(document).css("overflow","auto");
        });
    });
    $('.sd_close').click(function(){
        $('.sd_orderManagement_yl_refuse').hide();
        $('.sd_orderManagement_yl_refund').hide();
        $('.sd_orderManagement_detail').hide();
        $('.sd_orderManagement_refuse').hide();
        $('.sd_orderManagement_refund').hide();
        $('.sd_orderManagement_hg_detail').hide();
        $('.sd_orderManagement_hg_refuse').hide();
        $('.mask').remove();
        $(document.body).css("overflow","auto");
        $(document).css("overflow","auto");
    });
    /*退款*/
    $('.sd_refund').click(function(){
        $('.sd_orderManagement_yl_refund').show();
        //提交后“退款”文字变成“等待审核”
        if($(this).text()=="退款"){
            $(this).text("等待审核");
        }
        var maskHeight=$(document).height();
        var maskWidth=$(document).width();
        $(document.body).css("overflow","hidden");
        $(document).css("overflow","hidden");
        //添加遮照层
        $('<div class="mask"></div>').appendTo($('body'));
        $('div.mask').css({
            'opacity':0.7,
            'background':'#000',
            'position':'absolute',
            'left':0,
            'top':0,
            'height':maskHeight,
            'width':maskWidth,
            'z-index':200
        });
        $('.mask').click(function(){
            $('.mask').remove();
            $('.sd_orderManagement_refund').hide();
            $(document.body).css("overflow","auto");
            $(document).css("overflow","auto");
        });
        $('.sd_close').click(function(){
            $('.mask').remove();
            $('.sd_orderManagement_refund').hide();
            $(document.body).css("overflow","auto");
            $(document).css("overflow","auto");
        });
    });
    $('.sd_change').click(function(){
        $(this).parents('label').prev().show();
    });
    /************************我的订单（护工）*************************/
    /*详情*/
    $('.sd_detail').click(function(){
        $('.sd_orderManagement_hg_detail').show();
        var maskHeight=$(document).height();
        var maskWidth=$(document).width();
        $(document.body).css("overflow","hidden");
        $(document).css("overflow","hidden");
        //添加遮照层
        $('<div class="mask"></div>').appendTo($('body'));
        $('div.mask').css({
            'opacity':0.7,
            'background':'#000',
            'position':'absolute',
            'left':0,
            'top':0,
            'height':maskHeight,
            'width':maskWidth,
            'z-index':200
        });
        $('.mask').click(function(){
            $('.mask').remove();
            $('.sd_orderManagement_hg_detail').hide();
            $(document.body).css("overflow","auto");
            $(document).css("overflow","auto");
        });
        $('.sd_close').click(function(){
            $('.mask').remove();
            $('.sd_orderManagement_hg_detail').hide();
            $(document.body).css("overflow","auto");
            $(document).css("overflow","auto");
        });
    });
    $('.sd_Setout').click(function(){
        if($(this).text()=="出发"){
            var Sure=confirm("你确定要改已出发吗？");
            if(Sure==true){
                $(this).text("已出发");
            }else{
                $(this).text("出发");
            }

        }
    });
    $('.sd_Arrive').click(function(){
        if($(this).text()=="到达"){
            var Sure=confirm("你确定要改已到达吗？");
            if(Sure==true){
                $(this).text("已到达");
            }else{
                $(this).text("到达");
            }

        }
    });
    $('.sd_Complete').click(function(){
        if($(this).text()=="完成"){
            var Sure=confirm("你确定要改已完成吗？");
            if(Sure==true){
                $(this).text("已完成");
            }else{
                $(this).text("完成");
            }
        }
    });
    /***********************商家中心*************************/
    $('.sd_sets').click(function(){
        $('.sd_set').show();
        var maskHeight=$(document).height();
        var maskWidth=$(document).width();
        $(document.body).css("overflow","hidden");
        $(document).css("overflow","hidden");
        //添加遮照层
        $('<div class="mask"></div>').appendTo($('body'));
        $('div.mask').css({
            'opacity':0.7,
            'background':'#000',
            'position':'absolute',
            'left':0,
            'top':0,
            'height':maskHeight,
            'width':maskWidth,
            'z-index':200
        });
        $('.mask').click(function(){
            $('.mask').remove();
            $('.sd_set').hide();
            $('.sd_setPassword').hide();
            $(document.body).css("overflow","auto");
            $(document).css("overflow","auto");
        });
        $('.set_close').click(function(){
            $('.mask').remove();
            $('.sd_set').hide();
            $(document.body).css("overflow","auto");
            $(document).css("overflow","auto");
        });
    });
    $('.set_Apassword').click(function(){
        $('.sd_setPassword').show();
    });
    $('.password_close').click(function(){
        $('.sd_setPassword').hide();
    });
    /*企业信息*/
    $('.sd_tianjia').click(function(){
        $(this).parent('li').prev().children().show();
        $('.sd_baocun').click(function(){
            $('#garden').text($(this).parent('li').prev().children().val());
            $(this).parent('li').prev().children().hide();
        });
    });
    $('.sd_baocun').click(function(){
        var hy=$(this).closest("#garden").find(".hyCheck:checked");
        alert(hy.val());
        //$(this).parent('li').prev().children().hide();
    });
    /*var Hua=$('.sd_garden>ul>li>input');*/
   /* $(":checkbox[name='resetPsd']").click(function(){
        if($(this).attr("checked")==true){
            alert("aaa");
        }
    });*/
    $('.sd_garden>ul>li>input').click(function(){
        if($(this).attr("checked")==true){
            alert('a');
        }

    });
    /********************************居家护理************************/
    /*修改和使用其它地址*/
    $('.sd_addr').click(function(){
        $('.sd_hgAddress').show();
        var maskHeight=$(document).height();
        var maskWidth=$(document).width();
        $(document.body).css("overflow","hidden");
        $(document).css("overflow","hidden");
        //添加遮照层
        $('<div class="mask"></div>').appendTo($('body'));
        $('div.mask').css({
            'opacity':0.7,
            'background':'#000',
            'position':'absolute',
            'left':0,
            'top':0,
            'height':maskHeight,
            'width':maskWidth,
            'z-index':200
        });
        $('.mask').click(function(){
            $('.mask').remove();
            $('.sd_hgAddress').hide();
            $(document.body).css("overflow","auto");
            $(document).css("overflow","auto");
        });
        $('.address_close').click(function(){
            $('.mask').remove();
            $('.sd_hgAddress').hide();
            $(document.body).css("overflow","auto");
            $(document).css("overflow","auto");
        });
    });
    /*养老机构详情（补充）*/
    $('.sd_fysm>i').hover(function(){
        $('.sd_fysm_con').show();
    },function(){
        $('.sd_fysm_con').hide();
    });
});