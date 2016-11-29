// window.onload=function (){
	function byclass(classn){//全局获取类
		var tags=document.all ? document.all : document.getElementsByTagName('*');
		var arr=[];
		for (var i = 0; i < tags.length; i++) {
			//获取只有一个类名的元素
			if (tags[i].className==classn) {
				arr.push(tags[i]);
			}
		};
		return arr;
	}
	function byclass2(classn){//全局获取类
		var tags=document.all ? document.all : document.getElementsByTagName('*');
		var arr=[];
		for (var i = 0; i < tags.length; i++) {
			//可获取有多个类名的元素，不能有类似的
			if (tags[i].className.indexOf(classn)!=-1) {
				arr.push(tags[i]);
			}
		};
		return arr;
	}
	function byclass3(classn){//全局获取类
		var tags=document.all ? document.all : document.getElementsByTagName('*');
		var arr=[];
		var reg=new RegExp('\\b'+classn+'\\b');
		for (var i = 0; i < tags.length; i++) {
			//可获取有多个类名的元素
			if (reg.test(tags[i].className)) {
				arr.push(tags[i]);
			}
		};
		return arr;
	}
	function byClass4(oClass){//全局获取
		var tags=document.all?document.all:document.getElementsByTagName('*');
		var arr=[];
		// var reg=/\boClass\b/;//无效
		var reg=new RegExp('\\b'+oClass+'\\b');
		for (var i = 0; i < tags.length; i++) {
			// var reg=new RegExp('\\b'+oClass+'\\b','g');
			reg.lastIndex=0;
			// if (tags[i].className==oClass) {
			// if (tags[i].className.indexOf(oClass)!=-1) {
			if (reg.test(tags[i].className)) {
				arr.push(tags[i]);
			};
		};
		return arr;
	}
	function getclass(parentID,classn){//局部获取类
		var parent=document.getElementById(parentID);
		var tags=parent.all?parent.all:parent.getElementsByTagName('*');
		var arr=[];
		for (var i = 0; i < tags.length; i++) {
			//获取只有一个类名的元素
			if (tags[i].className==classn) {
				arr.push(tags[i]);
			}
		};
		return arr;
	}
	function getclass2(parentID,classn){//局部获取类
		var parent=document.getElementById(parentID);
		var tags=parent.all?parent.all:parent.getElementsByTagName('*');
		var arr=[];
		for (var i = 0; i < tags.length; i++) {
			//可获取有多个类名的元素
			if (tags[i].className.indexOf(classn)!=-1) {
				arr.push(tags[i]);
			}
		};
		return arr;
	}
	function getclass3(parentID,classn){//局部获取类
		var parent=document.getElementById(parentID);
		var tags=parent.all?parent.all:parent.getElementsByTagName('*');
		var arr=[];
		var reg=new RegExp('\\b'+classn+'\\b');
		for (var i = 0; i < tags.length; i++) {
			//可获取有多个类名的元素
			if (reg.test(tags[i].className)) {
				arr.push(tags[i]);
			}
		};
		return arr;
	}
	function getclass4(parentID,classn){//局部获取类
		var parent=document.getElementById(parentID);
		var tags=parent.all?parent.all:parent.getElementsByTagName('*');
		var arr=[];
		// var reg=/\boClass\b/;//无效
		var reg=new RegExp('\\b'+classn+'\\b');
		for (var i = 0; i < tags.length; i++) {
			// var reg=new RegExp('\\b'+oClass+'\\b','g');
			reg.lastIndex=0;
			// if (tags[i].className==oClass) {
			// if (tags[i].className.indexOf(oClass)!=-1) {
			if (reg.test(tags[i].className)) {
				arr.push(tags[i]);
			};
		};
		return arr;
	}
	function getclass5(parent,classn){////局部获取类
		var tags=parent.all?parent.all:parent.getElementsByTagName('*');
		var arr=[];
		// var reg=/\boClass\b/;//无效
		var reg=new RegExp('\\b'+classn+'\\b');
		for (var i = 0; i < tags.length; i++) {
			// var reg=new RegExp('\\b'+oClass+'\\b','g');
			reg.lastIndex=0;
			// if (tags[i].className==oClass) {
			// if (tags[i].className.indexOf(oClass)!=-1) {
			if (reg.test(tags[i].className)) {
				arr.push(tags[i]);
			};
		};
		return arr;
	}
	function getstyle(obj,oStyle){//获取元素样式
		if (obj.currentStyle) {
			return obj.currentStyle[oStyle];
		} else{
			return getComputedStyle(obj,null)[oStyle];
		};
	}
	function nextnode(obj){//获取下一个兄弟节点
		if (obj.nextElementSibling) {
			return obj.nextElementSibling;
		} else{
			return obj.nextSibling;
		};
	}
	function prenode(obj){//获取上一个兄弟节点
		if (obj.previousElementSibling) {
			return obj.previousElementSibling;
		} else{
			return obj.previousSibling;
		};
	}
	function firstnode(obj){//获取第一个子节点
		if (obj.firstElementChild) {
			return obj.firstElementChild;//非IE678支持
		} else{
			return obj.firstChild;//IE678支持
		};
	}
	function lastnode(obj){//获取最后一个子节点
		if (obj.lastElementChild) {
			return obj.lastElementChild;//非IE678支持
		} else{
			return obj.lastChild;//IE678支持
		};
	}
	function addEvent(obj,type,fn){//添加事件监听
		if (obj.addEventListener) {
			obj.addEventListener(type,fn,false);
		} else{
			obj.attachEvent('on'+type,fn);
		};
	}
	function removeEvent(obj,type,fn){//删除事件监听
		if (obj.removeEventListener) {
			obj.removeEventListener(type,fn,false);
		} else{
			obj.detachEvent('on'+type,fn);
		};
	}
	function offsetTL(obj){//获取obj到body的offsetTop和offsetLeft
		var t=0,l=0;
		while(obj){
			t=t+obj.offsetTop+obj.clientTop;
			l=l+obj.offsetLeft+obj.clientLeft;
			obj=obj.offsetParent;
		}
		return {top:t,left:l};
	}
	function setCookie(key,Val,Days){//设置cookie
		var dates=new Date();
		dates.setDate(dates.getDate()+Days);
		document.cookie=key+'='+escape(Val)+'; expires='+dates;
	}
	function getCookie(key){//获取cookie
		var cookies=document.cookie;
		var arr1=cookies.split('; ');
		for (var i = 0; i < arr1.length; i++) {
			var arr2=arr1[i].split('=');
			if (arr2[0]==key) {
				return unescape(arr2[1]);//解码
			};
		};
		return false;
	}
	function rmCookie(key){//删除cookie
		setCookie(key,'a',-3);
	}
	function scrollInit(inner,blockname,p){  //////大图滚动初始化
		var block = getclass5(inner,blockname);
		var everyblock = block[0].offsetWidth;
		inner.style.width = (block.length+2)*everyblock + 'px';
		var recdiv1 = document.createElement(p);
		var recdiv2 = document.createElement(p);
		recdiv1.className = blockname;
		recdiv2.className = blockname;
		recdiv2.innerHTML = block[0].innerHTML;
		recdiv1.innerHTML = block[block.length-1].innerHTML;
		inner.appendChild(recdiv2);
		inner.insertBefore(recdiv1,inner.childNodes[0]);
	}
	function floScrollInit(inner,p){  //////楼层大图滚动初始化
		var block = inner.getElementsByTagName(p);
		var everyblock = block[0].offsetWidth;
		inner.style.width = (block.length+2)*everyblock + 'px';
		var recdiv1 = block[block.length-1].cloneNode(true);
		var recdiv2 = block[0].cloneNode(true);
		inner.appendChild(recdiv2);
		inner.insertBefore(recdiv1,inner.childNodes[0]);
		inner.parentNode.scrollLeft = everyblock;
	}
	function scrollMove(se){
		var pid = se.pname;
		var timer = null;
		if(se.flag == 0){
			se.flag = 1;
			var every = 0,start = pid.scrollLeft;
			var es = se.eb/se.step;
			se.index+=se.a;
			clearInterval(timer);
			var i =0;
			timer = setInterval(function () {
				i++;
				every+=es;
				if(se.a>0){
					pid.scrollLeft = start + every;
				}else{
					pid.scrollLeft = start - every;
				}
				if(i == se.step){
					if(se.index==0 && se.a==-1){
						se.index=se.len-2;
						pid.scrollLeft  = se.index*se.eb;
					}
					if(se.index==se.len-1 && se.a == 1){
						se.index=1;
						pid.scrollLeft = se.eb;
					}
					clearInterval(timer);
					se.flag = 0;
				}
			},se.speed);
		}
	}
	function totop(){     /*返回顶部*/
		var scrollTop=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;
		if(scrollTop != 0){
			scrollTop = 0;
		}
		document.documentElement.scrollTop = scrollTop;
		document.body.scrollTop=scrollTop;
		window.pageYOffset=scrollTop;
	}
	function tabshow(obj,lastname,newname){/*封装tab切换（上方一个span，下方一个div，京东30px导航条）*/
		var objspan = obj.getElementsByTagName('span')[0];
		var objdiv = obj.getElementsByTagName('div')[0];
		obj.onmouseenter = function () {
			objspan.className = newname;
			objdiv.style.display = 'block';
		}
		obj.onmouseleave = function () {
			objspan.className = lastname;
			objdiv.style.display = 'none';
		}
	}
	function changeopacity1(closeid,time){/*改变透明度，逐渐消失*/
		var timer = null;
		var o = 100;
		clearInterval(timer);
		timer = setInterval(function () {
			o-=2;
			if(o<=0){
				clearInterval(timer);
				closeid.style.display = 'none';
			}
			closeid.style.opacity = o/100;
			closeid.style.filter = 'alpha(opacity:'+o+')';
		},parseInt(time));
	}
function changeopacity2(showid,time){/*改变透明度，逐渐消失*/
	var timer = null;
	var o = 0;
	clearInterval(timer);
	timer = setInterval(function () {
		o+=2;
		if(o>=100){
			clearInterval(timer);
			//closeid.style.display = 'none';
		}
		showid.style.opacity = o/100;
		showid.style.filter = 'alpha(opacity:'+o+')';
	},parseInt(time));
}

function offsetTL(obj){//获取到body的offsetTop和offsetLeft
	var t=0,l=0;
	while(obj){
		t=t+obj.offsetTop+obj.clientTop;
		l=l+obj.offsetLeft+obj.clientLeft;
		obj=obj.offsetParent;
	}
	return {top:t,left:l};
}
// }


