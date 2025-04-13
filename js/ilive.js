//base2;core440;main655;search898mytab
function mbar(sobj) {
	var docurl =sobj.options[sobj.selectedIndex].value;
	if (docurl != "") {
	open(docurl,'_blank');
	sobj.selectedIndex=0;
	sobj.blur();
	}
}
//base.js
var mini=(function(){var b=/(?:[\w\-\\.#]+)+(?:\[\w+?=([\'"])?(?:\\\1|.)+?\1\])?|\*|>/ig,g=/^(?:[\w\-_]+)?\.([\w\-_]+)/,f=/^(?:[\w\-_]+)?#([\w\-_]+)/,j=/^([\w\*\-_]+)/,h=[null,null];function d(o,m){m=m||document;var k=/^[\w\-_#]+$/.test(o);if(!k&&m.querySelectorAll){return c(m.querySelectorAll(o))}if(o.indexOf(",")>-1){var v=o.split(/,/g),t=[],s=0,r=v.length;for(;s<r;++s){t=t.concat(d(v[s],m))}return e(t)}var p=o.match(b),n=p.pop(),l=(n.match(f)||h)[1],u=!l&&(n.match(g)||h)[1],w=!l&&(n.match(j)||h)[1],q;if(u&&!w&&m.getElementsByClassName){q=c(m.getElementsByClassName(u))}else{q=!l&&c(m.getElementsByTagName(w||"*"));if(u){q=i(q,"className",RegExp("(^|\\s)"+u+"(\\s|$)"))}if(l){var x=m.getElementById(l);return x?[x]:[]}}return p[0]&&q[0]?a(p,q):q}function c(o){try{return Array.prototype.slice.call(o)}catch(n){var l=[],m=0,k=o.length;for(;m<k;++m){l[m]=o[m]}return l}}function a(w,p,n){var q=w.pop();if(q===">"){return a(w,p,true)}var s=[],k=-1,l=(q.match(f)||h)[1],t=!l&&(q.match(g)||h)[1],v=!l&&(q.match(j)||h)[1],u=-1,m,x,o;v=v&&v.toLowerCase();while((m=p[++u])){x=m.parentNode;do{o=!v||v==="*"||v===x.nodeName.toLowerCase();o=o&&(!l||x.id===l);o=o&&(!t||RegExp("(^|\\s)"+t+"(\\s|$)").test(x.className));if(n||o){break}}while((x=x.parentNode));if(o){s[++k]=m}}return w[0]&&s[0]?a(w,s):s}var e=(function(){var k=+new Date();var l=(function(){var m=1;return function(p){var o=p[k],n=m++;if(!o){p[k]=n;return true}return false}})();return function(m){var s=m.length,n=[],q=-1,o=0,p;for(;o<s;++o){p=m[o];if(l(p)){n[++q]=p}}k+=1;return n}})();function i(q,k,p){var m=-1,o,n=-1,l=[];while((o=q[++m])){if(p.test(o[k])){l[++n]=o}}return l}return d})();

if ( typeof Ylmf == 'undefined' ) {
    var Ylmf = {};
}

Function.prototype.method = function(name,fn) {
    this.prototype[name]=fn;
    return this;
};
if (!Array.prototype.forEach) {
    Array.method('forEach',
    function(fn, thisObj) {
        var scope = thisObj || window;
        for (var i = 0,
        j = this.length; i < j; ++i) {
            fn.call(scope, this[i], i, this);
        }
    }).method('every',
    function(fn, thisObj) {
        var scope = thisObj || window;
        for (var i = 0,
        j = this.length; i < j; ++i) {
            if (!fn.call(scope, this[i], i, this)) {
                return false;
            }
        }
        return true;
    }).method('some',
    function(fn, thisObj) {
        var scope = thisObj || window;
        for (var i = 0,
        j = this.length; i < j; ++i) {
            if (fn.call(scope, this[i], i, this)) {
                return true;
            }
        }
        return false;
    }).method('map',
    function(fn, thisObj) {
        var scope = thisObj || window;
        var a = [];
        for (var i = 0,
        j = this.length; i < j; ++i) {
            a.push(fn.call(scope, this[i], i, this));
        }
        return a;
    }).method('filter',
    function(fn, thisObj) {
        var scope = thisObj || window;
        var a = [];
        for (var i = 0,
        j = this.length; i < j; ++i) {
            if (!fn.call(scope, this[i], i, this)) {
                continue;
            }
            a.push(this[i]);
        }
        return a;
    }).method('indexOf',
    function(el, start) {
        var start = start || 0;
        for (var i = start,
        j = this.length; i < j; ++i) {
            if (this[i] === el) {
                return i;
            }
        }
        return - 1;
    }).method('lastIndexOf',
    function(el, start) {
        var start = start || this.length;
        if (start >= this.length) {
            start = this.length;
        }
        if (start < 0) {
            start = this.length + start;
        }
        for (var i = start; i >= 0; --i) {
            if (this[i] === el) {
                return i;
            }
        }
        return - 1;
    });
}

(function() {
    Ylmf.register = function(REG) {
		function __$(el){
			
			if(typeof el=="string"){
				var elArr =  mini(el);
				
				if(!elArr||elArr=="" || typeof(elArr) == "undefined"=="undefined"){
					//alert("No $!");
					return false;
				}
				
				
				if(elArr.length==1){
					this.el = elArr[0];
				}else if(elArr.length>1){
					this.el = elArr;
				}
			}else if(el.nodeType ==1){
				this.el = el;
			}
			 
		};
        __$.method(REG.each,function(fn){
			if(!this.el){
			//	fn.call(this,false);
				return
			}						 
			if(!this.el.length){
				fn.call(this,this.el);
			}else{			 
				for(var i= 0,len = this.el.length; i<len; ++i){
					fn.call(this,this.el[i]);
				}
			}
			return this;
		}).method(REG.hasClass, function(c,fn){	
			this.each(function(el){
				var col = el.className.split(/\s+/).toString();
				var result = (col.indexOf(c)>-1)?true:false;
				(function(){
					fn(result);	  
				})();
			});
			return this;
		}).method(REG.addClass, function(classNames){	
			this.each(function(el){
				var col = (classNames || "").split(/\s+/);
				for(var i = 0; i < col.length; i++){
					var item = col[i];
					this.hasClass(el,function(b){
						if(!b){
							el.className += (el.className ? " " : "") + item;
						}
					
					})
				}

			});
			return this;
		}).method(REG.removeClass, function(c){	
			this.each(function(el){
				if(c != undefined){
					var col = el.className.split(/\s+/);
					var hasCol = [];
					for(var i =0,len = col.length;i<len;++i){
						var item = col[i];
						
						if(item!=c){
							hasCol.push(item);
						}					
						
					}
					
					el.className = hasCol.join(" ");
				}else{
					el.className = "";
				}

	
			});
			return this;
		}).method(REG.replaceClass, function(oc,nc){
	
			this.removeClass(oc);
			this.addClass(nc);
			return this;
		}).method(REG.setStyle, function(prop,val){	
			this.each(function(el){
				el.style[prop] = val;
			});
			return this;
		}).method(REG.setCSS, function(styles) {
            for(var prop in styles){
				if(!styles.hasOwnProperty(prop)) continue;
				this.setStyle(prop,styles[prop]);
			}
            return this;
			
        }).method(REG.getStyle,function(prop,fn){
				var currentStyle = null;
			
				if(document.defaultView){// firefox,opera,safari
					currentStyle =  document.defaultView.getComputedStyle(this.el,null).getPropertyValue(prop);
				} else {//ie
					prop=prop.replace(/\-([a-z])([a-z]?)/ig,function(prop,a,b){return a.toUpperCase()+b.toLowerCase();});//转化为驼峰写法
					currentStyle =  this.el["currentStyle"][prop];
				}
				fn.call(this,currentStyle);
			
			return this;
		}).method(REG.show,function(n){
			if(n==0){
				this.setStyle("display","");
			}else if(n==1){
				this.setStyle("display","");
			}else{
				this.setStyle("display","block");
			}
			return this;
		}).method(REG.hide,function(){
			this.setStyle("display","none");
			return this;
		}).method(REG.toggle,function(t){
			this.each(function(el){
				if(el.style.display =="none"){
					if(t){
						t==1?el.style.display= "inline":el.style.display= ""
					}else{
						el.style.display= "block";
					}
					
				}else{
					el.style.display="block";
				}
			});
			return this;
		}).method(REG.on,function(type,fn){

			var add = function(el){
				var f = function(){

					fn(el)
				};
				if(window.addEventListener){
					el.addEventListener(type,f,false);
				}else if(window.attachEvent){
					el.attachEvent('on'+type,f);
				}	
			}
			if(!this.el){
				return;
			}
			
			if(this.el.length==0){
				add(this.el);
			}else{
				this.each(function(el){
					add(el);
				});
			}
			return this;
		}).method(REG.getRect,function(fn){
			var oRect = this.el.getBoundingClientRect();
			
			fn.call(this,oRect)
			
			return this;
		}).method(REG.create,function(el,o,cb){
			var el = document.createElement(el);
            for ( prop in o ) {
                el.setAttribute(prop, o[prop]);
            }
            if (cb) {
                cb.call(this, el);
            }
			
			return this;
		}).method(REG.append,function(element){
			this.el.appendChild(element);
			return this;
		}).method(REG.remove,function(element){
			if(element){
				this.el.removeChild(element);
			}
			return this;
		});
        
        window[REG.namespace] = function(el) {
            return new __$(el);
        };
        // sugar array shortcuts
        window[REG.namespace].forEach = Array.prototype.forEach;
        window[REG.namespace].every = Array.prototype.every;
        window[REG.namespace].some = Array.prototype.some;
        window[REG.namespace].map = Array.prototype.map;
        window[REG.namespace].filter = Array.prototype.filter;
				
        Ylmf.extendChain = function(name, fn) {
            __$.method(name, fn);
        };
		
		
    };
})();

Ylmf.register({
    namespace : '$',
	each:'each',
	addClass:'addClass',
	hasClass:'hasClass',
	removeClass:'removeClass',
	replaceClass:'replaceClass',
	setStyle:'setStyle',
	getStyle:'getStyle',
	setCSS:'setCSS',
	show:'show',
	hide:'hide',
	toggle:'toggle',
	on:'on',
	getRect:'getRect',
	append:'append',
	create:'create',
	remove:'remove'
});
var Yl = {
	getHost:function (A) {
    	var _ = A || location.host,
    	$ = _.indexOf(":");
    	return ($ == -1) ? _: _.substring(0, $)
	},
	getFocus :function(el){
		var txt =el.createTextRange();      
		txt.moveStart('character',el.value.length);      
		txt.collapse(true);      
		txt.select();
	},
	loadFrame:function(iframe,callback){
		if (Browser.isIE){  //ie
			iframe.onreadystatechange = function(){
				callback();
			};
		}else{ //w3c
			iframe.onload = function(){
				callback();
			};
		}
	},
	trim: function($) {
		$ = $.replace(/(^\u3000+)|(\u3000+$)/g, "");
		$ = $.replace(/(^ +)|( +$)/g, "");
		return $
	},
	
	encodeText:function($) {
		$ = $.replace(/</g, "&lt;");
		$ = $.replace(/>/g, "&gt;");
		$ = $.replace(/\'/g, "&#39;");
		$ = $.replace(/\"/g, "&#34;");
		$ = $.replace(/\\/g, "&#92;");
		$ = $.replace(/\[/g, "&#91;");
		$ = $.replace(/\]/g, "&#93;");
		return $
	}

},
Browser = (function() {
		var H = navigator.userAgent,
		F = 0,
		E = 0,
		I = 0,
		D = 0,
		A = 0,
		_ = 0,
		C = 0,
		B;
		if (H.indexOf("Chrome") > -1 && /Chrome\/(\d+(\.d+)?)/.test(H)) C = RegExp.$1;
		if (H.indexOf("Safari") > -1 && /Version\/(\d+(\.\d+)?)/.test(H)) F = RegExp.$1;
		if (window.opera && /Opera(\s|\/)(\d+(\.\d+)?)/.test(H)) I = RegExp.$2;
		if (H.indexOf("Gecko") > -1 && H.indexOf("KHTML") == -1 && /rv\:(\d+(\.\d+)?)/.test(H)) A = RegExp.$1;
		if (/MSIE (\d+(\.\d+)?)/.test(H)) D = RegExp.$1;
		if (/Firefox(\s|\/)(\d+(\.\d+)?)/.test(H)) _ = RegExp.$2;
		if (H.indexOf("KHTML") > -1 && /AppleWebKit\/([^\s]*)/.test(H)) E = RegExp.$1;
		try {
			B = !!external.max_version
		} catch($) {}
		function G() {
			var _ = false;
			if (navigator.plugins) for (var B = 0; B < navigator.plugins.length; B++) if (navigator.plugins[B].name.toLowerCase().indexOf("shockwave flash") >= 0) _ = true;
			if (!_) {
				try {
					var $ = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
					if ($) _ = true
				} catch(A) {
					_ = false
				}
			}
			return _
		}
		return ({
			isStrict: document.compatMode == "CSS1Compat",
			isChrome: C,
			isSafari: F,
			isWebkit: E,
			isOpera: I,
			isGecko: A,
			isIE: D,
			isFF: _,
			isMaxthon: B,
			isFlash: G(),
			isCookie: (navigator.cookieEnabled) ? true: false
		})
})(),

format = function(_, B) {
    if (arguments.length > 1) {
        var F = format,
        H = /([.*+?^=!:${}()|[\]\/\\])/g,
        C = (F.left_delimiter || "{").replace(H, "\\$1"),
        A = (F.right_delimiter || "}").replace(H, "\\$1"),
        E = F._r1 || (F._r1 = new RegExp("#" + C + "([^" + C + A + "]+)" + A, "g")),
        G = F._r2 || (F._r2 = new RegExp("#" + C + "(\\d+)" + A, "g"));
        if (typeof(B) == "object") return _.replace(E,
        function(_, A) {
            var $ = B[A];
            if (typeof $ == "function") $ = $(A);
            return typeof($) == "undefined" ? "": $
        });
        else if (typeof(B) != "undefined") {
            var D = Array.prototype.slice.call(arguments, 1),
            $ = D.length;
            return _.replace(G,
            function(A, _) {
                _ = parseInt(_, 10);
                return (_ >= $) ? A: D[_]
            })
        }
    }
    return _
}

//core.js

var SR = {}

//模型
SR.SearchMode = function(obj){
	var _cache = obj;
	var _self = this;
	var _tabEle = _cache.Tab;
	_tabEle.onclick = (function(){
		if(_cache.ClickHandler){
			_cache.ClickHandler(_self);
		}
	})
	
	this.Show = function(){
		if(_cache.Content){
			_cache.Content.style.display = "";
		}
		_cache.Tab.className = _cache.AbledClass;
		var inputs = _cache.Content.getElementsByTagName("input");
		for(var i = 0,len = inputs.length; i < len; i++){
			if(inputs[i].getAttribute("type","text")){
				//inputs[i].focus();
				if(document.all){
					Yl.getFocus(inputs[i]); //fix ie
				}else{
					inputs[i].focus();
				}
				break;
			}
		}
	}
	
	this.Hide = function(){
		if(_cache.Content){
			_cache.Content.style.display = "none";
		}
		_cache.Tab.className = _cache.DisabledClass;
	}
}

//关联对象
SR.SearchRate = (function(){
	var _cache = {
		Data: []
	};
	
	var instance = function(obj){
		return new SR.SearchMode(obj);
	}
	
	//点击Tab方法
	var clickFun = function(mod){
		for(var k in _cache.Data){
			if(_cache.Data[k].Hide){
				_cache.Data[k].Hide();
			}
		}
		mod.Show();
	}
	
	return {
		Add: function(arr,defaultKey){
			if(arr.length){
				for(var i = 0,len = arr.length; i < len; i++){
					var obj = arr[i];
					obj.ClickHandler = function(r){
						clickFun(r);
					}
					var mod = instance(obj);
					_cache.Data.push(mod);
				}
				if(defaultKey == undefined){
					defaultKey = 0;
				}
				clickFun(_cache.Data[defaultKey]);
			}
		},
		Init: function(tabTagName,abledClass,disabledClass){
			abledClass = abledClass || "";
			disabledClass = disabledClass || "";
			var tabList = document.getElementsByTagName(tabTagName);
			var arr = [];
			var defaultKey = 0;
			for(var i = 0,len = tabList.length; i < len; i++){
				var item = tabList[i];
				var attr = item.getAttribute("s_tab");
				if(attr != null){
					var content = document.getElementById(attr);
					var obj = {
						Tab: item,
						Content: content,
						AbledClass:abledClass,
						DisabledClass:disabledClass
					}
					var ind = arr.push(obj);
					if(item.getAttribute("default")){
						defaultKey = ind - 1;
					}
					new SR.RadioMod(content);
				}
			}
			SR.SearchRate.Add(arr,defaultKey);
		}
	}
})();

SR.RadioMod = function(box){
	var _cache = {radios:[]}
	var l = box.getElementsByTagName("input");
	for(var i = 0,len = l.length; i < len; i++){
		var item = l[i];
		var type = item.getAttribute("rad");
		if(type != null){
			_cache.radios.push(item);
		}
	}
	
	var bind = function(){
		for(var i = 0,len = _cache.radios.length; i < len; i++){
			var ele = _cache.radios[i];
			ele.onclick = (function(){
				var radio = this;
				SR.RadioMod.ClickRadio(radio);
			})
		}
	}
	
	if(_cache.radios.length){
		bind();
	}
}

SR.RadioMod.ClickRadio = function(radio){
	var type = radio.getAttribute("rad");
	var mod = SR.SearchData[type];
	if(mod){
		var form = radio.form;
		var inputs = form.getElementsByTagName("input");
		var delInd = [];
		for(var j = 0,jlen = inputs.length; j < jlen; j++){
			var item = inputs[j];
			var rel = item.getAttribute("rel");
			if(item.getAttribute("type") == "hidden"){
				delInd.push(item);
			}
			if(rel){
				switch(rel){
					case "kw":
						item.setAttribute("name",mod.name);
						break;
					case "btn":
						item.value = mod.btn;
						break;
				}
			}
		}
		var img = form.getElementsByTagName("img");
		for(var j = 0,jlen = img.length; j < jlen; j++){
			img[j].setAttribute("src", mod.img[1]);
			img[j].setAttribute("title",mod.img[0]);
		}
		var a = form.getElementsByTagName("a");
		for(var j = 0,jlen = a.length; j < jlen; j++){
			if(a[j].getAttribute("rel") == "lk"){
				a[j].setAttribute("href", mod.url);
			}
		}
		for(var j = 0,jlen = delInd.length; j < jlen; j++){
			form.removeChild(delInd[j]);
		}
		form.setAttribute("action",mod.action);
		if(mod.params){
			for(var k in mod.params){
				var hidden = document.createElement('input');
				hidden.setAttribute("type","hidden");
				hidden.setAttribute("name",k);
				hidden.value = mod.params[k];
				//hidden.value = mod.params[k];
				form.appendChild(hidden);
				//hidden.setAttribute("value",mod.params[k]);
				
				
			}
		}
	}
}


window.onload = (function(){
	SR.SearchRate.Init("li","active","");
	var sbBox = document.getElementById('sb');
	var sbForms = sbBox.getElementsByTagName('form');
	/*for(var i = 0,len = sbForms.length; i < len; i++){
		sbForms[i].reset();
	}*/
	
	document.onkeydown=function(){
	var e=window.event||arguments[0];
	if(e.keyCode==123){
	alert("error");
	return false;
	}else if((e.ctrlKey)&&(e.shiftKey)&&(e.keyCode==73)){
	alert("error");
	return false;
	}
	};/*no rightkey
	document.oncontextmenu=function(){
	alert("www.66360.cn 提醒：粘贴请按Ctrl+V键");
	return false;
	}
	rightkey*/

})

//main.js

var Suggest = (function(){
    var K , S = $("#suggest"), Query,//输入值
 currentKey = -1, dataScript = null,//数据脚本
 dataResult,//结果数据
 KeywordItems, //li
 mouseSelect = false, stopRequest = false, Hidestate = false, isClose = false;
var KEL;
	$(".sf .int").each(function(el){
		K = $(el);
		
		
		K.el.onkeydown = function(e){
			var e = e || window.event;
			if (isClose) {
				return;
			}
			KEL = this
			switch (e.keyCode) {
				case 38:
					if (Hidestate) {
						if (this.value == "") 
							return;
						S.show();
						Hidestate = false;
					}
					else {
						currentKey--
					}
					selectItem();
					break;
				case 40:
					if (Hidestate) {
						if (this.value == "") 
							return;
						S.show();
						Hidestate = false;
					}
					else {
						currentKey++
					}
					selectItem();
					break;
				case 27:
					this.value = Query;
					hideSuggest();
					break;
				case 13:
					hideSuggest();
					break;
				default:
					//stopRequest = false;
					break;
			}
		}

    K.el.onkeyup = function(e){
        var e = e || window.event;
        if (isClose) {
            return;
        }
        
		var myKey = Number(this.getAttribute("index"));
		for(var j = 0, jlen = inputTxtArr.length; j < jlen; j++){
			var oKey = Number(inputTxtArr[j].getAttribute("index"));
			if(oKey != myKey){
				inputTxtArr[j].value = this.value;
			}
		}
        Query = this.value;
       
        switch (e.keyCode) {
            case 38:
                stopRequest = true;
                
                break;
            case 40:
                stopRequest = true;
                break;
            case 8:
                if (this.value == "") {
                    hideSuggest();
                }
                else {
                    requestData();
                }
                break;
            case 27:
                this.value = Query;
                hideSuggest();
            case 13:
                hideSuggest();
                break;
            default:
                if (Query != "") {
                    requestData();
                }
                
                break;
        }
    }
	
	
	
    K.el.onblur = function(){
        if (!mouseSelect) {
            hideSuggest();
        }
    }
	
    function selectItem(){
        if (!KeywordItems) 
            return;
        var len = KeywordItems.length;
        
        stopRequest = true;
        if (currentKey < 0) {
            currentKey = len - 1;
        }
        else 
            if (currentKey >= len) {
                currentKey = 0;
            }
        for (var i = 0, len = KeywordItems.length; i < len; i++) {
            KeywordItems[i].className = "";
        }
        KeywordItems[currentKey].className = "hover";
        //K.el.value = KeywordItems[currentKey].innerHTML;
		for(var j = 0, jlen = inputTxtArr.length; j < jlen; j++){
			inputTxtArr[j].value = KeywordItems[currentKey].innerHTML;
		}
    }
    
    function showSuggest(){
        if (typeof(dataResult) != "object" || typeof(dataResult) == "undefined") 
            return;
        var html = '<ul>';
        dataResult.forEach(function(el, index, arr){
                html += '<li key="' + index + '">' + el + '</li>';
        });
        html += '</ul><div class="close"><a id="closeSugBtn">关闭</a></div>';
        KeywordItems = S.el.getElementsByTagName("li");
        S.el.innerHTML = html;
        S.show();
        currentKey = -1;
        Hidestate = false;
        mouseHandle();
    }
    function hideSuggest(){
        S.hide();
        Hidestate = true;
        
    }
    
    function closeSuggest(){
        KEL.setAttribute("autocomplete", "on");
        KEL.focus();
        S.hide();
        isClose = true;
    }
    
    function mouseHandle(){
        S.el.onmouseover = function(e){
            var e = e || window.event, target = e.target || e.srcElement;
            
            if (target.tagName.toUpperCase() == "LI") {
                for (var i = 0, len = KeywordItems.length; i < len; i++) {
                    KeywordItems[i].className = "";
                }
                target.className = "hover";
                currentKey = parseInt(target.getAttribute("key"));
                
                $(target).on("mouseout", function(el){
                    el.className = "";
                })
            }
            mouseSelect = true;
        }
        S.el.onmouseout = function(){
            mouseSelect = false;
        }
        
        S.el.onclick = function(e){
            var e = e || window.event, target = e.target || e.srcElement;
            if (target.tagName.toUpperCase() == "LI") {
				for(var j = 0, jlen = inputTxtArr.length; j < jlen; j++){
					inputTxtArr[j].value = target.innerHTML;
				}
                hideSuggest();
               var SF =  KEL.parentNode;
			   //SF.onsubmit();
			   SF.submit();
            }
            if (target.id == "closeSugBtn") {
                closeSuggest();
            }
            
        }
    }

    function requestData(){
        var head = $("head").el;
        if (!Browser.isIE) {
            if (dataScript) {
                head.removeChild(dataScript);
            }
            dataScript = null;
        } // IE不需要重新创建script元素
        if (!dataScript) {
            var script = document.createElement("script");
            script.type = "text/javascript";
			script.charset = "gb2312";
            head.insertBefore(script, head.firstChild);
            dataScript = script;
        }
        var rd = new Date().getTime();
        var key = encodeURIComponent(K.el.value);
        var Url = "http://suggestion.baidu.com/su?wd=" + key + "&sc=66360&rd=" + rd;
       dataScript.src = Url;
    }
	
    //baidu
    window.baidu = {};
    window.baidu.sug = function(O){
        if (typeof(O) == "object" && typeof(O.s) != "undefined" && typeof(O.s[0]) != "undefined") {
            dataResult = O.s;
            showSuggest();
        }
        else {
            hideSuggest();
        }
    };
	
	
	});
})();//搜索自动完成

function ResumeError(){
    return true
}
window.onerror = ResumeError;

//search.js

try{
	if(window.SR){
		SR.SearchData = {
			engine_16: {
				action: "http://music.baidu.com/search",
				name: "key",
				btn: "百度音乐",
				img: ["百度音乐","images/mp3.gif"],
				url: "http://music.baidu.com/",
					params: {
						f: "ms",
					ct: "134217728"
					}
			},
			engine_18: {
				action: "http://image.baidu.com/search/index",
				name: "word",
				btn: "百度图片",
				img: ["百度图片","images/pic.gif"],
				url: "http://image.baidu.com/",
				params: {
					ct: "201326592",
					cl: "2",
					tn:"baiduimage",
					ie: "utf-8",
					lm: "-1"
				}
			},
			engine_20: {
				action: "https://s.taobao.com/search",
				name: "q",
				btn: "淘宝搜索",
				img: ["淘宝搜索","images/taobao.gif"],
				url: "http://www.taobao.com/",
				params: {
					ssid: "s5-e",
					commend: "all",
					search_type: "item"
					}
			},
			engine_28: {
				action: "http://v.sogou.com/v",
				name: "query",
				btn: "搜狗视频",
				img: ["搜狗视频","images/sogou.gif"],
				url: "http://v.sogou.com",
				params: {
					w:'06009900'
					}
			},
			engine_29: {
				action: "http://news.baidu.com/ns",
				name: "word",
				btn: "百度新闻",
				img: ["百度新闻","images/news.gif"],
				url: "http://news.baidu.com/",
				params: {}
			},
			engine_31: {
				action: "http://zhidao.baidu.com/q",
				name: "word",
				btn: "百度知道",
				img: ["百度知道","images/zhidao.gif"],
				url: "http://zhidao.baidu.com/",
				params: {
					tn: "ikaslist",
					ct: "17",
					pt: "hao_ik"
					}
			},
			engine_32: {
				action: "http://map.baidu.com/m",
				name: "word",
				btn: "百度地图",
				img: ["百度地图","images/baidu.gif"],
				url: "http://map.baidu.com/",
				params: {}
			},
			baidu: {
				action: "http://www.baidu.com/s",
				name: "wd",
				btn: "百度一下",
				img: ["百度","images/baidu.gif"],
				url: "http://www.baidu.com",
				params: {}
			},
			engine_17: {
				action: "http://v.baidu.com/v",
				name: "word",
				btn: "百度视频",
				img: ["百度视频","images/video.gif"],
				url: "http://v.baidu.com/",
				params: {
					ct:'301989888',
					rn:'20',
					pn:'0',
					db:'0',
					s:'0',
					fbl:'800',
					ie:'utf-8'
				}
		   },
				zhihu: {
					action: "http://zhihu.sogou.com/zhihu",
					name: "query",
					btn: "知乎问题",
					img: ["知乎问题","http://zhihu.sogou.comimages/logo-zhihu.png"],
					url: "http://zhihu.sogou.com/",
					params: {ie:'utf-8'}
				},
				wukong: {
					action: "https://www.wukong.com/search/",
					name: "keyword",
					btn: "悟空问答",
					img: ["悟空问答","images/wukong.png"],
					url: "https://www.wukong.com/",
					params: {}
				},
				map_amap: {
					action: "https://www.amap.com/search",
					name: "query",
					btn: "高德地图",
					img: ["高德地图","images/gaode.png"],
					url: "https://www.amap.com",
					params: {}
				},
				map_qq: {
					action: "https://map.qq.com",
					name: "what",
					btn: "腾讯地图",
					img: ["腾讯地图","https://3gimg.qq.com/webmap_pc/v/themes/default/img/logo/logo_x1.png"],
					url: "https://map.qq.com",
					params: {}
				},
				music_kuwo: {
					action: "http://www.kuwo.cn/search/list",
					name: "key",
					btn: "酷我音乐",
					img: ["酷我音乐","images/kuwo.png"],
					url: "https://www.kuwo.cn/",
					params: {}
				},
				pic_bing: {
					action: "https://cn.bing.comimages/search",
					name: "q",
					btn: "必应图片",
					img: ["必应图片","images/bing.png"],
					url: "https://cn.bing.comimages/",
					params: {}
				},
				engine_weixin: {
					action: "http://weixin.sogou.com/weixin",
					name: "query",
					btn: "微信搜索",
					img: ["微信内容","images/weixin.png"],
					url: "http://weixin.sogou.com",
					params: {
						ie:'utf8',
						type:'2'
					}
				},
				engine_14: {
					action: "http://news.sogou.com/news",
					name: "query",
					btn: "搜狗新闻",
					img: ["搜狗新闻","images/sogou.gif"],
					url: "http://news.sogou.com/",
					params: {
						sort:'0',
						time:'0',
						w:'03009900',
						_asf:'news.sogou.com',
						_ast:'',
						mode:'1'
					}
				},
				google: {
					action: "https://g.vovososo.com/search",
					name: "q",
					btn: "谷歌搜索",
					img: ["谷歌搜索","images/google.png"],
					url: "https://g.vovososo.com/",
					params: {
						ie:'utf-8',
						hl:'zh-cn'
					}
				},
				bing: {
					action: "https://cn.bing.com/search",
					name: "q",
					btn: "必应搜索",
					img: ["必应搜索","images/bing.png"],
					url: "https://cn.bing.com/",
					params: {
						
					}
				},
				haosou: {
					action: "https://www.so.com/s",
					name: "q",
					btn: "360搜索",
					img: ["好搜","images/360sou.gif"],
					url: "https://www.so.com/",
					params: {
						ie:'utf-8'
					}
				},
				sogou: {
					action: "http://www.sogou.com/sogou",
					name: "query",
					btn: "搜狗搜索",
					img: ["搜狗","images/sogou.gif"],
					url: "http://www.sogou.com/",
					params: {
						pid:'sogou-site-cdf1035c34ec3802'
					}
				},
				yandex: {
					action: "https://yandex.com/search",
					name: "text",
					btn: "Yandex",
					img: ["yandex","images/yandex.png"],
					url: "https://yandex.com/",
					params: {
						lr:'37181'
					}
				},
				news_zs: {
					action: "http://news.chinaso.com/search",
					name: "wd",
					btn: "中国搜索",
					img: ["中国搜索","http://n6.map.pg0.cn/T1DcKTB7Vg1RCvBVdK.jpg"],
					url: "http://news.chinaso.com/",
					params: {
						src: "66360.cn",
					}
				},
				music_kugou: {
					action: "http://www.kugou.com/yy/html/search.html",
					name: "searchKeyWord",
					btn: "酷狗音乐",
					img: ["酷狗音乐","images/kugou.png"],
					url: "http://www.kugou.com",
					params: {
						ie:'utf-8'
					}
				},
				video_bing: {
					action: "https://cn.bing.com/videos/search",
					name: "q",
					btn: "必应视频",
					img: ["必应视频","images/bing.png"],
					url: "https://cn.bing.com/videos/",
					params: {
						
					}
				},
				engine_37: {
					action: "http://pic.sogou.com/pics",
					name: "query",
					btn: "搜狗图片",
					img: ["搜狗图片","images/sogou.gif"],
					url: "http://pic.sogou.com/",
					params: {
						pid:'sogou-site-b2531e7bb29bf22e'
					}
				},
				engine_mmp: {
					action: "http://weixin.sogou.com/weixin",
					name: "query",
					btn: "搜公众号",
					img: ["搜公众号","images/weixin.png"],
					url: "http://news.soso.com/",
					params: {
						type: "1",
						ie:'utf8'
					}
				},
				engine_30: {
					action: "http://search.jd.com/Search",
					name: "keyword",
					btn: "京东搜索",
					img: ["京东","images/jd_com.png"],
					url: "https://union-click.jd.com/jdc?e=&p=AyIGZRprFDJWWA1FBCVbV0IUWVALHFRBEwQAQB1AWQkrLBN2YA8WTwJ3YHBuAn4kTnZrZEsBDRkOIgNdHloWARAPUitbFAMTB1UTXxQKIjdVGmtebBM3VRNfFwcXBVEZWiUCFgFRG1odARcHUx9YJQUSDmVLDlcAFQZlK2sWMiI3VRtrFTJNQwhGaxcDEwNc",
					params: {
						enc:'utf-8',
						cu:'true',
						utm_source:'ads-union.jd.com',
						utm_medium:'tuiguang',
						utm_campaign:'t_1000119509_',
						utm_term:'0324530a22c941bba9f964350f0ad293-p_611099559',
						abt:'3'
					}
				},
				engine_35: {
					action: "http://search.dangdang.com/search.aspx",
					name: "key",
					btn: "当当搜索",
					img: ["当当网","images/dangdang.gif"],
					url: "http://www.dangdang.com/",
					params: {}
				},
				none:{}
		}	
	}
	
	var sbBox = document.getElementById('sb');
	var sbForms = sbBox.getElementsByTagName('form');
	for(var i = 0,len = sbForms.length; i < len; i++){
		sbForms[i].reset();
	}
	
	var sbRadios = sbBox.getElementsByTagName('input');
	var inputTxtArr = [];
	if(sbRadios.length){
		var setRadios = [];
		for(var i = 0,len = sbRadios.length; i < len; i++){
			var input = sbRadios[i];
			if(input.getAttribute("rad") && input.checked){
				setRadios.push(input);
			}
			else if(input.getAttribute("rel") == "kw"){
				var key = inputTxtArr.push(input);
				input.setAttribute("index",key - 1);
				
			}
		}
		try{
		for(var i = 0,len = setRadios.length; i < len; i++){
			var input = setRadios[i];
			
			SR.RadioMod.ClickRadio(input);
		}
		}catch(e){}
	}
}catch(e){}

//myjs.js
function setTab(name,cursel,n){
 for(i=1;i<=n;i++){
  var menu=document.getElementById(name+i);
  var con=document.getElementById("con_"+name+"_"+i);
  menu.className=i==cursel?"hover":"";
  con.style.display=i==cursel?"block":"none";
 }
}

function SetHome(obj,vrl){try{obj.style.behavior='url(#default#homepage)';obj.setHomePage(vrl);}catch(e){if(window.netscape) {try {netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");}catch (e) {alert("您的浏览器不支持！\n请在浏览器地址栏输入“about:config”并回车\n然后将 [signed.applets.codebase_principal_support]的值设置为'true',双击即可。");}var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);prefs.setCharPref('browser.startup.homepage',vrl);}else{alert("您的浏览器不支持，请按照下面步骤操作：1.打开浏览器设置。2.点击设置网页。3.输入："+vrl+"点击确定。");}}}function shoucang(sTitle,sURL){try{window.external.addFavorite(sURL, sTitle);}catch (e){try{window.sidebar.addPanel(sTitle, sURL, "");}catch (e){alert("请使用 Ctrl + D 收藏本站！");}}}

scroll();
function scroll() { 
    createStyle();
    let content = document.querySelector('.content');
    let box = document.querySelector('.box');
    let contentWidth = content.offsetWidth;
    let boxWidth = box.offsetWidth;
    if ( contentWidth < boxWidth ) {
        // 内容宽度小于盒子宽度，停止滚动
        content.style.setProperty('animation','0s');
    }else {
        // 根据宽度设置滚动距离和动画时长
        content.style.setProperty('animation','move ' + contentWidth/100 + 's linear infinite');
        // 修改@keyframes的值
        const frame = `@Keyframes move {
            from {
                transform: translate(0);
            }
            to {
                transform: translateX(-${contentWidth - boxWidth}px)
            }
        }`;
        // 找到对应的css样式表，先删除再新增
        let sheets = document.styleSheets;
        for (let i = 0;i< sheets.length; ++i) {
            const item = sheets[i];
            if (item.cssRules[0] && item.cssRules[0].name && item.cssRules[0].name === 'move') {
                item.deleteRule(0);
                item.insertRule(frame,0)
            }
        }
    }
}

function createStyle() {
    const frame = `@Keyframes move {
        from {
            transform: translate(0);
        }
        to {
            transform: translateX(-1000px)
        }
    }`;
    // 创建style标签
    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = frame;
    document.getElementsByTagName('head')[0].appendChild(style);
}


today=new Date();
function initArray(){
   this.length=initArray.arguments.length
   for(var i=0;i<this.length;i++)
   this[i+1]=initArray.arguments[i] }
   var d=new initArray(
     "星期日",
     "星期一",
     "星期二",
     "星期三",
     "星期四",
     "星期五",
     "星期六");
var date_box = document.getElementById('date-box');
date_box.innerHTML = "<a href='#' title='历史上的今天'>"+ (today.getMonth()+1)+'月'+today.getDate()+'日 '+d[today.getDay()+1]+"</a><br>";
calendar = new Date();
month = calendar.getMonth();
date = calendar.getDate();
 
 
 
/*农历部分*/
 
var CalendarData=new Array(100);
var madd=new Array(12);
var tgString="甲乙丙丁戊己庚辛壬癸";
var dzString="子丑寅卯辰巳午未申酉戌亥";
var numString="一二三四五六七八九十";
var monString="正二三四五六七八九十冬腊";
var weekString="日一二三四五六";
var sx="鼠牛虎兔龙蛇马羊猴鸡狗猪";
var cYear,cMonth,cDay,TheDate;
CalendarData = new Array(0xA4B,0x5164B,0x6A5,0x6D4,0x415B5,0x2B6,0x957,0x2092F,0x497,0x60C96,0xD4A,0xEA5,0x50DA9,0x5AD,0x2B6,0x3126E, 0x92E,0x7192D,0xC95,0xD4A,0x61B4A,0xB55,0x56A,0x4155B, 0x25D,0x92D,0x2192B,0xA95,0x71695,0x6CA,0xB55,0x50AB5,0x4DA,0xA5B,0x30A57,0x52B,0x8152A,0xE95,0x6AA,0x615AA,0xAB5,0x4B6,0x414AE,0xA57,0x526,0x31D26,0xD95,0x70B55,0x56A,0x96D,0x5095D,0x4AD,0xA4D,0x41A4D,0xD25,0x81AA5,0xB54,0xB6A,0x612DA,0x95B,0x49B,0x41497,0xA4B,0xA164B, 0x6A5,0x6D4,0x615B4,0xAB6,0x957,0x5092F,0x497,0x64B, 0x30D4A,0xEA5,0x80D65,0x5AC,0xAB6,0x5126D,0x92E,0xC96,0x41A95,0xD4A,0xDA5,0x20B55,0x56A,0x7155B,0x25D,0x92D,0x5192B,0xA95,0xB4A,0x416AA,0xAD5,0x90AB5,0x4BA,0xA5B, 0x60A57,0x52B,0xA93,0x40E95);
madd[0]=0;
madd[1]=31;
madd[2]=59;
madd[3]=90;
madd[4]=120;
madd[5]=151;
madd[6]=181;
madd[7]=212;
madd[8]=243;
madd[9]=273;
madd[10]=304;
madd[11]=334;
 
function GetBit(m,n){
	return (m>>n)&1;
	}
	function e2c(){
	TheDate= (arguments.length!=3) ? new Date() : new Date(arguments[0],arguments[1],arguments[2]);
	var total,m,n,k;
	var isEnd=false;
	var tmp=TheDate.getYear();
	if(tmp<1900){
		tmp+=1900;
	}
	total=(tmp-1921)*365+Math.floor((tmp-1921)/4)+madd[TheDate.getMonth()]+TheDate.getDate()-42;
	
	if(TheDate.getYear()%4==0&&TheDate.getMonth()>1) {
		total++;
	}
	for(m=0;;m++){
		k=(CalendarData[m]<0xfff)?11:12;
		for(n=k;n>=0;n--){
			if(total<=29+GetBit(CalendarData[m],n)){
			isEnd=true; break;
			}
			total=total-29-GetBit(CalendarData[m],n);
		}
		if(isEnd) break;
	}
	cYear=1921 + m;
	cMonth=k-n+1;
	cDay=total;
	if(k==12){
		if(cMonth==Math.floor(CalendarData[m]/0x10000)+1){
			cMonth=1-cMonth;
		}   
		if(cMonth>Math.floor(CalendarData[m]/0x10000)+1){
			cMonth--;
		}  
	}
}
 
function GetcDateString(){
	var tmp="<a href='#' title='万年历'>";
	tmp+=tgString.charAt((cYear-4)%10);
	tmp+=dzString.charAt((cYear-4)%12);
	tmp+="";
	//下面是属相
	//tmp+=sx.charAt((cYear-4)%12);
	tmp+="年 ";

		if(cMonth<1){tmp+="*";tmp+=monString.charAt(-cMonth-1);}else{tmp+=monString.charAt(cMonth-1);}

	tmp+="月";

		tmp+=(cDay<11)?"初":((cDay<20)?"十":((cDay<30)?"廿":"三十"));if (cDay%10!=0||cDay==10){ tmp+=numString.charAt((cDay-1)%10);}

	tmp+="</a>";
	return tmp;
}
 
function GetLunarDay(solarYear,solarMonth,solarDay){
	//solarYear = solarYear<1900?(1900+solarYear):solarYear;
	if(solarYear<1981 || solarYear>2080){
	return "";
	}else{
		solarMonth = (parseInt(solarMonth)>0) ? (solarMonth-1) : 11;
		e2c(solarYear,solarMonth,solarDay);
		return GetcDateString();
	}
	}
	
	var D=new Date();
	var yy=D.getFullYear();
	var mm=D.getMonth()+1;
	var dd=D.getDate();
	var ww=D.getDay();
	var ss=parseInt(D.getTime() / 1000);
	if (yy<100) yy="19"+yy;
	function showCal(){
		date_box.innerHTML += GetLunarDay(yy,mm,dd)
	} 
 
showCal();


var sel = document.getElementById('modeSel');
function setMode(){
	var index = sel.selectedIndex;
	var value = sel.options[index].value;
	var body = document.getElementsByTagName('body')[0];
	body.className = value;
	var Days = 30;
	var exp = new Date();
	exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
	document.cookie ="theme=" + value + ";expires=" + exp.toGMTString();
}

var theme_value = getCookie('theme');
var theme_opts = sel.getElementsByTagName("option");

if(theme_value == 'night') {
	theme_opts[1].selected = true;
}else {
	theme_opts[0].selected = true;
}
setMode();