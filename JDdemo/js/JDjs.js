///////////顶部30px条
/*地址选择*/
var cityselect = document.getElementById('cityselect');
var city = document.getElementById('city');
var cityvar = city.getElementsByTagName('var')[0];
var select = document.getElementById('select');
var selectspan = select.getElementsByTagName('span');
tabshow(cityselect,'','now')
select.onclick = function (e) {
    var e = e || window.event;
    var target = e.target || e.srcElement;
    for(var i=0;i<selectspan.length;i++){
        selectspan[i].className = '';
    }
    if(target.nodeName == 'SPAN'){
        cityvar.innerHTML = target.innerHTML;
        select.style.display = 'none';
        target.className = 'this-selec';
    }
}
/*tab切换小块*/
var li1 = document.getElementById('li1');
var li2 = document.getElementById('li2');
var li3 = document.getElementById('li3');
var li4 = document.getElementById('li4');
var li5 = document.getElementById('li5');
tabshow(li1,'tnblock','tnblock this-tnblock');
tabshow(li2,'tnblock','tnblock this-tnblock');
tabshow(li3,'tnblock','tnblock this-tnblock');
tabshow(li4,'tnblock','tnblock this-tnblock');
tabshow(li5,'tnblock','tnblock this-tnblock');
///////////////////////////可关闭广告区
/*可关闭广告的关闭*/
var closead = document.getElementById('closead');
var cbutton = document.getElementById('closead-c');
cbutton.onclick = function () {
    changeopacity1(closead,10);
}
//////////////////////////////购物车
/*购物车显示与隐藏*/
var bigcart = document.getElementById('bigcart');
var cart = document.getElementById('cart');
var nogoods = document.getElementById('nogoods');
bigcart.onmouseenter = function () {
    cart.className = 'this-cart';
    nogoods.style.display='block';
}
bigcart.onmouseleave = function () {
    cart.className = '';
    nogoods.style.display='none';
}
/////////////////////////////竖向导航条

