// searchs set
function setCookie(value) {
	var Days = 30;
	var exp = new Date();
	exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
	document.cookie ="search_=" + value + ";expires=" + exp.toGMTString();
}
function getCookie(cookieName) {
	var strCookie = document.cookie;
	var arrCookie = strCookie.split("; ");
	for(var i = 0; i < arrCookie.length; i++){
		var arr = arrCookie[i].split("=");
		if(cookieName == arr[0]){
			return arr[1];
		}
	}
	return "";
}
function setStyle(color) {
	var exp = new Date();
	exp.setTime(exp.getTime() + 365 * 24 * 60 * 60 * 1000);
	document.cookie ="style_=" + color + ";expires=" + exp.toGMTString();
}
function display(id){
	var traget=document.getElementById(id);
	if(traget.style.display=="none"){
		traget.style.display="";
	}else{
		traget.style.display="none";
	}
}
/* no used this logoset
function setLogo(value) {
	var url = document.getElementById(value).url.value;
	if(url.length<10 || url.length>60){alert("10~60");}
	else{
		var Days = 30;
		var exp = new Date();
		exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
		document.cookie ="logo=" + url + ";expires=" + exp.toGMTString();
		alert("ok");
	}
}
function getURL(variable){
   var query = window.location.search.substring(1);
   var vars = query.split("&");
   for (var i=0;i<vars.length;i++) {
		   var pair = vars[i].split("=");
		   if(pair[0] == variable){return pair[1];}
   }
   return(false);
}
*/