window.onload=function(){
	var bannerNav=getClass('banner_nav',document)[0];
	var lists=getClass('list',bannerNav)[0];
	var as=lists.getElementsByTagName('a');
	var indexBtn=getClass('index',bannerNav)[0];
	var lis=indexBtn.getElementsByTagName('li');
	var btn=getClass('btn',bannerNav)[0];
	var left=getClass('left',btn)[0];
	var right=getClass('right',btn)[0];
  var banner=$('.banner')[0];
  var bannerBg=$('.bg',banner)[0];
  var bannerBgdivs=$('div',bannerBg);


    // console.log(bannerNav);
    // console.log(as);
    // console.log(indexBtn);
    // console.log(lis);
    // console.log(left);
    // console.log(right);
    // console.log(banner);
    // console.log(bannerBg);
    // console.log(bannerBgdivs);
/******************轮播*************************/
	var index=0;
	var t;
	as[0].style.zIndex=11;
  bannerBgdivs[0].style.zIndex=2;
  as[0].style.opacity=1;
  bannerBgdivs[0].style.opacity=1;
	lis[0].style.background="#E5004F";
	function move(){
		index++;
        if(index==as.length){index=0}
        for(var i=0;i<as.length;i++){
        	as[i].style.opacity=0;
          bannerBgdivs[i].style.opacity=0;
        	lis[i].style.background="black";
        }
        animate(as[index],{opacity:1},500);
        animate(bannerBgdivs[index],{opacity:1},500);
        lis[index].style.background="#E5004F";
	}
	t=setInterval(move,3000);
	lists.onmouseover=function(){
        clearInterval(t);
	}
	lists.onmouseout=function(){
        t=setInterval(move,3000);
	}
	for(j=0;j<lis.length;j++){
        	lis[j].a=j;
        	lis[j].onmouseover=function(){
                for(var i=0;i<as.length;i++){
          	      as[i].style.opacity=0;
                  bannerBgdivs[i].style.opacity=0;
        	      lis[i].style.background="black";
                }
        		lis[this.a].style.background="#E5004F";
        		 animate(as[this.a],{opacity:1},500);
        animate(bannerBgdivs[this.a],{opacity:1},500);
        		index=this.a;
        	}
     }
     right.onclick=function(){
     	if(index==as.length){index=0}
        move();
     }
     left.onclick=function(){
       index--;
       if(index==-1){index=3}
        for(var i=0;i<as.length;i++){
            as[i].style.opacity=0;
            bannerBgdivs[i].style.opacity=0;
            lis[i].style.background="black";
        }
        lis[index].style.background="#E5004F";
         animate(as[index],{opacity:1},500);
        animate(bannerBgdivs[index],{opacity:1},500);
     }
/*****************分类****************************/
     var bannerLeft=$('.banner_left',banner)[0];
     var l1s=$('.li',bannerLeft);
     var menus=$('.menu',bannerLeft);
 
     console.log(l1s);
     console.log(menus);

    
for(var i=0;i<l1s.length;i++){
  l1s[i].index=i
     hover(l1s[i],function(){
       menus[this.index].style.display="block";
     },function(){
       menus[this.index].style.display="none";
     })
}
     
/*****************选项卡*************************/
     var leftTop=getClass('left_top',document)[0];
     var leftTopas=leftTop.getElementsByTagName('a');
     var lefttoplis=$('li',leftTop);
     var bodyHead=getClass('body_head',document)[0];
     var leftBotton=getClass('left_bottom',bodyHead);
     
     // console.log(leftTop);
     // console.log(leftTopas);
      // console.log(leftBotton);
      //   console.log(leftBottonlis);
      // console.log(lefttoplis);

    function leftBottonborder(obj){
    var leftBottonlis=$('li',obj);
    for(var a=0;a<leftBottonlis.length;a++){
      leftBottonlis[a].onmouseover=function(){
        animate($('.border_top',this)[0],{width:222},500);
        animate($('.border_left',this)[0],{height:262},500);
        animate($('.border_right',this)[0],{height:262},500);
        animate($('.border_bottom',this)[0],{width:222},500);
      }
      leftBottonlis[a].onmouseout=function(){
        animate($('.border_top',this)[0],{width:0},500);
        animate($('.border_left',this)[0],{height:0},500);
        animate($('.border_right',this)[0],{height:0},500);
        animate($('.border_bottom',this)[0],{width:0},500);
      }
    }
  }
  
    for(var b=0;b<leftBotton.length;b++){
      leftBottonborder(leftBotton[b]);
    }
 

     leftBotton[0].style.display="block";
     lefttoplis[0].style.borderBottom="5px solid #e5004f";
     lefttoplis[0].style.fontWeight="bold";
     lefttoplis[0].style.background="url('../image/yt_ico1.png') 142px 27px no-repeat";
     for(var i=0;i<leftTopas.length;i++){
		   leftTopas[i].index=i;
		   leftTopas[i].onmouseover=function(){

			for(var j=0;j<leftBotton.length;j++){
				leftBotton[j].style.display="none";
        lefttoplis[j].style.borderBottom="";
        lefttoplis[j].style.fontWeight="";
        lefttoplis[j].style.background="";
			}
            leftBotton[this.index].style.display="block";
         lefttoplis[this.index].style.borderBottom="5px solid #e5004f";
         lefttoplis[this.index].style.fontWeight="bold";
         lefttoplis[this.index].style.background="url('../image/yt_ico1.png') 142px 27px no-repeat";
		}
	}


    
    var zhuan=getClass('zhuangui',document)[0];
    var zhuanTop=getClass('top',zhuan)[0];
    var zhuanas=zhuanTop.getElementsByTagName('a');
    var zhuantoplis=$('li',zhuanTop);
    var zhuanBot=getClass('zhuan_bottom',zhuan);

    // console.log(zhuan);
    // console.log(zhuanTop);
    // console.log(zhuanas);
    // console.log(zhuanBot);
    // console.log(zhuantoplis);

    zhuanBot[0].style.display="block";
    zhuantoplis[0].style.borderBottom="3px solid #e70050";
    zhuantoplis[0].style.color="#414141";
    zhuantoplis[0].style.background="url('../image/yt_ico1.png') 50px 15px no-repeat";

    for(var i=0;i<zhuanas.length;i++){
        zhuanas[i].index=i;
        zhuanas[i].onmouseover=function(){
            for(var j=0;j<zhuanBot.length;j++){
                zhuanBot[j].style.display="none";
                zhuantoplis[j].style.borderBottom="";
    zhuantoplis[j].style.color="";
    zhuantoplis[j].style.background="";
            }
            zhuanBot[this.index].style.display="block";
            zhuantoplis[this.index].style.borderBottom="3px solid #e70050";
    zhuantoplis[this.index].style.color="#414141";
    zhuantoplis[this.index].style.background="url('../image/yt_ico1.png') 50px 15px no-repeat";
        }
    }


    var top2=$('.top2',zhuanBot[1]);
    
    // var bb=$('.border_top',top2lis[0]);


    console.log(top2);
    // console.log(top2lis);

    function top2border(obj){
      var top2lis=$('li',obj);
     for(var c=0;c<top2lis.length;c++){
      top2lis[c].onmouseover=function(){
        animate($('.border_top',this)[0],{width:198},500);
        animate($('.border_left',this)[0],{height:254},500);
        animate($('.border_right',this)[0],{height:254},500);
        animate($('.border_bottom',this)[0],{width:198},500);
      }
      top2lis[c].onmouseout=function(){
        animate($('.border_top',this)[0],{width:0},500);
        animate($('.border_left',this)[0],{height:0},500);
        animate($('.border_right',this)[0],{height:0},500);
        animate($('.border_bottom',this)[0],{width:0},500);
      }
    }
  }

  for(var i=0;i<top2.length;i++){
    top2border(top2[i]);
  }
//*****************lunbo************************

    var zhuti=getClass('zhuti_1',document);

    function wheel(obj){
    var zhutiMid=getClass('middle',obj)[0];
    var imgBox=$('.img-box',zhutiMid)[0];
    var zhuimgs=imgBox.getElementsByTagName('img');
    var zhulis=zhutiMid.getElementsByTagName('li');
    var zhutiMidLeft=getClass('left',zhutiMid)[0];
    var zhutiMidRight=getClass('right',zhutiMid)[0];
    // var wid=parseInt(getStyle(zhuimgs[0],"width"));
    var wid=390;
    // console.log(zhuti);
    // console.log(zhutiMid);     
    // console.log(zhulis); 
    // console.log(zhutiMidLeft); 
    // console.log(zhutiMidRight); 
    // console.log(imgBox);
    // console.log(zhuimgs);
    // console.log(wid);


    
    var zhu=0;
    zhulis[0].style.background="#E51058"
    zhutiMidRight.style.zIndex=0;
    zhutiMidLeft.style.zIndex=0;
    zhutiMid.onmouseover=function(){
         zhutiMidRight.style.zIndex=40;
         zhutiMidLeft.style.zIndex=40;
    }
    zhutiMid.onmouseout=function(){
         zhutiMidRight.style.zIndex=0;
         zhutiMidLeft.style.zIndex=0;
    }
    
       
    function zhutiMove(){
        zhu++;
        if(zhu==zhuimgs.length){zhu=0}
        animate(imgBox,{left:-wid*zhu},500);
        for(var i=0;i<zhuimgs.length;i++){
            zhulis[i].style.background="#e6e6e6";
        }
        
        zhulis[zhu].style.background="#E51058";
    }


    for(var j=0;j<zhulis.length;j++){
        zhulis[j].a=j;
        zhulis[j].onclick=function(){
                // imgBox.style.left="0px";
                for(var i=0;i<zhuimgs.length;i++){
                  zhulis[i].style.background="#e6e6e6";
                }
                zhulis[this.a].style.background="#E51058";
                animate(imgBox,{left:-wid*this.a},500);
                zhu=this.a;
            }
    }
    

    zhutiMidRight.onclick=function(){
        if(zhu<1){
        zhutiMove();
      }
    }
    zhutiMidLeft.onclick=function(){
       if(zhu>0){
        zhu--;
       }
       
        for(var i=0;i<zhuimgs.length;i++){
            
            zhulis[i].style.background="#e6e6e6";
        }
        animate(imgBox,{left:-wid*zhu},500);
        zhulis[zhu].style.background="#E51058";
        
     }




     var border=obj.getElementsByClassName('border');


          var box=obj.getElementsByClassName('box');

          function bor(box){
          var borderTop=box.getElementsByClassName('border_top')[0];
          var borderLeft=box.getElementsByClassName('border_left')[0];
          var borderBottom=box.getElementsByClassName('border_bottom')[0];
          var borderRight=box.getElementsByClassName('border_right')[0];
 
          
          // console.log(borderBottom);
          // console.log(borderRight);

            box.onmouseover=function(){
            box.style.border="1px solid #ffffff";
            borderTop.style.height="2px";
            borderLeft.style.width="2px";
            borderRight.style.width="2px";
            borderBottom.style.height="2px";
          animate(borderTop,{width:272},500,Tween.Linear);
          animate(borderLeft,{height:182},500,Tween.Linear);
          animate(borderBottom,{width:272},500,Tween.Linear);
          animate(borderRight,{height:182},500,Tween.Linear);
          }
          box.onmouseout=function(){
          box.style.border="1px solid #eeeeee";
          for(var i=0;i<border.length;i++){
            border[i].style.height=0;
              border[i].style.width=0;
          }
          
          
          }
        }
        for(var l=0;l<box.length;l++){
          bor(box[l]);
        }





        var zhuLeftB=$('.left_bottom',obj)[0];
    var zhuleft=$('.zhu-left',zhuLeftB);
    var zhuw=parseInt(getStyle(zhuleft[0],'width'));
    var bottomLeft=$('.d1',zhuLeftB)[0];
    var bottomRight=$('.d2',zhuLeftB)[0];

    // console.log(zhuLeftB);
    // console.log(zhuleft);
    // console.log(zhuw);
    // console.log(bottomLeft);
    // console.log(bottomRight);

    var next=0;
    var nowdiv=0;
    var zhuwid=zhuw+60
    zhuleft[0].style.left="20px";
    function zhubot(){
      next++;
      if(next==zhuleft.length){
        next=0;
      }
      
      
      zhuleft[next].style.left=zhuwid+'px';
      animate(zhuleft[nowdiv],{left:-zhuwid},500);
      animate(zhuleft[next],{left:20},500);
      nowdiv=next;
    }


    bottomLeft.onclick=function(){
      zhubot();
    }

    bottomRight.onclick=function(){
        next--;
        if(next==-1){
            next=zhuleft.length-1;
        }
        
        
        zhuleft[next].style.left=-zhuwid+'px';
        animate(zhuleft[nowdiv],{left:zhuwid},500);
        animate(zhuleft[next],{left:20},500);
        nowdiv=next;
    }


    }





    
    




     for(var n=0;n<zhuti.length;n++){
      wheel(zhuti[n]);
    }


/*****************跳转****************************/
   var tiaozhuan=$('.tiaozhuan')[0];
   var tiaoBoxs=$('.box',tiaozhuan);
   var tiaoBg=$('.bg',tiaozhuan);

   var tops=[];
   for(var i=0;i<zhuti.length;i++){
    tops.push(zhuti[i].offsetTop);

   }
    var youhua=$('.youhua');
   var yous=[];
   var flags=[];
    var ch=document.documentElement.clientHeight;
   for(var i=0;i<youhua.length;i++){
    yous.push(youhua[i].offsetTop);
    flags.push(true);
   }
   // console.log(youhua);
   // console.log(yous);
   // console.log(tops);
   // console.log(tiaoBg);
   // console.log(flags);
   // console.log(ch);
   
   window.onscroll=function(){
             var stop=document.body.scrollTop||document.documentElement.scrollTop;
            
            for(var i=0;i<yous.length;i++){
                if(yous[i]<=stop+ch&&flags[i]){
                  flags[i]=false;
                  var zongimgs=$('img',youhua[i]);
                  for(var j=0;j<zongimgs.length;j++){
                    zongimgs[j].src=zongimgs[j].getAttribute('asrc');
                  }
                }
              }



            if(stop>1000){
              tiaozhuan.style.display="block";

            }else if(stop<1000){
              tiaozhuan.style.display="none";
            }


            for(var i=0;i<tops.length;i++){
              
              if(tops[i]<stop+300){
                for(j=0;j<tiaoBg.length;j++){
                tiaoBg[j].style.display="none";
              }
                tiaoBg[i].style.display="block";
              }
            }

          }

   window.onscroll();
   for(var i=0;i<tiaoBoxs.length-1;i++){
            tiaoBoxs[i].index=i;
            tiaoBoxs[i].onclick=function(){
                 animate(document.body,{scrollTop:zhuti[this.index].offsetTop},500);
                 animate(document.documentElement,{scrollTop:zhuti[this.index].offsetTop},500);
            }
          }

    tiaoBoxs[tiaoBoxs.length-1].onclick=function(){
      animate(document.body,{scrollTop:0},500);
      animate(document.documentElement,{scrollTop:0},500);
    }

/*************优化*******************************/
//*************weixin***************************/
   var head=$('.head')[0];
   var loginbar=$('.loginbar',head)[0];
   var loginleft=$('.left',loginbar)[0];
   var wei=$('.wei',loginbar);
   var xia=$('.xia',loginbar);


   console.log(head);
   console.log(loginbar);
   console.log(loginleft);
   console.log(wei);
   console.log(xia);
    for(var i=0;i<wei.length;i++){
      wei[i].index=i;
      hover(wei[i],function(){
      xia[this.index].style.display="block";
   },function(){
      xia[this.index].style.display="none";
   })
    }
   // hover(wei,function(){
   //    xia.style.display="block";
   // },function(){
   //    xia.style.display="none";
   // })

/**********************************************/
  
}