var nav = document.getElementById('vernav');
var lis = nav.getElementsByTagName('li');
var navdivs = byClass4('vernav-div');
var navis = nav.getElementsByTagName('i');
for(var i=0;i<lis.length;i++){
    lis[i].index = i;
    lis[i].onmouseover = function () {
        for(var i=0;i<navdivs.length;i++){
            lis[i].className ='';
            navis[i].className = '';
            navdivs[i].className = 'vernav-div';
        }
        this.className = 'this-li';
        navis[this.index].className = 'this-i';
        navdivs[this.index].className = 'vernav-div this-nav';
        if(getScrollTop() >= nav.offsetTop){
            navdivs[this.index].style.top = (getScrollTop()-nav.offsetTop) +'px';
        }else{
            navdivs[this.index].style.top = 0 + 'px';
        }
    };
    lis[i].onmouseout = function () {
        for(var i=0;i<navdivs.length;i++){
            lis[i].className ='';
            navis[i].className = '';
            navdivs[i].className = 'vernav-div';
        }
    }
}
function getScrollTop(){
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    return scrollTop;
}
function rfdivshow(rfd,timer1,timer2){
    var rfda = rfd.getElementsByTagName('a')[0];
    rfd.onmouseenter = function () {
        rfd.style.backgroundColor = '#c81623';
        clearTimeout(timer2);
        timer2 = setTimeout(function () {
            rfda.style.backgroundColor = '#c81623';
            rfda.style.display = 'block';
            rfda.style.color='#fcf3f3';
            var x = -25;
            clearInterval(timer1);
            timer1 = setInterval(function () {
                x+=2;
                if(x>=35){
                    clearInterval(timer1);
                }
                rfda.style.right = x+'px';
            },8);
        },400);
    }
    rfd.onmouseleave = function () {
        rfd.style.backgroundColor = '#7a6e6e';
        rfda.style.backgroundColor = '#7a6e6e';
        var x = 35;
        clearTimeout(timer2);
        clearInterval(timer1);
        timer1 = setInterval(function () {
            x-=2;
            if(x<=-25){
                clearInterval(timer1);
                rfda.style.display = 'none';
            }
            rfda.style.right = x+'px';
        },8);
    }
}
var rfdiv = getclass4('rightfix','rf');
var movetimer = [];
var delaytimer = [];
for(var i=0;i<rfdiv.length;i++){
    var rfd = rfdiv[i];
    movetimer[i] = null;
    delaytimer[i] = null;
    rfdivshow(rfd,movetimer[i],delaytimer[i]);
}
////////////////////////////////////////////今日推荐大图滚动
///////大图初始化，在第一个div之前，和最后一个div之后插入div
var recinner = document.getElementById('rec-inner');
scrollInit(recinner,'rec-block','div');
var recright = document.getElementById('recright');
var recouter = document.getElementById('rec-outer');
var recblock = getclass4('rec-inner','rec-block');
var everyblock = recblock[0].offsetWidth;
recblock = getclass4('rec-inner','rec-block');
recouter.scrollLeft = everyblock;
var recprev = getclass4('recright','slider-prev')[0];
var recnext = getclass4('recright','slider-next')[0];
var se1 = [];
se1.pname = recouter;
se1.speed = 10;
se1.index = 1;
se1.step = 25;
se1.eb = everyblock;
se1.len = recblock.length;
se1.flag = 0;
recright.onmouseenter = function () {
    recprev.style.display = 'block';
    recnext.style.display = 'block';
    recprev.onclick = function () {
        se1.a = -1;
        scrollMove(se1);
    }
    recnext.onclick = function () {
        se1.a = 1;
        scrollMove(se1);
    }
}
recright.onmouseleave = function () {
    recprev.style.display = 'none';
    recnext.style.display = 'none';
    se1.flag = 0;
}
////////////////////////////////////////////////////12楼大图滚动
var floArr = [];
function floInit(i){
    var floouter = getclass4('floor'+i,'floouter')[0];
    var arr ={};
    arr.index = 1;
    arr.len = 6;
    arr.flag = 0;
    arr.a = 1;
    arr.pname = floouter;
    if(i!=12){
        var floinner = getclass4('floor'+i,'floinner')[0];
        if(i==2||i==6||i==7||i==8||i==9){
            floScrollInit(floinner,'div');
            arr.width = floinner.getElementsByTagName('div')[0].offsetWidth;
            arr.step = 113;
            arr.speed = 4;
            arr.eb = arr.width;
        }else{
            floScrollInit(floinner,'a');
            arr.width = floinner.getElementsByTagName('a')[0].offsetWidth;
            arr.step = 44;
            arr.speed = 6;
            arr.eb = arr.width;
        }
        floArr.push(arr);
    }else{
        arr.step = 79;
        arr.speed = 6;
        var floinner = getclass4('floor'+i,'floinner')[0];
        arr.width = floinner.getElementsByTagName('a')[0].offsetWidth;
        arr.eb = arr.width;
        floScrollInit(floinner,'a');
        floArr.push(arr);
        var arr2 ={};
        arr2.index = 1;
        arr2.len = 6;
        arr2.flag = 0;
        arr2.step = 79;
        arr2.speed = 6;
        arr2.eb=arr.eb;
        arr2.a = 1;
        arr2.width = arr2.eb;
        var floinner2 = getclass4('floor12','floinner')[1];
        floScrollInit(floinner2,'a');
        arr2.pname = floinner2.parentNode;
        floArr.push(arr2);
    }
}
function cleari(gd,Arr){
    var index = getclass5(gd,'index')[0];
    var indexi = index.getElementsByTagName('i');
    for(var j=0;j<indexi.length;j++){
        indexi[j].className = '';
    }
    if(Arr.index-1 == 4){
        indexi[0].className = 'foc-i';
    }else{
        if(Arr.index-1 == -1){
            indexi[3].className = 'foc-i';
        }else{
            indexi[Arr.index-1].className = 'foc-i';
        }
    }
}
var floTimer=[];
function floAutoMove(i){
    if(i==13){
        clearInterval(floTimer[1]);
        floTimer[1] = setInterval(function () {
            var floorgd = getclass4('floor12','fc-gd')[1];
            floArr[i-1].a = 1;
            floArr[i-1].eb = floArr[i-1].width;
            scrollMove(floArr[i-1]);
            cleari(floorgd,floArr[i-1]);
        },3000);
        return;

    }
    clearInterval(floTimer[0]);
    floTimer[0] = setInterval(function () {
        var floorgd = getclass4('floor'+i,'fc-gd')[0];
        floArr[i-1].a = 1;
        floArr[i-1].eb = floArr[i-1].width;
        scrollMove(floArr[i-1]);
        cleari(floorgd,floArr[i-1]);
    },3000);
}
function floMove(i){
    var floorgd;
    if(i==13){
        floorgd = getclass4('floor12','fc-gd')[1];
    }else{
        floorgd = getclass4('floor'+i,'fc-gd')[0]
    }
    var flooreb = floArr[i-1].eb;
    var floprev = getclass5(floorgd,'slider-prev')[0];
    var flonext = getclass5(floorgd,'slider-next')[0];
    var floorindex = getclass5(floorgd,'index')[0];
    var floorindexi = floorindex.getElementsByTagName('i');
    floorgd.onmouseenter = function () {
        if((i <= 12 && floi[i-1].className != 'floi') || (i == 13 && floi[i-2].className != 'floi')){
            if(i==13){
                clearInterval(floTimer[1]);
            }else{
                clearInterval(floTimer[0]);
            }
        }
        floprev.style.display = 'block';
        flonext.style.display = 'block';
        floprev.onclick = function () {
            floArr[i-1].a = -1;
            floArr[i-1].eb = flooreb;
            scrollMove(floArr[i-1]);
            cleari(floorgd,floArr[i-1]);
        }
        flonext.onclick = function () {
            floArr[i-1].a = 1;
            floArr[i-1].eb = flooreb;
            scrollMove(floArr[i-1]);
            cleari(floorgd,floArr[i-1]);
        }
    }
    floorgd.onmouseleave = function () {
        floprev.style.display = 'none';
        flonext.style.display = 'none';
        floArr[i-1].flag = 0;
        if((i <= 12 && floi[i-1].className != 'floi') || (i == 13 && floi[i-2].className != 'floi')){
            floAutoMove(i);
        }
    }
    for(var j=0;j<4;j++){
        var indexTimer;
        floorindexi[j].index = j;
        floorindexi[j].onmouseenter = function () {
            var _this = this;
            indexTimer = setTimeout(function(){
                floArr[i-1].a = _this.index-(floArr[i-1].index-1);
                if(floArr[i-1].a!=0){
                    if(floArr[i-1].a<0){
                        floArr[i-1].eb = -(flooreb * floArr[i-1].a);
                    }else{
                        floArr[i-1].eb = flooreb * floArr[i-1].a;
                    }
                    scrollMove(floArr[i-1]);
                    cleari(floorgd,floArr[i-1]);
                }
            },500);
        };
        floorindexi[j].onmouseleave = function(){
            clearTimeout(indexTimer);
        };
    }
}
//////////////////////////////////////////////////大图滚动
var focus = document.getElementById('focus');
var focimg = document.getElementById('focimg');
var foca = focimg.getElementsByTagName('a');
var focindexi = getclass4('focus','index')[0].getElementsByTagName('i');
var foctimer1 = null;
var foci = 0,focflag=0;
function move(focfx){
    changeopacity1(foca[foci],10);
    foci+=focfx;
    if(foci==foca.length){foci = 0;}
    if(foci==-1){foci = foca.length-1;}
    foca[foci].style.display = 'block';
    changeopacity2(foca[foci],10);
    for(var i=0;i<focindexi.length;i++){
        focindexi[i].className = '';
    }
    focindexi[foci].className = 'foc-i';
}
function autoMove(){
    foctimer1 = setInterval(function () {
        move(1);
    },3000);
}
autoMove();
var focprev = getclass4('focus','slider-prev')[0];
var focnext = getclass4('focus','slider-next')[0];
var focystimer = null;
focus.onmouseenter = function () {
    focprev.style.display = 'block';
    focnext.style.display = 'block';
    clearInterval(foctimer1);
    clearTimeout(focystimer);
    focnext.onclick = function () {
        clearTimeout(focystimer);
        focystimer = setTimeout(function(){
            focflag=0;
        },500);
        if(focflag == 0){
            focflag = 1;
            move(1);
        }
    }
    focprev.onclick = function () {
        clearTimeout(focystimer);
        focystimer = setTimeout(function(){
            focflag=0;
        },500);
        if(focflag == 0){
            focflag = 1;
            move(1);
        }
    }
    for(var j=0;j<focindexi.length;j++){
        focindexi[j].index = j;
        focindexi[j].onmouseover = function () {
            clearInterval(foctimer1);
            clearTimeout(focystimer);
            var a = this.innerHTML;
            focystimer = setTimeout(function(){
                if(focflag==0){
                    focflag =1;
                    if(a != foci+1){
                        move(a-1-foci);
                    }
                }
            },500);
        }
        focindexi[j].onmouseout = function () {
            clearTimeout(focystimer);
            focflag= 0;
        }
    }
}
focus.onmouseleave = function () {
    focprev.style.display = 'none';
    focnext.style.display = 'none';
    clearTimeout(focystimer);
    autoMove();
    focflag= 0;
}
/////////////////////////////////////////////猜你喜欢红色条
var guess = document.getElementById('guess');
var redi = getclass4('guess','redhr')[0].getElementsByTagName('i')[0];
var rediwid = redi.offsetWidth;
var gustimer1 = null,gustimer2=null,gusflag=0;
guess.onmouseenter = function () {
    var x =0-rediwid,max = 1210-rediwid;
    gustimer2 = setTimeout(function () {
        if(gusflag == 0){
            gusflag =1;
            clearInterval(gustimer1);
            clearInterval(gustimer2);
            gustimer1 = setInterval(function () {
                x+=10;
                if(x >= max){
                    x = max;
                    clearInterval(gustimer1);
                    gusflag = 0;
                }
                redi.style.left = x+'px';
            },5);
        }
    },500);

}
guess.onmouseleave = function () {
    clearInterval(gustimer2);
};
///////////////////////////////////////////////////////楼层ul处切换
function floTabShow(uls,right){
    var lis = uls.getElementsByTagName('li');
    var tab = getclass5(right,'tab');
    for(var i=0;i<lis.length;i++){
        lis[i].index = i;
        lis[i].onmouseenter = function () {
            for(var i=0;i<lis.length;i++){
                lis[i].className = '';
                tab[i].style.display = 'none';
            }
            this.className = 'thisflo';
            tab[this.index].style.display = 'block';
        }
    }
}
var flolist = getclass4('floorcontent','flolist');
var floright = getclass4('floorcontent','fc-right');
for(var i=0;i<flolist.length;i++){
    floTabShow(flolist[i],floright[i]);
}
////////////////////////////////////////////////////////天天特价
var priceltimer = null;
var pripimgs = getclass4('price-l','pimg');
for(var i=0;i<pripimgs.length;i++){
    var priimg =null;
    pripimgs[i].onmouseenter = function () {
        var x = 0;
        priimg =this.getElementsByTagName('img')[0]
        clearInterval(priceltimer);
        priceltimer = setInterval(function () {
            x--;
            if(x <= -10){clearInterval(priceltimer);}
            priimg.style.marginLeft = x + 'px';
        },20);
    }
    pripimgs[i].onmouseleave = function () {
        var x = -10;
        priimg =this.getElementsByTagName('img')[0]
        clearInterval(priceltimer);
        priceltimer = setInterval(function () {
            x++;
            if(x >= 0){clearInterval(priceltimer);}
            priimg.style.marginLeft = x + 'px';
        },20);
    }
}
//向下滚动的大图滚动初始化
var priouter = document.getElementById('price-outer');
var priinner = document.getElementById('price-inner');
var priul = priinner.getElementsByTagName('ul')[0];
var prilis = priul.getElementsByTagName('li');
var prilen = prilis.length,pritimer1=null,pritimer2=null;
var everypri = prilis[0].offsetHeight;
var prili1 = document.createElement('li');
var prili2 = document.createElement('li');
prili1.innerHTML = prilis[prilen-1].innerHTML;
prili2.innerHTML = prilis[prilen-2].innerHTML;
priul.insertBefore(prili1,priul.childNodes[0]);
priul.insertBefore(prili2,priul.childNodes[0]);
prilen += 2;
var prii = prilen - 1;
priinner.scrollTop = (prilen-1)*everypri;
function primove(inner,start){
    prii--;
    var x =0;
    pritimer2 = setInterval(function () {
        x++;
        start --;
        inner.scrollTop = start;
        if(x>=everypri){
            if(prii==1){
                prii = prilen -1;
                inner.scrollTop = (prilen-1)*everypri;
            }
            clearInterval(pritimer2);
        }
    },5);
}
function priAutoMove(){
    pritimer1 = setInterval(function () {
        var pristart = priinner.scrollTop;
        primove(priinner, pristart);
    },4000);
}
priAutoMove();
priinner.onmouseenter = function () {
    clearInterval(pritimer1);
}
priinner.onmouseleave = function () {
    priAutoMove();
}
function details(details,iptname,len){
    for(var i=0;i<details.length;i++){
        var ipt = details[i].getElementsByTagName(iptname)[0];
        var str = ipt.innerHTML;
        if(str.length>len){
            ipt.innerHTML = str.substr(0,len)+'......'+'<span class="detail-right">”</span>';
        }else{
            ipt.innerHTML = str + '<span class="detail-right">”</span>';
        }
    }
}
var prdetails = getclass4('price-inner','prdetails');
details(prdetails,'a',15);
var floetails = getclass4('fc-right5','prdetails');
details(floetails,'p',13);
///////////////////////////////  右侧悬浮框
var rightfix = document.getElementById('rightfix');
window.onresize = function () {
    var winheight = document.documentElement.clientHeight;
    rightfix.style.height = winheight+'px';
    scrollleft();
}
window.onload = function () {
    var winheight = document.documentElement.clientHeight;
    rightfix.style.height = winheight+'px';
    for(var i=1;i<13;i++){
        floInit(i);
    }
    for(var i=1;i<14;i++){
        floMove(i);
    }
    scrollleft();
    window.onscroll = function () {
        scrollleft();
    }
}
//////////////////////////////////////////楼层切换
function getwinH(){
    return document.documentElement.clientHeight||document.body.clientHeight;
}
var floi = getclass4('floorcontent','floi');
var leftfix = document.getElementById('leftfix');
var lfblock = getclass4('leftfix','lfblock');
var floor = getclass4('floorcontent','floor');
var flTop = [];
for(var i=0;i<floor.length;i++){
    flTop[i] = parseInt(offsetTL(floor[i]).top);
}
function scrollleft(){
    if(getScrollTop()>=offsetTL(floor[0]).top-getwinH()){
        leftfix.style.display = 'block';
        if(getScrollTop() < offsetTL(floor[0]).top-offsetTL(lfblock[0]).top){
            floi[0].className = 'floi thisfloi';
            lfblock[0].className='lfblock thislf';
            lfblock[0].getElementsByTagName('span')[0].innerHTML = '服饰';
            floAutoMove(1);
        }else{
            for(var i=0;i<12;i++){
                if(flTop[i] <= offsetTL(lfblock[i]).top+getScrollTop()/* && flTop[i]-getScrollTop() > 0*/){
                    for(var j=0;j<12;j++){
                        floi[j].className = 'floi';
                        lfblock[j].className='lfblock';
                        lfblock[j].getElementsByTagName('span')[0].innerHTML = j+1 +'F';
                    }
                    floi[i].className = 'floi thisfloi';
                    lfblock[i].className='lfblock thislf';
                    lfblock[i].getElementsByTagName('span')[0].innerHTML = lfblock[i].getElementsByTagName('span')[1].innerHTML;
                    if(i==11){
                        floAutoMove(12);
                        floAutoMove(13);
                    }else{
                        floAutoMove(i+1);
                    }
                }else{
                    clearInterval(floTimer[1]);
                    floi[i].className = 'floi';
                    lfblock[i].className='lfblock';
                    lfblock[i].getElementsByTagName('span')[0].innerHTML = i+1 +'F';
                }
            }
        }
    }else{
        leftfix.style.display = 'none';
    }
}
for(var i=0;i<lfblock.length;i++){
    lfblock[i].index = i;
    lfblock[i].onclick = function () {
        tofloor(getScrollTop(),parseInt(flTop[this.index]),20,20);
    }
}
function tofloor(start,end,step,speed){
    var scrolltime = null,scri=0;
    var everyscr = (end-start)/step;
    scrolltime = setInterval(function () {
        scri++;
        if(scri==step){clearInterval(scrolltime);}
        start+=everyscr;
        document.documentElement.scrollTop = start;
        document.body.scrollTop = start;
    },speed);
}
