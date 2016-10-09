function $(selector,range){
  var range=range||document;
    if(typeof selector=="string"){
      if(selector.charAt(0)=="#"){
        return range.getElementById(selector.substr(1));
      }
      if(selector.charAt(0)=="."){
        return getClass(selector.substr(1),range);
      }
      if(/^[a-zA-Z][a-zA-Z1-6]{0,9}$/.test(selector)){
            return range.getElementsByTagName(selector);
      }

    }else if(typeof selector=="function"){
       window.onload=selector;    
    }
}


function getClass(classname,range){
	if(document.getElementsByClassName){
       return range.getElementsByClassName(classname);
	}else{
       var arr=[];
       var all=range.getElementsByTagName('*');
       for(i=0;i<all.length;i++){
       	if(check(all[i].className,classname)){
       		arr.push(all[i]);
       	}
       }
       return arr;
	}
	
}


function check(tagClass,name){
     var arr=tagClass.split(" ");
     for(i=0;i<arr.length;i++){
     	if(arr[i]==name){
     		return true
     	}
     }
     return false;
}


// textcontent
function text(obj,val){
  if(val==undefined){
  if(obj.textContent!=undefined){
     return obj.textContent;
  }
  else{
    return obj.innerText;
  }
}else{
   if(obj.textContent!=undefined){
      obj.textContent=val;
  }
  else{
     obj.textContent=val;
  }
}

}


// 获取通用样式。
function getStyle(obj,attr){
     if(obj.currentStyle){
      return   obj.currentStyle[attr];
     }else{
      return getComputedStyle(obj,null)[attr];
     }
}